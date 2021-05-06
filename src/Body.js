import React from 'react'
import "./Body.css"
import Header from "./Header"
import {useContextValue} from "./AppContextProvider"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import FavoriteIcon from "@material-ui/icons/Favorite"
import SongRow from "./SongRow"

const Body = ({spotify}) => {

    const [{discover_weekly},dispatch] = useContextValue()
    console.log(discover_weekly,"discover weekly")
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                    <img src="me.jpg" alt=""/>
                    <div className="body__infoText">
                        <strong>PLAYLISTS</strong>
                        <h2>Discover Weekly</h2>
                        <p>{discover_weekly?.description}</p>
                    </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon  className="body__shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                {/* list of song */}
                
                {discover_weekly?.tracks.items.map((item) =>(

                    <SongRow track={item.track}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Body
