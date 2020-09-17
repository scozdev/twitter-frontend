import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Tweet from '../../components/Tweet/Tweet'
import { More } from '../../components/icons'
import SearchBox from '../../components/SearchBox/SearchBox'
import { client } from '../../utils'

import './Explore.css'
import Loading from '../../components/loading'

function Explore({ location }) {

    const [tags, setTags] = useState(null)
    const [tagsLoading, setTagsLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0);

        client(`/posts${location.search}`)
            .then((response) => {
                setTags(response.data);
                setTagsLoading(false);
                console.log(response.data)
            });


    }, [location.search])

    return (
        <>
            <Header border>
                <SearchBox size='large' className='explore-page__search' />
                <Button icon><More /></Button>
            </Header>

            {tags?.map(post => (
                <Tweet key={post._id} post={post} />
            ))}

            <div style={{ textAlign: "center" }}>
                {tagsLoading && <Loading />}
                {tags?.length === 0 && 'etiket yok :/ .'}
            </div>


            <div style={{ height: '1000px' }}></div>

        </>
    )
}

export default Explore
