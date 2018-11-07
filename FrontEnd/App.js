/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import Routes from './src/Routes';

const client = new ApolloClient({
  uri: 'http://localhost/4000/graphql'
});

export default class App extends Component<{}> {
  render() {
    return (
      <ApolloProvider client={client}>
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
      </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
