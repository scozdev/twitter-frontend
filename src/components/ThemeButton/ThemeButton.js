import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './ThemeButton.css';

function ThemeButton({ type = 'button', primary, size, className, children, ...props }) {
    const mode = primary ? 'themebutton--primary' : 'themebutton--secondary';
    return (
        <Button
            type={type}
            className={['themebutton', `themebutton--${size}`, props.disabled && 'theme-button__disabled', mode, className].join(' ')}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ThemeButton

ThemeButton.propTypes = {
    primary: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
};

ThemeButton.defaultProps = {
    primary: false,
    size: 'small',
    onClick: undefined,
};
