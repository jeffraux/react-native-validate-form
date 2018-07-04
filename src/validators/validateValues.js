const validateValues = (items) => {
	let localItems = [...items];

  localItems.forEach(item => {
    if (item.requiresValidation) {
      let value = item.props[item.fieldName];

      if (!value) {
        item.isValid = false;
      } else {
        item.isValid = true;
      }
      
      if (item.validations.length) {
        item.validations.forEach(item => {
          item.isValid = item(value);
        });
      }
    } else { // Else - it is already valid
			item.isValid = true;
		}
  });
  
	return localItems;
}

export default validateValues;