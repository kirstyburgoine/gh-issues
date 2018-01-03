import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Labels extends Component {
	// TODO: Map nested arrray
	render() {
		// this is the labels array only rather than the whole data set
		// TODO: also needs key adding to remove warnings
		const { labels } = this.props;
		// console.log(labels);

		const label = labels.map((item, i) => {
			// const liStyle = 'backgroundColor: #' + item.color;

			return (
				<li
					style={{
						backgroundColor: item.color ? '#' + item.color : ''
					}}
				>
					{item.name}
				</li>
			);
		});

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
