import { useEffect, React, useState } from 'react';
import axios from 'axios';
import '../css/Info(ECR).css';
import {Link} from 'react-router-dom';

function RoomInfo(){
  const [rooms,setRooms] = useState([]);
  const url = `http://localhost:8093/hotel/room/getAllRooms`
  
  const deleteRoom= (room_no) =>{
    const url =`http://localhost:8093/hotel/room/deleteRoom/${room_no}`;
    axios.delete(url).then(() =>{
      alert(`Room Number ${room_no} is deleted!!`)
      axios.get(`http://localhost:8093/hotel/room`).then( res => { setRooms(res.data)})
    })
  }

  useEffect ( () =>{
    axios.get(url).then( res => {
      setRooms(res.data);
    })
  }, []);

    return(
      <div className="bg_image2"> 
        <div className="product-list">
            <h1>Room Information</h1>
            
        <div id='tablediv'>
           <table id='table'>
              <thead>
                <tr>
                <th>Room Number</th>
                <th>Avalibility</th>
                <th>Type Of Bed</th>
                <th>Cleaning Status</th>
                <th>Price</th>
                <th>Delete</th>
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
                            <td><Link className='updatebtn' onClick={()=>deleteRoom(r.room_no)}> Delete</Link></td>  
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

export default RoomInfo