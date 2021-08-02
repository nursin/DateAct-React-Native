import React, { Component } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { Card, Header } from 'react-native-elements';

class ChooseFeatures extends Component {

  static navigationOptions = {
    title: 'Choose features'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ margin: 20 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize:24 }}>Choose features</Text>
        </View>
        <View style={{ margin: 20 }}>
          <Button
            title='Generate profile'
            color='blue'
            onPress={() => navigate('ProfileReady')}
          />
        </View>
        <View style={{ margin: 20 }}>
          <Button
            title='Create your own'
            color='blue'
            onPress={() => navigate('CreateChar')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ChooseFeatures;