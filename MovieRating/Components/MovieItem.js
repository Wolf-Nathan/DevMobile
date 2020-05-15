// Components/MovieItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class MovieItem extends React.Component {
    render() {
        const movie = this.props.movie;
        const displayMovieDetails = this.props.displayMovieDetails;
        return (
            <TouchableOpacity style={styles.mainContainer} onPress={() => displayMovieDetails(movie.id)}>
                <Image style={styles.image} source={{ uri: movie.image}} />
                <View style={styles.contentContainer}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{movie.title}</Text>
                        <Text style={styles.vote_text}>{movie.note}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{movie.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                    <Text style={styles.date_text}>{movie.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 190,
        flexDirection: 'row',
        //backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'black'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: '#000000',
    },
    contentContainer: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
});

export default MovieItem;