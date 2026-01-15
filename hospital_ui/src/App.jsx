import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AppointmentList from "../pages/appointments/AppointmentList";
import UserRole from "../pages/userRole/UserRole"
import Login from "../pages/login";
import CreateRole from "../pages/userRole/CreateRole";
import CreateUser from "../pages/userRole/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments/list" element={<AppointmentList />} />
        <Route path="/user-role" element={<UserRole />} />
       <Route path="/user-role/create" element={<CreateRole />} />
<Route path="/user/create" element={<CreateUser />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
