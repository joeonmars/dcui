import React from 'react';
import PropTypes from 'prop-types';
import styles from './InvalidMessage.scss';


const InvalidMessage = ({text}) => {

	const text_class = styles('text');

	return (
		<strong className={text_class}>
			{text}
		</strong>
	);
};

InvalidMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InvalidMessage;
