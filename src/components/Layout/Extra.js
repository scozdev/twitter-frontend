import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation as locations } from "react-router-dom";

import './Extra.css'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import Loading from '../loading'

import { Options } from '../icons'
import SearchBox from '../SearchBox/SearchBox'

import { UserContext } from '../../context/UserContext'
import { FeedContext } from '../../context/FeedContext'

function Extra() {
    const history = useHistory()
    let router = locations();

    const { whoFollow, tags } = useContext(FeedContext);

    const [searchText, setSearchText] = useState("");


    const handleAddSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            history.push(`/${searchText}`)

            setSearchText('')
        }
    }

    return (
        <section className="layout-explore">

            <SearchBox onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                onKeyPress={handleAddSearch}
                className="layout-explore--search" />

            <div className="layout-explore--stick">

                {router.pathname !== '/explore' && <List
                    title="Trends for you"
                    src="explore"
                >
                    {tags.slice(0, 4).map((tag) => (
                        <News key={tag} tag={tag} />
                    ))}

                    {!tags && <div style={{ textAlign: "center" }}><Loading /> </div>}

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
