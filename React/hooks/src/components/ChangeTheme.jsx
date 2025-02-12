import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChangeTheme = () => {
    const {theme,setTheme}= useContext(ThemeContext);
    function toggleTheme(){
        if(theme==='light')
        {
            setTheme('dark');
        }
        else{
            setTheme('light')
        }
    }
  return (
    <div>
        <button onClick={toggleTheme}>Hello</button>
    </div>
  )
}

export default ChangeTheme