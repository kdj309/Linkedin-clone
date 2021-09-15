import React from 'react'
import { Route } from 'react-router'
import { useAuth } from './ContextProvider'
import { Redirect } from 'react-router'
export default function Customizedroute({component:Component,...rest}) {
    const { currentUser } = useAuth()
    return (
        <Route {...rest}
        render={props=>{
                return currentUser?<Component {...props}></Component>:<Redirect to='/signin'></Redirect>
        }}>
            
        </Route>
    )
}

