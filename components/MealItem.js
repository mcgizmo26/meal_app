{/* Import core components */ }
import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    Text,
    ImageBackground
} from 'react-native';



{/* Import custom components/data */ }
import DefaultText from './DefaultText'


{/* Actual Component */ }
const MealItem = props => {
    let TouchableMealItemComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableMealItemComponent = TouchableNativeFeedback;
    };

    return (
        <View style={styles.mealItem}>
            <TouchableMealItemComponent onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableMealItemComponent>
        </View >
    )
};

const styles = StyleSheet.create({
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height : '15%'
    },
    mealHeader: {
        height: '85%'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    mealRow: {
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: '#rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    }
});



export default MealItem;