import React, { Component } from 'react';
import TableResultsCount from './TableResultsCount';
import FilterAuthor from './FilterAuthor';
import FilterLabels from './FilterLabels';
import FilterProjects from './FilterProjects';
import FilterMilestones from './FilterMilestones';
import FilterAssignee from './FilterAssignee';
import FilterSort from './FilterSort';

// Get the main api along with any query passed
const urlForApi = query => `https://api.github.com/repos/Automattic/_s/issues`;

/**
 * Grabs the data from github here and sets up for use in each dropdwon
 */

/**
 * Form that filters the results
 */
class IssueTableHead extends Component {

	render() {

		const { githubData } = this.props;
		var user = [githubData.user];
		var labels = [githubData.labels];

		return (
			<div className="table-head">
				<TableResultsCount />

				<div className="table-list-filters">
					<form className="list-filters">
						<FilterAuthor github={user} />
						<FilterLabels github={labels} />
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
