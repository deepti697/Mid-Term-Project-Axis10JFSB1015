import {  Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/AddRoom.css';
import bgImg from '../icons/6.jpg';

function AddRoom(){
    const[number,setrnum] = useState('');
    const[aval,setavalibility] = useState('');
    const[clean, setclean] = useState('');
    const[price, setprice] = useState('');
    const[bed, setbed] = useState('');
   
    const addRoom = () =>{
        let data ={
            room_no: number,
            avalibility: aval,
            cleaning_status: clean,
            room_price: price,
            bed: bed    
        }

        fetch(`http://localhost:8093/hotel/room/addRoom`,{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response => response.json())
        .then(json => console.log(json));
        alert("Room Added Successfully !!! ")
       }

  return (   
   
    <div className="bg_image2"> 
        <div className="addRoom">
       
            <div className="col-1">
                <ul id='rm1' className='lex lex-col'>
                    <label>Room Number </label>
                    <label>Avalibility</label>
                    <label>Cleaning Status</label>
                    <label>Price</label>
                    <label>Bed Type</label>
                </ul>
            </div>
                <div className="col-2">
                <h2>ADD ROOM DETAILS</h2>
                <form id='rm' className='lex lex-col'>            
                    <input type="number" placeholder="Enter Room Number" onChange={ (e) => setrnum(e.target.value)}/>                 
                    <input type="text" placeholder="Available/Occupied" onChange={ (e) => setavalibility(e.target.value)}/>                   
                    <input type="text" placeholder="Enter Cleaning Status" onChange={ (e) => setclean(e.target.value)}/>                  
                    <input type="number" placeholder="Enter Room Price" onChange={ (e) => setprice(e.target.value)}/>                    
                    <input type="text" placeholder="Enter Bed Type" onChange={ (e) => setbed(e.target.value)}/>                                        
                    <Link to='/dash'> <button  className='bttn' onClick={addRoom}>ADD ROOM</button></Link>
                    
                </form>
            </div>
            <div className="col-3">
                <img src={bgImg} alt=""/><br/>
                <Link to='/dash' >
                    <button className='cancel'>CANCEL</button>
                </Link>
            </div>
        </div>        
    </div>

  )
}
export default AddRoom