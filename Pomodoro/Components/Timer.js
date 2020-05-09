// Components/Timer.js
import React from 'react'
import {Button, Text, View} from "react-native";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            minuteCompteur: 0,
            minute : '00',
            seconde : '00'
        };
    }

    incCount() {
        setInterval(() => this.check(), 1000);
    }

    check() {
        console.log('check');
        console.log(this.state.count);
        if(this.state.count < 9){
            this.setState({count: this.state.count + 1, seconde: "0" + (this.state.count+1) });
            console.log(this.state.seconde);

        }
        else if(this.state.count === 59){
            if(this.state.minuteCompteur < 10 ) {
                this.setState({
                    count: 0,
                    minuteCompteur: this.state.minuteCompteur + 1,
                    minute: "0" + (this.state.minuteCompteur + 1),
                    seconde: '00'
                });
            }
            else{
                this.setState({
                    count: 0,
                    minuteCompteur: this.state.minuteCompteur + 1,
                    minute: this.state.minuteCompteur,
                    seconde: '00'
                });
            }
        }
        else {
            this.setState({count: this.state.count + 1, seconde: (this.state.count+1) });
        }
        /*else {
            /*setInterval(() => this.setState({
                count: this.state.count + 1
            }), 1000);*/
        /*this.setState({count: this.state.count + 1, seconde: "0" + (this.state.count + 1) });
    }*/
    }

    render() {
        return (
            <View>
                <View style={ styles.main_container}>
                    <Button title="Start" onPress={() => this.incCount()} style={styles.button}> Start</Button>

                </View>
                <Text>Temps : { this.state.minute } : { this.state.seconde }</Text>
            </View>
        );
    }
}

const styles = {
    main_container: {
        flex: 1,
        marginTop: 20
    },
    button: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
};


export default Timer