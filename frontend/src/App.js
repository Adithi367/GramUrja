import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechnicianLogin from './screens/TechnicianLogin';
import TechnicianDashboard from './screens/TechnicianDashboard';
import AddCustomer from './screens/AddCustomer';
import UploadWorklog from './screens/UploadWorklog';
import ViewInventory from './screens/ViewInventory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TechnicianLogin />} />
        <Route path="/dashboard" element={<TechnicianDashboard />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/upload-worklog" element={<UploadWorklog />} />
        <Route path="/view-inventory" element={<ViewInventory />} />
      </Routes>
    </Router>
  );
}

export default App;

