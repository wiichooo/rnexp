import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List, ListItem, Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'

const list = [
    {
      title: 'Name',
      value: 'Luis'
    },
    {
      title: 'Username',
      value: 'wiichooo'
    },
  ];

export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    tabBarIcon: ({focused}) => (
      <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: focused ? '#33A3F4' : '#949494'}}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listitem :{
    fontSize:16,
    fontWeight:'bold'
  },
  email :{
    paddingTop: 4,
    fontSize:16,
    fontWeight:'bold'
  },
  signout :{
    paddingTop: 4,
    fontSize:16,
    fontWeight:'bold',
    color:'red',
    textAlign: 'center'
  }
});
