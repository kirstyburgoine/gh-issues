import React, { Component } from 'react';
import TableResultsCount from './TableResultsCount';
import FilterAuthor from './FilterAuthor';
import FilterLabels from './FilterLabels';
import FilterProjects from './FilterProjects';
import FilterMilestones from './FilterMilestones';
import FilterAssignee from './FilterAssignee';
import FilterSort from './FilterSort';

/**
 * Form that filters the results
 */
class IssueTableHead extends Component {
	render() {
		// details comes from IssueTableHead component markup set up in IssuesTable.js
		const { details } = this.props;

		return (
			<div className="table-head">
				<TableResultsCount />

				<div className="table-list-filters">
					<form className="list-filters">
						<FilterAuthor />

						<FilterLabels />
						<FilterProjects />
						<FilterMilestones />
						<FilterAssignee />
						<FilterSort />
					</form>
				</div>
			</div>
		);
	}
}

export default IssueTableHead;
