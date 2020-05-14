// Components/MovieForm.js

import React from 'react'
import {StyleSheet, Button, Text, View, TextInput, Dimensions} from "react-native";
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
        if (this.state.movieTitle !== "" && this.state.movieResum !== "" && this.state.buttonPress ) {
            this.setState({ formValid: true });
        }
        else if (this.state.buttonPress) {
            return(
                <Text style={styles.errorMessage}>Formulaire incorrect !</Text>
            )
        }
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
            movieDate: "",
            movieImage: ""
        });
    }

    onChangeTitle(text) {
        this.setState({movieTitle: text});
    }

    onChangeResum(text) {
        this.setState({movieResum: text});
    }

    onChangeImage(text) {
        this.setState({movieImage: text})
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
                    <Text style={styles.text}>{this.state.movieTitle}</Text>
                    <Text style={styles.text}>{this.state.movieResum}</Text>
                    <Text style={styles.text}>{this.state.movieDate}</Text>
                    <Text style={styles.text}>{this.state.movieNote}</Text>
                    <Button color="#FF0000" title="Valider" onPress={() => this.confirmValidForm() } />
                </View>
            )
        }
        else {
            return(
                <View>
                    <TextInput style={styles.textInput} placeholder={"Titre du film"} onChangeText={text => this.onChangeTitle(text)}/>
                    <TextInput style={styles.textInput} placeholder={"Lien de l'affiche"} onChangeText={text => this.onChangeImage(text)}/>
                    <TextInput style={styles.textInput} placeholder={"Résumé du film"} onChangeText={text => this.onChangeResum(text)}/>
                    <TextInput style={styles.textInput} placeholder={"Date de sortie"} onChangeText={text => this.onChangeDate(text)} />
                    <TextInput style={styles.textInput} placeholder={"Note"} keyboardType={'numeric'} returnKeyType={'done'} onChangeText={text => this.onChangeNote(text)}/>
                    <Button color="#000000" title="Ajouter le film" onPress={() => this.setState({buttonPress: true}) } />
                    {this.validForm()}
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
        width: Dimensions.get('window').width,
        height: 190,
        //backgroundColor: 'gray',
    },
    textInput: {
        marginLeft: 20,
        //alignSelf: 'center'
    },
    text: {
        marginLeft: 20,
        //alignSelf: 'center'
    },
    errorMessage: {
        alignSelf: 'center',
        color: '#FF0000'
    }
});

export default MovieForm;