import React, { useContext } from 'react'
import { useLocation as locations } from "react-router-dom";

import { Home, Search, HomeFill, ProfileFill, Profile, ListsFill, Lists } from '../icons'
import Button from '../Button/Button'

import './style.css'
import { UserContext } from '../../context/UserContext';

function MobileSidebar() {

    let router = locations();
    const { user } = useContext(UserContext)

    return (
        <div className='mobile-sidebar'>
            <Button gray icon href='/'>
                {router.pathname == '/' ? <HomeFill className='s-selected' /> : <Home />}
            </Button>
            <Button gray icon href='/explore'>
                {router.pathname == '/explore' ? <Search className='s-selected' /> : <Search />}
            </Button>
            <Button gray icon href='/lists'>
                {router.pathname == '/lists' ? <ListsFill className='s-selected' /> : <Lists />}
            </Button>
            <Button gray icon href={`/${user.username}`}>
                {router.pathname == `/${user.username}` ? <ProfileFill className='s-selected' /> : <Profile />}
            </Button>
        </div>
    )
}

export default MobileSidebar
