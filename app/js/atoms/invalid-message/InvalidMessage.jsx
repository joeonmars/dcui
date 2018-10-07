import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './InvalidMessage.scss';


const InvalidMessage = ({text, className}) => {

	const text_class = classnames(styles('text'), className);

	return (
		<strong className={text_class}>
			{text}
		</strong>
	);
};

InvalidMessage.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InvalidMessage;
