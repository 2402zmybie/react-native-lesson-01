/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      star:"五角星"
    }

    //设置定时器
    setInterval(() => {
      this.setState({
        star: this.state.star ? "" : this.state.star = "五角星"
      })

    },1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{ this.state.star }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'

  },
  welcome: {
    color:'red',
    fontSize:16
  }
});
