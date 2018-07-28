const findValues = (requiredFields) => { // find all the values of required fields
  return requiredFields.map(item => {
    return { 
      props: item.value.props, 
      ...item
    }
  });
}

export default findValues;