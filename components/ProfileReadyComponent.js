import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Header } from 'react-native-elements';

class ProfileReady extends Component {

  static navigationOptions = {
    title: 'Profile ready'
  }

  render() {
    return (
      <ScrollView>
        <Text>Profile ready</Text>
      </ScrollView>
    );
  }
}

export default ProfileReady;