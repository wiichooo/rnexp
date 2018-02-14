import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import { SearchBar, Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'

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

export default class Main extends React.Component {
  static navigationOptions = ({ navigation }) => {
    title = 'Home';
    tabBarIcon = ({focused}) => (
      <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: focused ? '#33A3F4' : '#949494'}}
      />
    );
    headerRight =  (
      
      <Button
        title={'Add'}
        onPress = {() => navigation.navigate('Add')}
      />
    );
    return { title, tabBarIcon, headerRight };
  /*  header: <View style={styles.header}>
    <Text>Home</Text>
    <SearchBar lightTheme/>
  </View>*/
	};
  render() {
    return (
      <ScrollView style={styles.container}>
        {
        Act.map((item, i) => (
        <Card key={i} title={item.Titulo}>
          <View style={styles.card}>
          <Text style={styles.paragraph}>
            {item.Description}
          </Text>
          <Image style={styles.logo} source={{ uri: item.Image }} />
          <Button
                  title="See Details"
                  onPress= {() => alert('Detalles')}
                  />
          </View>
        </Card>
        ))
      }
      </ScrollView>
    );
  }
}

const Act = [
  {
    Titulo: 'Actividad 1',
    Description: 'Local music live on ad adas asd asd asd asd',
    Image: 'http://d23dyxeqlo5psv.cloudfront.net/crepe.jpg'
  },
  {
    Titulo: 'Actividad 2',
    Description: 'Lo ad adas asd asd asd asd',
    Image: 'http://d23dyxeqlo5psv.cloudfront.net/crepe.jpg'
  },
  {
    Titulo: 'Actividad 3',
    Description: 'Local sdve on ad adas asd asd asd asd',
    Image: 'http://d23dyxeqlo5psv.cloudfront.net/crepe.jpg'
  },
];