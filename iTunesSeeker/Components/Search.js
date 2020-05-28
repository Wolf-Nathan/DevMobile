// Components/Search.js

import React from 'react'
import {Text, View, TextInput, FlatList, StyleSheet} from "react-native";
import {getAuthor, getTrack, getAuthorTrack} from "../API/iTunesSearch";
import TrackItem from "./TrackItem";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: null,
            track: null,
            trackList: getTrack('flieg'),
            authorTrackList: getAuthorTrack('ufo361', 'flieg')
            }

    }

    async changeText(text, author) {
        if (author){
            if (text !== "") {
                if (this.state.track !== null) {
                    this.doubleChange(text, this.state.track);
                    this.setState({author: text});
                }
                else {
                    this.authorChange(text);
                    this.setState({author: text});
                }
            }
            else {
                this.authorChange(text);
                this.setState({author: null});
            }
        }
        else {
            if (text !== "") {
                if (this.state.author !== null) {
                    this.doubleChange(this.state.author, text);
                    this.setState({track: text});
                }
                else {
                    this.trackChange(text);
                    this.setState({track: text});
                }
            }
            else {
                this.trackChange(text);
                this.setState({track: null});
            }
        }

    }

    async authorChange(text) {
        var promise = getAuthor(text);
        var data = await promise.catch(() => false);
        this.setState({list: data});
    }

    async trackChange(text) {
        var promise = getTrack(text);
        var data = await promise.catch(() => false);
        this.setState({list: data});
    }

    async doubleChange(author, track) {
        var promise = getAuthorTrack(author, track);
        var data = await promise.catch(() => false);
        this.setState({list: data});
    }

    render() {
        return (
            <View>
                <TextInput placeholder={"Rerchercher artiste"} onChangeText={(text) => this.changeText(text, true)}/>
                <TextInput placeholder={"Rechercher musique"} onChangeText={(text) => this.changeText(text, false)}/>
                <FlatList
                    data={this.state.list}
                    keyExtractor={(item) => item.trackId}
                    renderItem={({item}) => <TrackItem track={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default Search;