import React, { Component } from 'react';
import Issue from './Issue';

const urlForName = login =>
	`https://api.github.com/repos/cloudflare/cf-ui/issues`;

class IssuesTable extends Component {
	constructor() {
		super();
		this.state = {
			requestFailed: false
		};
	}

	componentDidMount() {
		// Lifecycle method: https://reactjs.org/docs/react-component.html

		// Fetch the API data
		fetch(urlForName(this.props.login))
			.then(response => {
				if (!response.ok) {
					throw Error('Network request failed');
				}

				return response;
			})
			// d stands for data here
			.then(d => d.json())
			.then(
				d => {
					this.setState({
						githubData: d
					});
					console.log(this.state.githubData);
				},
				() => {
					this.setState({
						requestFailed: true
					});
				}
			);
	}

	render() {
		if (this.state.requestFailed) return <p>Failed!</p>;
		if (!this.state.githubData) return <p>Loading...</p>;

		return (
			<ul>
				{Object.keys(this.state.githubData).map(key => (
					<Issue key={key} details={this.state.githubData[key]} />
				))}
			</ul>
		);
	}
}

export default IssuesTable;
