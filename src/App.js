import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./page/dashBoard/DashBoard.tsx";
import Manage from "./adminDash/manageDash/Manage.jsx";
import Contact from "./adminDash/contactDash/Contact.jsx";
import Invoic from "./adminDash/invoicDash/Invoic.jsx";
import AdminHome from "./adminDash/adminHome/AdminHome.jsx";
import ProfileDash from "./adminDash/profileDash/ProfileDash.jsx";
import CalendarDash from "./adminDash/calendarDash/CalendarDash.jsx";
import FaqDash from "./adminDash/faqDash/FaqDash.jsx";
import BarDash from "./adminDash/barDash/BarDash.jsx";
import PieDash from "./adminDash/pieDash/PieDash.jsx";
import LineDash from "./adminDash/lineDash/LineDash.jsx";
import GeographyDash from "./adminDash/GeographyDash/GeographyDash.jsx";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashBoard/>}>
          <Route index element={<AdminHome/>}/>
          <Route path="/manage" element={<Manage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/invoic" element={<Invoic/>}/>

          <Route path="/profile" element={<ProfileDash/>}/>
          <Route path="/calendar" element={<CalendarDash/>}/>          
          <Route path="/faq" element={<FaqDash/>}/>

          <Route path="/bar" element={<BarDash/>}/>
          <Route path="/pie" element={<PieDash/>}/>
          <Route path="/line" element={<LineDash/>}/>
          <Route path="/geography" element={<GeographyDash/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
