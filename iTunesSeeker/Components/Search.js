// Components/Search.js

import React from 'react'
import {Text, View, TextInput, FlatList, StyleSheet} from "react-native";

class Search extends React.Component {

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