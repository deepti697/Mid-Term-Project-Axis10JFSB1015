import {Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/AddEmployee.css';
import bgImg from '../icons/2.jpg';

function AddEmployee(){
    const[id,setid] = useState('');
    const[name,setname] = useState('');
    const[age,setage] = useState('');
    const[gender, setGender] = useState('');
    const[job, setjob] = useState('');
    const[salary, setsalary] = useState('');
    const[phone, setphone] = useState('');

    const addEmployee = () =>{
        let data ={
            id:id,
            name: name,
            age: age,
            gender: gender,
            job: job,
            salary: salary,
            phoneno: phone
        }

        fetch(`http://localhost:8092/hotel/employee/addEmp`,{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response => response.json())
        .then(json => console.log(json));
        alert("Employee Added Successfully !!! ")
       }
   

  return (
    
    <div className="bg_image2"> 
        <div className="addEmp">
            <div className="col-1">
                <ul id='emp1' className='lex lex-col'>
                    <label>Emp_Id</label>
                    <label>Name </label>
                    <label>Age </label>
                    <label>Gender </label>
                    <label>Job </label>
                    <label>Salary </label>
                    <label>Phone </label>
                </ul>
            </div>
                <div className="col-2">
                <form id='emp' className='lex lex-col'>      
                    <input type="number" placeholder="Enter Employee Id" onChange={ (e) => setid(e.target.value)}/>             
                    <input type="text" placeholder="Enter Employee Name" onChange={ (e) => setname(e.target.value)}/>                 
                    <input type="number" placeholder="Enter Employee Age" onChange={ (e) => setage(e.target.value)}/>                   
                    <input type="text" placeholder="Enter Employee Gender" onChange={ (e) => setGender(e.target.value)}/>                  
                    <input type="text" placeholder="Enter Employee Job" onChange={ (e) => setjob(e.target.value)}/>                    
                    <input type="number" placeholder="Enter Employee Salary" onChange={ (e) => setsalary(e.target.value)}/>                    
                    <input type="number" placeholder="Enter Employee Phone" onChange={ (e) => setphone(e.target.value)}/> 
                    <Link to='/dash'> <button className='butn' onClick={addEmployee}>SUBMIT</button></Link>
                </form>
            </div>
            <div className="col-3">
                <h2>ADD EMPLOYEE DETAILS</h2>
                <img src={bgImg} alt="" />
                
            </div>
        </div>        
    </div>

  )
}
export default AddEmployee