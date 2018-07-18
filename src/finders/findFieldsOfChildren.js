const findFieldsOfChildren = (child, validateFieldName) => {
  let fieldName = child.props.validateFieldName ? child.props.validateFieldName : validateFieldName;

  if (!child.props.hasOwnProperty(fieldName)) { // check if the current child has the validateFieldName prop
		if (child.props.children) {
			if (child.props.children.length) { // check if the current child has multiple children
        let temp = [];

				child.props.children.map((item) => { // reiterate finding all required fields inside this child component
          let tempo = findFieldsOfChildren(item, fieldName);
          
          if (tempo) {
            if (tempo.constructor === Array) {
              temp = [...tempo, ...temp];
            } else {
              temp.push(tempo);
            }
          }
        });
        
        return temp;
			} else {
				return findFieldsOfChildren(child.props.children, fieldName);
			}
		}
	} else {
    if (child.props.required) {
      return {
        requiresValidation: true,
        value: child,
        validateFieldName: child.props.validateFieldName,
        validations: child.props.validations,
        name: child.props.name
      };
    }
	}
}

export default findFieldsOfChildren;