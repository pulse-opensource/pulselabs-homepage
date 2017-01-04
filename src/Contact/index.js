import React from 'react';
import Section from '../shared/Section';
import Input from '../shared/Input';
import Textarea from '../shared/Textarea';
import style from './style.css';

export default function() {
	return (
    <Section className={style.section}>
      <form>
        <h1>Let's work together</h1>
        <h4>We want to help your site be faster, and increase your website revenue and user engagement. Please fill out the form with whatever we could help you with.</h4>

        <div className={style.form}>
          <Input name="name" title="Name" />
          <Input name="email" title="Email" />
          <Input name="website" title="Website" />
          <Textarea name="info" title="Tell us about your needs" />

          <input type="submit" value="Submit" />
        </div>
      </form>
    </Section>
  );
}
