//
//  Created by: Jefferson Recto Aux
//  MIT License
//  (c) 2018
//

import React, { Component, Children, createElement, cloneElement } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import validateForm from './validators/validateForm';

class Field extends Component {
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

class Form extends Component {
	constructor(props) {
		super(props);
	}

	validate() {
		const { validate, submit, children, failed } = this.props;
		if (validate) { // validate the form
			let results = validateForm(children);

			if (results.isValid) { // run the submit callback if valid
				submit();
			} else { // run the faild callback if invalid
				failed();
			}
			
			return results.fields;
		} else { // doesn't need validation, run the submit callback
			submit();
		}
  }
  
	renderChildren = (element, errors) => {
		if (element.props.children) {
			if (element.props.children.length) {
				let cwp = Children.map(element.props.children, child => {
					return this.renderChildren(child, errors);
				});
				return cwp;
			} else {
				return this.renderChildren(element.props.children, errors);
			}
		} else {
			return cloneElement(element, { errors: errors });
		}
	}

	render() {
		const { style, children, errors } = this.props;
		const childrenWithProps = Children.map(children, child => {
			// return this.renderChildren(child, errors);
			return cloneElement(child, { errors: errors });
		});

		return(
			<View style={style ? style : {}}>
				{childrenWithProps}
			</View>
		);
	}
}

Form.propTypes = {
	validate: PropTypes.bool,
	submit: PropTypes.func,
	failed: PropTypes.func,
	errors: PropTypes.array,
	style: PropTypes.any
};

Field.propTypes = {
	required: PropTypes.bool,
	validateFieldName: PropTypes.string.isRequired,
	customStyle: PropTypes.any,
	validations: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.arrayOf(PropTypes.func)
	]),
	component: PropTypes.func
};

Form.defaultProps = {
	validate: false,
	submit: () => null,
	failed: () => null,
	errors: [],
	style: {}
}

Field.defaultProps = {
	required: false,
	validateFieldName: 'value',
	customStyle: {},
	validations: () => null,
	component: () => null
};

export { Field as Field, Form as Form }
