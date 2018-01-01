import React, { Component } from 'react';

/**
 * labels by labels Option
 */
class Labels extends Component {
	render() {
		// details comes from issueTableHead component markup set up in IssuesTableHEad.js
		const { labels } = this.props;

		return (
			<li>
				<a href="/">{labels.labels.name}</a>
			</li>
		);
	}
}

export default Labels;
