//dependencies
import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Header } from 'react-native-elements';
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
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'purple'
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
    About: { screen: About }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'purple'
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
    Contact: { screen: Contact }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'purple'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white'
      }
    }
  }
);

const GameNavigator = createStackNavigator(
  {
    ChooseFeatures: { screen: ChooseFeatures },
    CreateChar: { screen: CreateChar },
    ProfileReady: { screen: ProfileReady }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'purple'
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
    Game: { screen: GameNavigator }
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

export default Main;