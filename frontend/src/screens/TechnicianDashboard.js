import React from 'react';
import { useNavigate } from 'react-router-dom';

function TechnicianDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h2>Technician Dashboard</h2>
      <div style={{ marginTop: '30px' }}>
        <button onClick={() => navigate('/add-customer')} style={btnStyle}>Add Customer</button><br /><br />
        <button onClick={() => navigate('/upload-worklog')} style={btnStyle}>Upload Work Log</button><br /><br />
        <button onClick={() => navigate('/view-inventory')} style={btnStyle}>View Inventory</button><br /><br />
        <button onClick={() => navigate('/')} style={btnStyle}>Logout</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '12px 30px',
  margin: '10px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default TechnicianDashboard;
