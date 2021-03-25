import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
//import notfound from "./Pages/notfound";
import ProfDashboard from "./Pages/ProfDashboard"
import React, {Component} from "react";
import StudentDashboard from "./Pages/StudentDashboard"

class App extends Component{
  render(){
  return (
    <Router>
      <Switch>
      <Route exact path = "/" component ={LoginPage}/>

      {// <Route exact path = "/404" component = {notfound}/> /.//
  }
      <Route exact path = "/StudentDashboard" component = {StudentDashboard} />
      <Route exact path = "/ProfDashboard" component = {ProfDashboard} />
      <Redirect to = "/404"/>     

     
      </Switch>
    </Router>
  );
}
}

export default App;
