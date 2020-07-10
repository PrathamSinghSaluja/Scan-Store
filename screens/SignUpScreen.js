import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet, Image, ImageBackground, Dimensions, Text, Button, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';

const SignUpScreen = () => {

    const SignInScreen = () => {
        Actions.SignInScreen();
    }

    const BottomBar = () => {
        Actions.BottomBar();
    }
    
    
 const [data,setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
});

 const textInputChange = (val) => {
    if( val.length !== 0) {
        setData({
            ...data,
            email: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            email: val,
            check_textInputChange: false
        });
    }
}

const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val
    });
}

const updateSecurityTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !State.secureTextEntry
    });
}
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#ffaa1d" barStyle="light-content"/>
               <Animatable.View style={styles.header}
                    animation="bounceIn">
                   <Text style={styles.text_header}>Register Now</Text>
               </Animatable.View>
               <Animatable.View style={styles.footer}
                        animation="fadeInUpBig">
                   <Text style={styles.text_footer}>Email</Text>
                   <View style={styles.action}>
                       <FontAwesome name="user-o" color="#05375a" size={20}/>
                       <TextInput 
                            placeholder="Your Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            onSubmitEditing={() => this.password.focus()}
                            onChangeText={(val) => textInputChange(val)}/>
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn">
                    <Feather
                        name="check-circle"
                        color="green"
                        size={20}/>
                    </Animatable.View>
                    : null}

                   </View>

                   <Text style={[styles.text_footer], {marginTop: 35}}>Password</Text>
                   <View style={styles.action}>
                       <Feather name="lock" color="#05375a" size={20}/>
                       <TextInput 
                            placeholder="Your Password"
                            style={styles.textInput}
                            secureTextEntry={data.secureTextEntry ? true : false}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                            />
                    <TouchableOpacity
                        onPress={updateSecurityTextEntry}>
                        {data.secureTextEntry ? 
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}/>
                        :
                        <Feather
                        name="eye"
                        color="grey"
                        size={20}/>
                        }   
                    </TouchableOpacity>
                   </View>

                   <Text style={[styles.text_footer], {marginTop: 35}}>Confirm Password</Text>
                   <View style={styles.action}>
                       <Feather name="lock" color="#05375a" size={20}/>
                       <TextInput 
                            placeholder="Your Password"
                            style={styles.textInput}
                            secureTextEntry={data.secureTextEntry ? true : false}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                            />
                    <TouchableOpacity
                        onPress={updateSecurityTextEntry}>
                        {data.secureTextEntry ? 
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}/>
                        :
                        <Feather
                        name="eye"
                        color="grey"
                        size={20}/>
                        }   
                    </TouchableOpacity>
                   </View>

                   <View style={styles.button}>
                       <TouchableOpacity style={styles.signIn} onPress={BottomBar}>
                           <Text style={styles.textSign}>Sign Up</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={styles.signUpButton}>
                        <TouchableOpacity onPress={SignInScreen}
                            style={styles.signIn}>
                            <Text style={styles.textSignUp}>Sign In</Text>
                        </TouchableOpacity>
                   </View>
               </Animatable.View>
            </View>
        );
    };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffaa1d',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        borderColor: 'white',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fc5c65',
        borderRadius: 60,
        marginTop: 30,
    },
    signIn: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    textSignUp: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    signUpButton: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        borderColor: '#fc5c65',
        borderWidth: 2,
        marginTop: 15,
    }
})

export default SignUpScreen;