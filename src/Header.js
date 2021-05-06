import React from 'react'
import "./Header.css"
import SearchIcon from"@material-ui/icons/Search"
import { Avatar } from "@material-ui/core"
import {useContextValue} from "./AppContextProvider"

const Header = () => {
    
    const [{user},dispatch] = useContextValue()
    console.log(user,"userrrrrrr")

    return (
        <div className="header">
          <div className="header__left">
                <SearchIcon />
                <input placeholder="Search from artists, songs" type="text"/>
          </div>  
          <div className="header__right">
               <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
          </div>  
        </div>
    )
}

export default Header
