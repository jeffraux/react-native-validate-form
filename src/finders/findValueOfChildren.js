const findValueOfChildren = (child, validateFieldName) => {
	if (!child.props.hasOwnProperty(validateFieldName)) {
		if (child.props.children) {
			if (child.props.children.length) {
				child.props.children.map((item) => {
					return findValueOfChildren(item, validateFieldName);
				});
			} else {
				return findValueOfChildren(child.props.children, validateFieldName);
			}
		}
	} else {
		return child.props;
	}
}

export default findValueOfChildren;