// Navigation/Navigation.js

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from "../Components/Search";
import Login from "../Components/Login";
import TrackDetails from "../Components/TrackDetails";

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    },
    Details: {
        screen: TrackDetails,
        navigationOptions: {
            title: "Musique"
        }
    }
});

const HomeStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Se connecter"
        }
    },
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            title: "Rechercher"
        }
    }
});

const style = StyleSheet.create({

});
export default createAppContainer(HomeStackNavigator);