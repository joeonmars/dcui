import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './RegularLabel.scss';

const RegularLabel = ({text, all_caps, className}) => {

	const text_class = classnames(styles('text', {
		'all-caps': all_caps,
	}), className);

	return (
		<span className={text_class}>
			{text}
		</span>
	);
};

RegularLabel.defaultProps = {
	all_caps: true,
}

RegularLabel.propTypes = {
  text: PropTypes.string.isRequired,
  all_caps: PropTypes.bool,
  className: PropTypes.string,
};

export default RegularLabel;
