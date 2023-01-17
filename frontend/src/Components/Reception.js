import { Link } from 'react-router-dom';
import '../css/Reception.css';
import bgImg from '../icons/4.jpg';

const Reception= () =>{
    return (
        <div className="bg_image2"> 
        <li><h1 className='nav-center'>The Melbourne Hotel Welcomes You</h1></li>
        <div className="Reception">
            <div className="column-1">
            <form className='rec'>    
                <Link className='updatebtn' to={"/addCustomer"}>New Customer Form</Link>
                <Link className='updatebtn' to={"/roomInfo"}>Room Info</Link>
                <Link className='updatebtn' to={"/empInfo"}>Employee Info</Link>
                <Link className='updatebtn' to={"/custInfo"}>Customer Info</Link>

                <Link className='updatebtn' to={"/searchCust"}>Search Customer</Link>
                <Link className='updatebtn' to={"/searchRoom"}>Search Room</Link>
                <Link className='updatebtn' to={"/updateRoom"}>Update Room Status</Link>
                <Link className='updatebtn' to={"/dash"}>Logout</Link>
            </form>
            </div>

            <div className='column-2'>
                <img src={bgImg} alt="" />
                
            </div>
        </div>
        </div>
    )
}
export default Reception
