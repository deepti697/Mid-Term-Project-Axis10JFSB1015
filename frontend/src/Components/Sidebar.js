import React, { useState } from 'react';
import {FaBars,FaUserAlt,FaRegChartBar,FaThList}from "react-icons/fa";
import {AiFillEdit,AiOutlineKey,AiOutlineProfile}from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/addCustomer",
            name:" New Customer Form",
            icon:<AiOutlineProfile/>
        },
        {
            path:"/custInfo",
            name:"Customer Info",
            icon:<FaUserAlt/>
        },
        {
            path:"/empInfo",
            name:"Employee Info",
            icon:<FaRegChartBar/>
        },
        {
            path:"/roomInfo",
            name:"Room Info",
            icon:<FaThList/>
        },
        {
            path:"/searchCust",
            name:"Search Customer",
            icon:<AiOutlineKey/>
        },
        {
            path:"/searchRoom",
            name:"Search Room",
            icon:<AiOutlineKey/>
        },
        {
            path:"/updateRoom",
            name:"Update Room Status",
            icon:<AiFillEdit/>
        },
        {
            path:"/dash",
            name:"Logout",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="bg_image2"> 
        <div className="container1">
           <div style={{width: isOpen ? "400px" : "50px"}} className="sidebar1">
               <div className="top_section1">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo1">Reception</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars1">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link1" activeclassName="active1">
                           <div className="icon1">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text1">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </div>
    );
};

export default Sidebar;