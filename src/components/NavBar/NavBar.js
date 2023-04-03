import React, { useState } from 'react';
import classes from './NavBar.module.css';
import logo from './../../img/logo_final.png'
import {FaSistrix, FaTimes, FaUserAlt, FaShoppingCart} from "react-icons/fa";
import { Link, NavLink  } from 'react-router-dom';
import Login from './../Login/Login';
//import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
        
     
        const [isOpen, setIsOpen] = useState(false);
        
        return (
            
            <div>
                <div className={classes.loginbar} >
                <ul>
                    <li>
                        <button  id="account-login" className={classes.account} onClick={()=>setIsOpen(true)}> <FaUserAlt/> Account </button>
                    </li>
                    <li>
                        <button id="shopping-cart"  className={classes.account} > <FaShoppingCart/> Cart </button>
                    </li>
                </ul>
                <Login open={isOpen} onClose={()=>setIsOpen(false)}/> 
                    
               

                </div>
                <div className={classes.navbar}>
                    <nav> 
                        <Link to='/'>
                            <img className={classes.logo} src={logo} alt='logo'></img>
                        </Link>               
                        <ul>
                            <li className={classes.navlink}>
                                <NavLink exact to="/" activeClassName= "active-link" > Home </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName= "active-link" > About </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" activeClassName= "active-link" > Shop </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName= "active-link" > Contact </NavLink>
                            </li>   
                            <li><div className={classes.inputWrapper}>
                                    <i> <FaSistrix/></i>
                                    <input type="text" placeholder="Search"/>
                                    <i> <FaTimes/> </i>
                                </div>
                                </li>             
                        </ul>                       
                        
                    </nav>
                </div>
                {/* <Modal open={login} onClose={this.onCloseModalclose}>
                
                    <div className="modal-body">
                        <h2>Login and Get <span>Started</span></h2>
                        <span className="subtitle">Just fill in the form below</span>
                        <form className="contact-form form-validate4" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                        </form>
                    </div>
                </Modal> */}
            </div>

            
        )
        

    }

// const NavBar = () => {
//     return (
//         <div>
//              <div className={classes.loginbar}>
//                 <ul>
//                     <li>
//                         <button  id="account-login" className={classes.account}> <FaUserAlt/> Account </button>
//                     </li>
//                     <li>
//                         <button id="shopping-cart"  className={classes.account} > <FaShoppingCart/> Cart </button>
//                     </li>
//                 </ul>

//             </div>
//             <div className={classes.navbar}>
//                 <nav> 
//                     <Link to='/'>
//                         <img className={classes.logo} src={logo} alt='logo'></img>
//                     </Link>               
//                     <ul>
//                         <li className={classes.navlink}>
//                             <NavLink exact to="/" activeClassName= "active-link" > Home </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/about" activeClassName= "active-link" > About </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/shop" activeClassName= "active-link" > Shop </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/contact" activeClassName= "active-link" > Contact </NavLink>
//                         </li>   
//                         <li><div className={classes.inputWrapper}>
//                                 <i> <FaSistrix/></i>
//                                 <input type="text" placeholder="Search"/>
//                                 <i> <FaTimes/> </i>
//                             </div>
//                          </li>             
//                     </ul>
                    
                    
//                 </nav>
//             </div>
           
//         </div>
        
//       );
// }


 
export default NavBar;