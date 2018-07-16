const validateAll = (fields) => {
  let temp = true;

	fields.forEach(item => {
    if (!item.isValid) {
      temp = false;
    }
  });

  return temp;
}

export default validateAll;