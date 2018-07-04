const findRequiredFields = (fields) => {
	let requiredFields = [];

  fields.forEach(item => {
    if (item.props.required) {
      requiredFields.push({
				requiresValidation: true,
				value: fields[i],
				fieldName: fields[i].props.fieldName,
        validations: fields[i].props.validations
			});
    }
  });
	
	return requiredFields;
}

export default findRequiredFields;