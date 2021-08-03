//dependencies
import React, { Component } from 'react';
import { View, Platform, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';

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

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never'}}
    >
      <View style={styles.drawerHeader}>
        <View style={{flex: 1}}>
          <Icon
            name='transgender-alt'
            type='font-awesome'
            size={70}
            color='#fff'
            style={styles.drawerImage}
          />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Date Act</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

const MainNavigator = createDrawerNavigator(
  {
    Home: { 
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
            name='home'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
     },
    About: { 
      screen: AboutNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
     },
    Contact: { 
      screen: ContactNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
            name='address-card'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
     },
  },
  {
    drawerBackgroundColor: '#CEC8FF',
    contentComponent: CustomDrawerContentComponent
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
    backgroundColor: '#2904ff',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10
  },
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 30
  }
})

export default Main;