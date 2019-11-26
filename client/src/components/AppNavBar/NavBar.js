import React, {Component} from 'react';
import {connect} from 'react-redux';
import Logo from '../../waterHut.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,//for novbar
      firstName:"loading",
      image:""
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentDidMount() {
    if(this.props.user){
            this.setState({
                firstName:this.props.user.firstName,
                image:this.props.user.image
       })
     }
   }

  render() {
    if(!this.props.user){
    // this.props.history.push('/');
      console.log(this.props);
    }
    else{
      console.log(this.props);
    }
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return ( <
      nav className = "navbar navbar-expand-lg navbar-light bg-light border-bottom border-primary rounded-bottom" >
      <a className = "navbar-brand" href = "#" >
      <img src = {Logo}
      width = "30"
      height = "30"
      className = "d-inline-block align-top ml-2"
      alt = "" / >
      WaterHut </a> <
      button onClick = {
        this.toggleNavbar
      }
      className = {
        `${classTwo}`
      }
      type = "button"
      data-toggle = "collapse"
      data-target = "#navbarResponsive"
      aria-controls = "navbarResponsive"
      aria-expanded = "false"
      aria-label = "Toggle navigation" >
      <span className = "navbar-toggler-icon" / >
      </button>
      <div className = {
        `${classOne}`
      }
      id = "navbarSupportedContent" >
      <ul className = "navbar-nav ml-auto" >
      <li className = "nav-item active" >
      <a className = "nav-link m-1" href = "#" > Home < span className = "sr-only" > (current) < /span></a>
      </li>
      <li className = "nav-item active" >
      <a className = "nav-link m-1" href = "#" > Link 1 </a>
      </li >
      <li className = "nav-item active" >
      <a className = "nav-link m-1" href = "/auth/logout" > Logout </a>
      </li >
      </ul>
      </div>
      </nav >
    );
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
   return {
       user:state.auth
   }
}

export default connect(mapStateToProps)(Navbar);
