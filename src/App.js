import React from 'react';
import './App.css';
import Login from "./Login"
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Player"
import {useContextValue} from "./AppContextProvider"

const  spotify = new SpotifyWebApi()

const  App=()=> {

  // const [token,setToken] = React.useState(null)
  const [{user,token}, dispatch] = useContextValue()

  React.useEffect(()=>{
    const  hash = getTokenFromUrl()
    // window.location.hash= ""
    
    
    if(hash.access_token)
    {
      // setToken(hash.access_token)

      dispatch({type:"SET_TOKEN",token:hash.access_token})
      spotify.setAccessToken(hash.access_token)
      spotify.getMe().then(user => {
        
        dispatch({type: 'SET_USER',user:user})
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({type: 'SET_PLAYLISTS', playlists:playlists})
      })
    }

    spotify.getPlaylist("5T7hCuTkBpWcff43O18yOO").then((response)=>{
      dispatch({type:"SET_DISCOVER_WEEKLY",discover_weekly:response})
    })

  }, [])
  console.log(token,"token")

  return (
    <div className="App">
      {
        token ? (<Player spotify={spotify}/>) :(<Login />)
      }
    </div>
  );
}

export  {App};
