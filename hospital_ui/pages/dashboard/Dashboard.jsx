import Layout from "../../components/layout/Layout";
import "../../styles/dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // ✅ HOOKS MUST BE HERE (TOP LEVEL)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: "",
    city: "",
    mobile: "",
    reason: "",
  });

  /* TEXT ONLY */
  const handleTextOnly = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData({ ...formData, [e.target.name]: value });
  };

  /* MOBILE NUMBER – 10 DIGITS ONLY */
  const handleMobile = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, mobile: value });
  };

  return (
    <Layout>

      {/* CREATE APPOINTMENT BAR */}
      <div className="create-appointment-bar">
        <h5>Create Appointment</h5>

        <div className="action-buttons">
          <button className="green-btn">
            <i className="bi bi-person-plus"></i>
            Add Patient
          </button>

          <button
            className="green-btn"
            onClick={() => navigate("/appointments/list")}
          >
            <i className="bi bi-list"></i>
            Appointment List
          </button>
        </div>
      </div>

      {/* OUTER FORM CONTAINER */}
      <div className="appointment-container">

        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="yellow-bar"></div>
          <div className="section-text">
            <h6>Appointment Details</h6>
            <span>Patient Details</span>
          </div>
        </div>

        {/* FORM GRID */}
        <div className="appointment-grid">

          {/* PATIENT NAME – TEXT ONLY */}
          <div>
            <label>Select Patient*</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleTextOnly}
              placeholder="Search Patient Name"
            />
          </div>

          {/* DOCTOR */}
          <div>
            <label>Select Doctor*</label>
            <select>
              <option>Select Doctor</option>
            </select>
          </div>

          {/* CITY – TEXT ONLY */}
          <div>
            <label>Patient City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleTextOnly}
              placeholder="City"
            />
          </div>

          {/* MOBILE – 10 DIGITS ONLY */}
          <div>
            <label>Patient Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleMobile}
              placeholder="Mobile Number"
              maxLength="10"
            />
          </div>

          {/* DATE */}
          <div>
            <label>Appointment Date*</label>
            <input type="date" />
          </div>

          {/* TIME */}
          <div>
            <label>Appointment Time*</label>
            <input type="time" />
          </div>

          {/* REASON – TEXT ONLY */}
          <div className="full-width">
            <label>Reason Of Visit*</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleTextOnly}
              placeholder="Reason Of Visit"
            />
          </div>

        </div>
      </div>

    </Layout>
  );
};

export default Dashboard;
