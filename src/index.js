import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBxPrIEahb8mZO9XQ4T0Jwavt2R1r5_LaY';

// Create a new component.
// This component should produce some HTMl
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML
// and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));