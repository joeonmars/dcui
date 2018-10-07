import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './TextButton.scss';


export default class TextButton extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string.isRequired,
		disabled: PropTypes.bool,
		type: PropTypes.oneOf(['submit', 'reset', 'button']),
		onClick: PropTypes.func,
	}

	static defaultProps = {
		disabled: false,
		type: 'button',
	}

	render() {
		const container_class = classnames(styles('container'), this.props.className);

		return (
			<button
				type={this.props.type}
				disabled={this.props.disabled}
				className={container_class}
				onClick={this.props.onClick}
			>
				<div className={styles('box')}>{this.props.text}</div>
			</button>
		);
	}
}
