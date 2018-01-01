import React, { Component } from 'react';

/**
 * Filter by author Option
 * TODO: Change this so seperate state is not declared for each show hide / menu. toggels between them all instead
 * to close any that are open before opening another
 */
class Author extends Component {

	render() {
		// details comes from issueTableHead component markup set up in IssuesTableHEad.js
		const { users } = this.props;

		return (
			<li><a href="#">{users.user.login}</a></li>
		);
	}
}

export default Author;
