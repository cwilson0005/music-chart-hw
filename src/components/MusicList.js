import React from "react";
import MusicItem from "./MusicItem"

const MusicList = (props) => {
  console.log("props:", props.topSongs);
  const options = props.topSongs.map((song) => {
    return (
      <div className="music-list">
        <h3>Top 20!</h3>
        <MusicItem
          // title={props.topSongs.title}
        />
      </div>
    )
  })
// props.topSongs is all 20 songs
  return(
    <div className="music-list">
      <h3>Top 20!</h3>
      <MusicItem
        // title={props.topSongs.title}
      />
      console.log(props.topSongs.title.label);
    </div>
  )
}

export default MusicList;
