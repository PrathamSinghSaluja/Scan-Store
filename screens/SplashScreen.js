import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet, Image, ImageBackground, Dimensions, Text, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import SignInScreen from './SignInScreen';
import { Actions } from 'react-native-router-flux';


export default class SplashScreen extends React.Component {

    SignInScreen() {
        Actions.SignInScreen()    
    }
    render(){
        return(
    
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Animatable.Image
                        animation="bounceIn"
                        source={require("../app/assets/logo.png")}
                        style={styles.logo}/>
                    </View>
                    <Animatable.View 
                        style={styles.footer}
                        animation="fadeInUpBig">
                        <Text style={styles.title}>Just Scan the Code and Buy Anything</Text>
                        <Text style={styles.text}>Sign In With Account</Text>
                        <View style={styles.button}>
                            <TouchableOpacity  onPress={this.SignInScreen} style={styles.signIn}>
                                <View style={styles.getStarted}>
                                    <Text style={styles.textSign}>Get Started</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </View>

        );
    }
} 

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#ffaa1d',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    footer:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        color: 'grey',
        marginTop: 5,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        flexDirection: 'row',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    getStarted: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
 
})
