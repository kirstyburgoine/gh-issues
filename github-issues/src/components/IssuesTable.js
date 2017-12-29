import React, { Component } from 'react';
import Issue from './Issue';

const urlForName = login =>
	`https://api.github.com/repos/Automattic/_s/issues?state=open&orderby=number`;

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
		fetch(urlForName(this.props.login))
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
					// set th state uding the data from github api
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
		// renders the cintent to the page
		// start with showing some messages so the user can see whats happening
		if (this.state.requestFailed) return <p>Failed!</p>;
		if (!this.state.githubData) return <p>Loading...</p>;

		return (
			// return the data  from the API Request and print on screen
			// Uses standard javascript to loop through data array and map keys to each Issue component
			<ul>
				{Object.keys(this.state.githubData).map(key => (
					<Issue key={key} details={this.state.githubData[key]} />
				))}
			</ul>
		);
	}
}

export default IssuesTable;
