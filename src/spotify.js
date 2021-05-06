export const authEndpoint = "https://accounts.spotify.com.authorize"
// const redirectUri =  "http://localhost:3000/"
// const clientId ="2382e1072a6b4b1689a798efd0d5b25e"

// const scopes= ["user-read-currently-playing",
// "user-read-recently-played",
// "user-read-playback-state",
// "user-top-read",
// "user-modify-playback-state"]

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}
// &response_type=token&show_dialog=true`
export const loginUrl ="https://accounts.spotify.com/en/authorize/?client_id=2382e1072a6b4b1689a798efd0d5b25e&redirect_uri=http:%2F%2Flocalhost:3000%2F&scopes=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true"

export const getTokenFromUrl =()=>{
    return window.location.hash.substring(1).split("&").reduce((initial,item) =>{
        let parts =item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    },{})
}