import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import styles from './MultiStepForm.scss';


export default class MultiStepForm extends Component {

	static propTypes = {
		initial_step: PropTypes.number,
		onChangeStep: PropTypes.func,
		onCompleteSteps: PropTypes.func,
	}

	static defaultProps = {
		initial_step: 0,
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

		if (current_step < total_steps - 1) {

			this.setState({
				step: current_step + 1,
				form_data: Object.assign({}, this.state.form_data, form_data),
			}, () => {
				this.props.onChangeStep(this.state.step);

				if (this.state.step === total_steps - 1) {
					this.props.onCompleteSteps(this.state.form_data);	
				}
			});
		}
	}

	render() {
		const form_class = styles('form');
		const fieldset = this.props.children[this.state.step];

		return (
			<form className={form_class} onSubmit={this.handleSubmit}>
				<fieldset>
					{fieldset}
				</fieldset>
			</form>
		);
	}
}
