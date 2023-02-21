import React, { createContext, Component } from 'react';
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee', btncls: 'btn btn-dark' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555', btncls: 'btn btn-secondary' },
        bgcolor: "#555"
    }
    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        });
    }
    alertTest = () => {
        const time = new Date();
        alert(time.toLocaleTimeString());
    }
    
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme,alertTest: this.alertTest }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;