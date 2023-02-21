import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='book-list'>
                <ul style={{color: theme.syntax, background: theme.bg}} className="list-group">
                    <li style={{background: theme.ui}} className="list-group-item">1st Book</li>
                    <li style={{background: theme.ui}} className="list-group-item">2nd Book</li>
                    <li style={{background: theme.ui}} className="list-group-item">3rd Book</li>
                </ul>
            </div>
        );
    }
}

export default BookList;