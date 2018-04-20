import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './app-header.css';





class AppHeader extends Component {





    render() {
     return (
       <div className="app-header">
         <div className="nav__container">
         {/*Mobile Only*/}
           {/* <div className="mobile">
             <div className="nav-item btn-outer menu-btn">MENU</div>
             <div className="right-header">
               </div>
               <div className="hidden">
                 <div className="fullscreen-menu">
                   <Link className="item" to={"/mixes"}>MIXES</Link>
                   <div className="footer-overlay font1">
                     <div className="left-social">
                     </div>
                     <div className="copyright">
                       <a>© 2018 Mike Cassidy</a>
                     </div>
                   </div>
                 </div>
               </div>
           </div> */}
         {/*Desktopy*/}
           <div className="desktop">
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/"}>MIXES</NavLink>
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/videos"}>VIDEOS</NavLink>
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/events"}>EVENTS</NavLink>
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"https://nts.ochre.store/"} target="_blank">SHOP</NavLink>
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/about"}>ABOUT</NavLink>
           </div>
         </div>
       </div>
 
    );
   }
 }
 
 
 
 export default AppHeader;
 