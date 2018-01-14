import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Example passing props from parent component to child and updating state using input field & check box.
 * Based on this: https://reactjs.org/docs/thinking-in-react.html
 *
 * This test is to pass values back up so that in theory, github query can be modified...
 *
 * Parent and child componts here purely to keep togther for easy reading.
 * If they were to be used in the project each component would be in its own file
 */

class IssueRow extends Component {
	render() {
		const { details } = this.props;

		const name = details.state ? (
			details.title
		) : (
			<span style={{ color: 'red' }}>{details.title}</span>
		);

		return (
			<tr>
				<td>{details.user.login}</td>
				<td>{details.name}</td>
			</tr>
		);
	}
}

class IssuesTable extends Component {
	render() {
		const { issues } = this.props;
		const openIssuesOnly = this.props.openIssuesOnly;
		const filterText = this.props.filterText;

		// In this output instead of affecting the results. We are just displaying the values so we know it works
		return (
			<table>
				<thead>
					<tr>
						<th>Selected: {filterText}</th>
						<th>{openIssuesOnly ? 'open' : 'closed'}</th>
					</tr>
				</thead>
				<tbody>
				{Object.keys(issues).map(key => (
					<IssueRow key={key} details={issues[key]} />
				))}
				</tbody>
			</table>
		);
	}
}

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleOpenIssuesChange = this.handleOpenIssuesChange.bind(this);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
	}

	handleOpenIssuesChange(e) {
		this.props.onOpenIssueChange(e.target.checked);
	}

	handleFilterTextChange(e) {
		this.props.onFilterTextChange(e.target.value);
	}

	render() {
		return (
			<form>
				<input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange} />
				<p>
					<input type="checkbox" checked={this.props.openIssuesOnly} onChange={this.handleOpenIssuesChange} /> Only show open issues
				</p>
			</form>
		);
	}
}

class AuthorSearchResult extends Component {
	constructor(props) {
		super(props);
			this.state = {
				filterText: '',
				openIssuesOnly: true
			}
		this.handleOpenIssuesChange = this.handleOpenIssuesChange.bind(this);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
	}

	handleOpenIssuesChange(openIssuesOnly) {
		this.setState ({ openIssuesOnly })
	}

	handleFilterTextChange(filterText) {
		this .setState ({filterText})
	}

	render() {
		return (
			<div>
				<SearchBar filterText={this.state.filterText} openIssuesOnly={this.state.openIssuesOnly} onOpenIssueChange={this.handleOpenIssuesChange} onFilterTextChange={this.handleFilterTextChange} />
				<IssuesTable issues={this.props.githubData} filterText={this.state.filterText} openIssuesOnly={this.state.openIssuesOnly} />
			</div>
		);
	}
}

export default AuthorSearchResult;
