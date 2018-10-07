import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox from 'js/atoms/checkbox';
import CheckboxLabel from 'js/atoms/checkbox-label';
import styles from './LabeledCheckbox.scss';

export default class LabeledCheckbox extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		id: PropTypes.string,
		name: PropTypes.string.isRequired,
		required: PropTypes.bool,
		default_checked: PropTypes.bool,
		label: PropTypes.node.isRequired,
		error_message: PropTypes.string,
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
		const {
			id,
			name,
			required,
			default_checked,
			error_message,
			label,
			className,
		} = this.props;

		const container_class = classnames(styles('container', {
			'error': this.state.invalid,
		}), className);

		const error_class = styles('error-message', {
			'hidden': !this.state.invalid,
		});

		return (
			<div className={container_class}>
				<Checkbox
					id={id}
					name={name}
					required={required}
					default_checked={default_checked}
					onInvalid={this.handleInvalid}
				/>
				<CheckboxLabel checkbox_id={id}>
					{label}
				</CheckboxLabel>
				{this.props.error_message &&
					<strong className={error_class}>
						{this.props.error_message}
					</strong>
				}
			</div>
		);
	}
}
