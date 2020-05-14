// Components/MovieForm.js

import React from 'react'
import {StyleSheet, Button, Text, View, TextInput, FlatList} from "react-native";
import movies from "../Data/moviesData"

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: false,
            movieTitle: "",
            movieResum: "",
            movieNote: 0,
            movieDate: ""
        }
    }

    validForm() {
        this.setState({ formValid: true });
    }

    confirmValidForm() {
        movies.push({
            id: movies.length + 1,
            title: this.state.movieTitle,
            overview: this.state.movieResum,
            note: this.state.movieNote,
            release_date: this.state.movieDate
        });
        /*const parsed = JSON.stringify(movie);
        fs.write("../Data/JSON");*/




        this.setState({
            formValid: false,
            movieTitle: "",
            movieResum: "",
            movieNote: 0,
            movieDate: ""
        });
    }

    onChangeTitle(text) {
        this.setState({movieTitle: text});
    }

    onChangeResum(text) {
        this.setState({movieResum: text});
    }

    onChangeNote(text) {
        this.setState({movieNote: text});
    }

    onChangeDate(text) {
        this.setState({movieDate: text});
    }

    displayForm() {
        if (this.state.formValid) {
            return (
                <View>
                    <Text>{this.state.movieTitle}</Text>
                    <Text>{this.state.movieResum}</Text>
                    <Text>{this.state.movieDate}</Text>
                    <Text>{this.state.movieNote}</Text>
                    <Button color="#FF0000" title="Valider" onPress={() => this.confirmValidForm() } />
                </View>
            )
        }
        else {
            return(
                <View>
                    <TextInput style={styles.textInput} placeholder={"Titre du film"} onChangeText={text => this.onChangeTitle(text)}/>
                    <TextInput style={styles.textInput} placeholder={"Résumé du film"} onChangeText={text => this.onChangeResum(text)}/>
                    <TextInput style={styles.textInput} placeholder={"Date de sortie"} onChangeText={text => this.onChangeDate(text)} />
                    <TextInput style={styles.textInput} placeholder={"Note"} keyboardType={'numeric'} returnKeyType={'done'} onChangeText={text => this.onChangeNote(text)}/>
                    <Button color="#000000" title="Ajouter le film" onPress={() => this.validForm() } />
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.mainForm}>
                { this.displayForm() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainForm: {
        alignSelf : 'center',
        marginTop : 25,
        flex: 1,
        width: 400,
        height: 190,
        //backgroundColor: 'gray',
    },
    textInput: {
        marginLeft: 20,
        //alignSelf: 'center'
    }
});

export default MovieForm;