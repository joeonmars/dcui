import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './NewsletterSignUp.scss';

import ExpressiveLabel from 'js/principles/expressive-label';
import RegularLabel from 'js/principles/regular-label';
import TextInput from 'js/principles/text-input';

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
						<h2 className={styles('form-label')}>
							<RegularLabel text='Sign up for the TLC newsletter.' />
						</h2>
						<form onSubmit={this.handleSubmit}>
							<TextInput
								className={styles('email-input')}
								placeholder='enter email address'
								pattern={TextInput.Pattern.EMAIL}
								error_message='Please enter a valid email address.'
							/>
							<input type="submit" value="Submit"/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}