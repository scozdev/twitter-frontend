import React, { useState } from 'react'
import { useHistory, Link, NavLink } from 'react-router-dom'

import { client, timeSince } from '../../utils'

import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import TextBody from '../Text/body'
import { Reply, Retweet, Like, Share, LikeFill } from '../icons'

import './Tweet.css'

function Tweet({ post }) {
    const { _id, isLiked, isRetweeted, comments, retweetCount, likesCount, user, createdAt, caption, tags, files } = post
    const history = useHistory()
    const [likedState, setLiked] = useState(isLiked);
    const [likesState, setLikes] = useState(likesCount);

    const [retweeted, setRetweeted] = useState(isRetweeted);
    const [retweets, setRetweets] = useState(retweetCount);

    const handle = user?.username;

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

    const handleToggleRetweet = () => {
        if (retweeted) {
            setRetweeted(false);
            setRetweets(retweets - 1)
            client(`/posts/${_id}/toggleRetweet`);
        } else {
            setRetweeted(true);
            setRetweets(retweets + 1)
            client(`/posts/${_id}/toggleRetweet`);
        }
    }

    return (
        <div className="page-tweet">
            {isRetweeted && <span className="page-tweet__retweet"> <Retweet /> {user.username} Retweeted</span>}

            <div className="page-tweet__container">

                <div className="page-tweet__avatar">
                    <Avatar className="" size='medium' onClick={() => history.push(`/${user.username}`)} />
                </div>
                <div className="page-tweet__body">
                    <div className="tweet-info-user">
                        <TextBody bold onClick={() => history.push(`/${user?.username}`)}>{user?.username}</TextBody>
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
                                <Link key={tag} to={`/explore?tag=${tag}`} className="tweet--tag">
                                    {`#${tag}`}
                                </Link>
                            ))
                            : null}
                    </div>

                    <Link to={`/${handle}/status/${_id}`} className="tweet__image">
                        <img src={files?.length && files[0]} alt="" />
                    </Link>


                    <div className="page-tweet__body--stats">
                        <div>
                            <Button icon href={`/${handle}/status/${_id}`}>
                                <Reply />
                            </Button>
                            <span>{comments.length > 0 && comments.length}</span>
                        </div>

                        <div className={retweeted ? "isRetweet" : ""}>
                            <Button icon onClick={handleToggleRetweet} >
                                <Retweet />
                            </Button >
                            <span>{retweets}</span>
                        </div>

                        <div className={likedState ? "isLiked" : ""} >
                            <Button icon onClick={handleToggleLike}>
                                {likedState ? <LikeFill /> : <Like />}
                            </Button>
                            <span>{likesState}</span>
                        </div>
                        <Button icon href={`/${handle}/status/${_id}`}>
                            <Share />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet
