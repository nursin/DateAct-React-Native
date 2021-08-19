import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Header, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, GoblinOne_400Regular } from '@expo-google-fonts/goblin-one';

class Home extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Card
          color='white'
          title='Instructions'
          titleStyle={{
            color: 'white',
          }}
          containerStyle={{
            backgroundColor: 'purple'
          }}
          style={{ justifyContent: 'center', alignContent: 'center' }}
        >
          <Text style={{ color: 'white', fontSize: 15 }}>If you remember only one thing, remember "Yes and ...". When creating a base reality you will always say yes and ... to the other persons creations. Never deny the reality your partner creates, but you may deny things that occur in the reality. Start by establishing base reality with who, where, what your doing. This will be easier since you will be on a real date, but the rest is creations.You can take your reality to the next level by finding the weird thing, something that seems odd, and then focus on that thing. You want to use that weird thing and every once in a while bring it back, but don't kill it by going constantly talking about it. Just every few moments bring it back.To play the game, choose the features you would like your character to have, then hit that generate button. a character profile will appear. You will use this profile to act out on a date with your partner, who will have also generated a character. Also, you can create your own character. These dont save right now so screenshot your character profile. Later the save function will be added. </Text>
          <Text style={styles.pageHeader}>
            Select start to begin.
          </Text>
          <View style={{ margin: 20 }}>
            <Button
              title='Start'
              color='white'
              raised
              buttonStyle={{
                backgroundColor: '#2904ff'
              }}
              onPress={() => navigate('ChooseFeatures')}
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
 }
});

export default Home;