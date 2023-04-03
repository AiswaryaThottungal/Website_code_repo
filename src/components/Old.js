import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import classes from "./Login.module.css";



export default function Login({open, onClose,props}) {
    const [isOpen, setIsOpen] = useState(false);
    const [email,setEmail]= useState('');
    const [pass,setPass]= useState('');
    var x= document.getElementById("login");
    var y= document.getElementById("register");
    var z= document.getElementById("focusBtn");
    function register(){
       x.style.left = "-400px";
       y.style.left = "50px";
       z.style.left = "110px";
    }

    function login(){
 
    }
   
  if(!open) return null;

  return (
    <>
        <div className={classes.Overlay}> 
            <div className={classes.formBox}>
                <button className={classes.closeBtn} onClick={onClose}> <FaTimes/>    </button>
                <div className={classes.buttonBox}>
                    <div id={classes["focusBtn"]}></div>
                    <button type='button' className={classes.toggleBtn} onClick={login}>Log In</button>                    
                    <button type='button' className={classes.toggleBtn} onClick={register}> Register</button>
                </div>
                <form id={classes["login"]} className={classes.inputGroup}>
                    <input type="email" className={classes.inputField} placeholder="Email-id" required />
                    <input type="text" className={classes.inputField} placeholder="Enter Password" required />
                    <button type="submit" className={classes.submitBtn}> Log In </button>

                </form>
                <form  id={classes["register"]} className={classes.inputGroup}>
                    <input type="text" className={classes.inputField} placeholder="User Name" required />
                    <input type="email" className={classes.inputField} placeholder="Email-id" required />
                    <input type="text" className={classes.inputField} placeholder="Enter Password" required />
                    <button type="submit" className={classes.submitBtn}>Register </button>

                </form>
                    
                   
            </div>
        </div>
    </>
    
  )
}
