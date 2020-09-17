import React from 'react'

import './Button.css';

import Button from '../Button/Button';

function NavButton({ notify, selected, children, className, ...props }) {
    return (
        <Button
            className={['navButton', selected && "navButton-selected", className].join(' ')}
            {...props}
        >
            {notify > 0 && <span className="notify">{notify}</span>}
            {children}
        </Button>
    )
}

export default NavButton
