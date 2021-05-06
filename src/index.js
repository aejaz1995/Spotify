import React from 'react'
import ReactDOM from 'react-dom'
import  {App } from "./App"
// import PostApp from './Components/PostApp'
import {AppContextProvider} from "./AppContextProvider"
import reducer,{initialState} from "./reducer"

ReactDOM.render(
    <AppContextProvider initialState = {initialState} reducer={reducer}>
            <App />
    </AppContextProvider>
, document.getElementById('root'))