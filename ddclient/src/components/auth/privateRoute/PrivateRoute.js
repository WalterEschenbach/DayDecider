import React, {useEffect, useState, useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import UserProvider from '../UserProvider'

export default function PrivateRoute({comp: Component, ...rest }) {
    const [authStatus, setAuthStatus] = useState(null)

    const data = useContext(UserProvider.context)

    
    useEffect(()=>{
        if(data?.data) setAuthStatus(true)
        else if(data===false) setAuthStatus(false)
    },[data])

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
                default: {
                    return <></>
                }
            }
        }}
        />
    )
}