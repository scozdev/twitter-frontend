import React from 'react'

import './ProfileBox.css'
import { ArrowBottom } from '../icons'
import Button from '../Button/Button'
import TextBody from '../Text/body'
import Avatar from '../Avatar/Avatar'

function ProfileBox({ flat = false, user }) {
    return (
        <Button className="profil-box">
            <Avatar />
            {!flat && (
                <>
                    <div className="profil-box__body">
                        <TextBody bold>{user.username.slice(0, 10)}</TextBody>
                        <TextBody className="profil-box__slug">@{user.username.slice(0, 10)}</TextBody>
                    </div>
                    <ArrowBottom className="profil-box__icon" />
                </>
            )}
        </Button>
    )
}

export default ProfileBox
