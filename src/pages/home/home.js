import React from 'react';
import './index.css';
import logo from './logo.svg';

/**
 * Default Home Page //TODO Needs to be replaced
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
    const title = 'React App';
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{title}</p>
        </header>
    );
}

export default Home;
