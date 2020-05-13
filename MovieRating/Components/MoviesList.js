// Components/MoviesList.js

import React from 'react'
import {Button, Text, View, TextInput, FlatList} from "react-native";
import MovieItem from "./MovieItem";
import movies from "../Data/moviesData";

class MoviesList extends React.Component {

    _storeData = async () => {
        try {
            await AsyncStorage.setItem(
                '@MySuperStore:key',
                'I like to save it.'
            );
        } catch (error) {
            // Error saving data
        }
    };

    render() {
        return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <MovieItem movie={item}/>}
            />
        </View>
        )
    }
}


const styles = {

};


export default MoviesList;