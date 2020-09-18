import React, { useContext, useEffect } from 'react'

import { FeedContext } from '../../context/FeedContext'

import Header from '../../components/Header/Header'
import TextTitle from '../../components/Text/title'
import FollowSuggestion from '../../components/FollowSuggestion';

import './Lists.css'
import Loading from '../../components/loading';

function Lists() {

    const { whoFollow } = useContext(FeedContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header border>
                <TextTitle xbold>Connect</TextTitle>
            </Header>

            {whoFollow?.map((user) => (
                <div key={user._id} className="list__follow">
                    <FollowSuggestion key={user._id} user={user} />
                </div>
            ))}

            <div className='loading'>
                {!whoFollow && <Loading />}
                {whoFollow?.length === 0 && 'Takip edecek başka biri kalmadı .'}
            </div>
        </>
    )
}

export default Lists
