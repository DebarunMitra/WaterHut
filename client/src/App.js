import React,{Fragment, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import CreateConsumer from './components/consumer-forms/CreateConsumer';
import EditConsumer from './components/consumer-forms/EditConsumer';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';


//redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';




if(localStorage.token){
  setAuthToken(localStorage.token);
}


////now all our component can access the state
const App=()=>{
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);

  return (
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Alert />
      <section className="container">
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/create-consumer' component={CreateConsumer} />
              <PrivateRoute exact path='/edit-consumer' component={EditConsumer} />
          </Switch>
      </section>
      </Fragment>
  </Router>
  </Provider>
)};

export default App;
