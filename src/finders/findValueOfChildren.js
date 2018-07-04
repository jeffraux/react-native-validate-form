const findValueOfChildren = (child, fieldName) => {
	if (!child.props.hasOwnProperty(fieldName)) {
		if (child.props.children) {
			if (child.props.children.length) {
				child.props.children.map((item) => {
					return findValueOfChildren(item, fieldName);
				});
			} else {
				return findValueOfChildren(child.props.children, fieldName);
			}
		}
	} else {
		return child.props;
	}
}

export default findValueOfChildren;