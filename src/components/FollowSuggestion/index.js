import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Avatar from '../Avatar/Avatar'
import TextBody from '../Text/body'


import './FollowSuggestion.css';
import Follow from '../Follow/Follow';

function FollowSuggestion({ user, fullName = "asd", icon = true }) {
    const history = useHistory()


    return (
        <div className="extra__FollowSuggestion">
            <div>
                <Avatar size="medium" src={user.avatar} onClick={() => history.push(`/${user.username}`)} />

                <div className="extra__FollowSuggestion--info">

                    <Link to={`${user.username}`}><TextBody bold>{user.username}</TextBody></Link>

                    <TextBody>{fullName}</TextBody>
                </div>
            </div>
            {icon &&
                <Follow isFollowing={user.isFollowing} userId={user._id}>
                    Takip
                </Follow>
            }

        </div>
    )
}

export default FollowSuggestion
