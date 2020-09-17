import React, { useEffect } from 'react'


import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import { More, Options } from '../../components/icons'
import TextTitle from '../../components/Text/title'

import './Notifications.css'

function Notifications() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header border>
                <TextTitle xbold>Notifications</TextTitle>
                <Button icon>
                    <Options />
                </Button>
            </Header>

            <div style={{ height: '1000px' }}></div>
        </>
    )
}

export default Notifications
