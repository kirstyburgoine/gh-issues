import React, { Component } from 'react';

class Issue extends React.Component {
	render() {
		const { details } = this.props;
		return (
			<li className="github-issue">
				<h3 className="issue-title">{details.title}</h3>
			</li>
		);
	}
}

export default Issue;
