import React, { Component } from 'react';
import { ImageBackgroundComponent } from 'react-native';
import { ImageBackground } from 'react-native';
import { Text, View, ScrollView, StyleSheet, Picker } from 'react-native';
import { Card, Header, Icon, Button } from 'react-native-elements';
import { selectedChooseFormValues } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import * as Font from 'expo-font';

const mapStateToProps = state => {
  return {
    formValues: state.formValues
  }
}

const mapDispatchToProps = {
  selectedChooseFormValues
};

class ChooseFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charType: 'notFamous',
      charGender: 'male',
      charAge: '10-19',
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
    title: 'Choose features'
  }

  handleSubmit(values) {
    // console.log("Current state is: " + JSON.stringify(values));
    this.props.selectedChooseFormValues(values)
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
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Choose features</Text>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Type</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.charType}
              onValueChange={itemValue => this.setState({ charType: itemValue })}
            >
              <Picker.Item label='Not Famous' value='notFamous' />
              <Picker.Item label='Famous' value='famous' />
              <Picker.Item label='Create Your Own' value='createYourOwn' />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Gender</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.charGender}
              onValueChange={itemValue => this.setState({ charGender: itemValue })}
            >
              <Picker.Item label='Male' value='male' />
              <Picker.Item label='Female' value='female' />
              <Picker.Item label='Androgen' value='androgen' />
              <Picker.Item label='Neutral' value='neutral' />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Age Range</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.charAge}
              onValueChange={itemValue => this.setState({ charAge: itemValue })}
            >
              <Picker.Item label='10 - 19' value='10-19' />
              <Picker.Item label='20 - 29' value='20-29' />
              <Picker.Item label='30 - 39' value='30-39' />
              <Picker.Item label='40 - 49' value='40-49' />
              <Picker.Item label='50 - 59' value='50-59' />
              <Picker.Item label='59+' value='59+' />
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                  name='transgender-alt'
                  type='font-awesome'
                  color='white'
                  size={30}
                  style={{marginRight: 10}}
                />
              }
              title='Generate profile'
              buttonStyle={{
                backgroundColor: '#2904ff'
              }}
              onPress={() => {
                this.handleSubmit(this.state)
                if (this.state.charType === 'createYourOwn') {
                  navigate('CreateChar')
                } else {
                  navigate('ProfileReady')
                }
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
    flex: 1,
    margin: 10
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3
  },
  headerText: {
    fontFamily: 'GoblinOne',
    fontSize: 24,
    marginTop: 20,
    color: 'white',
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
    margin: 20
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
    color: 'white',
  },
  formItem: {
    flex: 2,
    color: 'white',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseFeatures);
