import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Header } from 'react-native-elements';

class Home extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <ScrollView>
        <Text>Hey</Text>
      </ScrollView>
    );
  }
}

export default Home;