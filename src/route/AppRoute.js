//import liraries
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FirstScreen from '../screen/FirstScreen';
import SecondScreen from "../screen/SecondScreen";

// create a component
const AppRoute = createStackNavigator(
    {
      First: {
        screen: FirstScreen,
        navigationOptions : {
          title: 'First',
        }
      },
      Second: {
          screen: SecondScreen,
          navigationOptions : {
            title: 'Second',
          }
      }
    })

//make this component available to the app

export default createAppContainer(AppRoute);

