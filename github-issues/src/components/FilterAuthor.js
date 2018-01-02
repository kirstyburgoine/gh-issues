import React, { Component } from 'react';

/**
 * Filter by author Option
 * TODO: Change this so seperate state is not declared for each show hide / menu. toggels between them all instead
 * to close any that are open before opening another
 */
class Author extends Component {
	render() {
		// users comes from issueTableHead component markup set up in IssuesTableHEad.js
		const { users } = this.props;

		return (
			<li className="filter-author">
				<img
					src={users.user.avatar_url}
					alt={users.user.login}
					height="20px"
					width="20px"
				/>
				<a href="/">{users.user.login}</a>
			</li>
		);
	}
}

export default Author;
