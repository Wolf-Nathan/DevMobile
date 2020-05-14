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
                if(movie.title.toUpperCase().includes(text.toUpperCase(), 0)){
                    resultResearch.push(movie);
                }
            });
            this.setState({
                movies: resultResearch
            });
        }
    }

    list() {
        if (this.state.movies.length > 0 ) {
            return(
                <FlatList
                    data={this.state.movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <MovieItem movie={item} displayMovieDetails={this.displayMoviesDetails}/>}
                />
            )
        }
        else {
            return(
                <Text style={styles.noMovie}>Aucun film ne correspond à votre recherche !</Text>
            )
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder={"Rechercher"} onChangeText={(text) => this.research(text)}/>
                {this.list()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 30,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        marginBottom: 25
    },
    noMovie: {
        alignSelf: 'center'
    }
});

export default Search;