// Navigation/Navigation.js

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import MoviesList from '../Components/MoviesList'
import MovieForm from '../Components/MovieForm';
import MovieDetails from "../Components/MovieDetails";
import LoginForm from "../Components/LoginForm";
import Search from "../Components/Search";


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

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher un film'
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
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                title: 'Recherche',
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/loupe.png')}
                        style={styles.icon}
                        />
                }
            }
        }
    },
    {
    tabBarOptions: {
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF',
        showLabel: true,
        showIcon: true
    }
});

const HomeStackNavigator = createStackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            title: "Se connecter",
        }
    },
    TabNavigator: {
        screen: MoviesTabNavigator
    }
});

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25
    }
});

export default createAppContainer(HomeStackNavigator)