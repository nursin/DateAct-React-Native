import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Header, Image, Tile } from 'react-native-elements';

class About extends Component {

  static navigationOptions = {
    title: 'About'
  }

  render() {
    return (
      <ScrollView style={{ marginBottom: 20 }}>
        <View style={styles.container}>
          <Tile
            imageSrc={require('../assets/eye-iris.jpg')}
            title='Vision'
            activeOpacity={1}
            titleStyle={styles.paragraphHeader}
          />
          <Text style={styles.paragraphText}>Date Act will be used by people on first dates to break the ice before getting to know each other, and used by new and old couples to have little fun together. There will be a large database of profiles for famous, not famous, and created character types.</Text>
        </View>
        <View style={styles.container}>
          <Tile
            imageSrc={require('../assets/mission.jpg')}
            title='Mission'
            activeOpacity={1}
            titleStyle={styles.paragraphHeader}
          />
          <Text style={styles.paragraphText}>Date Act attempts to create a fun game for couples to enjoy while out on dates. This will give couples the chance to be someone else, and perhaps learn new things about their partners in the process. Date Act will improve between couples: communication, reaction time, and acting skills. Additionally, we strive to help couples discover their strengths and weaknesses in the process.</Text>
        </View>
        <View style={styles.container}>
          <Tile
            imageSrc={require('../assets/rules.jpg')}
            title='Date Act Instructions'
            activeOpacity={1}
            titleStyle={styles.paragraphHeader}
          />
          <Text style={styles.paragraphText}>If you remember only one thing, remember "Yes and ...". When creating a base reality you will always say yes and ... to the other persons creations. Never deny the reality your partner creates, but you may deny things that occur in the reality. Start by establishing base reality with who, where, what your doing. This will be easier since you will be on a real date, but the rest is creations.You can take your reality to the next level by finding the weird thing, something that seems odd, and then focus on that thing. You want to use that weird thing and every once in a while bring it back, but don't kill it by going constantly talking about it. Just every few moments bring it back.To play the game, choose the features you would like your character to have, then hit that generate button. a character profile will appear. You will use this profile to act out on a date with your partner, who will have also generated a character. Also, you can create your own character. These dont save right now so screenshot your character profile. Later the save function will be added.</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  paragraphHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paragraphText: {
    textAlign: 'center',
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20

  }
});

export default About;