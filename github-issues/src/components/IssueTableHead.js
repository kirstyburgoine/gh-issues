import React, { Component } from 'react';
import TableResultsCount from './TableResultsCount';
import FilterAuthor from './FilterAuthor';
import FilterLabels from './FilterLabels';
import FilterProjects from './FilterProjects';
import FilterMilestones from './FilterMilestones';
import FilterAssignee from './FilterAssignee';
import FilterSort from './FilterSort';

/**
 * Form in the header that filters the results
 */
class IssueTableHead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authordisplay: false
		};
		this.authorDropDown = this.authorDropDown.bind(this); // binds this in my function to the class so that it can be used in callback
		this.labelsDropDown = this.labelsDropDown.bind(this);
	}

	// TODO: STill not happy with this way of showing dropdowns...
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
		// TODO: Change this so seperate state is not declared for each show hide / menu. toggels between them all instead
		// to close any that are open before opening another
		const authordisplay = this.state.authordisplay;
		const labeldisplay = this.state.labelsdisplay;
		// This is our data from the api called in App.js
		// TODO: Probably don't want to pass all of this data through to the filters?
		const { githubData } = this.props;

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

export default IssueTableHead;
