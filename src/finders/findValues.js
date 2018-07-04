import findValueOfChildren from './findValuesOfChildren';

const findValues = (requiredFields) => {
	return requiredFields.map((item) => {
		return { 
			props: findValueOfChildren(item.value, item.fieldName), 
			...item 
		};
	});
}

export default findValues;