const findRequiredFields = (fields) => {
	let requiredFields = [];

  fields.forEach(field => {
    if (field.props.required) {
      requiredFields.push({
				requiresValidation: true,
				value: field,
				validateFieldName: field.props.validateFieldName,
        validations: field.props.validations
			});
    }
  });
	
	return requiredFields;
}

export default findRequiredFields;