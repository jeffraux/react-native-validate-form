import validateValues from './validateValues';
import validateAll from './validateAll';

import findRequiredFields from '../finders/findRequiredFields';
import findValues from '../finders/findValues';

const validateForm = (fields) => {
  let items = [];

  if (fields && fields.constructor === Array) { // check if fields contains one component or an array
    items = [...fields];
  } else {
    items.push(fields);
  }

  let requiredFields = findRequiredFields(items); // find all fields that requires validation
  
  let values = findValues(requiredFields); // find all the values of all the required fields
  
	let result = validateValues(values); // validate all the values accordingly
  
	return {
		isValid: validateAll(result),
		fields: result
	};
}

export default validateForm;