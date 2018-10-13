import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RegularButton, SubmitButton } from 'js/atoms/text-button';
import TextInput from 'js/atoms/text-input';
import Checkbox from 'js/atoms/checkbox';
import InvalidMessage from 'js/atoms/invalid-message';
import RegularLabel from 'js/atoms/regular-label';
import ExpressiveLabel from 'js/atoms/expressive-label';
import InputWithMessage from 'js/molecules/input-with-message';
import MultiStepForm from 'js/molecules/multi-step-form';
import NewsletterSignUp from 'js/organisms/newsletter-sign-up';
import newsletter_signup_data from 'js/pages/test-page/data';

import 'styles/reset.scss';
import 'styles/fonts.scss';
import styles from './stories.scss';

// ATOMS
storiesOf('RegularLabel', module)
  .add('bold', () => (
    <RegularLabel text='Bold regular label' typography={RegularLabel.Typography.BOLD} className={styles('regular-label')} />
  ))
  .add('light', () => (
    <RegularLabel text='Light regular label' typography={RegularLabel.Typography.LIGHT} className={styles('regular-label')} />
  ))
  .add('bold all caps', () => (
    <RegularLabel text='All caps, bold regular label' typography={RegularLabel.Typography.BOLD_ALL_CAPS} className={styles('regular-label')} />
  ))
  .add('light all caps', () => (
    <RegularLabel text='All caps, light regular label' typography={RegularLabel.Typography.LIGHT_ALL_CAPS} className={styles('regular-label')} />
  ));

storiesOf('ExpressiveLabel', module)
  .add('default', () => (
    <ExpressiveLabel text='Hello World' className={styles('expressive-label')} />
  ));

storiesOf('RegularButton', module)
  .add('with text', () => (
    <RegularButton text='Click button' className={styles('text-button')} onClick={action('clicked')} />
  ))
  .add('disabled', () => (
    <RegularButton disabled={true} text='Disabled' className={styles('text-button')} />
  ));

storiesOf('SubmitButton', module)
  .add('with text', () => (
    <SubmitButton text='Click to submit' className={styles('text-button')} onClick={action('clicked')} />
  ))
  .add('disabled', () => (
    <SubmitButton disabled={true} text='Disabled' className={styles('text-button')} />
  ));

storiesOf('TextInput', module)
  .add('with placeholder', () => (
  	<div className={styles('dark-background', 'text-input-container')}>
    	<TextInput placeholder='Enter username or email' className={styles('text-input')} />
    </div>
  ))
  .add('theme lighter', () => (
  	<div className={styles('dark-background', 'text-input-container')}>
    	<TextInput placeholder='For dark background' theme={TextInput.Theme.LIGHTER} className={styles('text-input')} />
    </div>
  ))
   .add('theme darker', () => (
   	<div className={styles('light-background', 'text-input-container')}>
    	<TextInput placeholder='For light background' theme={TextInput.Theme.DARKER} className={styles('text-input')} />
    </div>
  ));

storiesOf('Checkbox', module)
  .add('default checked', () => (
    <Checkbox default_checked={true} checkbox_className={styles('checkbox')} />
  ))
  .add('default unchecked', () => (
    <Checkbox default_checked={false} checkbox_className={styles('checkbox')} />
  ))
  .add('with label text', () => (
  	<Checkbox label='The label is provided as the content to the checkbox' checkbox_className={styles('checkbox')} label_className={styles('checkbox-label')} />
  ))
  .add('with label markup', () => (
  	<Checkbox
  		label={<p>The label is provided as the content to the checkbox, it can also contain <a href='https://en.wikipedia.org/wiki/HTML'>HTML markup</a></p>}
  		checkbox_className={styles('checkbox')}
  		label_className={styles('checkbox-label')}
  	/>
  ));

storiesOf('InvalidMessage', module)
  .add('default', () => (
    <InvalidMessage text='Your password must be at least 6 characters.' />
  ));

// MOLECULES
storiesOf('InputWithMessage', module)
  .add('display message on invalid text', () => (
  	<form className={styles('form-for-input', 'dark-background')} onSubmit={e => e.preventDefault()}>
	    <InputWithMessage
			input={TextInput}
			type='email'
			required={true}
			className={styles('text-input')}
			placeholder='Enter email only'
	    	invalid_message='Please verify your email address.'
	    />
	    <SubmitButton text='Validate' className={styles('text-button')} />
    </form>
  ))
  .add('display message when an required checkbox unchecked', () => (
  	<form className={styles('form-for-checkbox', 'dark-background')} onSubmit={e => e.preventDefault()}>
  		<div>
		    <InputWithMessage
				input={Checkbox}
				required={true}
	  			label='This must be checked to pass validaton.'
	  			checkbox_className={styles('checkbox')}
	  			label_className={styles('checkbox-label')}
		    	invalid_message='The checkbox must be checked.'
		    />
	    </div>
	    <SubmitButton text='Validate' className={styles('text-button')} />
    </form>
  ));

storiesOf('MultiStepForm', module)
  .add('compose steps to complete a form', () => (
  	<MultiStepForm
  		className={styles('multi-step-form', 'dark-background')}
  		onStepComplete={action('step complete')}
  		onAllComplete={action('all steps complete')}
  	>
  		<div>
  			<RegularLabel text='First Step' className={styles('label')} />
		    <TextInput className={styles('text-input')} default_value='Step 1' name='step_1' />
		    <SubmitButton text='Proceed' className={styles('text-button')} />
  		</div>

  		<div>
  			<RegularLabel text='Second Step' className={styles('label')} />
		    <TextInput className={styles('text-input')} default_value='Step 2' name='step_2' />
		    <SubmitButton text='Proceed' className={styles('text-button')} />
  		</div>

  		<div>
  			<RegularLabel text='Last Step' className={styles('label')} />
		    <TextInput className={styles('text-input')} default_value='Step 3' name='step_3' />
		    <SubmitButton text='Complete' className={styles('text-button')} />
  		</div>
    </MultiStepForm>
  ));

// ORGANISMS
storiesOf('NewsletterSignUp', module)
  .add('render with page data', () => (
  	<NewsletterSignUp data={newsletter_signup_data} />
  ));
