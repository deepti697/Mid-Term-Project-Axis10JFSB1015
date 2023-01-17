import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/NewCustomer.css';
import bgImg from '../icons/cust.jpg';

function AddCustomer(){
    const[id,setID] = useState('');
    const[name,setName] = useState('');
    const[gender, setGender] = useState('');
    const[country,setCountry] = useState('');
    const[roomNo, setRoomNo] = useState('');
    const[checkInTime, setCheckInTime] = useState('');
    const[deposit, setDeposit] = useState('');

    const addCustomer = () =>{
        let data ={
            id:id,
            name: name,        
            gender: gender,
            country: country,
            allocated_room_no : roomNo,
            check_in_time : checkInTime,
            deposit : deposit
        }

        fetch(`http://localhost:8091/hotel/customer/addCustomer`,{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response => response.json())
        .then(json => console.log(json));
        alert("Customer Added Successfully !!! ")
       }
   

  return (
    <div className="bg_image2"> 
        <div className="addCust">

            <div className="col-1">
                <ul id='cust1' className='lex lex-col'>
                    <label>ID</label>
                    <label>Name </label>
                    <label>Gender</label>
                    <label>Country </label>
                    <label>Allocated RoomNo.</label>
                    <label>Check-in Time</label>
                    <label>Deposit</label>
                    
                </ul>
            </div>
                <div className="col-2">
                
                <form id='cust' className='lex lex-col'>   
                    <input type="text" placeholder="Enter Customer ID" onChange={ (e) => setID(e.target.value)}/>            
                    <input type="text" placeholder="Enter Customer Name" onChange={ (e) => setName(e.target.value)}/>                 
                    <input type="text" placeholder="Enter Gender of Customer" onChange={ (e) => setGender(e.target.value)}/>                   
                    <input type="text" placeholder="Enter Customer Country " onChange={ (e) => setCountry(e.target.value)}/>                  
                    <input type="number" placeholder="Enter Allocated Room No." onChange={ (e) => setRoomNo(e.target.value)}/>                     
                    <input type="text" placeholder="Enter Check In Time" onChange={ (e) => setCheckInTime(e.target.value)}/>                    
                    <input type="number" placeholder="Enter Deposit" onChange={ (e) => setDeposit(e.target.value)}/> 
                    <Link to='/reception'> <button className='customerbutn' onClick={addCustomer}>SUBMIT</button></Link>
                </form>
            </div>
            <div className="col-3">
            <h2>NEW CUSTOMER FORM</h2>
                <img src={bgImg} alt="" />
                <Link to='/reception' >
                    <button className='cancel'>CANCEL</button>
                </Link>
            </div>
               
        </div>  
    </div>
  )
}
export default AddCustomer