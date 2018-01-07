import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Filter Issues by author dropdown
 */
class Author extends Component {
	constructor(props) {
		super(props);
		this.parentAuthorSelect = this.parentAuthorSelect.bind(this);
	}

	// See `./examples/AuthorResult/.js for working example of passing functions as props to children to affect state
	// Issues x 2:
	// - Cannot pass the user login value from <a> to update state dynamically. Can only change a specific value i.e. true / false
	// - If authorSelect() function is in App.js its too far removed for parentAuthorSelect() to work.
	parentAuthorSelect(author) {
		this.props.authorSelect();
		console.log(author);
	}

	render() {
		// users comes from issueTableHead component markup set up in IssuesTableHEad.js
		// TODO: Make these distinct values
		const { users } = this.props;

		return (
			<li className="filter-author" queryuser={users.user.login}>
				<img
					src={users.user.avatar_url}
					alt={users.user.login}
					height="20px"
					width="20px"
				/>
				<span onClick={() => this.parentAuthorSelect(users.user.login)}>
					{users.user.login}
				</span>
			</li>
		);
	}
}

Author.propTypes = {
	authorSelect: PropTypes.func.isRequired
	// login: PropTypes.string - login is undefined - needs arrayof(.shape()) as per Labels.js but nested another level?
};

export default Author;
