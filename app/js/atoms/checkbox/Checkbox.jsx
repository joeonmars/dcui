import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Checkbox.scss';


const Checkbox = ({
	id,
	name,
	required,
	default_checked,
	label,
	checkbox_className,
	label_className,
	onInvalid
}) => {

	const checkbox_class = classnames(styles('checkbox'), checkbox_className);
	const label_class = classnames(styles('label'), label_className);

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
			{label &&
				<label
					className={label_class}
					htmlFor={id}
				>
					{label}
				</label>
			}
		</Fragment>
	);
};

Checkbox.propTypes = {
	checkbox_className: PropTypes.string,
	label_className: PropTypes.string,
	required: PropTypes.bool,
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.node,
	default_checked: PropTypes.bool,
	onInvalid: PropTypes.func,
};

Checkbox.defaultProps = {
	required: false,
};

export default Checkbox;
