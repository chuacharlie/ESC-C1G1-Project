import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Router>
      <LoginPage />
    </Router>
  );
}

export default App;
