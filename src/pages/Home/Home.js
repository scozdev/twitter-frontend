import React, { useContext, useEffect, useState } from 'react'

import Header from '../../components/Header/Header'
import Loading from '../../components/loading'
import * as Icons from '../../components/icons'
import Tweet from '../../components/Tweet/Tweet'
import TweetEditor from '../../components/TweetEditor/TweetEditor'

import { FeedContext } from '../../context/FeedContext'
import { client } from '../../utils'

import './Home.css'
import { toast } from 'react-toastify'
import TextBody from '../../components/Text/body'
import Button from '../../components/Button/Button'
import TextTitle from '../../components/Text/title'

function Home() {

    const { feed, setFeed } = useContext(FeedContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client("/users/feed")
            .then((res) => {
                setFeed(res.data);


            })
            .catch(res => toast.error(res));

        setLoading(false);
    }, [])

    return (
        <div className="">
            <Header border>
                <TextTitle xbold>Home</TextTitle>
                <Button icon>
                    <Icons.TimelineProp />
                </Button>
            </Header>
            <TweetEditor />


            {feed?.map((post) => (
                <Tweet key={post._id} post={post} />
            ))}


            {loading &&
                <div className="loading">
                    <Loading />
                </div>
            }

            { !feed.length && !loading && (
                <div className="loading">
                    <TextTitle>Başkalarının Gönderilerini Görmek İçin Onları Takip Et..</TextTitle>
                </div>
            )}

        </div>
    )
}

export default Home
