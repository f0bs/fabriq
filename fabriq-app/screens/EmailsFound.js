import React, { Component, createRef } from 'react';
import { ScrollView, View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
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
      navigate('ConfirmedAddItems', {numItems: this.state.selectedItems.length})
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
    this.state = {
      item: this.props.item,
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

    render() {
      const item = this.state.item;

      return(
      <ListItem
            leftAvatar = {<Avatar large source={{uri: item.uri}} height={`75%`} width={`15%`}/>}
            title={`${item.name.full_name} \n${item.purchase_price} \n`}
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

    //   const clothing_array = this.props.navigation.state.params.clothing_data;
      
      return (
      <SafeAreaView style = {styles.container}>

        <View style = {styles.title_container}>
          <Text style = {styles.title}> Great! </Text>
        </View>

        <View style = {styles.subtitle_container}>
          <Text style = {styles.subtitle}> We have found the following clothes 
          from your email account, please confirm: </Text>
        </View>

        <View style = {clothingStyles.clothinglist_container}>
          <ClothingList clothing_data = { DATA_DUMMY } navigation = { this.props.navigation } />
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
      paddingHorizontal: 35,
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
        fontFamily: 'Optima'
    }
    
  })

  const DATA_DUMMY = [
    { id: 'emily-1',
      name: {
          brand: 'Patagonia',
          style: 'P-6 Logo Tee',
          full_name: 'Patagonia P-6 Logo Tee'
      },
      purchase_price: '$36.00',
      purchase_date: '03/19/2016',
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMX-1BJYN4shWp9grSvA0-F6QyhVjWqneh10oA_h5DUzE63w0aj7y8CXUu2dUJuZO6m-GDyKM&usqp=CAc',
    },

    { id: 'emily-2',
      name: {
        brand: 'J.CREW',
        style: 'Village Coat',
        full_name: 'J.CREW Village Coat'
    },
    purchase_price: '$149.99',
    purchase_date: '06/19/2016',
    uri: 'data:image/jpeg;base64,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',
      },

      { id: 'emily-3',
        name: {
          brand: 'A&F',
          style: 'Icon Hoodie',
          full_name: 'A&F Icon Hoodie'
      },
      purchase_price: '$41.30',
      purchase_date: '02/28/2017',
      uri: 'https://anf.scene7.com/is/image/anf/KIC_122-2200-0927-600_prod1?$product-anf-v1$&wid=800&hei=1000',
      },
    
  ];