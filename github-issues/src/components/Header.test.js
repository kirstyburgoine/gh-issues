import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders "Todays Issues"', () => {
	const wrapper = shallow(<Header />);
	const textHeader = <p>Todays Issues</p>;
	expect(wrapper.contains(textHeader)).toEqual(true);
});
