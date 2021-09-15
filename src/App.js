import './App.css'
import Body from './components/body'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContextProvider from './components/ContextProvider';
import { useMediaQuery } from "react-responsive";
import MobileApp from './mobilecomponents/MobileApp';
import Forgotpsw from './components/Forgotpsw';
function App() {
  const isSmallMobiles = useMediaQuery({
    query: "(min-device-width: 0px) and (max-device-width:480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  return (
    <>
    {isSmallMobiles && <MobileApp></MobileApp>}
      {isTabletDevice && <>
      <Router>
        <ContextProvider >
          <Switch>
            <Route exact path="/">
              <Navbar></Navbar>
              <Body></Body>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route exact path="/signin">
              <SignIn/>
            </Route>
            <Route exact path="/forgot">
              <Forgotpsw></Forgotpsw>
            </Route>
          </Switch>
        </ContextProvider>
      </Router>
    </>}
    </>
    
    
  );
}

export default App;
