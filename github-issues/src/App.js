import React, { Component } from 'react';
import Header from './components/Header';
import IssueTableHead from './components/IssueTableHead';
import IssuesTable from './components/IssuesTable';
import Footer from './components/Footer';

/**
 * Setup Architecture for the App
 * TODO: See if better way to load in without needing two outer containers (root and page-container)
 */

// Get the main api along with any query passed
const urlForApi = query =>
	`https://api.github.com/repos/Automattic/_s/issues?${query}`;

class App extends Component {
	constructor() {
		super();

		this.handleSortByAuthor = this.handleSortByAuthor.bind(this);
		//get initialstate
		this.state = {
			githubData: {},
			sortAuthor: {},
			requestFailed: false
		};
	}

	handleSortByAuthor = sortAuthor => {
		this.setState({
			sortAuthor: sortAuthor
		});
	};

	/**
	 * Grabs the data from github here and sets up for use in Issue
	 */
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
					// TODO: There is a lot of data here that isn't needed in this task, maybe look at loading just bits needed
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
		return (
			<div className="page-container">
				<Header className="page-header" />

				<main className="issues-table-container" role="main">
					<IssueTableHead
						githubData={this.state.githubData}
						handleSortByAuthor={this.state.handleSortByAuthor}
					/>
					<IssuesTable githubData={this.state.githubData} />
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
