import React from 'react'
import {Button} from 'react-bootstrap'
import './signup.css'

export default function SignUp() {
    const gLink = "http://127.0.0.1:3030/auth/google"

    return (
        <div className="sContainer">
            <Button href={gLink}>Google Sign In</Button>
        </div>
    )
}
