import React, { Component } from 'react';
import TableResultsCount from './TableResultsCount';

/**
 * Simple version of header to test updating state in my application rather than in examples
 */
class IssueTableHeadSimple extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authorSelectDisplay: false,
		};

		this.showAuthorSelect = this.showAuthorSelect.bind(this);
	}

	showAuthorSelect(event) {
		event.preventDefault();
		// console.log('this worked');

		this.setState(prevState => ({
			authorSelectDisplay: !prevState.authorSelectDisplay
		}));
	}

	render() {
		const authorSelectDisplay = this.state.authorSelectDisplay;
		// This is our data from the api called in App.js
		const { githubData } = this.props;
		// TODO: Need to loop through this data so that can loop through user array?
		console.log(githubData);

		// ERROR: TypeError: githubData.map is not a function :(

		// const user = githubData.map((item, i) => {
		// 	return (
		// 		<li key={i}>{item.login}</li>
		// 	);
		// });

		return (
			<div className="table-head">
				<TableResultsCount />

				<div className="table-list-filters">
					<form className="list-filters">
						<fieldset>
							<button
								className="btn-link select-menu-button"
								onClick={this.showAuthorSelect}
							>
								Author
							</button>

							<ul
								className={
									authorSelectDisplay
										? 'displayblock'
										: 'displaynone;'
								}
							>
							{githubData.map((gh, i)=>(
								<li key={i}>
								{gh.user.map((u,index)=>(
									test
								))}
								</li>
							))}
							</ul>
						</fieldset>

					</form>
				</div>
			</div>
		);
	}
}
// Issue:
// Warning: Failed prop type: Invalid prop `githubData` of type `object` supplied to `IssueTableHead`, expected an array.
// Same problem as IssueTable.js & Issue.js - Need to find correct proptype for githubData const.

// IssueTableHead.propTypes = {
// 	githubData: PropTypes.arrayOf(PropTypes.object)
// };

export default IssueTableHeadSimple;
