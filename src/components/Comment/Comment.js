import React from 'react'
import { Link } from 'react-router-dom'
import { timeSince } from '../../utils'
import Avatar from '../Avatar/Avatar'
import TextBody from '../Text/body'

import './Comment.css'

function Comment({ comment }) {
    return (
        <Link to={`/${comment.user.username}`} className="post-comment">
            <Avatar src={comment.user.avatar} />
            <div className="post-comment--body">
                <div>
                    <TextBody bold>@{comment.user.username}</TextBody>
                    <TextBody >{timeSince(comment.createdAt)}</TextBody>
                </div>

                <p>
                    {comment.text}
                </p>
            </div>

        </Link>
    )
}

export default Comment
