import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AppointmentList from "../pages/appointments/AppointmentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments/list" element={<AppointmentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
