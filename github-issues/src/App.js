import React, { Component } from 'react';
import Header from './components/Header';
import IssuesTable from './components/IssuesTable';
import Footer from './components/Footer';

/**
 * Setup Architecture for the App
 * Issues is where github API is called
 * TODO: See if better way to load in without needing two outer containers (root and page-container)
 */
class App extends Component {
	render() {
		return (
			<div className="page-container">
				<Header className="page-header" />

				<main className="issues-table-container" role="main">
					<IssuesTable />
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
