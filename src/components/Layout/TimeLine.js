import React from 'react'

import './TimeLine.css'

function TimeLine({ children }) {
    return (
        <div className="time-line">
            {children}
        </div>
    )
}

export default TimeLine
