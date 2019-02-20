import React from "react";

const MusicItem = (props) => {

  if (!props.title){
    return null;
  }

  return(
    <div className="music-item">
      {props.title.label}
    </div>
  )
}

export default MusicItem;
