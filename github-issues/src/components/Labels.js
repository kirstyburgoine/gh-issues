import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Labels extends Component {
	render() {
		// this is the labels array only rather than the whole data set
		const { labels } = this.props;

		const label = labels.map((item, i) => {
			return (
				<li
					key={i}
					style={{
						backgroundColor: item.color ? '#' + item.color : ''
					}}
				>
					{item.name}
				</li>
			);
		});
		// TODO: move this to check if exists before ceating the label const?
		// Maybe move this check up to Issues.js instead so that the entire component only exists if there are labels?
		if (!this.labels) return null;
		return <ul className="labels">{label}</ul>;
	}
}

Labels.propTypes = {
	labels: PropTypes.arrayOf(
		PropTypes.shape({
			color: PropTypes.string.isRequired,
			default: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		})
	).isRequired
};

export default Labels;
