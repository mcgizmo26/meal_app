{/* Import core components */}
import React from 'react';
import { Text, View, Button, StyleSheet, Platform } from 'react-native';
// Must "npm install --save react-navigation-header-buttons" to use.
import {HeaderButton} from 'react-navigation-header-buttons'
// if not installed already "npm install --savs @expo/vector-icons".
import { Ionicons } from '@expo/vector-icons'



{/* Import ustom components */}
import Colors from "../constants/Colors";



{/* Create actual component */}
const CustomHeaderButton = props => {

    //use the spread operator "..." to forward props to the new components
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        />
      );
}
 


{/* Export Component */}
export default CustomHeaderButton;

