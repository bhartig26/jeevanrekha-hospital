import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/sidebar.css";
import logo from "../../src/assets/logo.svg";


const Sidebar = ({ open }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      {/* LOGO */}
      <div className="sidebar-logo">
        <img src={logo} alt="Jeevanrekha Logo" />
      </div>

      {/* SCROLLABLE MENU */}
      <nav className="sidebar-menu-wrapper">
        <ul className="sidebar-menu">

          {/* DASHBOARD */}
          <li className={`menu-item ${isActive("/dashboard") ? "active" : ""}`}>
            <i className="bi bi-speedometer2"></i>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          {/* USER ROLE */}
          {/* <li className="menu-section">USER ROLE</li>
          <li
            className={`menu-item has-dropdown ${
              openMenu === "userRole" ? "active" : ""
            }`}
            onClick={() => toggleMenu("userRole")}
          >
            <i className="bi bi-people"></i>
            <span>User Role</span>
            <i className={`bi bi-chevron-down arrow ${openMenu === "userRole" ? "rotate" : ""}`}></i>
          </li>

          {openMenu === "userRole" && (
            <ul className="submenu">
              <li className={isActive("/user-role/add") ? "active" : ""}>
                <i className="bi bi-person-plus"></i>
                <Link to="/user-role/add">Add User Role</Link>
              </li>
              <li className={isActive("/user-role") ? "active" : ""}>
                <i className="bi bi-list-check"></i>
                <Link to="/user-role">User Role List</Link>
              </li>
            </ul>
          )} */}
          {/* USER ROLE */}
<li className="menu-section">USER ROLE</li>

<li
  className={`menu-item has-dropdown ${
    openMenu === "userRole" ||
    location.pathname.startsWith("/user-role") ||
    location.pathname.startsWith("/user")
      ? "active"
      : ""
  }`}
  onClick={() => toggleMenu("userRole")}
>
  <i className="bi bi-people"></i>
  <span>User Role</span>
  <i
    className={`bi bi-chevron-down arrow ${
      openMenu === "userRole" ||
      location.pathname.startsWith("/user-role") ||
      location.pathname.startsWith("/user")
        ? "rotate"
        : ""
    }`}
  ></i>
</li>

{(openMenu === "userRole" ||
  location.pathname.startsWith("/user-role") ||
  location.pathname.startsWith("/user")) && (
  <ul className="submenu">

    {/* ADD USER ROLE */}
    <li className={isActive("/user-role/create") ? "active" : ""}>
      <i className="bi bi-person-plus"></i>
      <Link to="/user-role/create">Add User Role</Link>
    </li>

    {/* USER ROLE LIST */}
    <li className={isActive("/user-role") ? "active" : ""}>
      <i className="bi bi-list-check"></i>
      <Link to="/user-role">User Role List</Link>
    </li>

    {/* ADD USER */}
    <li className={isActive("/user/create") ? "active" : ""}>
      <i className="bi bi-person-badge"></i>
      <Link to="/user/create">Add User</Link>
    </li>

  </ul>
)}


          {/* APPOINTMENTS */}
          <li className="menu-section">APPOINTMENTS</li>
          <li
            className={`menu-item has-dropdown ${
              openMenu === "appointments" ? "active" : ""
            }`}
            onClick={() => toggleMenu("appointments")}
          >
            <i className="bi bi-calendar-check"></i>
            <span>Appointments</span>
            <i className={`bi bi-chevron-down arrow ${openMenu === "appointments" ? "rotate" : ""}`}></i>
          </li>

          {openMenu === "appointments" && (
            <ul className="submenu">
              <li className={isActive("/dashboard") ? "active" : ""}>
                <i className="bi bi-person-plus"></i>
                <Link to="/dashboard">Add Patient</Link>
              </li>
              <li className={isActive("/appointments/list") ? "active" : ""}>
                <i className="bi bi-card-list"></i>
                <Link to="/appointments/list">Appointment List</Link>
              </li>
            </ul>
          )}

          {/* OTHER SECTIONS */}
          <li className="menu-section">LAB MODULE</li>
          <li className="menu-item">
            <i className="bi bi-flask"></i>
            <span>Lab Module</span>
          </li>

          <li className="menu-section">INVENTORY</li>
          <li className="menu-item">
            <i className="bi bi-box-seam"></i>
            <span>Inventory</span>
          </li>

          <li className="menu-section">BILLING</li>
          <li className="menu-item">
            <i className="bi bi-receipt"></i>
            <span>Billing</span>
          </li>

          <li className="menu-section">REPORTS</li>
          <li className="menu-item">
            <i className="bi bi-bar-chart"></i>
            <span>Reports</span>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
