import React, { Component } from 'react';
import openIcon from './octicon-open.svg';
import closedIcon from './octicon-closed.svg';
import commentIcon from './octicon-comment.svg';

/**
 * Display Each Issues Data in an li
 */
class Issue extends Component {
	render() {
		// details comes from issue component markup set up in IssuesTable.js
		const { details } = this.props;
		// if (details.state === 'open') {
		// 	const svg = <img src={openIcon} alt="Open Issue" />;
		// }
		// const svg = <img src={closedIcon} alt="Closed Issue" />;

		return (
			<li className="github-issue">
				<div className="column-left">
					<a
						href={details.html_url}
						className="issue-title"
						title={details.title}
					>
						{details.title}
					</a>
					<br />
					<span className="opened-by">
						#{details.number} opened{' '}
						<span className="relative-time date-time">
							{details.created_at}
						</span>{' '}
						by {details.user.login}
					</span>
				</div>
				<div className="column-right">
					<img
						src={details.user.avatar_url}
						alt=""
						height="20px"
						width="20px"
					/>

					<img src={commentIcon} alt={details.comments} />
					<span className="text-small">{details.comments}</span>
				</div>
			</li>
		);
	}
}

export default Issue;
