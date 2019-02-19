import React, {Component} from "react";
import MusicList from "../components/MusicList"

class MusicBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      topSongs: []
    };
    // this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      // data.feed.entry is the top 20 songs
      this.setState({topSongs: data.feed.entry})
    });
    request.send();
  }

  render(){
    return (
      <div>
        <h2>The Music Box</h2>
        <MusicList topSongs={this.state.topSongs}/>
      </div>
    );
  }
}

export default MusicBox;
