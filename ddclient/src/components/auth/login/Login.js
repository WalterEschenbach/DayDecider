import React from 'react'
import {Button} from 'react-bootstrap'
import Settings from '../../../config/settings'
import './login.css'

export default function Login() {
    const gLink = `${Settings.domain.server}/auth/google`
    const tLink = `${Settings.domain.server}/auth/twitter`

    return (
        <div className="sContainer">
            <Button className="gButton" href={gLink}>
                <img src="/btn_google_dark_normal_ios.svg" alt="google-signin"/>
                <h6>Sign in with Google</h6>
            </Button>
            {/* <Button className="tButton" href={tLink}>
                <img src="/btn_google_dark_normal_ios.svg" alt="google-signin"/>
                <h6>Sign in with Twitter</h6>
            </Button> */}
        </div>
    )
}