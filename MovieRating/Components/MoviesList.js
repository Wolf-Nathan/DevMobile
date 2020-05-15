// Components/MoviesList.js

import React from 'react'
import {View, FlatList} from "react-native";
import MovieItem from "./MovieItem";
import movies from "../Data/moviesData";

class MoviesList extends React.Component {

    displayMoviesDetails = (movieId) => {
        this.props.navigation.navigate("MovieDetails", {movieId: movieId});
    };

    render() {
        return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <MovieItem movie={item} displayMovieDetails={this.displayMoviesDetails}/>}
            />
        </View>
        )
    }
}


const styles = {

};


export default MoviesList;