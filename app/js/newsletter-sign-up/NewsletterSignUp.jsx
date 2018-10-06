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
					<div>
						<form onSubmit={this.handleSubmit}>
							<fieldset>
								<legend className={styles('form-label')}>
									<RegularLabel text='Sign up for the TLC newsletter.' />
								</legend>
								<TextInput
									required={true}
									className={styles('email-input')}
									placeholder='enter email address'
									pattern={TextInput.Pattern.EMAIL}
									error_message='Please enter a valid email address.'
								/>
								<SubmitButton text='Next' />
							</fieldset>
						</form>
						<form onSubmit={this.handleSubmit}>
							<fieldset>
								<legend className={styles('form-label')}>
									<RegularLabel text='Almost Done! Please Enter Your First and Last Name.' />
								</legend>
								<TextInput
									required={true}
									className={styles('name-input')}
									placeholder='First Name'
									pattern={TextInput.Pattern.EMAIL}
								/>
								<TextInput
									required={true}
									className={styles('name-input')}
									placeholder='Last Name'
									pattern={TextInput.Pattern.EMAIL}
								/>
								<SubmitButton text='Sign Up' />
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		);
	}
}