import React from "react";
//import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { loginout } from "../store/authslice";
const Header=()=>{
   const dispatch = useDispatch();
   const {loggedin} = useSelector(state => state.auth);
   console.log(loggedin);
   
   return(
    <nav className="navbar bg-dark">
     <div className="container-fluid">
    <a  className="navbar-brand text-light">MyBooks</a>
      <button className="btn btn-outline-primary"  onClick={()=> dispatch(loginout())}>{loggedin ? 'log out' : "log in"}</button>
    </div>
    </nav>
   )
}
export default Header;