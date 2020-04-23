import React, { Component } from 'react';
import { ScrollView, View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'
import * as FabriqStyle from '../constants/style.js';

class ClothingList extends Component {

    render() {
      const { clothing_data } = this.props;
        return (
          <ScrollView>
            <FlatList
        data={clothing_data}
        renderItem={({ item }) => (
          <ClothingCell item = {item}/>
        )}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={item => item.id}
      />
      </ScrollView>
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
  
    renderFooter = () => {
      if (!this.state.loading) return null;
  
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}
        >
          <ActivityIndicator animating size="large" />
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

  class AddButton extends Component {
    render() {
      return(
        <TouchableOpacity
        onPress={() => {}}
        style={clothingStyles.add_button_unselected}
        >
           <Text style={clothingStyles.add_button_text}>Add Item</Text>
        </TouchableOpacity>
      )
    }
  }



class ClothingCell extends Component {
    render() {
      const { item } = this.props;
      return(
      <ListItem
            leftAvatar={{ uri: item.uri}}
            title={`${item.name.full_name} \n${item.purchase_price} \n`}
            titleNumberOfLines = {2}
            titleStyle = {clothingStyles.title_style}
            titleContainerStyle = {clothingStyles.title_container}
            subtitle={`Purchase Date: ${item.purchase_date}`}
            subtitleStyle = {clothingStyles.subtitle_style}
            bottomDivider
            containerStyle={{ borderBottomWidth: 0 }}
            rightElement = {<AddButton />}
          />
      )
    }
}

export default class EmailsFound extends Component {

    render() {
      const { goBack, navigate } = this.props.navigation;
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
          <ClothingList clothing_data = {DATA_DUMMY} />
        </View>

        

      </SafeAreaView>

    )
  }
}

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
      width: 90,
      textAlign: 'center',
    },

    add_button_selected: {
      marginTop: 15,
      marginBottom: 5,
      backgroundColor: FabriqStyle.GREEN, //"#03adfc",
      paddingHorizontal: 10,
      paddingVertical: 5,
      height: 30,
      borderRadius: 5,
      width: 90,
      textAlign: 'center',
    },

    add_button_text: {
      fontSize: FabriqStyle.BUTTON_FONT_SIZE,
      fontWeight: '700',
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
      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },

    { id: 'emily-2',
      name: {
        brand: 'J.CREW',
        style: 'Village Coat',
        full_name: 'J.CREW Village Coat'
    },
    purchase_price: '$149.99',
    purchase_date: '06/19/2016',
    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      },

      { id: 'emily-3',
        name: {
          brand: 'A&F',
          style: 'Icon Hoodie',
          full_name: 'A&F Icon Hoodie'
      },
      purchase_price: '$41.30',
      purchase_date: '02/28/2017',
      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      },
    
  ];