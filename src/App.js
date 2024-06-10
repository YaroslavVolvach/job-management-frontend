import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import AddJobForm from './components/AddJobForm';
import UpdateJobForm from './components/UpdateJobForm';
import AboutMe from './components/AboutMe';
import CoverLetter from './components/CoverLetter';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/add-job" element={<AddJobForm />} />
          <Route path="/update-job/:id" element={<UpdateJobForm />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route
            path="/cover-letter"
            element={
              <CoverLetter
                companyName={'Profitfill'}
                position={'Senior Software Developer'}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
