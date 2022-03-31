import React from 'react';
import { Link,Route } from 'react-router-dom';
import {Menu} from "antd";
import logo from "../images/awapLogoW.png";

export default function Header(props) {
  
  return (
    <header {...props} id="header" style={{backgroundColor:"#080710"}}>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#080710"}}>
      <Link id="logo" to="/">
        <img alt="logo" src={logo}  style={{borderRadius:"100%"}}/>
        {/* <img alt="Awap" src={logo}  style={{borderRadius:"100%"}} /> */}
        AWAP
      </Link>
      <div>
      <Menu  mode="horizontal" style={{backgroundColor:"#080710",color:"white"}}>
      <Menu.Item key="register" title="Register"  >
          
         <Link to={"/register"}  style={{color:"white"}}> Register</Link> 
        </Menu.Item>
        <Menu.Item key="login" title="Login" >
          
        <Link to={"/login"} style={{color:"white"}} > Login</Link> 
        </Menu.Item>
      </Menu>
      </div>
      </div>
    </header>
  );
}
