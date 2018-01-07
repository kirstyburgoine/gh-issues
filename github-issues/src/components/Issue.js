import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import StatusIcon from './StatusIcon';
import Labels from './Labels';
import CommentIcon from './CommentIcon';
// import PropTypes from 'prop-types'; - removed to remove warnings on console until can figure PropType for githuData

/**
 * Display Each Issues Data in an li
 */
class Issue extends Component {
	render() {
		// details is all the githubdata coming from App.js as prop
		const { details } = this.props;

		// nested array of progress labels for each issue
		const progressLabels = [details.labels];
		// console.log(progressLabels);
		const issueID = `issue_${details.number}`;

		return (
			// li is used here instead of table row because that is what is used on github
			<li className="github-issue" id={issueID}>
				<div className="column-left">
					<StatusIcon status={details.state} />

					<div className="issue-details">
						<a
							href={details.html_url}
							className="issue-title"
							title={details.title}
						>
							{details.title}
						</a>

						{Object.keys(progressLabels).map(key => (
							<Labels key={key} labels={progressLabels[key]} />
						))}

						<br />
						<span className="opened-by">
							#{details.number} opened{' '}
							<TimeAgo date={details.created_at} /> by{' '}
							{details.user.login}
						</span>
					</div>
				</div>
				<div className="column-right">
					<img
						src={details.user.avatar_url}
						alt={details.user.login}
						height="20px"
						width="20px"
						className="avatar"
					/>

					<span className="comments">
						<CommentIcon />
						<span className="text-small">{details.comments}</span>
					</span>
				</div>
			</li>
		);
	}
}

// Same problem as IssueTableHead.js & IssueTable.js - NEed to find correct proptype for details const.
// Different attempt. This type using .shape()

// Issue.propTypes = {
// 	details: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			state: PropTypes.string.isRequired,
// 			html_url: PropTypes.string.isRequired,
// 			title: PropTypes.string.isRequired,
// 			labels: PropTypes.arrayOf(PropTypes.object),
// 			number: PropTypes.number.isRequired,
// 			created_at: PropTypes.instanceOf(Date),
// 			user: PropTypes.arrayOf(PropTypes.object),
// 			comments: PropTypes.number.isRequired
// 		})
// 	).isRequired
// };

export default Issue;
