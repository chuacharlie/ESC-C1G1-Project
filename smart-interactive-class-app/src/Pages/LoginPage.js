import React from "react";
import {Link} from "react-router-dom";


const LoginPage = () => { //this name here to export
  return (
    <div>
      <h2>This is login page/first page</h2>
      <h1>signat</h1> 
      <Link to = "/ProfDashboard"> To ProfDashboard  </Link> 
      <small>    H O W T O B L A N K                    </small>
      <Link to ="/StudentDashboard"> To StudentDashboard</Link>
    </div>
  );
}

export default LoginPage;

//switch to master than commit to master