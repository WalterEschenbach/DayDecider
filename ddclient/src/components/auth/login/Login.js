import React from 'react'
import {Button} from 'react-bootstrap'
import Settings from '../../../config/settings'

import './login.css'

export default function Login() {
    const gLink = `${Settings.domain.client}/auth/google`

    return (
        <div className="sContainer">
            <Button href={gLink}>Google Sign In</Button>
        </div>
    )
}