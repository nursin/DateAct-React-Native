import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Header } from 'react-native-elements';

class About extends Component {

  static navigationOptions = {
    title: 'About'
  }

  render() {
    return (
      <ScrollView>
        <Text>About</Text>
      </ScrollView>
    );
  }
}

export default About;