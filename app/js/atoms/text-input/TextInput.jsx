import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './TextInput.scss';


const TextInput = ({
		className,
		type,
		name,
		required,
		disabled,
		placeholder,
		default_value,
		theme,
		onInvalid,
	}) => {

	const input_class = classnames(
		styles('input', theme), className);

	return (
		<input
			className={input_class}
			spellCheck='false'
			type={type}
			name={name}
			title={placeholder}
			disabled={disabled}
			required={required}
			placeholder={placeholder}
			defaultValue={default_value}
			onInvalid={onInvalid}
		/>
	);
};

TextInput.Theme = {
	LIGHTER: 'lighter',
	DARKER: 'darker',
}

TextInput.defaultProps = {
	required: false,
	disabled: false,
	type: 'text',
	theme: TextInput.Theme.LIGHTER,
}

TextInput.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(['text', 'email']),
	name: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
	default_value: PropTypes.string,
	theme: PropTypes.oneOf(['lighter', 'darker']),
	onInvalid: PropTypes.func,
};

export default TextInput;
