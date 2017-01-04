import React from 'react';
import style from './style.css';
import Card from '../shared/Card';
import Section from '../shared/Section';

export default function Home() {
	return (
    <div>
      <Section background="#fff">
        <div className={style.cardHolder}>
          <Card
            title="Performance Matters"
            text={`
              Performance optimization is a process of improving the delivery speed of services, feedback or any other type of response action in order to meet a user’s expectation.
            `}
            link="See the studies"
          />

          <Card
            title="Bottom Lines"
            text={`
              lorem ipsum chiggta ba
            `}
            link="Request an audit"
          />
        </div>
      </Section>
    </div>
	);
}
