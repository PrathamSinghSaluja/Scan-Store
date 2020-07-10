import React, { Component } from 'react'
import {View, StatusBar} from 'react-native'

export default class Screen extends Component  {
    render(){
        return(
    <View style={{flex: 1, backgroundColor: "#ffaa1d"}}>
        <StatusBar barStyle='light-content' backgroundColor="#ffaa1d"/>
    </View>
        );
    }
}