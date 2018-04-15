/**
 * @description import react and Component
 */
import React, { Component } from 'react';

/**
 * @description import react-router-dom
 */
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * @description Main Component gonna wrap all components
 */
class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <h1>Working</h1>
                </div>
            </Router>
        )
    }
}

export default App;