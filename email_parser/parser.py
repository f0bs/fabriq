# fabriq email parser

import imaplib
import email
import os
import base64
import csv
import json
import re
from bs4 import BeautifulSoup
import quopri
import time


# get access to gmail 
# gmail access 
# https://www.googleapis.com/auth/gmail.readonly

start = time.time()
pw = ''

# log into server
# Connect to inbox
imap_server = imaplib.IMAP4_SSL(host='imap.gmail.com')
imap_server.login('fabriqapp@gmail.com', pw)
imap_server.select('Inbox', readonly=True)  # Default is `INBOX`


# get email
# Define initial search criteria or use email classifier
search_crit = '(SUBJECT "Order" BODY "everlane")' # BODY "Nike"

# define brand list 
# load brand list from server
## use limited brand list for testing
brand_list = ['everlane', 'calvin klein', 'jcrew', 'allbirds', 'nike', 'romwe', 'hilfiger']


# init json dict
email_content = {}
'''    'id:' '' {
    'name' 
    'brand': ''
    'style': ''
    'full_name': ''
    'category': ''
    'purchase_price': ''
    'purchase_date': ''
    'uri': ''
    'color': ''
    'size': ''
    'quantity': ''
}'''



# Find all emails in inbox with order
_, message_numbers_raw = imap_server.search(None, search_crit)

#count emails
counter = 0

for message_number in message_numbers_raw[0].split():
    _, msg = imap_server.fetch(message_number, '(RFC822)')

    # Parse the raw email message in to a convenient object
    message = email.message_from_bytes(msg[0][1])
    #print('== Email message =====')
    # print(message)  # print FULL message
    #print('== Email details =====')
    print(f'From: {message["from"]}')
    print(f'Subject: {message["subject"]}')
    #print(f'To: {message["date"]}')
    date = message["date"]
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

                # add brand 
                item_brand = []
                for brand in brand_list:
                    if re.search(brand, body, re.IGNORECASE) is not None:
                        item_brand.append(brand)

                # if brand is not found, go to next email
                if len(item_brand) == 0:
                    continue

                # find tables
                prices = soup.find_all(text=re.compile(r"\$\d+(?:.(\d+))?"))
                
                id_count = 0

                # parse therough the tables in the html email
                for price in prices:
                    
                    # store price as string
                    item_price = price.string

                    #if re.findall('$', str(table)) is not None:
                    table = price.find_parent('table')
                    
                    item_size = ''
                    item_color = ''
                    item_qty = ''
                    item_img = ''
                    item_name = []
                    extract = True
                    
                    for child in table.descendants:
                        #print('descendants')

                        # if child contains text
                        if child.string is not None:

                            # ignore subtotal, shipping, total, credit card offers and other non-relevant fields
                            if (re.search('total', child.string, re.IGNORECASE) is not None) or (re.search('ship', child.string, re.IGNORECASE) is not None) or (re.search('disc', child.string, re.IGNORECASE) is not None) or (re.search('Pay', child.string, re.IGNORECASE) is not None) or (re.search('Billing', child.string, re.IGNORECASE) is not None) or (re.search('tax', child.string, re.IGNORECASE) is not None) or (re.search('gift', child.string, re.IGNORECASE) is not None) or (re.search('credit', child.string, re.IGNORECASE) is not None) or (re.search('paid', child.string, re.IGNORECASE) is not None) or (re.search('card', child.string, re.IGNORECASE) is not None):
                                extract = False
                                continue

                            # extract data
                            if re.search('color', child.string, re.IGNORECASE) is not None:
                                item_c = child.string.split(':')
                                item_color = item_c[1]
                            elif (re.search('quant', child.string, re.IGNORECASE) is not None) or (re.search('Qty', child.string, re.IGNORECASE) is not None):
                                item_q = child.string.split(':')
                                item_qty = item_q[1]
                            elif re.search('size', child.string, re.IGNORECASE) is not None:
                                item_s = child.string.split(':')
                                item_size = item_s[1]
                            elif re.search('\\xa0', child.string, re.IGNORECASE) is None and re.search(r'\$', child.string, re.IGNORECASE) is None:
                                if child.string not in item_name and len(child.string) > 3:
                                    item_name.append(child.string)
                        
                        if re.search('<img', str(child), re.IGNORECASE) is not None:
                            img_str = str(child).split('src=')
                            img_link = img_str[1].split('"')
                            item_img = img_link[1]

                    # if img url not found, it must be stored in sibling table
                    if item_img == '':
                        for sibling in table.next_siblings:
                            print(repr(sibling))
                            if re.search('<img', str(sibling), re.IGNORECASE) is not None:
                                img_str = str(child).split('src=')
                                img_link = img_str[1].split('"')
                                item_img = img_link[1]
                        for sibling in table.previous_siblings:
                            if re.search('<img', str(sibling), re.IGNORECASE) is not None:
                                img_str = str(child).split('src=')
                                img_link = img_str[1].split('"')
                                item_img = img_link[1]

                    # assign id
                    id_count += 1
                    item_id = str(item_brand[0]) + '-' + str(id_count)

                    if item_qty == '':
                        item_qty = 1
                    else:
                        int(item_qty)

                    if extract == True:
                        
                        category = ['sweater', 'shoes', 'jeans']
                        item_dict = {}
                        item_dict['brand'] = str(item_brand[0])
                        
                        # if no name is found, the item is skipt (for now)
                        if len(item_name) > 0:
                            item_dict['style'] = str(item_name[0])
                            item_dict['full_name'] = str(item_brand[0]) + ' ' + str(item_name[0])

                            #skip empty items
                            item_dict['category'] = category[id_count - 1]
                            item_dict['purchase_price'] = item_price
                            item_dict['purchase_date'] = date
                            item_dict['uri'] = item_img
                            item_dict['color'] = item_color
                            item_dict['size'] = item_size
                            item_dict['quantity'] = item_qty


                            # assign values to dict
                            email_content[item_id] = item_dict


    else:  # Not a multipart message, payload is simple string
        #print(f'Payload\n{message.get_payload()}')
        print('not multipart')
    # You could also use `message.iter_attachments()` to get attachments only

    print(email_content)
    
with open("results.json", "w") as write_file:
    json.dump(email_content, write_file)

end = time.time()
print(end - start)

# lg out of server connection
imap_server.logout()