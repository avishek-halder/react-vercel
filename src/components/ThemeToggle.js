import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        //const { toggleTheme } = this.context;
        const { isLightTheme, light, dark, toggleTheme } = this.context;
        const theme = isLightTheme ? light : dark; 
        return (
            <div className="mt-2" style={{background: theme.ui}}>
            <button onClick={toggleTheme} className={theme.btncls}>Toggle</button>
            </div>
          );
    }
}
 
export default ThemeToggle;