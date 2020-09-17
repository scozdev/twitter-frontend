import React from 'react'
import PropTypes from 'prop-types';

import './Avatar.css'

function Avatar({ className, border, size, src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png", alt, ...props }) {
    return (
        <div className={['avatar', `avatar--${size}`, border && "avatar-border", className].join(' ')} {...props}>
            <img src={src} alt={alt} />
        </div>
    )
}

Avatar.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    alt: PropTypes.string,
};

Avatar.defaultProps = {
    size: 'small',
    alt: "Profile photo"
};


export default Avatar
