import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

function LinkButton({ href, children, ...props }) {
    return (
        <Link to={href} {...props}>
            {children}
        </Link>
    )
}

function BaseButton({ children, ...props }) {
    return (
        <button type="button" {...props}>
            {children}
        </button>
    )
}

function Button({ full = false, icon, color, isLiked, children, className, ...props }) {
    const Comp = props.href ? LinkButton : BaseButton

    return (
        <Comp
            className={['button', full && "fullWidth", icon && "button-icon", className].join(' ')}
            {...props}
        >
            {children}
        </Comp>
    )
}

export default Button