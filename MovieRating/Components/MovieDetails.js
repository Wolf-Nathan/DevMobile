// Component/MovieDetails.js

import React from 'react'
import {StyleSheet, Button, Text, View, TextInput, FlatList, Image} from "react-native";
import movies from "../Data/moviesData";

class MovieDetails extends React.Component {

    render() {
        const movieId = this.props.navigation.state.params.movieId;
        var selectMovie = null;
        movies.forEach(movie => {
            if (movie.id === movieId) {
                selectMovie = movie;
            }
        });

        return(
            <View style={styles.mainContainer}>
                <Text style={styles.title}>{selectMovie.title}</Text>
                <Image style={styles.image} source={{ uri: selectMovie.image}} />
                <View style={styles.noteContainer}>
                    <Text>Note :</Text>
                    <Text style={styles.note}>{selectMovie.note}</Text>
                </View>
                <View style={styles.overviewContainer}>
                    <Text>{selectMovie.overview}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.date_text}>{selectMovie.release_date}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 25,
    },
    title: {
        alignSelf: 'center',
        fontSize: 25
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: '#000000',
        alignSelf: 'center'
    },
    noteContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    note: {
        fontWeight: 'bold',
        marginLeft: 3
    },
    overviewContainer: {
        padding: 4
    },
    dateContainer: {
        padding: 4,
        alignItems: 'flex-end'
    }
});

export default MovieDetails;