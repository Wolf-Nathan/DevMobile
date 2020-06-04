// Component/TrackDetails.js

import React from 'react'
import {StyleSheet, Text, View, Image} from "react-native";

class TrackDetails extends React.Component {

    render() {
        const trackId = this.props.navigation.state.params.trackId;
        var selectTrack = null;
        /*movies.forEach(movie => {
            if (movie.id === movieId) {
                selectTrack = movie;
            }
        });*/

        return(
            <View style={styles.mainContainer}>
                <Text style={styles.title}>{track.trackName}</Text>
                <Image style={styles.image} source={{ uri: track.artworkUrl100}} />
                <View style={styles.noteContainer}>
                    <Text>Note :</Text>
                    <Text style={styles.note}>10</Text>
                </View>
                <View style={styles.overviewContainer}>
                    <Text>{track.collectionName}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.date_text}>{track.releaseDate}</Text>
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

export default TrackDetails;