//dependencies
import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

// components
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import ProfileReady from './ProfileReadyComponent';
import CreateChar from './CreateCharFormComponent';
import ChooseFeatures from './ChooseFeaturesFormComponent';




const HomeNavigator = createStackNavigator(
  {
    Home: { 
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon
          name='list'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      })
    },
    ChooseFeatures: { screen: ChooseFeatures },
    CreateChar: { screen: CreateChar },
    ProfileReady: { screen: ProfileReady }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2904ff'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white'
      }
    }
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { 
      screen: About,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon
          name='list'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      })
     }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2904ff'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white'
      }
    }
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { 
      screen: Contact,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon
          name='list'
          type='font-awesome'
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      })
     }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2904ff'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white'
      }
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    About: { screen: AboutNavigator },
    Contact: { screen: ContactNavigator },
  },
  {
    drawerBackgroundColor: '#CEC8FF'
  }
)

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

  render() {
    return(
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
        }}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#5637DD',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60
  },
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 30
  }
})

export default Main;