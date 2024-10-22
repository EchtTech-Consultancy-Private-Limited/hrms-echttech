import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider, useSelector } from 'react-redux'
import store from './reduxapis/store'
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter } from 'react-router-dom'


const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transition: transitions.FADE,
    font:11,
  }
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // <React.StrictMode>
        <Provider store={store} >
            <AlertProvider template={AlertTemplate} {...options}>
                    <App />
            </AlertProvider>
        </Provider>
    // </React.StrictMode>
)
