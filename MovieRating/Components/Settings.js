// Components/Settings.js

import React from 'react'
import {StyleSheet, Button, Text, View, TextInput, Dimensions, TouchableOpacity} from "react-native";

class Settings extends React.Component {

    logout(){
        this.props.navigation.navigate('Login')
    }

    render(){
        return(
            <View style={styles.mainContainer}>
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
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5
    },
    button: {
        alignSelf: 'center',
        width: Dimensions.get('window').width / 2,
    }
});

export default Settings;