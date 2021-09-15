import React, { useState, useEffect } from 'react'
import { useContext, createContext } from 'react'
import { auth, provider } from './firebase'
export let Context = createContext()
function useAuth() {
    return useContext(Context)
}
export default function ContextProvider({ children }) {
    const [currentUser, setcurrentUser] = useState("")
    const [loading, setloading] = useState(true)
    function Signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut()
    }
    function login(email,password) {
        return auth.signInWithEmailAndPassword(email,password)
    }
    function forgotpswrd(email) {
        return auth.sendPasswordResetEmail(email)
    }
    function GoogleAuth() {
        return auth.signInWithPopup(provider)
    }
    useEffect(() => {
        let unsubscribe = auth.onAuthStateChanged((user) => {
            setcurrentUser(user)
            setloading(false)
        })
        return unsubscribe
    }, [])
    let value = {
        Signup,
        logout,
        forgotpswrd,
        GoogleAuth,
        currentUser,
        setcurrentUser,
        login
    }
    return (
        <Context.Provider value={value}>
            {!loading && children}
        </Context.Provider>
    )
}
export { useAuth }