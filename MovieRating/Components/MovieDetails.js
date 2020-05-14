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
            <View style={styles.main_container}>
                <Text>{selectMovie.title}</Text>
                <Image style={styles.image} source={{ uri: selectMovie.image}} />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.vote_text}>{selectMovie.note}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>{selectMovie.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>{selectMovie.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: '#000000',
    },
});

export default MovieDetails;