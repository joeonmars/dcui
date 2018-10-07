import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './NewsletterSignUp.scss';

import ExpressiveLabel from 'js/principles/expressive-label';
import RegularLabel from 'js/principles/regular-label';
import TextInput from 'js/principles/text-input';
import { SubmitButton } from 'js/principles/text-button';

export default class NewsletterSignUp extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props);

	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className={styles('container')}>
				<div className={styles('resizer')}>
					<h1 className={styles('call-to-action')}>
						<ExpressiveLabel text='join the list' />
					</h1>
					<div className={styles('action-container')}>
						<form onSubmit={this.handleSubmit}>
							<fieldset>
								<legend className={styles('form-label')}>
									<RegularLabel text='Sign up for the TLC newsletter.' />
								</legend>
								<div className={styles('input-group')}>
									<TextInput
										required={true}
										type='email'
										className={styles('email-input')}
										placeholder='enter email address'
										error_message='Please enter a valid email address'
									/>
									<SubmitButton
										className={styles('submit-button')}
										text='Next'
									/>
								</div>
							</fieldset>
						</form>
						<form onSubmit={this.handleSubmit}>
							<fieldset>
								<legend className={styles('form-label')}>
									<RegularLabel text='Almost Done! Please Enter Your First and Last Name.' />
								</legend>
								<div className={styles('input-group')}>
									<TextInput
										required={true}
										className={styles('name-input')}
										placeholder='First Name'
										error_message='Enter first name'
									/>
									<TextInput
										required={true}
										className={styles('name-input')}
										placeholder='Last Name'
										error_message='Enter last name'
									/>
									<SubmitButton
										className={styles('submit-button')}
										text='Sign Up'
									/>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		);
	}
}