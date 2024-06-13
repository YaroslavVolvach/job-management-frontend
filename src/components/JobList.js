import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const pageSize = 5;

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        `https://job-management-backend-96ebfc252faf.herokuapp.com/jobs`
      );
      console.log('Jobs:', response.data.jobs);
      setJobs(response.data.jobs);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch jobs. Please try again later.');
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
    fetchJobs();
  }, []);

  useEffect(() => {
    if (sortField) {
      const sortedJobs = [...jobs].sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
      setJobs(sortedJobs);
    }
  }, [sortField, sortOrder]);

  const handleDetailClick = (id) => {
    navigate(`/jobs/${id}`);
  };

  const changePage = (numberPage) => {
    setCurrentPage(numberPage);
  };

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const totalPages = Math.ceil(jobs.length / pageSize);

  return (
    <div>
      <Navbar />
      <div className="job-list-container">
        <h1>Job List</h1>
        <div className="sort-buttons">
          <button
            className="sort-button"
            onClick={() => toggleSort('customerName')}
          >
            Sort by Customer Name{' '}
            {sortField === 'customerName' && (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
          <button className="sort-button" onClick={() => toggleSort('status')}>
            Sort by Status{' '}
            {sortField === 'status' && (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
          <button
            className="sort-button"
            onClick={() => toggleSort('appointmentDate')}
          >
            Sort by Appointment Date{' '}
            {sortField === 'appointmentDate' &&
              (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
        </div>
        <ul className="job-list">
          {jobs
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((job) => (
              <li key={job._id} className="job-list-item">
                <div className="job-info">
                  <div className="job-details">
                    <p>{`${job.customerName} | ${job.status} | ${new Date(
                      job.appointmentDate
                    ).toLocaleString('en-US', options)}`}</p>
                  </div>
                  <div className="job-actions">
                    <button
                      onClick={() => handleDetailClick(job._id)}
                      className="detail-button"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="pagination">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => changePage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobList;
