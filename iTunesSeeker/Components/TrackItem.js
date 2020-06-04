// Components/TrackItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class TrackItem extends React.Component {
    imageShow(track){
        if(track.artworkUrl100){
            return(
                <Image style={styles.image} source={{ uri: track.artworkUrl100}} />
            )
        }
        else {
            <Image style={styles.image} source={require('../assets/singer.jpg')} />
        }
    }

    render() {
        const track = this.props.track;
        //const displayMovieDetails = this.props.displayMovieDetails;
        return (
            <TouchableOpacity onPress={() => console.log('hey')}>
                {this.imageShow(track)}
                <View>
                    <View>
                        <Text>{track.trackName}</Text>
                        <Text>{track.collectionName}</Text>
                        <Text>{track.artistName}</Text>
                    </View>
                    <View>
                        <Text>{track.previewUrl}</Text>
                    </View>
                    <View>
                        <Text>{track.releaseDate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 5,
        backgroundColor: '#000000',
    }
});

export default TrackItem;