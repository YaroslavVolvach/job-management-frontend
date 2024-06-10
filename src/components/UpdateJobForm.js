import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/UpdateJobForm.css';

const UpdateJobForm = () => {
  const [jobData, setJobData] = useState({
    customerName: '',
    jobType: '',
    status: 'Scheduled',
    appointmentDate: '',
    technician: '',
  });
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(
          `https://job-management-backend-96ebfc252faf.herokuapp.com/jobs/${id}`
        );
        setJobData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJob();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://job-management-backend-96ebfc252faf.herokuapp.com/jobs/${id}`,
        jobData
      );
      navigate(`/jobs/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="update-job-form-container">
        <h1>Update Job</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={jobData.customerName}
              onChange={handleChange}
              required // Marking field as required
            />
            {errors.customerName && (
              <span className="error-message">{errors.customerName}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="jobType">Job Type</label>
            <input
              type="text"
              id="jobType"
              name="jobType"
              value={jobData.jobType}
              onChange={handleChange}
              required // Marking field as required
            />
            {errors.jobType && (
              <span className="error-message">{errors.jobType}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={jobData.status}
              onChange={handleChange}
              required // Marking field as required
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
            </select>
            {errors.status && (
              <span className="error-message">{errors.status}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date</label>
            <input
              type="datetime-local"
              id="appointmentDate"
              name="appointmentDate"
              value={jobData.appointmentDate}
              onChange={handleChange}
              required // Marking field as required
            />
            {errors.appointmentDate && (
              <span className="error-message">{errors.appointmentDate}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="technician">Technician</label>
            <input
              type="text"
              id="technician"
              name="technician"
              value={jobData.technician}
              onChange={handleChange}
              required // Marking field as required
            />
            {errors.technician && (
              <span className="error-message">{errors.technician}</span>
            )}
          </div>
          <button type="submit" className="update-job-button">
            Update Job
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateJobForm;
