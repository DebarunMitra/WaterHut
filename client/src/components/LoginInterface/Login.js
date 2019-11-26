import React, {
  Component
} from 'react';
import Logo from '../../waterHut.png';
import {connect} from 'react-redux';
import './Login.style.css';
import '../../App.css';

class Login extends Component {

  render() {
    return (
      <div className="App">
        <form id="gLogin" className = "p-5" >
          <img className = "mb-4" src = {Logo} alt = "" width = "100" height = "100" / >
            <h1 className = "h1 mb-3 font-weight-normal title" > WaterHut < /h1>
            <h1 className = "h5 mb-3 font-weight-normal quote" > Smart Water Solution < /h1>
              <a className = "col-12 mt-4 button" role="button" href="/auth/google">Sign in with Google</a>
            <p className = "mt-5 mb-3 text-muted" > WaterHut & copy; 2019 - 2020 < /p>
        </form>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    user:state.auth
  };
}

export default connect(mapStateToProps)(Login);
