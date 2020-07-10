import React, { Component } from 'react'
import {View, StatusBar, Text, StyleSheet} from 'react-native'
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { BottomBar } from "./BottomBar";

export default class  Home extends React.Component{
  render(){
    return(
  <View style={styles.container}>
    <Text> Hello world </Text>

  </View>
    );
  }
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaa1d',
  }
})


