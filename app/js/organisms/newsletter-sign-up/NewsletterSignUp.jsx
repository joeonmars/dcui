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



const Copy = {
	JOIN_THE_LIST: 'join the list',
	CONGRATS: 'congratulations!',
};

export default class NewsletterSignUp extends Component {

	static propTypes = {

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

		return (
			<div className={styles('container')}>
				<div className={styles('resizer')}>
					<h1 className={styles('call-to-action')}>
						<ExpressiveLabel text={has_completed ? Copy.CONGRATS : Copy.JOIN_THE_LIST} />
					</h1>

					{!has_completed &&
						<MultiStepForm
							initial_step={this.state.step}
							onStepComplete={this.handleStepComplete}
							onAllComplete={this.handleAllComplete}
						>
							<div className={styles('step')}>
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


						</MultiStepForm>
					}

					{has_completed &&
						<div className={styles('thank-you')}>
							<p>
								<RegularLabel
									className={styles('first-line')}
									typography={RegularLabel.Typography.BOLD}
									text='Thank You For Signing Up!'
								/>
								<RegularLabel
									className={styles('second-line')}
									typography={RegularLabel.Typography.LIGHT}
									text='Look out for the latest news on your favorite shows.'
								/>
							</p>
						</div>
					}

				</div>
			</div>
		);
	}
}
