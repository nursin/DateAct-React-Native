import React, { Component } from 'react';
import { ImageBackgroundComponent } from 'react-native';
import { ImageBackground } from 'react-native';
import { Text, View, ScrollView, StyleSheet, Picker } from 'react-native';
import { Card, Header, Icon, Button } from 'react-native-elements';

class ChooseFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'notFamous',
      gender: 'male',
      ageRange: '10-19'
    }
  }
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
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Type</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.type}
              onValueChange={itemValue => this.setState({ type: itemValue })}
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
              selectedValue={this.state.gender}
              onValueChange={itemValue => this.setState({ gender: itemValue })}
            >
              <Picker.Item label='Male' value='male' />
              <Picker.Item label='Female' value='female' />
              <Picker.Item label='Androgyne' value='androgyne' />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Age Range</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.ageRange}
              onValueChange={itemValue => this.setState({ ageRange: itemValue })}
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
              onPress={() => navigate('ProfileReady')}
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
    margin: 20
  },
  formLabel: {
    fontSize: 18,
    flex: 2
  },
  formItem: {
    flex: 2
  }
});

export default ChooseFeatures;