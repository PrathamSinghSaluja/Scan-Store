import React from 'react';
import { View, StyleSheet, Text, ColorPropType } from 'react-native';

export default class PreviousOrderScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       color: 'black',
       alignContent: 'center',
    }
})