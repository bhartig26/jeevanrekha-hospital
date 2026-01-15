import Layout from "../../components/layout/Layout";

import "../../styles/appointmentlist.css"

const AppointmentList = () => {
  return (
    <Layout>

      {/* HEADER BAR */}
     <div className="create-appointment-bar">
  <h5>Appointment List</h5>

  <div className="action-buttons">
    <button className="green-btn">
      Appointment List
    </button>
  </div>
</div>

      {/* FILTER SECTION */}
      <div className="appointment-filter">
        <label>Search By Name or Mobile No or Patient ID or Date</label>

        <div className="search-row">
          <input placeholder="All Cities" />
          <button className="search-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="filter-row">
          <div>
            <label>Cities</label>
            <select>
              <option>All Cities</option>
            </select>
          </div>

          <div>
            <label>Medicines</label>
            <select>
              <option>List Of Medicines</option>
            </select>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="appointment-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Visit Reason</th>
              <th>Mobile no</th>
              <th>Last Visit</th>
              <th>Total Visits</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>PT-1</td>
              <td>
                Rajesh Kale
                <br />
                <small>Pune</small>
              </td>
              <td>Health Check up Testing</td>
              <td>Sagar Vijay Pawar</td>
              <td>2026-01-10</td>
              <td>7</td>
              <td className="actions">
                <i className="bi bi-eye"></i>
                <i className="bi bi-pencil"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="table-footer">
          <span>Showing 1 entries</span>

          <div className="pagination">
            <span>Items per page:</span>
            <select>
              <option>5</option>
            </select>
            <span>1 - 1 of 1</span>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default AppointmentList;
