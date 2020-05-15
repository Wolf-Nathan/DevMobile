// Components/Settings.js

import React from 'react'
import {StyleSheet, Button, Text, View, TextInput, Dimensions, TouchableOpacity} from "react-native";
import loginData from "../Data/loginData";

class Settings extends React.Component {

    logout(){
        this.props.navigation.navigate('Login')
    }

    render(){
        const user = loginData[loginData.length - 1];
        return(
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Paramètres du compte de {user}</Text>
                </View>
                <View style={styles.button}>
                    <Button title={"Se déconnecter"} onPress={() => this.logout()} color={"#FF0000"}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: "lightgray",
        paddingTop: 25,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor : '#000000',
        width: Dimensions.get('window').width,
        marginBottom: 10
    },
    textHeader: {
        fontSize: 17,
        alignSelf: 'center',
        marginBottom: 10,
        color: '#FFFFFF'
    },
    button: {
        alignSelf: 'center',
        width: Dimensions.get('window').width / 2,
    }
});

export default Settings;