import React, { useContext, useEffect, useState } from 'react'


import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import News from '../../components/News'
import Tweet from '../../components/Tweet/Tweet'
import { More } from '../../components/icons'
import SearchBox from '../../components/SearchBox/SearchBox'
import { client } from '../../utils'

import './Explore.css'
import Loading from '../../components/loading'
import { FeedContext } from '../../context/FeedContext'

function Explore({ location }) {


    const { tags } = useContext(FeedContext);

    const [searchText, setSearchText] = useState("")
    const [tagsTweet, setTagsTweet] = useState(null)

    const tagsFilter = () => {
        return tags.filter((tag => tag.toLowerCase().indexOf(searchText) !== -1))
    }

    useEffect(() => {
        window.scrollTo(0, 0);


        if (location.search) {
            client(`/posts${location.search}`)
                .then((response) => {
                    setTagsTweet(response.data);
                });
        }


    }, [location.search])


    return (
        <>

            <Header border>
                <SearchBox value={searchText} onChange={(e) => setSearchText(e.target.value)} size='large' className='explore-page__search' />
                <Button icon><More /></Button>
            </Header>

            {location.search && tagsTweet?.map(post => (
                <Tweet key={post._id} post={post} />
            ))}

            {!location.search && tagsFilter()?.map(tag => (
                <News className="explore--tags" key={tag} tag={tag} />
            ))}

            <div className='loading'>
                {!tagsTweet && location.search && <Loading />}
                {!tags && !location.search && <Loading />}
                {location.search && tagsTweet && tagsTweet?.length === 0 && 'Tweet yok :/ .'}
            </div>
        </>
    )
}

export default Explore
