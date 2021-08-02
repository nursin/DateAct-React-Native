import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Header } from 'react-native-elements';

class Contact extends Component {

  static navigationOptions = {
    title: 'Contact'
  }

  render() {
    return (
      <ScrollView>
        <Text>Contact</Text>
      </ScrollView>
    );
  }
}

export default Contact;