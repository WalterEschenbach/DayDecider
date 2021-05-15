import React, { createContext, useState, useEffect } from 'react'
import Settings from '../../config/settings'
import axios from 'axios'

const context = createContext(null)

const UserProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const transport = axios.create({withCredentials: true})
        const tLink = `${Settings.domain.server}/user/find`

        transport.get(tLink)
        .then(res=>{
            setUser(res)
        })
        .catch(err=>{
            setUser(false)
            console.log(err)
        })
    }, [])

    return (
        <context.Provider value={user}>
            {children}
        </context.Provider>
    )
}

UserProvider.context = context;


export default UserProvider
