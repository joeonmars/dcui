import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './TextInput.scss';


export default class TextInput extends PureComponent {

	static Pattern = {
		EMAIL: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
	}

	static propTypes = {
		className: PropTypes.string,
		errorMsgClassName: PropTypes.string,
		name: PropTypes.string,
		required: PropTypes.bool,
		disabled: PropTypes.bool,
		placeholder: PropTypes.string,
		pattern: PropTypes.string,
		error_message: PropTypes.string,
		theme: PropTypes.oneOf(['lighter', 'darker']),
	}

	static defaultProps = {
		required: false,
		disabled: false,
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
					type='text'
					spellCheck='false'
					name={this.props.name}
					title={this.props.placeholder}
					disabled={this.props.disabled}
					required={this.props.required}
					placeholder={this.props.placeholder}
					pattern={this.props.pattern}
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