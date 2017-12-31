import React, { Component } from 'react';
import Author from './Author';

/**
 * Form that filters the results
 */
class IssueTableHead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: false
		};
		this.showDropDown = this.showDropDown.bind(this); // binds this in my function to the class so that it can be used in callback
	}

	showDropDown(event) {
		event.preventDefault();
		// console.log('this worked');

		this.setState(prevState => ({
			display: !prevState.display
		}));
	}

	render() {
		// details comes from IssueTableHead component markup set up in IssuesTable.js
		const { details } = this.props;
		console.log(details.number);

		const users = details.user;
		const numbers = [1, 2, 3, 4, 5];

		// set the state of display so we can control show / hide
		const display = this.state.display;

		return (
			<div className="table-head">
				<div className="table-results-count" />
				<div className="table-list-filters">
					<form className="list-filters">
						<fieldset>
							<button
								className="btn-link select-menu-button"
								onClick={this.showDropDown}
							>
								Author
							</button>

							<ul
								className={
									display ? 'displayblock' : 'displaynone;'
								}
							>
								<Author numbers={users} />
							</ul>
						</fieldset>
						<fieldset>
							<button className="btn-link select-menu-button">
								Labels
							</button>
						</fieldset>
						<fieldset>
							<button
								className="btn-link select-menu-button"
								disabled
							>
								Projects
							</button>
						</fieldset>
						<fieldset>
							<button
								className="btn-link select-menu-button"
								disabled
							>
								Milestones
							</button>
						</fieldset>
						<fieldset>
							<button
								className="btn-link select-menu-button"
								disabled
							>
								Assignee
							</button>
						</fieldset>
						<fieldset>
							<button
								className="btn-link select-menu-button"
								disabled
							>
								Sort
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
}

export default IssueTableHead;
