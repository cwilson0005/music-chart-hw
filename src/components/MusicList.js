import React from "react";

const MusicList = (props) => {
  console.log(props.topSongs);
  return(
    <div className="music-list">
      <h3>Top 20!</h3>
    </div>
  )
}

export default MusicList;
