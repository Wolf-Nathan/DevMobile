import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Timer from './Components/Timer'

/*export default function App() {
  return (
      <View>
        <View>
          <Button title="Start" onPress={ () => {}}> Start</Button>

        </View>
        <Text>Temps :  : </Text>
      </View>
  );
}*/

export default class App extends React.Component {
  render() {
    return(
        <Timer/>
    )
  }
}

/*class App extends React.Component {
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
    //this.setState( { count: this.state.count + 1});
    /*setInterval(() => this.setState({
        count: this.state.count + 1
    }), 1000);*/
  /*  setInterval(() => this.check(), 1000);
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
 /* }
  render() {
    return (
        <View>
          <View>
            <Button onClick={this.incCount.bind(this)}> Start</Button>

          </View>
          <Text>Temps : { this.state.minute } : {this.state.seconde}</Text>
        </View>
    );
  }

};*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
