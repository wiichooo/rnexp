import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } 
from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class EditScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerRight = (
      
      <Button
        title={`Save`}
        onPress={params.handleSave ? params.handleSave : () => null}
      />
    );
    if (params.isSaving) {
      headerRight = <ActivityIndicator />;
    }
    return { title: `Add`, headerRight };
  };

  state = {
    name: ''
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <TextInput
      />
    );
  }
}