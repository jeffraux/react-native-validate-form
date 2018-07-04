//
//  Created by: Jefferson Recto Aux
//  MIT License
//  (c) 2018
//

import React, { Component, createElement } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import validateForm from './validators/validateForm';

class Field extends Component{
	constructor(props) {
		super(props);
  }
  
  render() {
    const { component } = this.props;

    return(
      <View>
        {createElement(component, { ...this.props, component: null })}
      </View>
    );
  }
}

class Form extends Component{
	constructor(props) {
		super(props);
	}

	validate() {
    const { validate, submit, children } = this.props;

    if (validate) { // validate the form
      let results = validateForm(children);
      
			if (results.isValid) { // run the submit callback if valid
				submit();
			} else { // highlight invalid fields
				// TODO: create field highlighter
			}
		} else { // doesn't need validation, run the submit callback
      submit();
		}

		return validationResults.fields;
	}

	render() {
    const { style, children } = this.props;

		return(
			<View style={style ? style : {}}>
				{children}
			</View>
		);
	}
}

Form.propTypes = {
	validate: PropTypes.bool,
	submit: PropTypes.func,
  style: PropTypes.any
};

Field.propTypes = {
	required: PropTypes.bool,
	validateFieldName: PropTypes.string.isRequired,
  style: PropTypes.any,
  validations: PropTypes.arrayOf(PropTypes.func),
  component: PropTypes.func
};

Form.defaultProps = {
	validate: false,
	submit: () => null,
	style: {}
}

Field.defaultProps = {
	required: false,
	validateFieldName: 'value',
  style: {},
  validations: [],
  component: () => null
};

export { Field as Field, Form as Form }