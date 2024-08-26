import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className="app-download" id="app-download">
            <p>For Better Experience Download Our App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="png" />
                <img src={assets.app_store} alt="png" />
            </div>
        </div>
    )
}

export default AppDownload