import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Example passing props from parent component to child and updating state.
 * Parent and child componts here purely to keep togther for easy reading.
 * If they were to be used in the project each component would be in its own file
 *
 * The Issue:
 * This works when updating state with a specific value inside `authorSelect()` i.e. True / False or incrementing
 * But unable to pass a specific value from onClick? i.e update authorName: kirstyburgoine instead
 */

class AuthorResult extends Component {
	constructor() {
		super();
		this.state = {
			// authorName: 'thequeen'
			authorName: false
		};
		this.authorSelect = this.authorSelect.bind(this);
	}

	authorSelect(authorName) {
		// this.setState({ authorName });
		this.setState({ authorName: true });
	}

	render() {
		return (
			<div>
				<p>Hello {this.state.authorName}</p>
				<AuthorFilter authorSelect={this.authorSelect} />
			</div>
		);
	}
}

class AuthorFilter extends Component {
	super(props) {
		this.parentAuthorSelect = this.parentAuthorSelect.bind(this);
	}

	parentAuthorSelect(author) {
		this.props.authorSelect();
		console.log(author);
	}

	render() {
		return (
			<ul>
				<li>
					<span
						onClick={() =>
							this.parentAuthorSelect('kirstyburgoine')
						}
					>
						Kirsty Burgoine
					</span>
				</li>

				<li>
					<span
						onClick={() =>
							this.parentAuthorSelect('kirstyburgoine1')
						}
					>
						Kirsty Burgoine 1
					</span>
				</li>
				<li>
					<span
						onClick={() =>
							this.parentAuthorSelect('kirstyburgoine2')
						}
					>
						Kirsty Burgoine 2
					</span>
				</li>
				<li>
					<span
						onClick={() =>
							this.parentAuthorSelect('kirstyburgoine3')
						}
					>
						Kirsty Burgoine 3
					</span>
				</li>
			</ul>
		);
	}
}

AuthorFilter.propTypes = {
	authorSelect: PropTypes.func
};

export default AuthorResult;
