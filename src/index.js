import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBxPrIEahb8mZO9XQ4T0Jwavt2R1r5_LaY';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { videos: [] };

        this.fetchVideos();
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
    
    fetchVideos() {
        YTSeach({ key: API_KEY, term: 'surfboards'}, videos => {
            this.setState({ videos });
        });
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));