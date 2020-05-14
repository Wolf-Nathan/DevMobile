// Components/LoginForm.js

import React from 'react'
import {StyleSheet, Button, Text, View, TextInput, FlatList} from "react-native";

class LoginForm extends React.Component {

    login() {
        this.props.navigation.navigate("TabNavigator");
    }

    render() {
        return(
            <View>
                <Text>Pseudo</Text>
                <TextInput/>
                <Text>Mot de passe</Text>
                <TextInput/>
                <Button title={"Se connecter"} onPress={() => this.login()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default LoginForm;