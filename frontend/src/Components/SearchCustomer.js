import { useEffect, React, useState } from 'react';
import '../css/Info(ECR).css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function SearchCustomer(){
  const [customers,setCustomers] = useState([]);
  const url = `http://localhost:8091/hotel/customer/getAllCustomers`
  
    const [searchcust,setSrchid] = useState([]);
    const srchById = (id) => {
    const url = `http://localhost:8091/hotel/customer/getCustomer/${id}`;
    axios.get(url).then(res => {
        setCustomers(res.data);
        console.log(res.data);

    }).catch((_error) => {
      alert(`Customer details not found!!!`)
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
            <input type="" className='search-product-box' placeholder='Search Customer by ID'
            onChange={(e) => setSrchid(e.target.value)}
             />  
              <button onClick={() => srchById(searchcust)}>Search</button> 
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

export default SearchCustomer