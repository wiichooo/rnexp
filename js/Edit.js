import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } 
from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class EditScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const isContact = navigation.state.params.mode === 'contact';
    let headerRight = (
      
      <Button
        title={isContact ? 'Send' : `Save`}
        onPress={params.handleSave ? params.handleSave : () => null}
      />
    );
    if (params.isSaving) {
      headerRight = <ActivityIndicator />;
    }
    return { title: isContact ? `Contact` : `Edit`, headerRight };
  };

  state = {
    name: ''
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <TextInput
        onChangeText={(name) => this.setState({ name })}
        placeholder={params.name}
        style={{fontSize:20}}
        //value={params.name}
      />
    );
  }
}
