import React, { useContext, useEffect, useState } from 'react'

import './Extra.css'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import Loading from '../loading'

import { More, Options } from '../icons'
import SearchBox from '../SearchBox/SearchBox'

import { client } from '../../utils'
import { UserContext } from '../../context/UserContext'

function Extra() {


    const { user } = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [tags, setTags] = useState([]);

    const [loading, setLoading] = useState(true)
    const [loadingTags, setLoadingTags] = useState(true)

    useEffect(() => {
        client("/users")
            .then((response) => {
                setUsers(response.data.filter((user) => !user.isFollowing));
                setLoading(false);
            });


        client("/posts/tags")
            .then((response) => {
                setTags(response.data);
                setLoadingTags(false);
            });

    }, []);

    return (
        <section className="layout-explore">
            <SearchBox className="layout-explore--search" />

            <div className="layout-explore--stick">
                <List
                    title={`Who to follow`}
                    icon={<Options />}
                >
                    {users.slice(0, 4).map((user) => (
                        <FollowSuggestion key={user._id} user={user} />
                    ))}

                    <div style={{ textAlign: "center" }}>
                        {loading && <Loading />}
                        {!loading && users.length === 0 && 'Takip edecek başka biri kalmadı .'}
                    </div>
                </List>

                <List
                    title="Trends for you"
                >
                    {tags.map((tag) => (
                        <News key={tag} tag={tag} />
                    ))}
                    <div style={{ textAlign: "center" }}>
                        {loadingTags && <Loading />}
                        {!loadingTags && tags.length === 0 && 'Henüz etiket yok :/ .'}
                    </div>
                </List>
            </div>
        </section>
    )
}

export default Extra
