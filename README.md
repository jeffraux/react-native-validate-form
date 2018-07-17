# react-native-validate-form
A simple form validation for React Native

## Getting Started

#### NPM

Install react-native-validate-form and its dependencies using NPM with `npm install --save react-native-validate-form`.

## Import

  ```jsx
  import { Form, Field } from 'react-native-validate-form';
  ```

## Usage

NOTE: This project is still in its infancy stage.
See [github documentation](https://github.com/auxcalibur/react-native-validate-form#readme) for more info.

  ```jsx
  import React from 'react';
  import { View, Text } from 'react-native';
  import { Form, Field } from 'react-native-validate-form';

  import InputField from './InputField';

  const required = value => (value ? undefined : 'This is a required field.');
  const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;

  class MyForm extends React.Component {
    constructor() {
      super();

      this.state = {
        errors: [],
        email: ''
      }
    }
    submitForm() {
      let submitResults = this.myForm.validate();

      let errors = [];

      submitResults.forEach(item => {
        errors.push({ field: item.fieldName, error: item.error });
      });

      this.setState({ errors: errors });
    }

    render() {
      return(
        <Form
          ref={(ref) => this.myForm = ref}
          validate={true}
          submit={this.submitForm.bind(this)}
          errors={this.state.errors}
        >
          <Field
            required
            component={InputField}
            validations={[ required, email ]}
            name="email"
            value={this.state.email}
            onChangeText={(val) => this.setState({ email: val })}
            customStyle={{ width: 100 }}
          />
        </Form>
      );
    }
  }
  ```

  - InputField will represent your input field component, this component will receive the errors that will be thrown by `this.myForm.validate()`.

  ```jsx
    TODO: sample input field
  ```

> **TODO**: make an example in the repo for better documentation

## Options

You can pass these `props` to the Form and Field components:

  ```jsx
  <Form
    ref="form"
    validate={true}
    submit={onSubmit}
  >
    <Field
      required
      component={InputField}
      validations={[ sampleValidation() ]}
    />
  </Form>
  ```

Props you can pass for the `<Form />` component

|Name                   |Type                     |Default                         |Description                                                                          |
|-----------------------|-------------------------|--------------------------------|-------------------------------------------------------------------------------------|
|ref                    |string                   |`null`                          |reference name                                                                       |
|validate               |boolean                  |`false`                         |set this to `true` to enable validation                                              |
|submit                 |function                 |`() => null`                    |function to execute if form is valid                                                 |
|style                  |object                   |`{}`                            |style object                                                                         |

Props you can pass for the `<Field />` component

|Name                   |Type                     |Default                         |Description                                                                          |
|-----------------------|-------------------------|--------------------------------|-------------------------------------------------------------------------------------|
|required               |boolean                  |`false`                         |set this to `true` to require the field                                              |
|component              |component / func         |`null`                          |input component or any component that needs validation                               |
|validateFieldName      |string                   |`'value'`                       |name of the prop that will be validated                                              |
|validations            |func / array             |`[]`                            |function or array of functions that contains your validation                         |
|customStyle            |object                   |`{}`                            |style object                                                                         |

## Credits

[Jefferson Aux](https://github.com/auxcalibur)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Jefferson Aux