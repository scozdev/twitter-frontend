import React, { useContext } from 'react'

import './Sidebar.css'

import Navigation from '../Navigation/Navigation'
import ThemeButton from '../ThemeButton/ThemeButton'
import ProfileBox from '../ProfileBox/ProfileBox'
import Menu from '../Menu/Menu'
import { Tweet } from '../icons'
import FollowSuggestion from '../FollowSuggestion'

import { UserContext } from "../../context/UserContext";

function Sidebar({ flat }) {

    const { setUser, user } = useContext(UserContext);



    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    return (
        <div className="sidebar">
            <Navigation flat={flat} />

            <div className="sidebar__tweet">
                <ThemeButton primary size="large" full={!flat} >
                    {flat ? <Tweet /> : 'Tweet'}
                </ThemeButton>
            </div>


            <div className="sidebar__profile">
                <Menu
                    title={<ProfileBox flat={flat} user={user} />}
                >
                    <FollowSuggestion icon={false} user={user} />
                    <span onClick={handleLogout}>Log out</span>
                </Menu>
            </div>
        </div>
    )
}

export default Sidebar
