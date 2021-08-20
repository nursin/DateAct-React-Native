import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker } from 'react-native';
import { Card, Header, Icon, Button, Input } from 'react-native-elements';
import { selectedCreateCharValues } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import * as Font from 'expo-font';

const mapStateToProps = state => {
  return {
    formValues: state.formValues,
    createFormValues: state.createFormValues
  }
}

const mapDispatchToProps = {
  selectedCreateCharValues
};

class CreateChar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createName: '',
      createAge: '',
      createHoroscope: '',
      createBio: '',
      createAdjectives: '',
      createQuirkyFact: '',
      createProfession: '',
      fontsLoaded: false
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      'GoblinOne': {
        uri: require('../assets/fonts/GoblinOne-Regular.ttf'),
        display: Font.FontDisplay.FALLBACK,
      }
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  static navigationOptions = {
    title: 'Create character'
  }

  handleSubmit(values) {
    // console.log("Current state is: " + JSON.stringify(values));
    this.props.selectedCreateCharValues(values);
    // this.props.setChanged(values);
    // console.log(this.props)

    // console.log("Gender:", values.charGender)
    // console.log("Age:", values.charAge) 
    // console.log("Type:", values.charType) 
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ backgroundColor: 'purple' }}>
        <View style={styles.container}>
          <View style={styles.headerText}>
            <Text style={{ fontSize: 24, fontFamily: 'GoblinOne', color: 'white' }}>Create your own</Text>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Name'
              leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'white' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={createName => this.setState({ createName: createName })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Age'
              leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'white' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={createAge => this.setState({ createAge: createAge })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Horoscope'
              leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'white' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={createHoroscope => this.setState({ createHoroscope: createHoroscope })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Bio'
              leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'white' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={createBio => this.setState({ createBio: createBio })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Adjectives'
              leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'white' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={createAdjectives => this.setState({ createAdjectives: createAdjectives })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Quirky Fact'
              leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'white' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={createQuirkyFact => this.setState({ createQuirkyFact: createQuirkyFact })}
            ></Input>
          </View>
          <View style={styles.formRow}>
            <Input
              style={styles.formItem}
              placeholder='Profession'
              leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'white' }}
              leftIconContainerStyle={{ paddingRight: 10 }}
              onChangeText={createProfession => this.setState({ createProfession: createProfession })}
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
                this.handleSubmit(this.state)
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
    flex: 0.3,
    marginTop: 20
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateChar);