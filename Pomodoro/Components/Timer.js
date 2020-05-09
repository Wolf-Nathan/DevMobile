// Components/Timer.js
import React from 'react'
import {Button, Text, View} from "react-native";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            minuteCompteur: 1,
            minute : '01',
            seconde : '00',
            breakTime: 1,
            workTime: 1,
            titre: 'Travail',
            color: '#000000',
            start: false,
            startId: 0
        };
    }

    start() {
        if (!this.state.start) {
            var id = setInterval(() => this.check(), 1000);
            this.setState({start: true, startId: id});
        }
    }

    stop() {
        if (this.state.start) {
            this.setState({start: false});
            clearInterval(this.state.startId);

        }
    }

    reset() {
        if (this.state.startId !== 0) {
            clearInterval(this.state.startId);
            this.setState({
                start: false,
                startId: 0,
                count: 0,
                minuteCompteur: this.state.workTime,
                titre: 'Travail',
                color: '#000000',
                minute: this.state.workTime > 9 ? this.state.workTime : "0" + this.state.workTime,
                seconde: "00"
            })
        }
    }

    check() {
        if(this.state.count <= 10 && this.state.count > 0){
            this.setState({count: this.state.count - 1, seconde: "0" + (this.state.count - 1) });

        }
        else if (this.state.count === 20 && this.state.minuteCompteur === 0) {
            this.setState({
                count: this.state.count - 1,
                seconde: this.state.count - 1,
                color: '#FF0000'
            })
        }
        else if(this.state.count === 0) {
            if(this.state.minuteCompteur <= 0){
                if (this.state.titre === 'Travail') {
                    this.setState({
                        titre: 'Pause',
                        seconde: "00",
                        minute: this.state.breakTime > 9 ? this.state.breakTime : "0" + this.state.breakTime,
                        minuteCompteur: this.state.breakTime,
                        color: '#000000'
                    });
                }
                else {
                    this.setState({
                        titre: 'Travail',
                        seconde: "00",
                        minute: this.state.workTime > 9 ? this.state.workTime : "0" + this.state.workTime,
                        minuteCompteur: this.state.workTime,
                        color: '#000000'
                    });
                }
            }
            else {
                this.setState({
                    seconde: "59",
                    count: 59,
                    minuteCompteur: this.state.minuteCompteur - 1,
                    minute: "0" + (this.state.minuteCompteur - 1)
                });
            }
        }
        else {
            this.setState({count: this.state.count - 1, seconde: (this.state.count - 1) });
        }
    }

    render() {
        return (
            <View style={ styles.main_container}>
                <Text style={styles.title}>{ this.state.titre }</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="Start" onPress={() => this.start()}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Stop" onPress={() => this.stop()}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={() => this.reset()}/>
                    </View>
                </View>
                <Text style={{color:this.state.color}}>Temps : { this.state.minute } : { this.state.seconde }</Text>
            </View>
        );
    }
}

const styles = {
    main_container: {
        flex: 1,
        marginTop: 20
    },
    title: {
        fontSize: 25,
        marginTop: 20,
        marginBottom: 25,
        alignSelf: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    button: {
        width: 80,
        marginHorizontal: 5,
        marginBottom: 20
    }
};


export default Timer