import Layout from "../../components/layout/Layout";
import "../../styles/userRoleForm.css";

const CreateUser = () => {
  return (
    <Layout>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h5>User & Role Management</h5>
      </div>

      {/* FORM CARD */}
      <div className="form-card">

        {/* SECTION HEADER */}
        <div className="form-section-header">
          <div className="yellow-bar"></div>
          <div>
            <h6>Create User</h6>
            <p>Create system users and assign roles</p>
          </div>
        </div>

        {/* FORM GRID */}
        <div className="form-grid full">
          <input placeholder="Full Name *" />
        </div>

        <div className="form-grid">
          <input placeholder="Email *" />
          <input placeholder="Mobile *" />
        </div>

        <div className="form-grid">
          <input type="password" placeholder="Password *" />
          <select>
            <option>Role *</option>
          </select>
        </div>

        <div className="form-grid">
          <select>
            <option>Select Franchise *</option>
            <option>Not Assigned</option>
          </select>

          <select>
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* ACTIONS */}
        <div className="form-actions">
          <button className="btn-outline">Save Draft</button>
          <button className="btn-primary">Create User</button>
        </div>

      </div>
    </Layout>
  );
};

export default CreateUser;
