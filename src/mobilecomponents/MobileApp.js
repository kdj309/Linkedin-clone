import React from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ContextProvider from '../components/ContextProvider';
import Linkedinfotter from './components/Linkedinfooter';
import Forgotpsw from './components/Forgotpsw';
export default function MobileApp() {
    return (
        <>
            <Router>
                <ContextProvider >
                    <Switch>
                        <Route exact path="/">
                            <Navbar></Navbar>
                            <Body></Body>
                            <Linkedinfotter></Linkedinfotter>
                        </Route>
                        <Route exact path="/signup">
                            <SignUp></SignUp>
                        </Route>
                        <Route exact path="/signin">
                            <SignIn />
                        </Route>
                        <Route exact path="/forgot">
                            <Forgotpsw></Forgotpsw>
                        </Route>
                    </Switch>
                </ContextProvider>
            </Router>
        </>
    )
}
