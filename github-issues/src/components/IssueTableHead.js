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

		return (
			<div class="table-head">
				<div className="table-results-count" />
				<div className="table-list-filters">
					<button className="btn-link select-menu-button">
						Author
					</button>
					<button className="btn-link select-menu-button">
						Labels
					</button>
					<button className="btn-link select-menu-button" disabled>
						Projects
					</button>
					<button className="btn-link select-menu-button" disabled>
						Milestones
					</button>
					<button className="btn-link select-menu-button" disabled>
						Assignee
					</button>
					<button className="btn-link select-menu-button" disabled>
						Sort
					</button>
				</div>
			</div>
		);
	}
}

export default IssueTableHead;
