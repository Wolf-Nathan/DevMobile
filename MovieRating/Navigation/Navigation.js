// Navigation/Navigation.js

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import MoviesList from '../Components/MoviesList'
import MovieForm from '../Components/MovieForm';

const MoviesTabNavigator = createBottomTabNavigator({
        List: {
            screen: MoviesList,
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