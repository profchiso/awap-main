import React from 'react';
import ReactDOM from 'react-dom';
import {   BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,} from "react-router-dom";
import Home from './src/Home';
import Login from "./src/signin/Login"
import Register from "./src/Register/Register"

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
   
    // ...
  ]);
  return routes;
   
}

ReactDOM.render( <Router>< App / ></Router> , document.getElementById('root'));