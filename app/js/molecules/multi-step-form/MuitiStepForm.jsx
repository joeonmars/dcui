import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './MultiStepForm.scss';


export default class MultiStepForm extends Component {

	static propTypes = {
		initial_step: PropTypes.number,
		className: PropTypes.string,
		onStepComplete: PropTypes.func,
		onAllComplete: PropTypes.func,
	}

	static defaultProps = {
		initial_step: 0,
		onStepComplete: step => {},
		onAllComplete: form_data => {},
	}

	state = {
		step: this.props.initial_step,
	}

	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		// Retrieve form dataset by parsing named input elements
		const form_data = {};
		const named_inputs = e.target.querySelectorAll('input[name]');
		for (let i = 0; i < named_inputs.length; i++) {
			const input = named_inputs[i];
			form_data[input.name] = input.value;
		}

		const current_step = this.state.step;
		const total_steps = Children.count(this.props.children);

		const next_step = current_step + 1;
		const next_form_data = Object.assign({}, this.state.form_data, form_data);

		if (current_step < total_steps - 1) {

			this.setState({
				step: next_step,
				form_data: next_form_data,
			}, () => {
				this.props.onStepComplete(this.state.step);
			});

		} else {

			this.setState({
				form_data: next_form_data,
			}, () => {
				this.props.onAllComplete(this.state.form_data);
			});
		}
	}

	render() {
		const form_class = classnames(styles('form'), this.props.className);
		const fieldset = this.props.children[this.state.step];

		return (
			<form className={form_class} onSubmit={this.handleSubmit}>
				<fieldset key={this.state.step}>
					{fieldset}
				</fieldset>
			</form>
		);
	}
}
