import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Test from './component/test/test';
import Layout from './pages/creative-design/cr-layout';
// import Navbar from './component/navbar-component/navbar.component';


const Routes = () => {

    //return main component
    return(
       
        <BrowserRouter>
         {/* <Navbar /> */}
            <Switch>
                <Route exact path ="/" component ={App} />
                <Route exact path = "/test" component ={Test} />
                <Route exact path ="/demo" component ={Layout} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;