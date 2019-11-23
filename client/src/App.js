import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import NavBar from './components/AppNavBar/NavBar'

class App extends Component{

  render(){
    return (
      <div className="App">
        <NavBar />
        <h1>WaterHut</h1>
      </div>
    );
  }
}

export default App;
