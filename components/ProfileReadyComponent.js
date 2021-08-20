import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Header, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { generateProfile } from '../shared/functions';
import * as Font from 'expo-font';

var randomFamousPerson = 1;

const mapStateToProps = state => {
  return {
    formValues: state.formValues,
    data: state.data
  }
}

class ProfileReady extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    title: 'Home'
  }

  static navigationOptions = {
    title: 'Profile ready'
  }

  randomFamousPerson() {
    if (this.props.formValues.formValues.charGender === 'male') {
      randomFamousPerson = Math.floor(Math.random() * this.props.data.data.famousMales.length);
    } else if (this.props.formValues.formValues.charGender === 'female') {
      randomFamousPerson = Math.floor(Math.random() * this.props.data.data.famousFemales.length);
    } else if (this.props.formValues.formValues.charGender === 'androgen' || this.props.formValues.formValues.charGender === 'neutral') {
      randomFamousPerson = Math.floor(Math.random() * this.props.data.data.famousUnisex.length);
    } else {
      const GENDER_LIST = [this.props.data.data.famousMales, this.props.data.data.famousFemales, this.props.data.data.famousUnisex];
      randomFamousPerson = Math.floor(Math.random() * GENDER_LIST.length);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log('Profile:', this.props)
    this.randomFamousPerson();
    return (
      <ScrollView  style={{backgroundColor: 'purple'}}>
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
          <Text style={styles.profileLabelText}>Name: {generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'name', randomFamousPerson)}</Text>
          <Text style={styles.profileLabelText}>Age: {generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'age', randomFamousPerson)}</Text>
          <Text style={styles.profileLabelText}>Horoscope: {generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'horoscope', randomFamousPerson)}</Text>
          <Text style={styles.profileLabelText}>Type: {generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'type', randomFamousPerson)}</Text>
          <Text style={styles.profileLabelText}>Bio: {generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'bio', randomFamousPerson)}</Text>
          <Text style={styles.profileLabelText}>Adjectives: {generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'adjectives', randomFamousPerson)}</Text>
          <Text style={styles.profileLabelText}>Quirky Fact: {generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'quirkyFact', randomFamousPerson)}</Text>
          <Text style={styles.profileLabelText}>Profession: {generateProfile(this.props.formValues.formValues.charType, this.props.data.data, this.props.formValues, 'profession', randomFamousPerson)}</Text>
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

 export default connect(mapStateToProps)(ProfileReady);