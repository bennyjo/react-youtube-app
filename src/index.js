import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
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
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
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