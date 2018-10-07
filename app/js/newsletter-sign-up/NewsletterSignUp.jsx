import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './NewsletterSignUp.scss';

import ExpressiveLabel from 'js/atoms/expressive-label';
import RegularLabel from 'js/atoms/regular-label';
import TextInput from 'js/atoms/text-input';
import LabeledCheckbox from 'js/molecules/labeled-checkbox';
import { SubmitButton } from 'js/atoms/text-button';



// CREATE A "MultiStepForm" molecules!



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
		step: 0
	}

	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	nextStep() {
		this.setState({
			step: this.state.step + 1,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		
		const result = {
			email: e.target.email.value,
		};
		console.log(result,'!!!')

		//this.nextStep();
	}

	render() {
		const {
			call_to_action,
		} = steps[this.state.step];

		return (
			<div className={styles('container')}>
				<div className={styles('resizer')}>
					{this.state.step === 0 &&
						<div className={styles('step')}>
							<h1 className={styles('call-to-action')}>
								<ExpressiveLabel text={call_to_action} />
							</h1>
							<div className={styles('action-container')}>
								<form onSubmit={this.handleSubmit}>
									<legend className={styles('form-label')}>
										<RegularLabel
											typography={RegularLabel.Typography.BOLD_ALL_CAPS}
											text='Sign up for the TLC newsletter.'
										/>
									</legend>
									<div className={styles('input-group')}>
										<div>
											<TextInput
												required={true}
												type='email'
												name='email'
												className={styles('email-input')}
												placeholder='enter email address'
												error_message='Please enter a valid email address'
											/>
											<LabeledCheckbox
												name='opt_in'
												required={true}
												default_checked={false}
												error_message='Please opt in to proceed'
												label={<p>I agree to receive information from Discovery Communications in accordance with the following <a target='_blank' href='/'>Privacy Policy</a></p>}
											/>
										</div>
										<SubmitButton
											className={styles('submit-button')}
											text='Next'
										/>
									</div>
								</form>
							</div>
						</div>
					}

					{this.state.step === 1 &&
						<div className={styles('step')}>
							<h1 className={styles('call-to-action')}>
								<ExpressiveLabel text={call_to_action} />
							</h1>
							<div className={styles('action-container')}>
								<form onSubmit={this.handleSubmit}>
									<legend className={styles('form-label')}>
										<RegularLabel
											typography={RegularLabel.Typography.BOLD_ALL_CAPS}
											text='Almost Done! Please Enter Your First and Last Name.'
										/>
									</legend>
									<div className={styles('input-group')}>
										<TextInput
											required={true}
											name='first'
											className={styles('name-input')}
											placeholder='First Name'
											error_message='Enter first name'
										/>
										<TextInput
											required={true}
											name='last'
											className={styles('name-input')}
											placeholder='Last Name'
											error_message='Enter last name'
										/>
										<SubmitButton
											className={styles('submit-button')}
											text='Sign Up'
										/>
									</div>
								</form>
							</div>
						</div>
					}

					{this.state.step === 2 &&
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
					}

				</div>
			</div>
		);
	}
}
