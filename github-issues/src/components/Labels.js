import React, { Component } from 'react';

class Labels extends Component {
	// TODO: Map nested arrray
	render() {
		// this is the labels array only rather than the whole data set
		// TODO: also needs key adding to remove warnings
		const { labels } = this.props;
		// console.log(details);

		const label = labels.map((item, i) => {
			// const liStyle = 'backgroundColor: #' + item.color;

			return (
				<li style={{ backgroundColor: '#' + item.color }}>
					{item.name}
				</li>
			);
		});

		return <ul className="labels">{label}</ul>;
	}
}

export default Labels;
