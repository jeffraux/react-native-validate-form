const validateValues = (items) => {
  let localItems = [...items];

  localItems.forEach(item => {
    if (item.requiresValidation) {
      let value = item.props[item.validateFieldName];

      if (!value) {
        item.isValid = false;
      } else {
        item.isValid = true;
      }

      if (item.validations) {
        if (typeof item.validations === 'function') {
          if (item.validations(value)) {
            item.error = item.validations(value);
            item.isValid = false;
          }
        } else if (item.validations.length) {
          item.error = "";
  
          item.validations.forEach(itm => {
            if (itm(value)) {
              item.error = itm(value);
              item.isValid = false;
            }
          });
        }
      }
    } else { // else - it is already valid
      item.isValid = true;
    }
  });
  
  return localItems;
}

export default validateValues;