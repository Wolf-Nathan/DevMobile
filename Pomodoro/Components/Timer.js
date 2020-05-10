// Components/Timer.js
import React from 'react'
import {Button, Text, View, TextInput, Alert, Vibration} from "react-native";

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
        else if (this.state.count === 21 && this.state.minuteCompteur === 0) {
            this.setState({
                count: this.state.count - 1,
                seconde: this.state.count - 1,
                color: '#FF0000'
            })
        }
        else if(this.state.count === 0) {
            if(this.state.minuteCompteur <= 0){
                Vibration.vibrate([800, 800, 800, 800, 800]);
                Alert.alert("Changement de phase");
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
            else if (this.state.minuteCompteur >= 10) {
                this.setState({
                    seconde: "59",
                    count: 59,
                    minuteCompteur: this.state.minuteCompteur - 1,
                    minute: (this.state.minuteCompteur - 1)
                });
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

    onChangeWorkTime(text) {
        var time = parseInt(text);
        if(text !== "" && time <= 60) {
            if (this.state.titre === 'Travail') {
                if (time < 10) {
                    this.setState({
                        workTime: time,
                        count: 0,
                        minute: "0" + time,
                        minuteCompteur: time,
                        seconde: "00"
                    });
                } else {
                    this.setState({
                        workTime: time,
                        count: 0,
                        minute: time,
                        minuteCompteur: time,
                        seconde: "00"
                    });
                }
            } else {
                this.setState({
                    workTime: time
                });
            }
        }
    }

    onChangeBreakTime(text) {
        var time = parseInt(text);
        if(text !== "" && time <= 60) {
            if (this.state.titre === 'Pause') {
                if (time < 10) {
                    this.setState({
                        breakTime: time,
                        count: 0,
                        minute: "0" + time,
                        minuteCompteur: time,
                        seconde: "00"
                    });
                } else {
                    this.setState({
                        breakTime: time,
                        count: 0,
                        minute: time,
                        minuteCompteur: time,
                        seconde: "00"
                    });
                }
            } else {
                this.setState({
                    breakTime: time
                });
            }
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
                <Text style={styles.titleTimer}>Temps restant :</Text>
                <Text style={[styles.timer, {color:this.state.color}]}>{ this.state.minute } : { this.state.seconde }</Text>
                <View style={styles.options}>
                    <Text style={styles.optionLabel}>Temps de travail: </Text>
                    <Text style={styles.optionTime}>{this.state.workTime > 1 ? this.state.workTime + " minutes" : this.state.workTime + " minute"}</Text>
                    <TextInput style={styles.optionSetter} placeholder={"Changer le temps de travail"} onChangeText={text => this.onChangeWorkTime(text)} keyboardType={'numeric'}/>
                </View>
                <View style={styles.options}>
                    <Text style={styles.optionLabel}>Temps de pause: </Text>
                    <Text style={styles.optionTime}>{this.state.breakTime > 1 ? this.state.breakTime + " minutes" : this.state.breakTime + " minute"}</Text>
                    <TextInput style={styles.optionSetter} placeholder={"Changer le temps de pause"} onChangeText={text => this.onChangeBreakTime(text)} keyboardType={'numeric'}/>
                </View>
            </View>
        );
    }
}

const styles = {
    main_container: {
        flex: 1,
        marginTop: 50
    },
    title: {
        fontSize: 75,
        marginTop: 20,
        marginBottom: 25,
        alignSelf: 'center',
    },
    titleTimer: {
        fontSize: 25,
        marginTop: 15,
        marginBottom: 5,
        alignSelf: 'center',
    },
    timer: {
        fontSize: 25,
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
    },
    options: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 10,
        paddingLeft: 30,
        marginRight: 25
    },
    optionTime: {
        marginRight: 10,
    },
    optionLabel: {
        marginLeft: 10,
        marginRight: 10
    },
    optionSetter: {
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5
    }
};


export default Timer