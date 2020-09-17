import React, { useContext, useEffect, useState } from 'react'

import Header from '../../components/Header/Header'
import TextTitle from '../../components/Text/title'


import './More.css'

import { ThemeContext } from '../../context/ThemeContext'

import ThemeButton from '../../components/ThemeButton/ThemeButton'
import Button from '../../components/Button/Button'

const THEME = {
    light: 'Light',
    dim: 'Dim',
    dark: 'Dark'
}

function More() {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = (theme) => {
        setTheme(theme)
        localStorage.setItem('THEME', theme)
    }


    return (

        <>
            <Header border>
                <TextTitle xbold>More</TextTitle>

            </Header>
            <div className="more-page">

                <div>
                    {['light', 'dim', 'dark'].map((th) => (

                        <ThemeButton
                            key={th}
                            checked={th === theme}
                            name="theme"
                            onClick={(e) => changeTheme(th)}
                        >
                            {THEME[th]}
                        </ThemeButton>

                    ))}
                </div>
            </div>
        </>
    )
}

export default More
