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



const steps = [
	{
		call_to_action: 'join the list',

	},
	{
		call_to_action: 'join the list',
	},
	{
		call_to_action: 'congratulations!',
	}
];

export default class NewsletterSignUp extends Component {

	static propTypes = {

	}

	state = {
		step: 0,
	}

	constructor(props) {
		super(props);

		this.handleChangeStep = this.handleChangeStep.bind(this);
		this.handleCompleteSteps = this.handleCompleteSteps.bind(this);
	}

	handleChangeStep(step) {
		this.setState({
			step,
		});
	}

	handleCompleteSteps(form_data) {
		console.log('Ready to POST user: ', form_data);
	}

	render() {
		const {
			call_to_action,
		} = steps[this.state.step];

		return (
			<div className={styles('container')}>
				<div className={styles('resizer')}>
					<MultiStepForm
						initial_step={this.state.step}
						onChangeStep={this.handleChangeStep}
						onCompleteSteps={this.handleCompleteSteps}
					>
						<div className={styles('step')}>
							<h1 className={styles('call-to-action')}>
								<ExpressiveLabel text={call_to_action} />
							</h1>
							<div className={styles('action-container')}>
								<legend className={styles('form-label')}>
									<RegularLabel
										typography={RegularLabel.Typography.BOLD_ALL_CAPS}
										text='Sign up for the TLC newsletter.'
									/>
								</legend>
								<div className={styles('input-group')}>
									<div>
										<InputWithMessage
											input={TextInput}
											type='email'
											name='email'
											required={true}
											className={styles('email-input')}
											placeholder='enter email address'
											invalid_message='Please enter a valid email address'
										/>
										<InputWithMessage
											input={Checkbox}
											required={true}
											default_checked={false}
											label={<p>I agree to receive information from Discovery Communications in accordance with the following <a target='_blank' href='/'>Privacy Policy</a></p>}
											invalid_message='Please opt in to proceed'
										/>
									</div>
									<SubmitButton
										className={styles('submit-button')}
										text='Next'
									/>
								</div>
							</div>
						</div>

						<div className={styles('step')}>
							<h1 className={styles('call-to-action')}>
								<ExpressiveLabel text={call_to_action} />
							</h1>
							<div className={styles('action-container')}>
								<legend className={styles('form-label')}>
									<RegularLabel
										typography={RegularLabel.Typography.BOLD_ALL_CAPS}
										text='Almost Done! Please Enter Your First and Last Name.'
									/>
								</legend>
								<div className={styles('input-group')}>
									<InputWithMessage
										input={TextInput}
										required={true}
										name='first'
										className={styles('name-input')}
										placeholder='First Name'
										invalid_message='Enter first name'
									/>
									<InputWithMessage
										input={TextInput}
										required={true}
										name='last'
										className={styles('name-input')}
										placeholder='Last Name'
										invalid_message='Enter last name'
									/>
									<SubmitButton
										className={styles('submit-button')}
										text='Sign Up'
									/>
								</div>
							</div>
						</div>

						<div className={styles('step')}>
							<h1 className={styles('call-to-action')}>
								<ExpressiveLabel text={call_to_action} />
							</h1>
							<div className={styles('thank-you')}>
								<h2>
									<RegularLabel
										typography={RegularLabel.Typography.BOLD}
										text='Thank You For Signing Up!'
									/>
								</h2>
								<p>
									<RegularLabel
										typography={RegularLabel.Typography.LIGHT}
										text='Look out for the latest news on your favorite shows.'
									/>
								</p>
							</div>
						</div>
					</MultiStepForm>

				</div>
			</div>
		);
	}
}
