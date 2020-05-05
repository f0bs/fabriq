import React, { Component, createRef } from 'react';
import { ScrollView, View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { ListItem, Avatar, Image } from 'react-native-elements'
import * as FabriqStyle from '../constants/style.js';

class ClothingList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedItems: []
    }
  }

  refreshItemStatus(itemStatus) {
    newSelectedItems = this.state.selectedItems

    if (itemStatus.selected) {
      if (!newSelectedItems.includes(itemStatus.itemId))  {
        newSelectedItems.push(itemStatus)
        this.setState({
          items: newSelectedItems
        })
      }
    } else {
      index = newSelectedItems.indexOf(itemStatus);
      if (index != -1)  {
        newSelectedItems.remove(index)
        this.setState({
          items: newSelectedItems
        })
      }
    }
  }
    render() {
      const { clothing_data } = this.props;

        return (
            <FlatList
        data={clothing_data}
        renderItem={({ item }) => (
          <ClothingCell item = {item} refreshItemStatus = {this.refreshItemStatus.bind(this)} />
        )}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter}
        keyExtractor={item => item.id}
      />
        )
    }

    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE",
            // marginLeft: "0%"
          }}
        />
      );
    };

    confirmItems() {
      const { navigate } = this.props.navigation;
      navigate('ConfirmedAddItems', {items: this.state.selectedItems})
    }
  
    renderFooter = () => {
      // if (!this.state.loading) return null;

      return (
        <View
          style={{
            paddingVertical: 40,
            borderColor: "white",
            flex: 1,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
                onPress={this.confirmItems.bind(this)}
                style = {clothingStyles.continue_button}
                >
              <Text style={clothingStyles.button_text}> Confirm </Text>
          </TouchableOpacity>
          {/* <ActivityIndicator animating size="large" /> */}
        </View>
      );
    };
  
}

function Item({ id, title }) {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={[
          styles.item,
          { backgroundColor: '#f9c2ff' },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }

class ClothingCell extends Component {

  constructor(props) {
    super(props)
    
    const { item } = this.props
    const image = ('local_uri' in item)? item.local_uri : {uri: item.uri}

    this.state = {
      item: item,
      image: image,
      added: false,
      textValue: 'Add Item',
      style: clothingStyles.add_button_unselected,
    };
    this.addButton = createRef();
  }

    toggleAdd() {
      newTextValue = this.state.added ? 'Add Item' : 'Added';
      newStyle =  this.state.added ? clothingStyles.add_button_unselected : clothingStyles.add_button_selected;
      
      this.setState({
        added: !this.state.added,
        textValue: newTextValue,
        style: newStyle
      })
      this.props.item["selected"] = !this.state.added
      this.props.refreshItemStatus(this.props.item);
      
    }

    onError(error) {
      this.setState({
        image: {uri: item.uri}
      })
      console.log("on error triggered")
    }

    render() {
      const item = this.state.item;
      return(
      <ListItem
            leftAvatar = {<Avatar
              source={this.state.image} 
              // onError={this.onError.bind(this)}
              height={`70%`} 
              width={`15%`}/>}
            title={`${item.full_name} \n${item.purchase_price} \n`}
            titleNumberOfLines = {2}
            titleStyle = {clothingStyles.title_style}
            titleContainerStyle = {clothingStyles.title_container}
            subtitle={`Purchase Date: ${item.purchase_date}`}
            subtitleStyle = {clothingStyles.subtitle_style}
            bottomDivider
            containerStyle={{ borderBottomWidth: 0 }}
            rightElement = {
              <TouchableOpacity
                ref = {this.addButton}
                onPress={this.toggleAdd.bind(this)}
                style= {this.state.style}>
              <Text style={clothingStyles.button_text}> {this.state.textValue}</Text>
             </TouchableOpacity>
            }
          />
      )
    }
}

export default class EmailsFound extends Component {

    render() {

      const { clothing_array } = this.props.route.params;
      console.log(clothing_array)
      return (
      <SafeAreaView style = {styles.container}>

        <View style = {styles.title_container}>
          <Text style = {styles.title}> Great! </Text>
        </View>

        <View style = {styles.subtitle_container}>
          <Text style = {styles.subtitle}>We have found the following clothes 
          from your email account, please confirm: </Text>
        </View>

        <View style = {clothingStyles.clothinglist_container}>
          <ClothingList clothing_data = { clothing_array } navigation = { this.props.navigation } />
        </View>

      </SafeAreaView>

    )
  }
}

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

  const clothingStyles = StyleSheet.create({
    clothinglist_container: {
      marginLeft: '5%',
      width: '90%',
      marginTop: 10,
      justifyContent: 'flex-start', 
      alignContent: 'flex-start',
      backgroundColor: 'white',
      marginBottom: 10
    },

    add_button_unselected: {
      marginTop: 15,
      marginBottom: 5,
      backgroundColor: FabriqStyle.LIGHTBLUE, //"#03adfc",
      paddingHorizontal: 10,
      paddingVertical: 5,
      height: 30,
      borderRadius: 5,
      width: 95,
      textAlign: 'center',
    },

    add_button_selected: {
      marginTop: 15,
      marginBottom: 5,
      backgroundColor: FabriqStyle.GREEN, //"#03adfc",
      paddingHorizontal: 18,
      paddingVertical: 5,
      height: 30,
      borderRadius: 5,
      width: 95,
      textAlign: 'center',
    },

    continue_button: {
      // marginTop: 15,
      // marginBottom: 5,
      backgroundColor: FabriqStyle.TURQUOISE, //"#03adfc",
      paddingHorizontal: 40,
      paddingVertical: 12,
      height: 45,
      borderRadius: 5,
      width: 150,
      shadowOffset:{  width: 5,  height: 5,  },
      shadowColor: 'gray',
      shadowOpacity: 0.1,
      // textAlign: 'center',
    },



    button_text: {
      fontSize: FabriqStyle.BUTTON_FONT_SIZE,
      fontWeight: '600',
      color: "white", // "#0384fc" //"white",
    },

    title_container: {
      marginBottom: 0,
      marginLeft: 5
    },

    title_style: {
      color: 'black',
      fontSize: 15,
      fontFamily: 'Avenir-Medium'
    },

    subtitle_style: {
      fontFamily: 'Avenir-Medium',
      color: 'darkgray'
    }
  })
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
      alignItems: 'flex-start',
      backgroundColor: 'white'
    },

    title_container: {
        marginLeft: '5%',
        width: '85%',
        marginTop: '10%',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        backgroundColor: 'white',
        marginBottom: 10
    },

    subtitle_container: {
        marginTop: 10,
        marginLeft: '5%',
        width: '85%',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10
    },

      button: {
        // height: 45,
        marginTop: 40,
        marginBottom: 5,
        backgroundColor: "#03adfc", //"#03adfc",
        paddingHorizontal: '23%',
        paddingVertical: 10,
        borderRadius: 5,
        height: 45,
        // borderWidth: 2,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '80%',
        shadowOffset:{  width: 10,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
      },

      activity_indicator_container: {
        marginTop: 30,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
      },
  
    title: {
      color: 'black',
      fontSize: 30,
      fontFamily: 'Avenir-Medium'
    },

    subtitle: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Avenir'
    }
    
  })
