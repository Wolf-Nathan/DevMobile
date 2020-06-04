// Components/Login.js

import React from 'react'
import {Button, Text, View} from "react-native";

class Login extends React.Component {

    render() {
        return(
            <View>
                <Text>Bienvenue !</Text>
                <Button title={"Se connecter"} onPress={() => this.props.navigation.navigate("Search")} />
            </View>
        )
    }
}

export default Login;