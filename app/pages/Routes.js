import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SplashScreen from '../../screens/SplashScreen';
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import  HomeScreen  from '../../screens/Home';
import App from '../../App';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import ExampleApp from '../../screens/scanner-1';
import Home from '../../screens/Home';
import BottomBar from '../../screens/BottomBar';



export default class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="welcome" component={SplashScreen} title="Welcome" initial={true}/>
                    <Scene key="SignInScreen" component={SignInScreen} title="SignIn"/>
                    <Scene key="SignUpScreen" component={SignUpScreen} title="SignUp"/>
                    <Scene key="Home" component={Home} title="Home"/>
                    <Scene key="Scanner" component={ExampleApp} title="Scanner"/>
                    <Scene key="BottomBar" component={BottomBar} title="menu"/>
                </Stack>
            </Router>
        );
    }
}
    