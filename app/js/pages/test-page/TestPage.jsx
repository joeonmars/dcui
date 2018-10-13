import React from 'react';
import NewsletterSignUp from 'js/organisms/newsletter-sign-up';

import styles from './TestPage.scss';


const newsletter_data = {
	cta: {
		join_the_list: 'join the list',
		congrats: 'congratulations!',
	},
	step_email: {
		form_label: 'Sign up for the TLC newsletter.',
		email: {
			placeholder: 'enter email address',
			invalid: 'Please enter a valid email address',
		},
		opt_in: {
			message: 'I agree to receive information from Discovery Communications in accordance with the following',
			link: {
				text: 'Privacy Policy',
				url: '/',
			},
			invalid: 'Please opt in to proceed',
		},
		submit: 'Next',
	},
	step_full_name: {
		form_label: 'Almost Done! Please Enter Your First and Last Name.',
		first_name: {
			placeholder: 'First Name',
			invalid: 'Enter first name',
		},
		last_name: {
			placeholder: 'Last Name',
			invalid: 'Enter last name',
		},
		submit: 'Sign Up',
	},
	step_completion: {
		first_line: 'Thank You For Signing Up!',
		second_line: 'Look out for the latest news on your favorite shows.',
	},
};


const TestPage = () => {

	return (
		<div className={styles('container')}>
			<NewsletterSignUp data={newsletter_data} />
		</div>
	);
};

export default TestPage;
