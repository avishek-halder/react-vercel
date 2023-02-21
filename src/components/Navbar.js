import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        // console.log(this.context); 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{ background: theme.ui, color: theme.syntax }} className="mb-2">
                <h1>Context App</h1>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a href="#" className="nav-link" style={{color: theme.syntax}}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" style={{color: theme.syntax}}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" style={{color: theme.syntax}}>Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;