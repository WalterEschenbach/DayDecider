import React, {useEffect, useState} from 'react'
import {Route, Redirect} from 'react-router-dom'
import checkAuth from '../../../utils/checkAuth'



export default function PrivateRoute({comp: Component, ...rest }) {
    const [authStatus, setAuthStatus] = useState(null)
   
    checkAuth()
    .then(result => {
        setAuthStatus(result)
    })
  
    useEffect(()=>{
        console.log("AuthStatus:", authStatus)
    },[authStatus])

    return (
        <Route {...rest} render={(props) => {
            switch(authStatus){
                case null:{
                    return <></>
                }
                case true: {
                    return <Component {...props}/>;
                }
                case false:{
                    return <Redirect to={{
                        pathname: '/Login',
                        state: {
                            from: props.location
                        }
                    }}/>
                }
            }
        }}
        />
    )
}