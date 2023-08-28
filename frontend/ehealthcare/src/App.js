import "./App.css";
import About from "./Component/About";
import Appointment from "./Component/Appointment";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Detail from "./Component/Detail";
import Doctors from "./Component/Doctors";
import Payment from "./Component/Payment";
import AdminHome from "./Component/Admin/AdminHome";
import AddDoctor from "./Component/Admin/AddDoctor";
import ListOfAppointment from "./Component/Admin/ListOfAppointment";
import UpdateDoctor from "./Component/Admin/UpdateDoctor";
import ProfileUpdate from "./Component/Admin/ProfileUpdate";
import Delete from "./Component/Admin/Delete";
import ProfileView from "./Component/Admin/ProfileView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/hospital' element={<AdminHome/>}/>
        <Route path='/adddoctor' element={<AddDoctor/>}/>
        <Route path="/listofappointment" element={<ListOfAppointment/>}/>
        <Route path="/updatedoctor/:id" element={<UpdateDoctor/>}/>
        <Route path ="/updateprofile/:id" element={<ProfileUpdate/>}/>
        <Route path="/viewprofile/:id" element={<ProfileView/>}/>
        <Route path="/delete/" element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
