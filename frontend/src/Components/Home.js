import '../css/App.css';
import React from 'react';

const Home = () => {
    return(
        <div class="bg_image"> 
            <li><h1 className='dashboard'>Hotel Management System</h1></li>
           
            <a href="/login" >
            <button className='nextbtn'>Next</button>
            </a>
            
        </div>
        
    )

    }
export default Home