import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { RouterProvider } from 'react-router-dom'
import store from './Component/redus/store'
import CounterR from './CounterR'
import {Provider} from 'react-redux'


createRoot(document.getElementById("root")).render(

    <StrictMode>
        <Provider store={store}>
         <CounterR/>
            <App />
        </Provider>
    </StrictMode>


)