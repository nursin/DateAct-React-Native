import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Header, Button } from 'react-native-elements';

class ProfileReady extends Component {

  static navigationOptions = {
    title: 'Profile ready'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Card
          color='white'
          title='Profile ready'
          titleStyle={{
            color: 'white',
          }}
          containerStyle={{
            backgroundColor: 'purple'
          }}
          style={{ justifyContent: 'center', alignContent: 'center' }}
        >
          <Text style={styles.profileLabelText}>Name:</Text>
          <Text style={styles.profileLabelText}>Age:</Text>
          <Text style={styles.profileLabelText}>Horoscope:</Text>
          <Text style={styles.profileLabelText}>Bio:</Text>
          <Text style={styles.profileLabelText}>Adjectives:</Text>
          <Text style={styles.profileLabelText}>Quirky Fact:</Text>
          <Text style={styles.profileLabelText}>Profession:</Text>
          <View style={{ margin: 20 }}>
            <Button
              title='Restart'
              color='white'
              raised
              buttonStyle={{
                backgroundColor: '#2904ff'
              }}
              onPress={() => navigate('Home')}
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pageHeader: {
    fontFamily: "GoblinOne-Regular",
    marginTop: 10, 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 15
  },
  profileLabelText: {
    color: 'white'
  }
 });

export default ProfileReady;