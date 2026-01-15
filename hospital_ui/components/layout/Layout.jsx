import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import "../../styles/layout.css";
//  OLD CODE
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar open={open} />

      <div
        className="layout-main"
        style={{
          marginLeft: open ? "240px" : "0px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Topbar toggle={() => setOpen(!open)} />
        {/* <main className="layout-content">{children}</main> */}
        <main className={`layout-content ${open ? "blurred" : ""}`}>
  {children}
</main>
{open && <div className="mobile-overlay" onClick={() => setOpen(false)} />}
      </div>
    </div>
  );
};

export default Layout;




