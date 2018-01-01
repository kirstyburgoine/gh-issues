import React, { Component } from 'react';
import Issue from './Issue';



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

export default IssuesTable;
