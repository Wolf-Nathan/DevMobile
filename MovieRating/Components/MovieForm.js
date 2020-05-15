// Components/MovieForm.js

import React from 'react'
import {StyleSheet, Button, Text, View, TextInput, Dimensions, Alert} from "react-native";
import movies from "../Data/moviesData"


class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: false,
            movieTitle: "",
            movieResum: "",
            movieNote: "",
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

        this.setState({
            formValid: false,
            movieTitle: "",
            movieResum: "",
            movieNote: 0,
            movieDate: "",
            movieImage: "",
            buttonPress: false
        });
    }

    cancelForm() {
        this.setState({formValid: false});
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
        var note = parseInt(text);
        if((note >= 0 && note <= 10) || text === "") {
            this.setState({movieNote: text});
        }
        else {
            Alert.alert("Merci de rentrer une note entre 0 et 10 !");
        }
    }

    onChangeDate(text) {
        this.setState({movieDate: text});
    }

    displayForm() {
        if (this.state.formValid) {
            return (
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Titre du film :</Text>
                        <Text style={styles.text}>{this.state.movieTitle}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Affiche :</Text>
                        <Text style={styles.text}>{this.state.movieResum}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Résumé :</Text>
                        <Text style={styles.text}>{this.state.movieDate}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Note :</Text>
                        <Text style={styles.text}>{this.state.movieNote}</Text>
                    </View>
                    <View style={styles.button}>
                        <Button color="#FF0000" title="Valider" onPress={() => this.confirmValidForm() } />
                    </View>
                    <View style={styles.button}>
                        <Button color="#000000" title="Annuler" onPress={() => this.cancelForm() } />
                    </View>
                </View>
            )
        }
        else {
            return(
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Titre du film : </Text>
                        <TextInput style={styles.textInput} placeholder={"Titre du film"} onChangeText={text => this.onChangeTitle(text)}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Affiche :</Text>
                        <TextInput style={styles.textInput} placeholder={"Lien de l'affiche"} onChangeText={text => this.onChangeImage(text)}/>
                    </View>
                    <View style={styles.inputContainer} >
                        <Text style={styles.label}>Résumé :</Text>
                        <TextInput style={styles.textInput} placeholder={"Résumé du film"} onChangeText={text => this.onChangeResum(text)} multiline={true} numberOfLine={3} returnKeyType={'next'}/>
                    </View>
                    <View style={styles.inputContainer} >
                        <Text style={styles.label}>Date de sortie :</Text>
                        <TextInput style={styles.textInput} placeholder={"Date de sortie"} onChangeText={text => this.onChangeDate(text)} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Note :</Text>
                        <TextInput style={styles.textInput} value={this.state.movieNote} keyboardType={'numeric'} returnKeyType={'done'} onChangeText={text => this.onChangeNote(text)}/>
                    </View>
                    <View style={styles.button}>
                        <Button color="#000000" title="Ajouter le film" onPress={() => this.setState({buttonPress: true}) } />
                    </View>
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
        flex: 1,
        justifyContent:'center',
        width: Dimensions.get('window').width
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 4,
        justifyContent: 'center',
        width: Dimensions.get('window').width
    },
    label: {
        width: Dimensions.get('window').width / 3
    },
    textInput: {
        marginLeft: 20,
        width: Dimensions.get('window').width / 2,
        backgroundColor : '#FFFFFF',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8,
        padding: 2,
        paddingLeft: 4
    },
    text: {
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center'
    },
    errorMessage: {
        alignSelf: 'center',
        color: '#FF0000'
    },
    button: {
        alignSelf: 'center',
        width: Dimensions.get('window').width / 2,
        marginTop: 5
    }
});

export default MovieForm;