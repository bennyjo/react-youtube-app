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
        
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}
                />
            </div>
        );
    }
    
    videoSearch(term) {
        YTSeach({ key: API_KEY, term: term}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));