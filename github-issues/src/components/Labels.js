import React, { Component } from 'react';

class Labels extends Component {
	// TODO: Map nested arrray
	render() {
		// this is the labels array only rather than the whole data set
		// TODO: also needs key adding to remove warnings
		const { labels } = this.props;
		// console.log(details);

		const label = labels.map((item, i) => {
			return <span>test: {item.name}</span>;
		});

		return (
			<li>
				{labels.name} {label}
			</li>
		);
	}
}

export default Labels;
