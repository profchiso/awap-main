import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {message,Icon} from "antd"

// import {
//   hideMessage,
//   showAuthLoader,
//   userSignUp
// } from "../../appRedux/actions/Auth";

import logo from "../images/awapLogoW.png"
import "./Register.css"



function Register(props) {
  
  const [regData,setRegData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    userName:"",
    password:"",
    confirmPassword:""
  })
  const onChange=(e)=>{
    let obj={
      [e.target.name]:e.target.value
    }
    setRegData({...regData,...obj})
  }
  const submit=async(e)=>{
    e.preventDefault()

    if(!regData.firstName || !regData.lastName || !regData.email || !regData.userName || !regData.password || !regData.confirmPassword){
      message.error("All fields are required")
      return
    }
    if(regData.password !==regData.confirmPassword){
      message.error("Password and confirm password are not the same")
      return
    }
    try {
      await props.userSignUp(regData)
      message.success("Registration successfull")
    } catch (error) {
      console.log(error)
      
    }
   
  }
 
    return (
        <div>
    <Link to={"/"}>
        <div className="topleft">
           AWAP
        </div>
  </Link>


  <div className="bubbles">
  <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
    
  </div>
  

<div className="signup-background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form className='sign-up-form' onSubmit={submit}>
    <Link to={"/"}><div className="logo-div" ><img className="logo-main" src={logo} width="100px" height="100px" alt='logo'/></div></Link>
        <h3>Sign up to AWAP</h3>

        
        <input type="text" placeholder="First Name" id="firstName" name="firstName" onChange={onChange}/>

     
        <input type="text" placeholder="Last Name" id="lastName" name="lastName" onChange={onChange}/>

        
        <input type="text" placeholder="Email " id="email" name="email" onChange={onChange}/>
        
        <input type="text" placeholder="Username" id="username" name="userName" onChange={onChange}/>

        
        <input type="password" placeholder="Password" id="password" name="password" onChange={onChange}/>

        
        <input type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" onChange={onChange}/>

        <button className='Sign-up-btn'>Register</button>
        
   
   <span className='toggle-signin-signup'>Already have an account? <Link to={"/login"}>Login</Link></span>
        </form>
        
            
        </div>
    )
}

export default Register


// const mapStateToProps = ({auth}) => {
//   const {loader, alertMessage, showMessage, authUser} = auth;
//   return {loader, alertMessage, showMessage, authUser}
// };

// export default connect(mapStateToProps, {

//   hideMessage,
//   showAuthLoader,
//   userSignUp
  
// })(SignUp);
