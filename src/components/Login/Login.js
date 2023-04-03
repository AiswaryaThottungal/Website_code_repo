import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import classes from "./Login.module.css";
import ReactDOM from 'react-dom';

function LoginForm(props){
    return (
                          
        <form id={classes["login"]} className={classes.inputGroup}>
            <input type="email" className={classes.inputField} placeholder="Email-id" required />
            <input type="text" className={classes.inputField} placeholder="Enter Password" required />
            <button type="submit" className={classes.submitBtn}> Log In </button>

        </form>
  
)        
}
function RegisterForm(props){
  return(
    <form  id={classes["register"]} className={classes.inputGroup}>
        <input type="text" className={classes.inputField} placeholder="User Name" required />
        <input type="email" className={classes.inputField} placeholder="Email-id" required />
        <input type="text" className={classes.inputField} placeholder="Enter Password" required />
        <button type="submit" className={classes.submitBtn}>Register </button>

    </form>
  )
}

export default function Login({open, onClose,props}) {   
    const [loginbtn, setloginbtn] = useState(true);
    const [registerbtn, setregisterbtn] = useState(false);
    const [email, setEmail] = useState('');
   
  if(!open) return null;

  return (
    <>
        <div className={classes.Overlay}> 
            <div className={classes.formBox}>
                <button className={classes.closeBtn} onClick={onClose}> <FaTimes/>    </button>
                <div className={classes.buttonBox}>
                    <div id={classes["focusBtn"]}></div>  
                    <button type='button' className={classes.toggleBtn} onClick={()=>{setloginbtn(true);setregisterbtn(false);}} style={{
                        backgroundColor: loginbtn ? 'rgb(214,99,160)' : '',
                    }} >Log In</button>                                                         
                    <button type='button' className={classes.toggleBtn} onClick={()=>{setregisterbtn(true);setloginbtn(false);}} style={{
                    backgroundColor: registerbtn ? 'rgb(214,99,160)' : '',
                    }}> Register</button>
                </div>
                { loginbtn && <LoginForm/>}
                { registerbtn && <RegisterForm/> }
                   
            </div>
        </div>
    </>
    
  )
}
