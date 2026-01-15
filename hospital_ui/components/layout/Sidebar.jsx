import "../../styles/sidebar.css";

const Sidebar = ({ open }) => {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>

      {/* FIXED LOGO */}
      <div className="sidebar-logo">
        <img src="../../src/assets/logo.svg" alt="Jeevanrekha Logo" />
      </div>

      {/* ONLY THIS PART SCROLLS */}
      <nav className="sidebar-menu-wrapper">
        <ul className="sidebar-menu">
          {/* Dashboard */}
          <li className="menu-item active">
            <i className="bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </li>

          <li className="menu-section">USER ROLE</li>
          <li className="menu-item">
            <i className="bi bi-people"></i>
            <span>User Role</span>
            <i className="bi bi-chevron-down arrow"></i>
          </li>

          <li className="menu-section">FRANCHISE</li>
          <li className="menu-item">
            <i className="bi bi-building"></i>
            <span>Franchise</span>
            <i className="bi bi-chevron-down arrow"></i>
          </li>

          <li className="menu-section">PATIENT</li>
          <li className="menu-item">
            <i className="bi bi-person"></i>
            <span>Patient</span>
            <i className="bi bi-chevron-down arrow"></i>
          </li>

          <li className="menu-section">APPOINTMENTS</li>
          <li className="menu-item">
            <i className="bi bi-calendar-check"></i>
            <span>Appointments</span>
            <i className="bi bi-chevron-down arrow"></i>
          </li>

          <li className="menu-section">LAB MODULE</li>
          <li className="menu-item">
            <i className="bi bi-flask"></i>
            <span>Lab Module</span>
            <i className="bi bi-chevron-down arrow"></i>
          </li>

          <li className="menu-section">INVENTORY</li>
          <li className="menu-item">
            <i className="bi bi-box-seam"></i>
            <span>Inventory</span>
            <i className="bi bi-chevron-down arrow"></i>
          </li>

          <li className="menu-section">BILLING</li>
          <li className="menu-item">
            <i className="bi bi-receipt"></i>
            <span>Billing</span>
            <i className="bi bi-chevron-down arrow"></i>
          </li>

          <li className="menu-section">REPORTS</li>
          <li className="menu-item">
            <i className="bi bi-bar-chart"></i>
            <span>Reports</span>
            <i className="bi bi-chevron-down arrow"></i>
          </li>
        </ul>
      </nav>

    </aside>
  );
};

export default Sidebar;
