const validateAll = (fields) => {
	fields.forEach(item => {
    if (item.isValid) {
      return true;
    } else {
      return false;
    }
  });
}

export default validateAll;