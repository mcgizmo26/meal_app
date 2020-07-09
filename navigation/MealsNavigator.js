{/* Core components */ }
import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
    // The Stack and Tab navigators are seperate packages.
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
    // Used for IOS
import { createBottomTabNavigator } from 'react-navigation-tabs';
    // Used For Android 
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
    // import { } from "";



{/* Custom components */ }
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';



{/* Shared constant used to not duplicate code*/}
const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackitlStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === "android" ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
};



{/* Actual Stack Navigational function that turns js object into actual component arg1. Screen specific. arg2*/ }
const MealsNavigator = createStackNavigator(
    {
      Categories: {
        screen: CategoriesScreen
      },
      CategoryMeals: {
        screen: CategoryMealsScreen
      },
      MealDetail: MealDetailScreen
    },
    {
      // initialRouteName: 'Categories',
      defaultNavigationOptions: defaultStackNavOptions
    }
  );



{/* Actual Stack Navigational function that turns js object into actual component arg1. Screen specific. arg2*/}
const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

{/* This is the config used for both the createMaterialBottomTabNavigator and createBottomTabNavigator */}
const tabScreenConfig = {
    Meals: 
    {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabinfo) => {
                return (
                    <Ionicons 
                        name='ios-restaurant' 
                        size={25} 
                        color={tabinfo.tintColor} 
                    />
                )
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : "Meals"
        }
    },
    Favorites:
    {
        screen: FavNavigator,
        navigationOptions: {
            // tabBarLabel: 'Favorites!',
            tabBarIcon: (tabinfo) => {
                return (
                    <Ionicons 
                        name='ios-star' 
                        size={25} 
                        color={tabinfo.tintColor} 
                    />
                )
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : "Favorites"
        }
    }
};


{/* 
    Actual Tab Navigational function that turns js object into actual components. 
    Using "createMaterialBottomTabNavigator" for Android.
    Using "createBottomTabNavigator" for IOS.
*/ }
const MealsFavTabNavigator = Platform.OS === 'android'

    ? createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
            activeColor: 'white',
            shifting: true,
            backgroundColor: Colors.primaryColor
        }
    )
    : createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                },
                activeTintColor: Colors.accentColor
            }
        }
    );

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
)
    


{/* Actual Drawer Navigational function that turns js object into actual component arg1. Screen specific. arg2*/}
const MainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealsFavTabNavigator, 
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: FiltersNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

export default createAppContainer(MainNavigator);

{/* Must use an appContainer to wrap navigation component. */ }

