import React, { Component } from 'react';
import Issue from './Issue';

// Get the main api along with any query passed
// TODO: This feels like it should be in App.js ?
const urlForApi = query =>
	`https://api.github.com/repos/Automattic/_s/issues?${query}`;

/**
 * Grabs the data from github here and sets up for use in Issue
 */
class IssuesTable extends Component {
	constructor() {
		super();
		this.state = {
			requestFailed: false
		};
	}

	componentDidMount() {
		// Lifecycle method: https://reactjs.org/docs/react-component.html

		// Fetch the API data using native Fetch method
		// TODO: Double check this is supported across browser
		// this.props.query comes from drop down filters
		fetch(urlForApi(this.props.query))
			.then(response => {
				// Check the resposnse
				if (!response.ok) {
					// if ots not ok, show an error
					throw Error('Network request failed');
				}
				// if it is ok return
				return response;
			})
			// d stands for data here
			.then(d => d.json()) // format using json
			.then(
				d => {
					// set the state using the data from github api
					this.setState({
						githubData: d
					});
					// console.log(this.state.githubData);
				},
				() => {
					// else the api request failed
					this.setState({
						requestFailed: true
					});
				}
			);
	}

	render() {
		// start with showing some messages so the user can see whats happening
		if (this.state.requestFailed) return <p>Failed!</p>;
		if (!this.state.githubData) return <p>Loading...</p>;

		return (
			// return the issues table and pass data to correct components
			<div className="issues-table">
				<ul>
					{Object.keys(this.state.githubData).map(key => (
						<Issue key={key} details={this.state.githubData[key]} />
					))}
				</ul>
			</div>
		);
	}
}

export default IssuesTable;
