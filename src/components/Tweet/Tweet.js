import React, { useState } from 'react'
import { useHistory, Link, NavLink } from 'react-router-dom'

import { client, timeSince } from '../../utils'

import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import TextBody from '../Text/body'
import { Reply, Retweet, Like, Share, LikeFill } from '../icons'

import './Tweet.css'

function Tweet({ post, pusername }) {
    const { _id, isLiked, likesCount, user, createdAt, caption, tags, files } = post
    const history = useHistory()
    const [likedState, setLiked] = useState(isLiked);
    const [likesState, setLikes] = useState(likesCount);

    const handle = user?.username

    const handleToggleLike = () => {
        if (likedState) {
            setLiked(false);
            setLikes(likesState - 1)
            client(`/posts/${_id}/toggleLike`);
        } else {
            setLiked(true);
            setLikes(likesState + 1)
            client(`/posts/${_id}/toggleLike`);
        }
    };

    return (
        <div className="page-tweet">
            <div className="page-tweet__avatar">
                <Avatar className="" size='medium' onClick={() => history.push(`/${user.username}`)} />
            </div>
            <div className="page-tweet__body">
                <div className="tweet-info-user">
                    <TextBody bold onClick={() => history.push(`/${user?.username}`)}>{pusername ?? user?.username}</TextBody>
                    <span className="secondary">{timeSince(createdAt)} ago</span>
                </div>

                <span>
                    <Link to={`/${handle}/status/${_id}`}>
                        <p>{caption}</p>
                    </Link>
                </span>

                <div className="tags">
                    {tags
                        ? tags.map((tag) => (
                            <span key={tag} className="tweet--tag">
                                {`#${tag}`}
                            </span>
                        ))
                        : null}
                </div>

                <Link to={`/${handle}/status/${_id}`} className="tweet__image">
                    <img src={files?.length && files[0]} alt="" />
                </Link>


                <div className="page-tweet__body--stats">
                    <Button icon href={`/${handle}/status/${_id}`}>
                        <Reply />
                    </Button>
                    <Button icon color="green" href={`/${handle}/status/${_id}`}>
                        <Retweet />
                    </Button >
                    <Button icon color="red" onClick={handleToggleLike}>
                        {likedState ? <LikeFill style={{ color: "red" }} /> : <Like />}
                        <span>{likesState}</span>
                    </Button>
                    <Button icon href={`/${handle}/status/${_id}`}>
                        <Share />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Tweet
