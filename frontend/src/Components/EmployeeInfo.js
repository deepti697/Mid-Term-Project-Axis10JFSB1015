import { useEffect, React, useState } from 'react';
import '../css/Info(ECR).css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function EmployeeInfo(){
  const [employees,setEmployees] = useState([]);
  const url = `http://localhost:8092/hotel/employee/getAllEmployees`
  
  const deleteEmployee= (id) =>{
    const url =`http://localhost:8092/hotel/employee/deleteEmployee/${id}`;
    axios.delete(url).then(() =>{
      alert(`Employee details with ID ${id} are removed!!`)
      axios.get(`http://localhost:8092/hotel/employee/`).then( res => { setEmployees(res.data)})
    })
  }

  useEffect ( () =>{
    axios.get(url).then( res => {
      setEmployees(res.data);
    })
  }, []);

    return(
      <div className="bg_image2"> 
        <div className="product-list">
            <h1>Employee Data</h1>  
        <div id='tablediv'>
           <table id='table'>
              <thead>
                <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Phone No.</th>
                <th>Delete</th>
                </tr>
              </thead>
              <tbody>
          {
            employees.map ((e) => 
                            <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.gender}</td>
                            <td>{e.job}</td>
                            <td>{e.salary}</td>
                            <td>{e.phoneno}</td>
                            <td><Link className='updatebtn' onClick={()=>deleteEmployee(e.id)}> Delete</Link></td>  
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

export default EmployeeInfo