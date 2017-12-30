import React, { Component } from 'react';
import openIcon from './octicon-open.svg';
import closedIcon from './octicon-closed.svg';
import commentIcon from './octicon-comment.svg';

/**
 * Form that filters the results
 */
class IssueTableHead extends Component {
	render() {
		// details comes from issue component markup set up in IssuesTable.js
		const { details } = this.props;
		// if (details.state === 'open') {
		// 	const svg = <img src={openIcon} alt="Open Issue" />;
		// }
		// const svg = <img src={closedIcon} alt="Closed Issue" />;

		return <div className="table-head">Hello</div>;
	}
}

export default IssueTableHead;
