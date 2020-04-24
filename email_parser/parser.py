# fabriq email parser

import imaplib
import email
import os
import base64
import csv
import json
import pandas as pd
import re
from bs4 import BeautifulSoup
import quopri


# get access to gmail 
# gmail access 
# https://www.googleapis.com/auth/gmail.readonly


# log into server
# Connect to inbox
imap_server = imaplib.IMAP4_SSL(host='imap.gmail.com')
imap_server.login('fabriqapp@gmail.com', 'pw')
imap_server.select('Inbox', readonly=True)  # Default is `INBOX`


# get email
# Define initial search criteria or use email classifier
search_crit = '(SUBJECT "Order" BODY "Everlane")' # BODY "Nike"

# Find all emails in inbox with order
_, message_numbers_raw = imap_server.search(None, search_crit)

#count emails
counter = 0

for message_number in message_numbers_raw[0].split():
    _, msg = imap_server.fetch(message_number, '(RFC822)')

    # Parse the raw email message in to a convenient object
    message = email.message_from_bytes(msg[0][1])
    print('== Email message =====')
    # print(message)  # print FULL message
    print('== Email details =====')
    print(f'From: {message["from"]}')
    print(f'To: {message["to"]}')
    #print(f'Object type: {type(message)}')
    #print(f'Content type: {message.get_content_type()}')
    #print(f'Content disposition: {message.get_content_disposition()}')
    #print(f'Multipart?: {message.is_multipart()}')
    # If the message is multipart, it basically has multiple emails inside
    # so you must extract each "submail" separately.
    if message.is_multipart():
        #print('Multipart types:')
        for part in message.walk():
            print(f'- {part.get_content_type()}')
        multipart_payload = message.get_payload()
        for sub_message in multipart_payload:
            # The actual text/HTML email contents, or attachment data
            #print('multipart')
            #print(sub_message)
            body = str(sub_message.get_payload())

            # use bs to parse
            # only start with at html part of the email
            if re.match('<html>', body) is not None:
                raw_string = quopri.decodestring(body)
                soup = BeautifulSoup(raw_string, features="lxml")
                #print(soup)

                # find tables
                prices = soup.find_all(text=re.compile("\$"))
                
                # parse therough the tables in the html email
                for price in prices:
                    
                    # store price as string
                    item_price = price.string

                    #if re.findall('$', str(table)) is not None:
                    table = price.find_parent('table')
                    print('New Item Table')                        
                        #spans = soup.find_all('span')
                        #img = soup.find_all('img')
                        #print(table.prettify())
                        
                        #for span in spans:
                            #print(span.text)
                            #print(text)
                    
                    for child in table.descendants:
                        #print('descendants')

                        # if child contains text
                        if child.string is not None:
                        

                            item_name = ''
                            item_strings = []

                            # check text contains color
                            if re.search('color', child.string, re.IGNORECASE) is not None:
                                item_c = child.string.split(':')
                                item_color = item_c[1]
                            elif (re.search('quant', child.string, re.IGNORECASE) is not None) or (re.search('Qty', child.string, re.IGNORECASE) is not None):
                                item_q = child.string.split(':')
                                item_qty = item_q[1]
                            elif re.search('size', child.string, re.IGNORECASE) is not None:
                                item_s = child.string.split(':')
                                item_size = item_s[1]
                            elif re.search('$', str(child), re.IGNORECASE) is None:
                                item_name = child.string
                            else:
                                item_strings.append(child.string)
                        
                        if re.search('<img', str(child), re.IGNORECASE) is not None:
                            img_str = str(child).split('src=')
                            img_link = img_str[1].split('"')
                            item_img = img_link[1]


                        if re.search('<a', str(child), re.IGNORECASE) is not None and child.string is not None:
                            print('found a')
                            item_name = child.string
                    #prices = soup.find_all(text=re.compile("\$"))


                    '''for price in prices:
                    #for parent in price.parents:
                        #if parent.sibling 
                    print(price)
                    print('new parent')
                    print(price.parent.parent.prettify())
                    counter =+ 1'''

                    item_qty = 1

                    print('item price:' + item_price)
                    print('item color:' + item_color)
                    print('item size:' + item_size)
                    print('item quant:' + item_qty)       
                    print('item img:' + item_img) 
                    print('item name:' + item_name) 
                    print('item strings:')
                    print(item_strings) 


    else:  # Not a multipart message, payload is simple string
        #print(f'Payload\n{message.get_payload()}')
        print('not multipart')
    # You could also use `message.iter_attachments()` to get attachments only
    
print(counter)





# check if mail contains any of the following words:
## load list
'''with open('brandlist.csv', newline='') as csvfile:
    brandlist = csv.reader(csvfile, delimiter=',', quotechar='|')

    if 'Nike' in brandlist:
        print('Nike found')'''


#if f'From: {message["from"]}' 

## brandlist.csv



### order with multiple brands
### needs to search through entire order and find as many as xx different brands

# lg out of server connection
imap_server.logout()