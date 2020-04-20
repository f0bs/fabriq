import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'

const DATA_DUMMY = [
    {
      name: {
          first: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          last: 'bla'
      },
      email: 'hello@gmail.com'
    },

    {
        name: {
            first: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            last: 'bla'
        },
        email: 'hello@gmail.com'
      },

      {
        name: {
            first: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            last: 'bla'
        },
        email: 'hello@gmail.com'
      },
    
  ];

class ClothingList extends Component {
    render() {
        return (
            <FlatList
        data={DATA_DUMMY}
        renderItem={({ item }) => (
          <ListItem
            // roundAvatar
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
            // avatar={{ uri: item.picture.thumbnail }}
          />
        )}
      />
        )
    }
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
    render() {

    }
}

export default class EmailsFound extends Component {
    constructor(props) {
        super(props);
        console.log("Reached here");
        console.log(props);
    }

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

        <View style = {styles.container}>
          <ClothingList clothing_data = {["hello"]} />
        </View>

        

      </SafeAreaView>

    )
  }
}
  
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
