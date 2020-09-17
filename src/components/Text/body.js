import React from 'react'

import './body.css'

function TextBody({ bold, children, gray, className, ...props }) {
    return (
        <span
            className={['text-body', className, gray && 'gray', bold && "bold"].join(' ')}
            {...props}>
            {children}
        </span>
    )
}

export default TextBody
