
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "../pages/Home";
import Albums from "../pages/Albums";
import Photos from "../pages/Photos";
import NotFound from '../NotFound';
// import Header from '../components/Header';

class ReactRouter extends React.Component {
  render() {
    return (
        <Router>
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/me/albums' component={Albums} exact={true}/>
                    <Route path='/me/albums/:id' component={Photos} exact={true} />
                    {/* <Route path='/designtool' component={DesignTool} />
                    <Route path='/plingotool' component={PlingoTool} /> */}
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        </Router>

    );
  }
}

export default ReactRouter;