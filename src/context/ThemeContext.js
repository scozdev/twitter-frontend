import React, { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {

    const localSt = localStorage.getItem("THEME");
    const [theme, setTheme] = useState(localSt ? localSt : null)


    useEffect(() => {
        const $html = document.querySelector('html')
        $html.classList.remove('light')
        $html.classList.remove('dark')
        $html.classList.remove('dim')
        $html.classList.add(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}