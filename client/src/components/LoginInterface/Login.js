import React ,{Component} from 'react';
import Logo from '../../waterHut.png';

class Login extends Component{

  render(){
    return (
      <form className="p-5">
           <img className="mb-4" src={Logo} alt="" width="100" height="100" />
           <h1 className="h1 mb-3 font-weight-normal text-primary">WaterHut</h1>
           <h1 className="h5 mb-3 font-weight-normal text-info">Smart Water Solution</h1>
           <button className="col-2 m-auto mb-3 btn btn-primary btn-fixed" type="submit">Sign in with Google</button>
           <p className="mt-5 mb-3 text-muted">WaterHut &copy; 2019-2020</p>
      </form>
    );
  }
}

export default Login;
