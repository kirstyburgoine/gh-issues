import React, { Component } from 'react';
import Header from './components/Header';
// import IssueTableHead from './components/IssueTableHead';
import IssueTableHeadSimple from './components/IssueTableHeadSimple';
import IssuesTable from './components/IssuesTable';
import Footer from './components/Footer';

// import AuthorResult from './examples/AuthorResult';
// import AuthorSearchResult from './examples/AuthorSearchResult';

/**
 * Setup Architecture for the App
 * Get data here and flow down through components using props
 */

// The main api along with any query passed (query would come from each filter)
const urlForApi = query =>
	`https://api.github.com/repos/Automattic/_s/issues?${query}`;

class App extends Component {
	constructor() {
		super();

		//get initialstate
		this.state = {
			githubData: {},
			requestFailed: false
		};
		this.authorSelect = this.authorSelect.bind(this);
	}

	authorSelect(author) {
		this.setState({ authorName: true });
	}

	/**
	 * Grabs the data from github here and sets up for use in Issue
	 */
	componentDidMount() {
		// Lifecycle method: https://reactjs.org/docs/react-component.html

		// Fetch the API data using native Fetch method
		// TODO: Double check fetch is supported across browser
		fetch(urlForApi())
			// fetch(urlForApi(this.props.query))
			// this.props.query would comes from drop down filters
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
					// TODO: There is a lot of data here that isn't needed in this task, change this to load in the data needed not the whole
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

		// When testing components in `./examples/` can be called here

		return (
			<div className="page-container">
				<Header className="page-header" />

				<main className="issues-table-container" role="main">
					<IssueTableHeadSimple githubData={this.state.githubData} />
					<IssuesTable githubData={this.state.githubData} />
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
