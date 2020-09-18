import React, { useContext, useEffect, useState } from 'react'
import { useLocation as locations } from "react-router-dom";

import './Extra.css'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import Loading from '../loading'

import { More, Options } from '../icons'
import SearchBox from '../SearchBox/SearchBox'

import { client } from '../../utils'
import { UserContext } from '../../context/UserContext'
import { FeedContext } from '../../context/FeedContext'

function Extra() {

    let router = locations();

    const { whoFollow, tags } = useContext(FeedContext);

    useEffect(() => {

    }, []);

    return (
        <section className="layout-explore">
            <SearchBox className="layout-explore--search" />

            <div className="layout-explore--stick">

                {router.pathname !== '/explore' && <List
                    title="Trends for you"
                    src="explore"
                >
                    {tags.map((tag) => (
                        <News key={tag} tag={tag} />
                    ))}
                    <div style={{ textAlign: "center" }}>
                        {!tags && <Loading />}
                        {tags?.length === 0 && 'Henüz etiket yok :/ .'}
                    </div>
                </List>}


                {router.pathname !== '/lists' &&
                    <List
                        title={`Who to follow`}
                        icon={<Options />}
                        src="lists"
                    >
                        {whoFollow?.slice(0, 4).map((user) => (
                            <FollowSuggestion key={user._id} user={user} />
                        ))}

                        <div style={{ textAlign: "center" }}>
                            {!whoFollow && <Loading />}
                            {whoFollow?.length === 0 && 'Takip edecek başka biri kalmadı .'}
                        </div>
                    </List>
                }


            </div>
        </section>
    )
}

export default Extra
