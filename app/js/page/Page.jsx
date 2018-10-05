import React from 'react';
import NewsletterSignUp from 'js/newsletter-sign-up';

import styles from './Page.scss';

const Page = () => {

	return (
		<div className={styles('container')}>
			<NewsletterSignUp />
		</div>
	);
};

export default Page;
