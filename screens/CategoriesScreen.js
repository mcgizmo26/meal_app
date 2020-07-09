{/* Import core components */ }
import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";



{/* Import custom components/data */ }
import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';



{/* Create actual component */ }
const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
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


{/* Create StyleSheet */ }
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



{/* Export component so that other componets can consume it*/ }
export default CategoriesScreen;