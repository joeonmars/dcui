import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './NewsletterSignUp.scss';

import ExpressiveLabel from 'js/atoms/expressive-label';
import RegularLabel from 'js/atoms/regular-label';
import TextInput from 'js/atoms/text-input';
import Checkbox from 'js/atoms/checkbox';
import { SubmitButton } from 'js/atoms/text-button';
import InputWithMessage from 'js/molecules/input-with-message';
import MultiStepForm from 'js/molecules/multi-step-form';


export default class NewsletterSignUp extends Component {

	static propTypes = {
		data: PropTypes.shape({
			cta: PropTypes.shape({
				join_the_list: PropTypes.string.isRequired,
				congrats: PropTypes.string.isRequired,
			}).isRequired,
			step_email: PropTypes.shape({
				form_label: PropTypes.string.isRequired,
				email: PropTypes.shape({
					placeholder: PropTypes.string.isRequired,
					invalid: PropTypes.string.isRequired,
				}).isRequired,
				opt_in: PropTypes.shape({
					message: PropTypes.string.isRequired,
					link: PropTypes.shape({
						text: PropTypes.string.isRequired,
						url: PropTypes.string.isRequired,
					}).isRequired,
					invalid: PropTypes.string.isRequired,
				}).isRequired,
				submit: PropTypes.string.isRequired,
			}).isRequired,
			step_full_name: PropTypes.shape({
				form_label: PropTypes.string.isRequired,
				first_name: PropTypes.shape({
					placeholder: PropTypes.string.isRequired,
					invalid: PropTypes.string.isRequired,
				}).isRequired,
				last_name: PropTypes.shape({
					placeholder: PropTypes.string.isRequired,
					invalid: PropTypes.string.isRequired,
				}).isRequired,
				submit: PropTypes.string.isRequired,
			}).isRequired,
			step_completion: PropTypes.shape({
				first_line: PropTypes.string.isRequired,
				second_line: PropTypes.string.isRequired,
			}).isRequired,
		}),
	}

	state = {
		step: 0,
	}

	constructor(props) {
		super(props);

		this.handleStepComplete = this.handleStepComplete.bind(this);
		this.handleAllComplete = this.handleAllComplete.bind(this);
	}

	handleStepComplete() {
		this.setState({
			step: this.state.step + 1,
		});
	}

	handleAllComplete(form_data) {
		this.setState({
			step: this.state.step + 1,
		});

		console.log('Ready to POST user: ', form_data);
	}

	render() {
		const has_completed = this.state.step === 2;
		const container_class = styles('container', `step-${this.state.step+1}`);

		const {
			cta,
			step_email,
			step_full_name,
			step_completion,
		} = this.props.data;

		return (
			<div className={container_class}>
				<div className={styles('resizer')}>
					<h1 className={styles('call-to-action')}>
						<ExpressiveLabel text={has_completed ? cta.congrats : cta.join_the_list} />
					</h1>

					{!has_completed &&
						<MultiStepForm
							initial_step={this.state.step}
							className={styles('form')}
							onStepComplete={this.handleStepComplete}
							onAllComplete={this.handleAllComplete}
						>
							<div className={styles('step')}>
								<legend className={styles('form-label')}>
									<RegularLabel
										typography={RegularLabel.Typography.BOLD_ALL_CAPS}
										text={step_email.form_label}
									/>
								</legend>
								<InputWithMessage
									input={TextInput}
									type='email'
									name='email'
									required={true}
									className={styles('email')}
									placeholder={step_email.email.placeholder}
									invalid_message={step_email.email.invalid}
								/>
								<InputWithMessage
									input={Checkbox}
									required={true}
									default_checked={false}
									id='opt_in'
									className={styles('opt-in')}
									label={<p>{step_email.opt_in.message} <a target='_blank' href='${step_email.opt_in.link.url}'>{step_email.opt_in.link.text}</a></p>}
									invalid_message={step_email.opt_in.invalid}
								/>  
								<SubmitButton
									className={styles('submit-button')}
									text={step_email.submit}
								/>
							</div>

							<div className={styles('step')}>
								<legend className={styles('form-label')}>
									<RegularLabel
										typography={RegularLabel.Typography.BOLD_ALL_CAPS}
										text={step_full_name.form_label}
									/>
								</legend>
								<InputWithMessage
									input={TextInput}
									required={true}
									name='first'
									className={styles('first-name')}
									placeholder={step_full_name.first_name.placeholder}
									invalid_message={step_full_name.first_name.invalid}
								/>
								<InputWithMessage
									input={TextInput}
									required={true}
									name='last'
									className={styles('last-name')}
									placeholder={step_full_name.last_name.placeholder}
									invalid_message={step_full_name.last_name.invalid}
								/>
								<SubmitButton
									className={styles('submit-button')}
									text={step_full_name.submit}
								/>
							</div>
						</MultiStepForm>
					}

					{has_completed &&
						<div className={styles('sign-up-complete')}>
							<p>
								<RegularLabel
									className={styles('first-line')}
									typography={RegularLabel.Typography.BOLD}
									text={step_completion.first_line}
								/>
								<RegularLabel
									className={styles('second-line')}
									typography={RegularLabel.Typography.LIGHT}
									text={step_completion.second_line}
								/>
							</p>
						</div>
					}

				</div>
			</div>
		);
	}
}
