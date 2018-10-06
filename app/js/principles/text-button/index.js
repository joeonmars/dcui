import React, { createElement } from 'react'
import TextButton from './TextButton.jsx';

// Create buttons for different type
const RegularButton = props => createElement(TextButton, {
	type: 'button',
	...props,
});

const SubmitButton = props => createElement(TextButton, {
	type: 'submit',
	...props,
});

export {
	RegularButton,
	SubmitButton,
};
