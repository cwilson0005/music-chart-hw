import React from "react";
import MusicItem from "./MusicItem"

const MusicList = (props) => {
  // console.log("props:", props.topSongs);
  // const options = props.topSongs.map((song) => {
  //   return (
  //     <div className="music-list">
  //       <h3>Top 20!</h3>
  //       <MusicItem
  //         // title={props.topSongs.title}
  //       />
  //     </div>
  //   )
  // })
// props.topSongs is all 20 songs
  const allSongs = props.topSongs.map((song, index)=>{
    return <MusicItem title={song['im:name']} key={index}/>
  });

  return(
    <div className="music-list">
      <h3>Top 20!</h3>
      {allSongs}
    </div>
  )
}

export default MusicList;
