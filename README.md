# react-native-validate-form
A simple form validation for React Native

## Getting Started

#### NPM

Install react-native-validate-form and its dependencies using NPM with `npm install --save react-native-validate-form`.

## Import

```js
import { Form, Field } from 'react-native-validate-form';
```

## Usage

NOTE: This project is still in its infancy stage.
See [github documentation](https://github.com/auxcalibur/react-native-validate-form#readme) for more info.

## Options

You can pass these `props` to the Form and Field components:

```js
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

|Name              |Type            |Default                         |Description                                                                                        |
|------------------|----------------|--------------------------------|---------------------------------------------------------------------------------------------------|
|ref               |string          |`null`                          |reference name                                                                                     |
|validate          |boolean         |`false`                         |set this to `true` to enable validation                                                            |
|submit            |function        |`() => null   `                 |function to execute if form is valid                                                               |
|style             |object          |`{}`                            |style object                                                                                       |

Props you can pass for the `<Field />` component

|Name                   |Type                     |Default                         |Description                                                                          |
|-----------------------|-------------------------|--------------------------------|-------------------------------------------------------------------------------------|
|required               |boolean                  |`false`                         |set this to `true` to require the field                                              |
|component              |component / func         |`null`                          |input component or any component that needs validation                               |
|validateFieldName      |string                   |`'value'`                       |name of the prop that will be validated                                              |
|validations            |func / array             |`[]`                            |function or array of functions that contains your validation                         |
|style                  |object                   |`{}`                            |style object                                                                         |

## Credits

[Jefferson Aux](https://github.com/auxcalibur)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Jefferson Aux