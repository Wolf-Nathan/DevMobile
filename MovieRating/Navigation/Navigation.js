// Navigation/Navigation.js

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import MoviesList from '../Components/MoviesList'
import MovieForm from '../Components/MovieForm';
import MovieDetails from "../Components/MovieDetails";


const ListStackNavigator = createStackNavigator({
   List: {
       screen: MoviesList,
       navigationOptions: {
           title: 'Liste des films'
       }
   },
    MovieDetails: {
       screen: MovieDetails,
       navigationOptions: {
           title: 'Détails du film'
       }
    }
});

const MoviesTabNavigator = createBottomTabNavigator({
        List: {
            screen: ListStackNavigator,
            navigationOptions: {
                title: 'Liste'
            },

        },
        Form: {
            screen: MovieForm,
            navigationOptions: {
                title: 'Ajouter un film',
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/plus.png')}
                        style={styles.icon}
                    />
                }
            }
        },
    },
    {
    tabBarOptions: {
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF',
        showLabel: true,
        showIcon: true
    }
});

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
});

export default createAppContainer(MoviesTabNavigator)