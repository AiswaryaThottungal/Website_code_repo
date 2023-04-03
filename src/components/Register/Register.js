import React , {useState} from "react";
import { FaTimes } from 'react-icons/fa';
import Login from './../Login/Login';
const MODAL_STYLES= {
    position: 'fixed',
    top : '50%',
    left : '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#d3bbdd',
    padding : '50px',
    zIndex : 999

}
const OVERLAY_STYLES ={
    position: 'fixed',
    top : 0,
    left : 0,
    right : 0,
    bottom : 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex : 999
}

export default function Register ({open, onClose,props}) {
    const [isOpen, setIsOpen] = useState(false);
    const [email,setEmail]= useState('');
    const [pass,setPass]= useState('');
    const [name,setName]= useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    if(!open) return null;
    return ( 

        <div style={OVERLAY_STYLES}> 
            <div style={MODAL_STYLES}>
                 <button onClick={onClose}> <FaTimes/>    </button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>   
                    <input value={name} name="name" id="name" placeholder="Your Name"  />
                    <label htmlFor="email">Email </label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                    <br/>
                    <label htmlFor="password">Password </label>
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
                    <br/>
                    <button type='submit'> Login </button>
                </form>
                <p>Already have an account? </p>
                <button onClick={()=>setIsOpen(true)}> Login Here </button>
                <Login  open={isOpen} onClose={()=>setIsOpen(false)}/>
            </div>
        </div>
     )
}
 
