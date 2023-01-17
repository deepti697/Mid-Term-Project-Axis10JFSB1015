import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import AddEmployee from './Components/AddEmployee';
import AddRoom from './Components/AddRoom';
import AddCustomer from './Components/NewCustomerForm';
import EmployeeInfo from './Components/EmployeeInfo';
import RoomInfo from './Components/RoomInfo';
import CustomerInfo from './Components/CustomerInfo';
import UpdateRoom from './Components/UpdateRoom';
import UpdateCustomer from './Components/NewCustomerForm';
import SearchRoom from './Components/SearchRoom';
import SearchCustomer from './Components/SearchCustomer';
import Reception from './Components/Reception';


function App() {
  return (
    <>
      
      <BrowserRouter >
     
        <Routes>
          <Route path="" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/dash" element={<Dashboard/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/addEmp" element={<AddEmployee/>}></Route>
          <Route path="/addRoom" element={<AddRoom/>}></Route>
          <Route path="/reception" element={<Reception/>}></Route>
          <Route path="/addCustomer" element={<AddCustomer/>}></Route>
          <Route path="/custInfo" element={<CustomerInfo/>}></Route>
          <Route path="/empInfo" element={<EmployeeInfo/>}></Route>
          <Route path="/roomInfo" element={<RoomInfo/>}></Route>
          <Route path="/updateRoom" element={<UpdateRoom/>}></Route>
          <Route path="/updateCust" element={<UpdateCustomer/>}></Route>
          <Route path="/searchRoom" element={<SearchRoom/>}></Route>
          <Route path="/searchCust" element={<SearchCustomer/>}></Route>
          </Routes>
        
         </BrowserRouter>      
    </>
  );
}
export default App;
