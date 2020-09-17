import React, { useEffect } from 'react'


import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import { Options } from '../../components/icons'
import TextTitle from '../../components/Text/title'

import './Bookmarks.css'


function Notifications() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [])


    return (
        <div>
            <Header border>
                <TextTitle xbold>Bookmarks</TextTitle>
                <Button icon>
                    <Options />
                </Button>
            </Header>

        </div>
    )
}

export default Notifications
