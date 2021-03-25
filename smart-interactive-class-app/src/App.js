import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
//import notfound from "./Pages/notfound";
import ProfDashboard from "./Pages/ProfDashboard"
import React, {Component} from "react";
import StudentDashboard from "./Pages/StudentDashboard"
import ProfPresentation from "./Pages/ProfPresentation"
import StudentSlides from "./Pages/StudentSlides"
import PostLectureRating from "./Pages/PostLectureRating"

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
      <Route exact path = "/ProfPresentationURL" component = {ProfPresentation} />
      <Route exact path = "/StudentSlidesURL" component = {StudentSlides} />
      <Route exact path = "/PostLectureURL" component = {PostLectureRating} />
      <Redirect to = "/404"/>     

     
      </Switch>
    </Router>
  );
}
}

export default App;
