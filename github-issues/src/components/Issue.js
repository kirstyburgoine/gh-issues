import React, { Component } from 'react';

/**
 * Display Each Issues Data in an li
 */
class Issue extends Component {
	render() {
		// details comes from issue component markup set up in IssuesTable.js
		const { details } = this.props;
		return (
			<li className="github-issue">
				<h3 className="issue-title">{details.title}</h3>
			</li>
		);
	}
}

export default Issue;
