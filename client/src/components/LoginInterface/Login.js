import React, {
  Component
} from 'react';
import Logo from '../../waterHut.png';
import './Login.style.css';

class Login extends Component {

  render() {
    return ( <
      form className = "p-5" >
      <
      img className = "mb-4"
      src = {
        Logo
      }
      alt = ""
      width = "100"
      height = "100" / >
      <
      h1 className = "h1 mb-3 font-weight-normal title" > WaterHut < /h1> <
      h1 className = "h5 mb-3 font-weight-normal quote" > Smart Water Solution < /h1> <
      button className = "col-12 mt-4 button"
      type = "button" > Sign in with Google < /button> <
      p className = "mt-5 mb-3 text-muted" > WaterHut & copy; 2019 - 2020 < /p> <
      /form>
    );
  }
}

export default Login;
