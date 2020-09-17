import React from 'react'
import './title.css'

function TextTitle({ bold, xbold, children, title, className, ...props }) {
    return (
        <h2
            className={['text-title', bold && "text-title--bold", xbold && 'xbold', className].join(' ')}
            {...props}>
            {children}
        </h2>
    )
}

export default TextTitle
