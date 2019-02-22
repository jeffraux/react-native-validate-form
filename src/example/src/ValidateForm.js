import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Form, Field } from "react-native-validate-form";

import InputField from "./InputField";

const required = value => (value ? undefined : "This is a required field.");
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value)
    ? "Please provide a valid email address."
    : undefined;

class ValidateForm extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      email: ""
    };
  }

  submitForm() {
    let submitResults = this.myForm.validate();

    let errors = [];

    submitResults.forEach(item => {
      errors.push({ field: item.fieldName, error: item.error });
    });

    this.setState({ errors: errors });
  }

  submitSuccess() {
    console.log("Submit Success!");
  }

  submitFailed() {
    console.log("Submit Faield!");
  }

  render() {
    return (
      <View style={styles.form}>
        <Form
          ref={ref => (this.myForm = ref)}
          validate={true}
          submit={this.submitSuccess.bind(this)}
          failed={this.submitFailed.bind(this)}
          errors={this.state.errors}
        >
          <Field
            required
            component={InputField}
            validations={[required, email]}
            name="email"
            value={this.state.email}
            onChangeText={val => this.setState({ email: val })}
            customStyle={styles.input}
            placeholder="Enter email here"
          />
        </Form>

        <TouchableOpacity
          style={styles.button}
          onPress={this.submitForm.bind(this)}
        >
          <Text style={{ color: "#fff" }}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ValidateForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "green",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20
  },
  input: {
    width: 300,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    margin: 20,
    marginBottom: 0,
  }
});
