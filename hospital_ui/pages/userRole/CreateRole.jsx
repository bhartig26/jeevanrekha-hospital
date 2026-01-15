import Layout from "../../components/layout/Layout";
import "../../styles/userRoleForm.css";

const CreateRole = () => {
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
            <h6>Create Role</h6>
            <p>Define system roles and permissions. Roles are reusable across clinics.</p>
          </div>
        </div>

        {/* FORM GRID */}
        <div className="form-grid">
          <input placeholder="Role Name" />
          <input placeholder="Role Code" />

          <select>
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* PERMISSIONS */}
        <div className="permissions-box">
          <p className="permissions-title">Permissions</p>

          <div className="permissions-grid">
            {[
              "Patient Management",
              "Lab Module",
              "Billing",
              "User Management",
              "Appointments",
              "Inventory",
              "Reports",
              "All",
            ].map((p) => (
              <label key={p}>
                <input type="checkbox" /> {p}
              </label>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="form-actions">
          <button className="btn-outline">Save Draft</button>
          <button className="btn-primary">Create Role</button>
        </div>

      </div>
    </Layout>
  );
};

export default CreateRole;
