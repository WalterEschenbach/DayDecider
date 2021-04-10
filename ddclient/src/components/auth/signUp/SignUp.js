import React from 'react'
import {Button} from 'react-bootstrap'
import Settings from '../../../config/settings'
import './signup.css'

export default function SignUp() {
    const gLink = `${Settings.domain.server}/auth/google`

    return (
        <div className="sContainer">
            <Button href={gLink}>Google Sign In</Button>
        </div>
    )
}
