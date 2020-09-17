import React, { useState } from 'react'

import './Menu.css'

function Menu({ title, children }) {

    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => setOpen(!open)} className="menu">
            <div className="menu__title">
                {title}
            </div>

            {
                open && (
                    <div className="menu__body">
                        {children}
                    </div>
                )
            }
        </div>
    )
}

export default Menu
