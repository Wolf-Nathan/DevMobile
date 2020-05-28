// Components/Search.js

import React from 'react'
import {Text, View, TextInput, FlatList, StyleSheet} from "react-native";
import {getAuthor, getTrack, getAuthorTrack} from "../API/iTunesSearch";

class Search extends React.Component {
    constructor(props) {
        super(props);
        getAuthor('ufo361');
        getTrack('flieg');
        getAuthorTrack('ufo361', 'flieg');

    }

    render() {
        return (
            <View>
                <TextInput placeholder={"Rerchercher"} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default Search;