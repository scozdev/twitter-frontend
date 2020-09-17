import React from 'react'

import Button from '../Button/Button'
import TextTitle from '../Text/title'

import './Header.css'

function Header({ children, border, className }) {
    return (
        <div className={['timeline-header', border && 'border', className].join(' ')}>
            {children}
        </div>
    )
}

export default Header
