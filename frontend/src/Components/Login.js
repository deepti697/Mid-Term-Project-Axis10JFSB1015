import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/Login.css';
import bgImg from '../icons/1.jpg';

function Login(){
    const[username,setusername] = useState('');
    const[password,setpassword] = useState('');
    
    const login = () =>{
        let data ={
            email: username,
            password:password
        }

        fetch(`http://localhost:8094/hotel/user/validate`,{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=>{return response.text();})
          .then((text)=>{
            if(text =='valid'){
                    alert("Logged in Successful..")
                    window.location.href="./dash";
            }else{
                alert('please verirfy credentails')
            }
    })
}
  return (
    
        
        <div className="register">
            <div className="col-1">
                <h2>LOGIN</h2>
                <span>Login and Enjoy Services</span>

                <form id='form' className='flex flex-col'>                    
                    <input type="text" placeholder="Enter Email_id" onChange={ (e) => setusername(e.target.value)}/> 
                    <input type="password" placeholder="Enter Password" onChange={ (e) => setpassword(e.target.value)}/> 
                    <button className='btn' onClick={login}>LOGIN</button>
                    <Link id="link" to="/signup">Not Registered!!! Signup</Link>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>

  )
}
export default Login