import { useEffect, React, useState } from 'react';
import '../css/Info(ECR).css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function CustomerInfo(){
  const [customers,setCustomers] = useState([]);
  const url = `http://localhost:8091/hotel/customer/getAllCustomers`
  
  const deleteCustomer= (id) =>{
    const url =`http://localhost:8091/hotel/customer/deleteCustomer/${id}`;
    axios.delete(url).then(() =>{
      alert('Customer details are removed!!')
      axios.get(`http://localhost:8091/hotel/customer`).then( res => { setCustomers(res.data)})
    })
  }

  useEffect ( () =>{
    axios.get(url).then( res => {
      setCustomers(res.data);
    })
  }, []);

    return(
      <div className="bg_image2"> 
        <div className="product-list">
            <h1>Customer List</h1>  
        <div id='tablediv'>
           <table id='table'>
              <thead>
                <tr>
                <th>Customer ID</th>
                <th>Name</th>                
                <th>Gender</th>
                <th>Country</th>
                <th>Allocated RoomNo.</th>
                <th>Check-in Time</th>
                <th>Deposit</th>
                <th>Delete</th>
                </tr>
              </thead>
              <tbody>
          {
            customers.map ((c) => 
                            <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.gender}</td>
                            <td>{c.country}</td>
                            <td>{c.allocated_room_no}</td>
                            <td>{c.check_in_time}</td>
                            <td>{c.deposit}</td>
                            <td><Link className='updatebtn' onClick={()=>deleteCustomer(c.id)}> Delete</Link></td>  
                            </tr>
                        ) 
          }
                </tbody>
            </table>
            
        </div> 
        <Link className='backbtn' to={"/reception"}>Back</Link>       
        </div>
      </div> 
    )
}

export default CustomerInfo