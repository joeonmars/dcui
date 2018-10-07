import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './RegularLabel.scss';

const Typography = {
	BOLD: 'bold',
	LIGHT: 'light',
	BOLD_ALL_CAPS: 'bold_all_caps',
	LIGHT_ALL_CAPS: 'light_all_caps',
};

const RegularLabel = ({text, typography, className}) => {

	const text_class = classnames(styles('text', typography), className);

	return (
		<span className={text_class}>
			{text}
		</span>
	);
};

RegularLabel.Typography = Typography;

RegularLabel.defaultProps = {
	typography: Typography.BOLD,
}

RegularLabel.propTypes = {
  text: PropTypes.string.isRequired,
  typography: PropTypes.oneOf(Object.values(Typography)),
  className: PropTypes.string,
};

export default RegularLabel;
