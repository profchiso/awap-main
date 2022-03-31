import React from "react";
import { Form,  message} from "antd";
// import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../images/awapLogoW.png"
import { Icon} from "antd";
import "./login.css"

// import {
//   hideMessage,
//   showAuthLoader,
//   userSignIn,
//   userLogin
// } from "appRedux/actions/Auth";
// import CircularProgress from "components/CircularProgress/index";


const Login=()=>{
  return(
    <div className="login-body">

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
    
      <Link to={"/"}>
            <div className="topleft">
               AWAP
            </div>
      </Link>
    
    
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>

       

    <form className='sign-in' >
    <div className="logo-div" ><img className="logo-main" src={logo} width="100px" height="100px" alt="logo"/></div>
    <h3>Sigin to AWAP</h3>

    
    <input type="text" placeholder="Username" id="email" name="username"/>

   
    <input type="password" placeholder="Password" id="password" name="password"/>

    <button className='Sign-up-btn'>Login</button>
    
    <span className='toggle-signin-signup' style={{marginTop:"25px"}}>Don't have account? <Link to={"/register"}>Register</Link></span>

  
    </form>

          </div>

  )
}
export default  Login


// class SignIn extends React.Component {

//   // handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   let userName= document.querySelector("#email").value
//   //   let password= document.querySelector("#password").value
//   //   let values={
//   //       userName,
//   //       password
//   //   }

//   //   if(!userName){
//   //      message.error("Email address required") 
//   //      return
//   //   }
//   //   if(!password){
//   //       message.error("Password required")  
//   //       return 
//   //   }

//   //       this.props.showAuthLoader();
//   //       this.props.userLogin(values);
        
    
//   // };

//   // componentDidUpdate() {
//   //   if (this.props.showMessage) {
//   //     setTimeout(() => {
//   //       this.props.hideMessage();
//   //     }, 100);
//   //   }
//   //   if (this.props.authUser !== null) {
//   //     this.props.history.push('/');
//   //   }
//   // }

//   render() {
    
//     const {showMessage, loader, alertMessage} = this.props;

//     return (
//         <div>

//         <div className="bubbles">
//               <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
//             <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
//             <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
//             <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
//             <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
//             <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
//             <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
//             <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
//             <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
//             <div className="bubble"><Icon type="dollar" theme="twoTone" /></div>
            
//           </div>
        
//           <Link to={"/"}>
//                 <div className="topleft">
//                    AWAP
//                 </div>
//           </Link>
        
        
//               <div className="background">
//                 <div className="shape"></div>
//                 <div className="shape"></div>
//             </div>

           

//         <form className='sign-in' onSubmit={this.handleSubmit}>
//         <div className="logo-div" ><img className="logo-main" src={logo} width="100px" height="100px" alt="logo"/></div>
//         <h3>Sigin to AWAP</h3>

        
//         <input type="text" placeholder="Username" id="email" name="username"/>

       
//         <input type="password" placeholder="Password" id="password" name="password"/>

//         <button className='Sign-up-btn'>Sign In</button>
        
//         <span className='toggle-signin-signup' style={{marginTop:"25px"}}>Don't have account? <Link to={"/signup"}>Sign Up</Link></span>
   
      
//         </form>

             

//               {loader ?
//               <div className="gx-loader-view">
//                 <CircularProgress/>
//               </div> : null}
//             {showMessage ?
//               message.error(alertMessage.toString()) : null}
//               </div>
//     );
//   }
// }

// const WrappedNormalLoginForm = Form.create()(SignIn);

// const mapStateToProps = ({auth}) => {
//   const {loader, alertMessage, showMessage, authUser} = auth;
//   return {loader, alertMessage, showMessage, authUser}
// };

// export default connect(mapStateToProps, {
//   userSignIn,
//   hideMessage,
//   showAuthLoader,
//   userLogin
// })(WrappedNormalLoginForm);


