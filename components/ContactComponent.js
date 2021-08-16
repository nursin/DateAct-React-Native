import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Header, Icon } from 'react-native-elements';

class Contact extends Component {

  static navigationOptions = {
    title: 'Contact'
  }

  render() {
    return (
      <ScrollView>
        <Card
          title={'Contact us'}
          titleStyle={{
            color: 'white',
          }}
          containerStyle={{
            backgroundColor: 'purple'
          }}
        >
          <View style={styles.container}>
            <Icon
              name='phone'
              type='font-awesome'
              size={40}
              color='#fff'
              iconStyle={styles.cardImage}
            />
            <Text style={styles.paragraphText}>
              1-850-221-2689
            </Text>
          </View>
          <View style={styles.container}>
            <Icon
              name='envelope'
              type='font-awesome'
              size={40}
              color='#fff'
              style={styles.cardImage}
            />
            <Text style={styles.paragraphText}>
              bobbykeel76@gmail.com
            </Text>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },
  cardHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paragraphText: {
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontSize: 16
  },
  cardImage: {

  },
});

export default Contact;