import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/AddJobForm.css';
import { useNavigate } from 'react-router-dom';

const AddJobForm = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    customerName: '',
    jobType: '',
    status: 'Scheduled',
    appointmentDate: '',
    technician: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://job-management-backend-96ebfc252faf.herokuapp.com/jobs',
        jobData
      );
      navigate('/');
    } catch (error) {
      setErrorMessage('Failed to create job. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="add-job-form-container">
        <h1>Create Job</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={jobData.customerName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobType">Job Type</label>
            <input
              type="text"
              id="jobType"
              name="jobType"
              value={jobData.jobType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={jobData.status}
              onChange={handleChange}
              required
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date</label>
            <input
              type="datetime-local"
              id="appointmentDate"
              name="appointmentDate"
              value={jobData.appointmentDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="technician">Technician</label>
            <input
              type="text"
              id="technician"
              name="technician"
              value={jobData.technician}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="create-job-button">
            Create Job
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddJobForm;
