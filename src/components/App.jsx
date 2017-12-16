import React from "react";
import ReactDOM from "react-dom";
import Generator from './Generator.jsx'
import { Route, Switch } from 'react-router-dom'

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Switch>
          <Route path="/" exact component={Generator} />
          <Route path="/:badUri" exact component={Generator} />
          <Route path="/:smileys&:delay" component={Generator} />
        </Switch>
      </div>
    );
  } 
}
