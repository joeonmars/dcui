import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Checkbox.scss';
/*
	white-space: nowrap;

	>input,
	>label {
		display: inline-block;
		vertical-align: text-top;
	}

	>input {
		margin-right: 8px;
	}

	>label {
		white-space: normal;
	}*/

const Checkbox = ({id, name, required, default_checked, label, onInvalid}) => {

	const checkbox_class = classnames(styles('checkbox'));
	const label_class = classnames(styles('label'));

	return (
		<Fragment>
			<input
				className={checkbox_class}
				type='checkbox'
				id={id}
				name={name}
				required={required}
				defaultChecked={default_checked}
				onInvalid={onInvalid}
			/>
			<label
				className={label_class}
				htmlFor={id}
			>
				{label}
			</label>
		</Fragment>
	);
};

Checkbox.propTypes = {
	className: PropTypes.string,
	required: PropTypes.bool,
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.node.isRequired,
	default_checked: PropTypes.bool,
	onInvalid: PropTypes.func,
};

Checkbox.defaultProps = {
	required: false,
};

export default Checkbox;
