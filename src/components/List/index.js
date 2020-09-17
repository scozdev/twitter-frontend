import React from 'react'
import Button from '../Button/Button';

import './List.css';

function List({ title, icon, children }) {
    return (
        <div className="list">
            <div className="list__item">
                <span className="list__title">{title}
                    <Button icon>{icon && icon}</Button>
                </span>
            </div>

            <div className="list__body">
                {children}
            </div>

            <div className="trend-more">
                <a href="/#">Show more</a>
            </div>
        </div>
    )
}

export default List
