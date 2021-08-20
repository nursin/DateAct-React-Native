//dependencies
import React, { Component } from 'react';
import { View, Platform, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';
import { useFonts, GoblinOne_400Regular } from '@expo-google-fonts/goblin-one';
import { Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

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
        headerRight: <Icon
          name='home'
          type='font-awesome'
          iconStyle={styles.stackIconRight}
        />,
        headerLeft: <Icon
          name='list'
          type='font-awesome'
          iconStyle={styles.stackIconLeft}
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
        headerRight: <Icon
          name='info-circle'
          type='font-awesome'
          iconStyle={styles.stackIconRight}
          onPress={() => navigation.toggleDrawer()}
        />,
        headerLeft: <Icon
          name='list'
          type='font-awesome'
          iconStyle={styles.stackIconLeft}
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
        headerRight: <Icon
          name='address-card'
          type='font-awesome'
          iconStyle={styles.stackIconRight}
          onPress={() => navigation.toggleDrawer()}
        />,
        headerLeft: <Icon
          name='list'
          type='font-awesome'
          iconStyle={styles.stackIconLeft}
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
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.drawerHeader}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#dd37b9', '#8a30c5', '#2904ff']}
          style={styles.background}
        />
        <View style={{ flex: 2 }}>
          <Icon
            name='transgender-alt'
            type='font-awesome'
            size={70}
            color='#fff'
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 1 }}>
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
        drawerIcon: ({ tintColor }) => (
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
        drawerIcon: ({ tintColor }) => (
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
        drawerIcon: ({ tintColor }) => (
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

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View
          style={{
            flex: 1,
            paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
          }}>
          <AppNavigator />
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#2904ff',
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 34,
    textAlign: 'center',
    fontFamily: 'GoblinOne'
  },
  drawerImage: {
    margin: 20
  },
  stackIconRight: {
    marginRight: 10,
    color: '#fff',
    fontSize: 30
  },
  stackIconLeft: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 30
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -160,
    height: 350,
    width: 300,
    transform: [{ rotate: "-90deg" }]
  }
})

export default Main;