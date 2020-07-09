{/* Import core components */ }
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';



{/* Import custom components */ }
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from "../components/DefaultText";



{/* Create actual component */ }
const FavoritesScreen = props => {
	const favMeals = useSelector(state => state.meals.favoriteMeals);

	if(favMeals.length === 0 || !favMeals){
		return (
			<View style={styles.content}>
				<DefaultText>You haven't favorited any meals yet</DefaultText>
			</View>
		)
	} else {
		return <MealList listData={favMeals} navigation={props.navigation} />;
	}
};

FavoritesScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Your Favorites',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
};




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
export default FavoritesScreen;