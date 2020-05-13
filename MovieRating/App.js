import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoviesList from './Components/MoviesList';

export default class App extends React.Component {
  render() {
    return(
      <MoviesList/>
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
