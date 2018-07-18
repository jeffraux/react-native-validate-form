# react-native-validate-form
A simple form validation for React Native

## Getting Started

#### NPM

Install react-native-validate-form and its dependencies using NPM with:
`npm install --save react-native-validate-form`

## Import

  ```jsx
  import { Form, Field } from 'react-native-validate-form';
  ```

## Usage

NOTE: This project is still in its infancy stage.
See [github documentation](https://github.com/jeffraux/react-native-validate-form#readme) for more info.

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
    import React from 'react';
    import { TextInput, Text, View } from 'react-native';

    const InputField = ({
      name,           // field name - required
      customStyle,
      onChangeText,   // event
      value,          // field value
      disabled,
      placeholder,
      errors,         // this array prop is automatically passed down to this component from <Form />
    }) => {
      return (
        <View>
          <TextInput
            value={value && value}
            onChangeText={onChangeText ? (val) => onChangeText(val) : null}
            placeholder={placeholder ? placeholder : ""}
            disabled={disabled}
            style={customStyle ? customStyle : {}}
          />

          { errors && errors.length > 0 && errors.map((item, index) =>
              item.field === name && item.error ?
                <Text style={{ color: 'red' }}>
                  {item.error}
                </Text>
              : <View />
            )
          }
        </View>
      );
    }

    export default InputField;
  ```

  - If you have nested `<Field />` components, you need to explicitly pass down `errors` as props so you can display the errors accordingly.
  - There's no need to pass down `errors` as props if your `<Field />` component is a direct child of `<Form />`.

  ```jsx
    // ...
      <Form
        ref={(ref) => this.myForm = ref}
        validate={true}
        submit={this.submitForm.bind(this)}
        errors={this.state.errors} // you still need to pass errors as props to Form
      >
        <Field
          required
          component={InputField}
          validations={[ required, email ]}
          name="email"
          value={this.state.email}
          onChangeText={(val) => this.setState({ email: val })}
          customStyle={{ width: 100 }}
          // no need to pass down errors as props if <Field /> is a direct child of <Form />
        />
        <View>
          <Field
            required
            component={InputField}
            validations={[ required, email ]}
            name="email"
            value={this.state.email}
            onChangeText={(val) => this.setState({ email: val })}
            customStyle={{ width: 100 }}
            errors={this.state.errors} // explicitly pass down errors as props if your <Field /> is inside an element
          />
        </View>
      </Form>
    // ...
  ```

> **TODO**: make an example in the repo for better documentation

## Options

You can pass these `props` to the Form and Field components:

  ```jsx
  <Form
    ref={(ref) => this.myForm = ref}
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

|Name                   |Type                     |Default               |Required       |Description                                                                          |
|-----------------------|-------------------------|----------------------|---------------|-------------------------------------------------------------------------------------|
|ref                    |string                   |`null`                |yes            |reference name                                                                       |
|validate               |boolean                  |`false`               |no             |set this to `true` to enable validation                                              |
|submit                 |function                 |`() => null`          |no             |function callback if form is valid                                                   |
|failed                 |function                 |`() => null`          |no             |function callback if form is invalid                                                 |
|errors                 |array                    |`[]`                  |no             |array that contains all your field errors and messages                               |
|style                  |object                   |`{}`                  |no             |style object                                                                         |

Props you can pass for the `<Field />` component

|Name                   |Type                     |Default               |Required       |Description                                                                          |
|-----------------------|-------------------------|----------------------|---------------|-------------------------------------------------------------------------------------|
|required               |boolean                  |`false`               |no             |set this to `true` to require the field                                              |
|component              |component / func         |`null`                |yes            |input component or any component that needs validation                               |
|validateFieldName      |string                   |`'value'`             |no             |name of the prop that will be validated                                              |
|validations            |func / array             |`[]`                  |no             |function or array of functions that contains your validation                         |
|customStyle            |object                   |`{}`                  |no             |style object                                                                         |

## Credits

[Jefferson Aux](https://github.com/jeffraux)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Jefferson Aux