// Components/Search.js

import React from 'react'
import {Button, Text, View, TextInput, FlatList, StyleSheet} from "react-native";
import moviesData from "../Data/moviesData";
import MovieItem from "./MovieItem";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    displayMoviesDetails = (movieId) => {
        this.props.navigation.navigate("MovieDetails", {movieId: movieId});
    };

    research(text) {
        if(text === "") {
            this.setState({ movies: []});
        }
        else {
            var resultResearch = [];
            moviesData.forEach(movie => {
                if(movie.title.includes(text, 0)){
                    resultResearch.push(movie);
                }
            });
            this.setState({
                movies: resultResearch
            });
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput placeholder={"Rechercher"} onChangeText={(text) => this.research(text)}/>
                <FlatList
                    data={this.state.movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <MovieItem movie={item} displayMovieDetails={this.displayMoviesDetails}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default Search;