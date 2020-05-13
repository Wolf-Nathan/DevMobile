// Components/MovieForm.js

import React from 'react'
import {Button, Text, View, TextInput, FlatList} from "react-native";

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: false,
            movieTitle: "",
            movieResum: "",
            movieNote: 0,
        }
    }

    validForm() {
        this.setState({ formValid: true });
    }

    displayForm() {
        if (this.state.formValid) {
            return (
                <View>
                    <Text>{this.state.movieTitle}</Text>
                    <Text>{this.state.movieResum}</Text>
                    <Text>{this.state.movieNote}</Text>
                </View>
            )
        }
        else {
            <View>
                <TextInput placeholder={"Titre du film"} />
                <TextInput placeholder={"Résumé du film"} />
                <TextInput placeholder={"Note"} keyboardType={'numeric'} returnKeyType={'done'} />
                <Button title="Valider" onPress={() => this.validForm() } />
            </View>
        }
    }

    render() {
        return (
            <View>
                { this.displayForm() }
            </View>
        )
    }
}

const styles = {

};

export default MovieForm;