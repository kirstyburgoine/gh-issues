import React, { Component } from 'react';
import TableResultsCount from './TableResultsCount';
import FilterAuthor from './FilterAuthor';
import FilterLabels from './FilterLabels';
import FilterProjects from './FilterProjects';
import FilterMilestones from './FilterMilestones';
import FilterAssignee from './FilterAssignee';
import FilterSort from './FilterSort';

// import PropTypes from 'prop-types'; - removed to remove warnings on console until can figure PropType for githuData

/**
 * Form in the header that filters the results
 */
class IssueTableHead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authorName: 'johndoe',
			authordisplay: false,
			labelsdisplay: false
		};
		this.authorSelect = this.authorSelect.bind(this);
		this.authorDropDown = this.authorDropDown.bind(this);
		this.labelsDropDown = this.labelsDropDown.bind(this);
	}

	// See `./examples/AuthorResult/` for working example of passing function as props to children to affect state
	// TODO: This is set too far down in the tree. Needs to be in App.js
	authorSelect(authorName) {
		this.setState({ authorName });
	}

	// TODO: Need this to toggle all buttons from one function
	authorDropDown(event) {
		event.preventDefault();
		// console.log('this worked');

		this.setState(prevState => ({
			authordisplay: !prevState.authordisplay,
			labelsdisplay: false
		}));
	}

	labelsDropDown(event) {
		event.preventDefault();
		// console.log('this worked');

		this.setState(prevState => ({
			labelsdisplay: !prevState.labelsdisplay,
			authordisplay: false
		}));
	}

	render() {
		// set the state of display so we can control show / hide menus
		const authordisplay = this.state.authordisplay;
		const labeldisplay = this.state.labelsdisplay;

		// This is our data from the api called in App.js
		// TODO: Don't want to pass all of this data through to the filters?
		const { githubData } = this.props;

		// TODO: Move all logic and entire fieldset for each filter back into its own component
		return (
			<div className="table-head">
				<TableResultsCount />

				<div className="table-list-filters">
					<form className="list-filters">
						<fieldset>
							<button
								className="btn-link select-menu-button"
								onClick={this.authorDropDown}
							>
								Author
							</button>

							<ul
								className={
									authordisplay
										? 'displayblock'
										: 'displaynone;'
								}
							>
								{Object.keys(githubData).map(key => (
									<FilterAuthor
										key={key}
										users={githubData[key]}
										authorSelect={this.authorSelect}
									/>
								))}
							</ul>
						</fieldset>

						<fieldset>
							<button
								className="btn-link select-menu-button"
								onClick={this.labelsDropDown}
							>
								Labels
							</button>

							<ul
								className={
									labeldisplay
										? 'displayblock'
										: 'displaynone;'
								}
							>
								{Object.keys(githubData).map(key => (
									<FilterLabels
										key={key}
										labels={githubData[key]}
									/>
								))}
							</ul>
						</fieldset>

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
// Issue:
// Warning: Failed prop type: Invalid prop `githubData` of type `object` supplied to `IssueTableHead`, expected an array.
// Same problem as IssueTable.js & Issue.js - Need to find correct proptype for githubData const.

// IssueTableHead.propTypes = {
// 	githubData: PropTypes.arrayOf(PropTypes.object)
// };

export default IssueTableHead;
