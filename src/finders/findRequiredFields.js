const findRequiredFields = (fields) => {
	let requiredFields = [];

  fields.forEach(item => {
    if (item.props.required) {
      requiredFields.push({
				requiresValidation: true,
				value: fields[i],
				validateFieldName: fields[i].props.validateFieldName,
        validations: fields[i].props.validations
			});
    }
  });
	
	return requiredFields;
}

export default findRequiredFields;