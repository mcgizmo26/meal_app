{/* Core components */ }
import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableNativeFeedback
} from "react-native";



{/* Actual Component */ }
const CategoryGridTile = props => {
    let CustomTouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        CustomTouchableComponent = TouchableNativeFeedback;
    };

    return (
        <View style={styles.gridItem}>
            <CustomTouchableComponent style={{flex: 1}} onPress={props.onSelect}>
                {/*
                    The spread opperator ... before styles.container is pulling out the key value pairs to merge them with the passed styles. 
                */}
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
                </View>
            </CustomTouchableComponent>
        </View>
    );
};



{/*Create Stylesheet*/ }
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 100,
        borderRadius: 10,
        overflow: Platform.OS && Platform.Version >= 21 === 'android' ? "hidden" : "visible",
        elevation: 8,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: "right",
        // color: 'white'
    }
})



{/* Export component */ }
export default CategoryGridTile;