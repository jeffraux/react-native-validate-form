/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import ValidateForm from './src/ValidateForm';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ValidateForm />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
});
