import "../../styles/topbar.css";

const Topbar = ({ toggle }) => {
  return (
    <div className="topbar">

      {/* LEFT SIDE */}
      <div className="topbar-left">
        {/* HAMBURGER */}
        <i
          className="bi bi-list hamburger"
          onClick={toggle}
        ></i>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search..."
          className="topbar-search"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="topbar-right">
        <i className="bi bi-bell"></i>
        <i className="bi bi-gear"></i>

        <div className="topbar-avatar">A</div>
      </div>
    </div>
  );
};

export default Topbar;
