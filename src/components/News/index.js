import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import TextBody from '../Text/body';

import './News.css';

function List({ tag }) {
    return (
        <Link to={`explore?tag=${tag}`} className="extra__news">
            <TextBody bold>{`#${tag}`}</TextBody>
            <TextBody gray>{`#${tag}`}</TextBody>
        </Link>
    )
}

export default List
