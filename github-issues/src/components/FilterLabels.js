import React, { Component } from 'react';

/**
 * labels by labels Option
 */
class Labels extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labelsdisplay: false
		};
		this.showDropDown = this.showDropDown.bind(this); // binds this in my function to the class so that it can be used in callback
	}

	showDropDown(event) {
		event.preventDefault();
		// console.log('this worked');

		this.setState(prevState => ({
			labelsdisplay: !prevState.display
		}));
	}

	render() {
		// details comes from issue component markup set up in IssuesTable.js
		const { labels } = this.props;

		// set the state of display so we can control show / hide
		const display = this.state.labelsdisplay;

		return (
			<fieldset>
				<button
					className="btn-link select-menu-button"
					onClick={this.showDropDown}
				>
					labels
				</button>

				<ul className={display ? 'displayblock' : 'displaynone;'}>
					<li number="1">
						<a>1</a>
					</li>
					<li number="2">
						<a query="kirstyburgoine">2</a>
					</li>
					<li number="3">
						<a>3</a>
					</li>
					<li number="4">
						<a>4</a>
					</li>
				</ul>
			</fieldset>
		);
	}
}

export default Labels;
