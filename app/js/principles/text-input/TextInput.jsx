import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './TextInput.scss';


export default class TextInput extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		errorMsgClassName: PropTypes.string,
		type: PropTypes.oneOf(['text', 'email']),
		name: PropTypes.string,
		required: PropTypes.bool,
		disabled: PropTypes.bool,
		placeholder: PropTypes.string,
		error_message: PropTypes.string,
		theme: PropTypes.oneOf(['lighter', 'darker']),
	}

	static defaultProps = {
		required: false,
		disabled: false,
		type: 'text',
		theme: 'lighter',
	}

	state = {
		invalid: false,
	}

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleInvalid = this.handleInvalid.bind(this);
	}

	handleChange(e) {

	}

	handleInvalid(e) {
		e.preventDefault();

		this.setState({
			invalid: true,
		});
	}

	render() {
		const container_class = classnames(
			styles('container', this.props.theme, {
				'error': this.state.invalid,
			}), this.props.className);

		const error_class = classnames(
			styles('error-message', {
				'hidden': !this.state.invalid,
			}), this.props.errorMsgClassName);

		return (
			<div className={container_class}>
				<input
					spellCheck='false'
					type={this.props.type}
					name={this.props.name}
					title={this.props.placeholder}
					disabled={this.props.disabled}
					required={this.props.required}
					placeholder={this.props.placeholder}
					onInvalid={this.handleInvalid}
					onChange={this.handleChange}
				/>
				{this.props.error_message &&
					<strong className={error_class}>
						{this.props.error_message}
					</strong>
				}
			</div>
		);
	}
}