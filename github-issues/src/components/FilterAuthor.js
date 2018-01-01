import React, { Component } from 'react';

/**
 * Filter by author Option
 * TODO: Change this so seperate state is not declared for each show hide / menu. toggels between them all instead
 * to close any that are open before opening another
 */
class Author extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authordisplay: false
		};
		this.showDropDown = this.showDropDown.bind(this); // binds this in my function to the class so that it can be used in callback
	}

	showDropDown(event) {
		event.preventDefault();
		// console.log('this worked');

		this.setState(prevState => ({
			authordisplay: !prevState.authordisplay
		}));
	}

	render() {
		// details comes from issueTableHead component markup set up in IssuesTableHEad.js
		const { github } = this.props;
		// console.log(github);
		// console.log(this.state.githubData);

		const numbers = [1, 2, 3, 4, 5];
		const listItems = numbers.map(number => (
			<li key={number.toString()}>
				<a>{number}</a>
			</li>
		));

		// set the state of display so we can control show / hide
		const display = this.state.authordisplay;

		return (
			<fieldset>
				<button
					className="btn-link select-menu-button"
					onClick={this.showDropDown}
				>
					Author
				</button>

				<ul className={display ? 'displayblock' : 'displaynone;'}>
					{listItems}
				</ul>
			</fieldset>
		);
	}
}

export default Author;
