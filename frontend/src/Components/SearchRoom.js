import { useEffect, React, useState } from 'react';
import axios from 'axios';
import '../css/Info(ECR).css';
import {Link} from 'react-router-dom';

function SearchRoom(){
  const [rooms,setRooms] = useState([]);
  const url = `http://localhost:8093/hotel/room/getAllRooms`

  const [searchid,setSearchid] = useState([]);
  const searchById = (room_no) => {
    const url = `http://localhost:8093/hotel/room/getRoom/${room_no}`;
    axios.get(url).then(res => {
        setRooms(res.data);
        console.log(res.data);

    }).catch((_error) => {
      alert(`Room is not found with given Room Number : ${room_no}`)
  }
  )
  }

  useEffect ( () =>{
    axios.get(url).then( res => {
      setRooms(res.data);
    })
  }, []);
  
    return(
      <div className="bg_image2"> 
        <div className="product-list">
            <h1>Search Room</h1>
            <input type="" className='search-product-box' placeholder='Search Room by Room No'
            onChange={(e) => setSearchid(e.target.value)}
             />  
              <button onClick={() => searchById(searchid)}>Search</button> 
        <div id='tablediv'>
           <table id='table'>
              <thead>
                <tr>
                <th>Room Number</th>
                <th>Avalibility</th>
                <th>Type Of Bed</th>
                <th>Cleaning Status</th>
                <th>Price</th>
                </tr>
              </thead>
              <tbody>
          {
          rooms.map ((r) => 
                            <tr key={r.room_no}>
                            <td>{r.room_no}</td>
                            <td>{r.avalibility}</td>
                            <td>{r.bed}</td>
                            <td>{r.cleaning_status}</td>
                            <td>{r.room_price}</td>
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

export default SearchRoom