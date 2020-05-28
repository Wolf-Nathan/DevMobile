// Components/TrackItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class TrackItem extends React.Component {
    render() {
        const track = this.props.track;
        //const displayMovieDetails = this.props.displayMovieDetails;
        return (
            <TouchableOpacity onPress={() => console.log('hey')}>
                <Image source={{ uri: track.artworkUrl100}} />
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

});

export default TrackItem;