import React from 'react'

import { Search } from '../icons';

import './SearchBox.css';

function SearchBox({ className, size = 'medium', ...props }) {
    return (
        <div className={["search-bar", `search-bar--${size}`, className].join(" ")}>
            <Search />
            <input {...props} type="text" placeholder="Search Twitter" />
        </div>
    )
}

export default SearchBox
