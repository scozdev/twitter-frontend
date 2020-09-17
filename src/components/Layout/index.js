import React, { useEffect } from 'react'

import CONST from '../../constants'
import useWindowSize from '../../hooks/useWindowSize'

import Extra from './Extra'
import Sidebar from './Sidebar'
import TimeLine from './TimeLine'

import './index.css'
import MobileSidebar from '../MobileSidebar'

function Layout({ children }) {
    const size = useWindowSize()

    return (
        <div className="layout">
            {size.width <= 500 && <MobileSidebar />}
            {size.width > 500 && <Sidebar flat={size.width < CONST.DESKTOP_SIZE} />}
            <TimeLine>{children}</TimeLine>
            {size.width > CONST.TABLET_SIZE && <Extra />}
        </div>
    )
}

export default Layout
