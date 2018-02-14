import React from 'react';
import { StyleSheet, Text, View, Image, Button, Switch } from 'react-native';
import { CheckBox, List, ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'

const list = [
    {
      title: 'Movies',
      value: 'Luis'
    },
    {
      title: 'Music',
      value: 'wiichooo'
    },
    {
      title: 'Food',
      value: 'wiichooo'
    },
    {
      title: 'Theatre',
      value: 'wiichooo'
    },
    {
      title: 'Photography',
      value: 'wiichooo'
    },
    {
      title: 'Painting',
      value: 'wiichooo'
    },
    {
      title: 'Concert',
      value: 'wiichooo'
    },
    {
      title: 'Sports',
      value: 'wiichooo'
    },
  ];

export default class Details extends React.Component {

    state = {
        inputValue: "You can change me!",
        switchValue: true
      };

  static navigationOptions = {
        title: 'Options',
        tabBarIcon: ({focused}) => (
            <Ionicons
                name={focused ? 'ios-options' : 'ios-options-outline'}
                size={26}
                style={{ color: focused ? '#33A3F4' : '#949494'}}
            />
        ),
        
    };
  
    _handleTextChange = inputValue => {
        this.setState({ inputValue });
      };
    
      _handleToggleSwitch = () => this.setState(state => ({
        switchValue: !state.switchValue
      }));

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:22, paddingTop:18, paddingLeft:15, fontWeight: 'bold'}}>Select your interests:</Text>
        <List>
        {
            list.map((item, i) => (
            <ListItem
                key={i}
                title={item.title}
                titleStyle ={styles.listitem}
                rightIcon = {<Switch
                onValueChange={this._handleToggleSwitch}
                value={this.state.switchValue}
            />}
            />
            ))
        }
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

