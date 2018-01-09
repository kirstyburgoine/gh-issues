import React from 'react';
import { shallow } from 'enzyme';
import Header from './components/Header';

it('renders "Today\'s Issues"', () => {
	const wrapper = shallow('<Header />');
	const textHeader = <p>Todays Issues</p>;
	expect(wrapper.contains(textHeader)).toEqual(true);
});
