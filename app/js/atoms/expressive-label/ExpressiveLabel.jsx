import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ExpressiveLabel.scss';

const ExpressiveLabel = ({text, className}) => {

	const text_class = classnames(styles('text'), className);

	return (
		<span className={text_class}>
			{text}
		</span>
	);
};

ExpressiveLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ExpressiveLabel;
