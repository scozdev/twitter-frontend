import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import News from '../../components/News'
import Tweet from '../../components/Tweet/Tweet'
import { More } from '../../components/icons'
import SearchBox from '../../components/SearchBox/SearchBox'
import { client } from '../../utils'

import './Explore.css'
import Loading from '../../components/loading'

function Explore({ location }) {

    const [tagsTweet, setTagsTweet] = useState(null)
    const [tags, setTags] = useState(null)
    const [tagsLoading, setTagsLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0);


        if (location.search) {
            client(`/posts${location.search}`)
                .then((response) => {
                    setTagsTweet(response.data);
                    setTags(null);
                });

        } else {
            client("/posts/tags")
                .then((response) => {
                    setTags(response.data);
                    setTagsTweet(null);
                });
        }

        setTagsLoading(false);

    }, [location.search])

    return (
        <>
            <Header border>
                <SearchBox size='large' className='explore-page__search' />
                <Button icon><More /></Button>
            </Header>

            {tagsTweet?.map(post => (
                <Tweet key={post._id} post={post} />
            ))}

            {tags?.map(tag => (
                <News className="explore--tags" key={tag} tag={tag} />
            ))}

            <div style={{ textAlign: "center" }}>
                {tagsLoading && <Loading />}
                {!tagsLoading && tagsTweet?.length === 0 && 'Tweet yok :/ .'}
            </div>


        </>
    )
}

export default Explore
