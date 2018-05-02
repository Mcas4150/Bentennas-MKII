import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames'
import './app-header.css';

 
  let headerClassType = classNames('desktop')

  function menuTransition () {
    let el = document.querySelector("div.hidden");
    let search = document.querySelector('div.search');
    let border = document.querySelector("div.btn-outer");
       if (el) {
         el.className = "visible";
         search.className = "search-hidden";
         border.className = "nav-item btn-outer-top menu-btn";
       } else {
         search = document.querySelector('div.search-hidden');
         search.className = "search";
         el = document.querySelector("div.visible");
         el.className = "hidden";
         border = document.querySelector("div.btn-outer-top");
         border.className = "nav-item btn-outer menu-btn";
       }
       return el;
   };


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
         {/* Desktop */}
           <div className={headerClassType}>
              <div className="header__left">
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/"}>MIXES</NavLink>
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/videos"}>VIDEOS</NavLink>
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/events"}>EVENTS</NavLink>
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"https://nts.ochre.store/"} target="_blank">SHOP</NavLink>
                <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/about"}>ABOUT</NavLink>
              </div>
              <div className="header__right">
                <div className="header__title">BENTENNAS</div>
              </div>
           </div>
         </div>
       </div>
 
    );
   }
 }
 
 
 
 export default AppHeader;
 