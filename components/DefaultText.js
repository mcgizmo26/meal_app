{/* Import core components */}
import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';



{/* Create actual component */}
const DefaultText = props => {
    return ( 
        <Text styles={styles.text}>{props.children}</Text>
     );
};



{/* Create StyleSheet */}
const styles = StyleSheet.create(
    {
        text: {
            fontFamily: 'open-sans'
        }
    }
)
 


{/* Export component so that other componets can consume it*/}
export default DefaultText;