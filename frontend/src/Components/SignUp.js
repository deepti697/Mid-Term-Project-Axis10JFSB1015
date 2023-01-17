import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/App.css';
import bgImg from '../icons/1.jpg';

function SignUp(){
    const[uname,setusername] = useState('');
    const[pwd,setpassword] = useState('');
    //const[cpwd,setcpassword] = useState('');

    const register = () =>{
        //alert (uname + " " + pwd);
        let data ={
            email: uname,
            password:pwd,
           // confirmpass : cpwd
        }

        fetch('http://localhost:8094/hotel/user/add',{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=> response.json())
          .then(json => console.log(json));
          alert('Signup Successful......')
    }
  return (
    
   
        <div className="register">
            <div className="col-1">
                <h2>SIGN UP</h2>
                <span>Register and Enjoy the services</span>

                <form id='form' className='flex flex-col'>
                    
                    <input type="text" placeholder="Enter Email_id" onChange={ (e) => setusername(e.target.value)}/> 
                    <input type="password" placeholder="Enter Password" onChange={ (e) => setpassword(e.target.value)}/> 
                    <button className='btn' onClick={register}>SignUp</button>
                    <Link id="link" to="/login">Already Registered!!! Login</Link>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    
  )
}
export default SignUp