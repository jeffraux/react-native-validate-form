const findValues = (requiredFields) => {
	return requiredFields.map(item => {
		return { 
			props: item.value.props, 
			...item
		}
	});
}

export default findValues;