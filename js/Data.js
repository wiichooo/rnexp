import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator }
from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Video } from 'expo'

export default class DataScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return { title: `Video` };
  };

  state = {
    name: ''
  }
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={{fontSize:22, paddingTop:18, paddingLeft:15, fontWeight: 'bold'}}>{params.name}:</Text>
        <Video
         source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
         rate={1.0}
         volume={1.0}
         muted={false}
         resizeMode="cover"
         shouldPlay
         isLooping
         style={{ width: 300, height: 300 }}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    paddingTop: 45,
    backgroundColor: '#e1e8ee',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
