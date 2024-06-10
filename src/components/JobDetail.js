import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/JobDetail.css';
import Navbar from './Navbar';
import Footer from './Footer';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const URL = `https://job-management-backend-96ebfc252faf.herokuapp.com/jobs/${id}`;

  const fetchJob = async () => {
    try {
      const response = await axios.get(URL);
      setJob(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch job details. Please try again later.');
    }
  };

  const handleUpdateClick = () => {
    navigate(`/update-job/${id}`);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(URL);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Failed to delete job. Please try again later.');
    }
  };

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  useEffect(() => {
    fetchJob();
  }, [id]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="job-detail-container">
        <div className="job-detail-card">
          <h1>Job Details</h1>
          <div className="job-detail-info">
            <p>
              <strong>Customer Name:</strong> {job.customerName}
            </p>
            <p>
              <strong>Job Type:</strong> {job.jobType}
            </p>
            <p>
              <strong>Status:</strong> {job.status}
            </p>
            <p>
              <strong>Appointment Date:</strong>
              {new Date(job.appointmentDate).toLocaleString('en-US', options)}
            </p>
            <p>
              <strong>Technician:</strong> {job.technician}
            </p>
          </div>
          <div className="job-detail-actions">
            <button onClick={handleUpdateClick}>Update Job</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetail;
