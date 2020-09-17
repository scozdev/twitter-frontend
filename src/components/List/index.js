import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import './List.css';

function List({ title, icon, children, src }) {
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
                <Link to={src}>Show more</Link>
            </div>
        </div>
    )
}

export default List
