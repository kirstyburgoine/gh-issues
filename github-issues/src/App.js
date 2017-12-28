import React, { Component } from 'react';
import Header from './components/Header';
import IssuesTable from './components/IssuesTable';
import Footer from './components/Footer';

/**
 * Setup Architecture for the App
 * Issues is where github API is called
 */
class App extends Component {
	render() {
		return (
			<div className="page-container">
				<Header className="table-list-header" />

				<main className="issues-table" role="main">
					<IssuesTable />
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
