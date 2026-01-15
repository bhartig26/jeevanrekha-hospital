import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../../styles/layout.css";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="app-container">
      <Sidebar open={open} />
      <div className={`main-section ${open ? "" : "full"}`}>
        <Topbar toggle={() => setOpen(!open)} />
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
