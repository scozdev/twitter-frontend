import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import { client } from '../../utils';

import Tweet from '../../components/Tweet/Tweet';
import Header from '../../components/Header/Header';
import TextTitle from '../../components/Text/title';
import Loading from '../../components/loading'
import SearchBox from '../../components/SearchBox/SearchBox';
import Comment from '../../components/Comment/Comment';


function TweetDetail({ }) {
    const history = useHistory();
    const params = useParams()

    const [tweet, setTweet] = useState(null);
    const [comments, setComments] = useState(null);
    const [commentText, setCommentText] = useState("");


    const handleAddComment = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (!commentText) return toast.error('Önce yorum yaz..:)')

            client(`/posts/${tweet._id}/comments`, {
                body: { text: commentText },
            }).then((resp) => {
                setComments([...comments, resp.data]);
                toast.success('Yorum yapıldı.')
            });

            setCommentText('')
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        client(`/posts/${params.tweetId}`)
            .then((res) => {
                setTweet(res.data)
                setComments(res.data.comments)
            })
            .catch((err) => toast.error(err))

    }, [params.tweetId])

    return (
        <div>

            <Header border>
                <TextTitle xbold>Tweet</TextTitle>
            </Header>
            {tweet ?
                (
                    <>
                        <Tweet post={tweet} />
                        <SearchBox
                            text='Tweet your reply'
                            icon={false}
                            onChange={(e) => setCommentText(e.target.value)}
                            value={commentText}
                            onKeyPress={handleAddComment}
                        />

                        <div style={{ marginTop: '10px' }}>
                            {comments?.map(comment => (
                                <Comment key={comment._id} comment={comment} />
                            ))}
                        </div>
                    </>
                ) :
                <div className="loading">
                    <Loading />
                </div>
            }

        </div>
    )
}

export default TweetDetail
