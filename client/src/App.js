import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import NavBar from './components/AppNavBar/NavBar';
import Login from './components/LoginInterface/Login';
import About from './components/About/About';
import {connect} from 'react-redux';
import {fetchUserAction} from './actions/authAction';

class App extends Component {
  componentDidMount() {
    this.props.fetch_user();
  }

  render() {
      return (
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/navbar" component={NavBar} />
          <Route exact path="/about" component={About} />
        </BrowserRouter>
      );
    }
}

const mapDispathToProps = (dispatch)=>{
  return {
    fetch_user:()=>{dispatch(fetchUserAction())}
  };
}

export default connect(null,mapDispathToProps)(App);
