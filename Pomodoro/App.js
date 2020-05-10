import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Timer from './Components/Timer'

export default class App extends React.Component {
  render() {
    return(
        <Timer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
