import { useState } from "react";
import Layout from "../../components/layout/Layout";
import "../../styles/userRole.css";

const UserRole = () => {
  const [activeTab, setActiveTab] = useState("roles");

  return (
    <Layout>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h5>User & Role Management</h5>
      </div>

      {/* TABS */}
      <div className="tab-bar">
        <button
          className={activeTab === "roles" ? "tab active" : "tab"}
          onClick={() => setActiveTab("roles")}
        >
          List of Roles
        </button>

        <button
          className={activeTab === "users" ? "tab active" : "tab"}
          onClick={() => setActiveTab("users")}
        >
          List of Users
        </button>
      </div>

      {/* ================= LIST OF ROLES ================= */}
      {activeTab === "roles" && (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Role Name</th>
                <th>Role Code</th>
                <th>Status</th>
                <th>Patient Mgmt</th>
                <th>Lab Module</th>
                <th>Billing</th>
                <th>User Mgmt</th>
                <th>Appointments</th>
                <th>Inventory</th>
                <th>Reports</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["SuperAdmin","Yes","Yes","Yes","Yes","Yes","Yes","Yes"],
                ["Doctor","Yes","No","No","No","Yes","No","Yes"],
                ["Lab Technician","No","Yes","No","No","No","No","Yes"],
                ["Inventory Staff","No","No","No","No","No","Yes","No"],
                ["Accountant","No","No","Yes","No","No","No","No"],
                ["Clinic Admin","Yes","Yes","Yes","Yes","Yes","Yes","Yes"],
                ["Receptionist","Yes","No","Yes","No","Yes","No","No"]
              ].map((r, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{r[0]}</td>
                  <td>-</td>
                  <td><span className="status active">Active</span></td>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                  <td>{r[3]}</td>
                  <td>{r[4]}</td>
                  <td>{r[5]}</td>
                  <td>{r[6]}</td>
                  <td>{r[7]}</td>
                  <td className="actions">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-pencil"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <span>Showing 7 roles</span>
            <div>
              Items per page:
              <select>
                <option>10</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* ================= LIST OF USERS ================= */}
      {activeTab === "users" && (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Role</th>
                <th>Status</th>
                <th>Franchise</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["SuperAdmin","system@admin123","-","SuperAdmin","1001"],
                ["Dr. Meenal Prakash Joshi","meenal1@gmail.com","7785469857","Clinic Admin","1002"],
                ["Komal Sunil Ghadge","komal@gmail.com","9958741256","Receptionist","1002"],
                ["Sagar Vijay Pawar","sagar@gmail.com","8845745895","Doctor","1002"],
                ["Satish Kale","satish@gmail.com","9478569584","Lab Technician","1002"]
              ].map((u, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{u[0]}</td>
                  <td>{u[1]}</td>
                  <td>{u[2]}</td>
                  <td>{u[3]}</td>
                  <td><span className="status active">Active</span></td>
                  <td>{u[4]}</td>
                  <td className="actions">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-pencil"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <span>Showing 5 users</span>
            <div>
              Items per page:
              <select>
                <option>10</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default UserRole;
