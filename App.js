{/*Core component */ }
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


{/* Custom Components */ }
import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/meals';


// Initialize it before any thing you load.
enableScreens();



{/* Use to combine reduxers into a single object */}
const rootReducer = combineReducers(
	{
		meals: mealsReducer
	}
)



{/* Creates an instance of the redux store */}
const store = createStore(rootReducer);



{/* Functions */ }
const fetchFonts = () => {
	return Font.loadAsync({
	  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
	  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};



{/* Actual Component */ }
export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
			/>
		);
	}


	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}




{ /*
	********************** Additional Notes *************************
	- To use fonts "npm install --save expo-font"
	- To use navigaitions in React Native: "npm install --save react-navigation" 
		and then "expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens"
	- You must install StackNavigator "npm install --save react-navigation-stack" then add "import { createStackNavigator } from 'react-navigation-stack'",
		TabsNavigator "npm install --save react-navigation-tabs" and then add "import { createBottomTabNavigator } from 'react-navigation-tabs'",
		DrawerNavigator "npm install --save react-navigation-drawer" and then add "import { createDrawerNavigator } from 'react-navigation-drawer"
	- When using props.navigation you can either use (ex: props.navigation.navigate({routeName: 'Go home'})) or (ex: props.navigation.push('Go home')) 
		this can be usual for when you want to stay on the same screen but load different data.
	- Use ( ex: props.navigation.replace('CategoryMeals'); ) when you don't want the user to go back to the previous screen.
	- Pop, push, replace can only be used in a stackable navigation.
	- Should be installed automatically from expo but in case it is not (npm install react-native-screens )this ensures that under the hood react-naive
		 uses native, optimized, screen components.
	- FlatList components have a renderItem function that takes an item from data and renders it into the list. It takes an object that includes an item param, 
		index param and a seperator. ie. renderItem({item, index, seperators})
*/}