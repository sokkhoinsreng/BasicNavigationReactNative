//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
class SecondScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                onPress = {() => this.props.navigation.goBack()}
                style ={{width: 200, height: 50, borderRadius: 25, backgroundColor:'#f2f3f4', justifyContent:'center', alignItems:'center'}}>
                    <Text>SecondScreen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SecondScreen;
