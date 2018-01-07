import React, { Component } from 'react';
import Issue from './Issue';
// import PropTypes from 'prop-types';  - removed to remove warnings on console until can figure PropType for githuData

/**
 * Loop through each issue and rendor on screen
 */
class IssuesTable extends Component {
	render() {
		const { githubData } = this.props;

		return (
			// return the issues table and pass data to correct components
			<div className="issues-table">
				<ul>
					{Object.keys(githubData).map(key => (
						<Issue key={key} details={githubData[key]} />
					))}
				</ul>
			</div>
		);
	}
}

// Same problem as IssueTableHead.js & Issue.js - Need to find correct proptype for githubData const.
// Different attempt. This time using .object()

// IssuesTable.propTypes = {
// 	githubData: PropTypes.object.isRequired
// };

export default IssuesTable;
