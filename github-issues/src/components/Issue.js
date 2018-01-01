import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import StatusIcon from './StatusIcon';
import Labels from './Labels';
import CommentIcon from './CommentIcon';

/**
 * Display Each Issues Data in an li
 */
class Issue extends Component {
	render() {
		// details comes from issue component markup set up in IssuesTable.js
		const { details } = this.props;

		var progressLabels = [details.labels];
		//console.log(progressLabels);

		return (
			<li
				className="github-issue"
				style={{ backgroundColor: '#' + details.labels.color }}
			>
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

						<ul>
							{Object.keys(progressLabels).map(key => (
								<Labels
									key={key}
									labels={progressLabels[key]}
								/>
							))}
						</ul>
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

export default Issue;
