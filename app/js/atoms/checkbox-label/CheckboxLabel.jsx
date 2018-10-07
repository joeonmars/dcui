import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './CheckBoxLabel.scss';


const CheckBoxLabel = ({className, checkbox_id, children}) => {

	const label_class = classnames(styles('label'), className);

	return (
		<label
			className={label_class}
			htmlFor={checkbox_id}
		>
			{children}
		</label>
	);
};

CheckBoxLabel.propTypes = {
	checkbox_id: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default CheckBoxLabel;
