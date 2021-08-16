import React, { Component } from 'react';
import { ImageBackgroundComponent } from 'react-native';
import { ImageBackground } from 'react-native';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Header, Icon, Button } from 'react-native-elements';

class ChooseFeatures extends Component {

  static navigationOptions = {
    title: 'Choose features'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ margin: 20 }}>
        <View style={styles.container}>
          <View style={styles.headerText}>
            <Text style={{ fontSize: 24 }}>Choose features</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                name='transgender-alt'
                type='font-awesome'
                color='white'
                />
              }
              title='Generate profile'
              buttonStyle={{
                backgroundColor: '#2904ff'
              }}
              onPress={() => navigate('ProfileReady')}
            />
            <Button
              title='Create your own'
              buttonStyle={{
                backgroundColor: '#2904ff'
              }}
              onPress={() => navigate('CreateChar')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 0.3
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    margin: 10
  }
});

export default ChooseFeatures;