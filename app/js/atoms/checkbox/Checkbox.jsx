import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Checkbox.scss';


const Checkbox = ({className, id, name, required, default_checked, onInvalid}) => {

	const checkbox_class = classnames(styles('checkbox'), className);

	return (
		<input
			className={checkbox_class}
			type='checkbox'
			id={id}
			name={name}
			required={required}
			defaultChecked={default_checked}
			onInvalid={onInvalid}
		/>
	);
};

Checkbox.propTypes = {
	className: PropTypes.string,
	required: PropTypes.bool,
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	default_checked: PropTypes.bool,
	onInvalid: PropTypes.func,
};

Checkbox.defaultProps = {
	required: false,
};

export default Checkbox;
