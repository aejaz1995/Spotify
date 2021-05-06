import React from 'react'
import "./SongRow.css"

const SongRow = ({track}) => {



    return (
        <div className="songRow">
            
            <img className="songRow__album" src={track.album?.images[0]?.url}/>
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist) =>artist.name).join(",")}</p>
                {track.album.name}
            </div>
        </div>
    )
}

export default SongRow
