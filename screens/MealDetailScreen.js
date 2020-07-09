{/* Import core components */ }
import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';


{/* Import custom components */ }
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {toggleFavorite } from  '../store/actions/meals'



{/* Create actual internal component */ }
const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};



{/* Create actual component */ }
const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const dispatch = useDispatch();

    // Use React's callBack is used to prevent infinite loops, by preventing new invocations of existing dependancies
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: currentMealIsFavorite});
    }, [currentMealIsFavorite]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    );
};



MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavoririte = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav');

    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName={isFavorite ? "ios-star" : 'ios-star-outline'}
                    onPress={toggleFavoririte}
                />
            </HeaderButtons>
        )
    };
};




{/* Create StyleSheet */ }
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});



{/* Export component so that other componets can consume it*/ }
export default MealDetailScreen;