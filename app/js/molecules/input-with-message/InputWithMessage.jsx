import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import InvalidMessage from 'js/atoms/invalid-message';
import styles from './InputWithMessage.scss';


export default class InputWithMessage extends Component {

	static propTypes = {
		input: PropTypes.func.isRequired,
		invalid_message: PropTypes.string,
	}

	state = {
		invalid: false,
	}

	constructor(props) {
		super(props);

		this.handleInvalid = this.handleInvalid.bind(this);
	}

	handleInvalid(e) {
		e.preventDefault();

		this.setState({
			invalid: true,
		});
	}

	render() {
		const container_class = styles('container', {
			'invalid': this.state.invalid,
		});

		return (
			<div className={container_class}>
				{createElement(this.props.input, {
					...this.props,
					className: styles('input'),
					onInvalid: this.handleInvalid,
				})}

				{this.props.invalid_message && 
					<InvalidMessage
						className={styles('message')}
						text={this.props.invalid_message}
					/>
				}
			</div>
		);
	}
}
