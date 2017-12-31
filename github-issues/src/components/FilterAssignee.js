import React, { Component } from 'react';

/**
 * Filter by Assignee Option
 */
class Assignee extends Component {
	render() {
		return (
			<fieldset>
				<button className="btn-link select-menu-button" disabled>
					Assignee
				</button>
			</fieldset>
		);
	}
}

export default Assignee;
