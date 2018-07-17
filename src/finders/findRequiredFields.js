import findFieldsOfChildren from './findFieldsOfChildren';

const findRequiredFields = (fields) => {
  let requiredFields = [];
  
  fields.forEach(field => {
    let temp = findFieldsOfChildren(field, 'value');
    
    if (temp) {
      if (temp.constructor === Array) {
        requiredFields = [...temp, ...requiredFields];
      } else {
        requiredFields.push(temp);
      }
    }
  });
  
	return requiredFields;
}

export default findRequiredFields;