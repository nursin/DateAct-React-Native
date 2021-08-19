import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker } from 'react-native';
import { Card, Header, Icon, Button, Input } from 'react-native-elements';

class CreateChar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      horoscope: '',
      bio: '',
      adjectives: '',
      quirkyFact: '',
      profession: ''
    }
  }

  static navigationOptions = {
    title: 'Create character'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ margin: 20 }}>
        <View style={styles.container}>
          <View style={styles.headerText}>
            <Text style={{ fontSize: 24 }}>Create Your Own</Text>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Name'
              leftIcon={{ type: 'font-awesome', name: 'user-o' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={name => this.setState({ name: name })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Age'
              leftIcon={{ type: 'font-awesome', name: 'user-o' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={age => this.setState({ age: age })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Horoscope'
              leftIcon={{ type: 'font-awesome', name: 'user-o' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={horoscope => this.setState({ horoscope: horoscope })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Bio'
              leftIcon={{ type: 'font-awesome', name: 'user-o' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={bio => this.setState({ bio: bio })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Adjectives'
              leftIcon={{ type: 'font-awesome', name: 'user-o' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={adjectives => this.setState({ adjectives: adjectives })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Quirky Fact'
              leftIcon={{ type: 'font-awesome', name: 'user-o' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={quirkyFact => this.setState({ quirkyFact: quirkyFact })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Profession'
              leftIcon={{ type: 'font-awesome', name: 'user-o' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={profession => this.setState({ profession: profession })}
            ></Input>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                  name='transgender-alt'
                  type='font-awesome'
                  color='white'
                  size={30}
                  style={{ marginRight: 10 }}
                />
              }
              title='Create'
              buttonStyle={{
                backgroundColor: '#2904ff'
              }}
              onPress={() => {
                navigate('ProfileReady', {createCharData: this.state})
              }}
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
    margin: 10
  },
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 5
  },
  formLabel: {
    fontSize: 18,
    flex: 1.5
  },
  formItem: {
    flex: 3
  }
});

export default CreateChar;