// Components/LoginForm.js

import React from 'react'
import {StyleSheet, Button, Text, View, TextInput, Dimensions} from "react-native";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            badLogin: false,
            pseudo: "",
            password: ""
        }
    }

    onChangePseudo(text) {
        this.setState({pseudo: text});
    }

    onChangePassword(text) {
        this.setState({password: text});
    }

    login() {
        if (this.state.pseudo !== "" && this.state.password !== "") {
            this.props.navigation.navigate("TabNavigator");
        }
        else {
            this.setState({badLogin: true});
        }
    }

    errorOnLogin(){
        if (this.state.badLogin) {
            return(
                <View>
                    <Text style={styles.errorMessage}>Mauvais identifiants de connexion !</Text>
                </View>
            )
        }
    }

    render() {
        return(
            <View style={styles.main_container}>
                <Text style={styles.label}>Pseudo</Text>
                <TextInput style={styles.textInput} onChangeText={text => this.onChangePseudo(text)} />
                <Text style={styles.label}>Mot de passe</Text>
                <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={text => this.onChangePassword(text)}/>
                <Button title={"Se connecter"} onPress={() => this.login()} />
                { this.errorOnLogin() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        alignSelf: 'center',
        width: Dimensions.get('window').width,
        padding: 5
    },
    textInput: {
      margin: 10,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "#000000"
    },
    label: {
        margin: 10,
        marginBottom: 0
    },
    errorMessage: {
        color: "#FF0000",
        alignSelf: 'center'
    }
});

export default LoginForm;