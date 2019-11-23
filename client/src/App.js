import React, {
  Component
} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import NavBar from './components/AppNavBar/NavBar';
import Login from './components/LoginInterface/Login';


//    <NavBar />

class App extends Component {

  render() {
    return ( <
      div className = "App" >
      <
      Login / >
      <
      h6 > WaterHut < /h6> <
      /div>
    );
  }
}

export default App;
