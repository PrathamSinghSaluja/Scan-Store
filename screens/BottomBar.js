import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import ExampleApp from './scanner-1';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Home from './Home';

export default class BottomBar extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return(
      <Home />
    );
  }
}

class PreviousOrderScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
        <Text> This is my Explore screen </Text>
      </View>
    );
  }
}
class CameraScreen extends React.Component {
    render() {
      return(
       <ExampleApp />
      );
    }
  }

class CartScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
        <Text> This is my Cart screen </Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>
        <Text> This is my Profile screen </Text>
      </View>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    PreviousOrder: {
      screen: PreviousOrderScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="clipboard" size={25} color={tintColor} />
        )
      }
    },
    Scanner: { 
        screen: CameraScreen,
        navigationOptions: {
            tabBarIcon: () => (
                <View style={{ position: 'absolute', alignItems: "center"}}>
                    <View style={styles.icon}>
                        <TouchableHighlight underlayColor="7f58ff">
                            <View>
                                <Icon name="camera" size={25} color="#fff" />
                            </View>
                        </TouchableHighlight>
                    </View> 
                </View>
            )
        }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" size={25} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={25} color={tintColor} />
        )
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#eb6e3d'
    }
  }
);

const styles = StyleSheet.create({
    icon: {
        backgroundColor: "#7f58ff",
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: 100,
        position: "absolute",
        top: -60,
        shadowColor: "#7f58ff",
        shadowRadius: 5,
        shadowOffset: {height: 10},
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: '#fff',
    }
})

const AppContainer = createAppContainer(bottomTabNavigator);