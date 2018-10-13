import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ExpressiveLabel.scss';

const ExpressiveLabel = ({text, style, className}) => {

	const text_class = classnames(styles('text'), className);

	return (
		<span className={text_class} style={style}>
			{text}
		</span>
	);
};

ExpressiveLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default ExpressiveLabel;
