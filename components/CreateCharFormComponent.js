import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Header } from 'react-native-elements';

class CreateChar extends Component {

  static navigationOptions = {
    title: 'Create character'
  }

  render() {
    return (
      <ScrollView>
        <Text>Create character</Text>
      </ScrollView>
    );
  }
}

export default CreateChar;