import React from 'react';
import { shallow } from 'enzyme';
import Labels from './Labels';

// Starting with if there are any labels

describe('when labels are passed', () => {
	beforeEach(() => {
		props.labels = ''; // This bit is an array, loop through it so we can get the values?
	});

	it('it maps the labels to the li if there are any', () => {
		const labels = shallow(<Labels />);
		const liName = item.name; // get the label name for this?
		const liBackground = item.color;
		expect(labels).toBe(props.labels);
	});
});

// TODO: This isn't right yet.

// The Contract
// - If an array of labels exists map them to each li and render a ul
// - If a background color exists set a background color style, else it should be an empty string and no background color would be set

// If a check is placed in Issues.js to only render the Labels component if there are any, then this contract would be:
// - The ul is always rendered and receives props?
// - If a background color exists set a background color style, else it should be an empty string and no background color would be set
