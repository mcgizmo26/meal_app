{/* Import core components */ }
import React from 'react';
import { View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';



{/* Import custom components */ }
import { CATEGORIES } from '../data/dummy-data';
import MealList from "../components/MealList";
import DefaultText from '../components/DefaultText';



{/* Create actual component */ }
const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if(displayedMeals.length === 0){
        return (
            <View style={styles.content}>
                <DefaultText>No filters found</DefaultText>
            </View>
        )
    }

    return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

{/* If navigationOptions is passed a function react-navigation will pass data */ }
CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};



{/* Creates StyleSheet*/}
const styles = StyleSheet.create(
    {
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)



{/* Export component so that other componets can consume it*/ }
export default CategoryMealScreen;