import React from 'react'

import { Search } from '../icons';

import './SearchBox.css';

function SearchBox({ icon = true, text = "Search Twitter", className, size = 'medium', ...props }) {
    return (
        <div className={["search-bar", `search-bar--${size}`, className].join(" ")}>
            {icon && <Search />}
            <input {...props} type="text" placeholder={text} />
        </div>
    )
}

export default SearchBox
