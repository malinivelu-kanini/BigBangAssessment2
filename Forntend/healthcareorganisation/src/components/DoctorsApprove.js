import React, { useEffect, useState } from 'react';
import './DoctorsApprove.css';
import { Link } from 'react-router-dom';


const DoctorsApprove = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5066/api/User", {
        method: "GET",
        headers: {
          "accept": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleApprove = async (doctorId) => {
    try {
      const response = await fetch(`http://localhost:5066/api/User/ApproveRequest?doctorId=${doctorId}`, {
        method: "POST",
        headers: {
          "accept": "application/json",
        },
      });

      if (response.ok) {
        fetchDoctors();
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const pendingDoctors = doctors.filter(doctor => !doctor.status);

  return (
    <div className="doctors-approve-container">
      <h1>Doctors Approval Details</h1>
      <br />
      <table className='docapptab'>
        <thead className='docappthead'>
          <tr className='appdoctr'>
            <th className='appdocth'>Doctor Id</th>
            <th className='appdocth'>Name</th>
            <th className='appdocth'>Status</th>
            <th className='appdocth'>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingDoctors.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td className='appdoctd'>{doctor.doctorId}</td>
              <td className='appdoctd'>{doctor.doctorName}</td>
              <td className='appdoctd'>{doctor.status ? "Approved" : "Pending"}</td>
              <td className='appdoctd'>
                {!doctor.status && (
                  <button className='appdocbutto' onClick={() => handleApprove(doctor.doctorId)}>
                    Approve
                  </button>
                  
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className='back-btn' style={{position:'relative',marginTop:'30px'}}>
          <Link to="/AdminPage" style={{color:'white'}}>Back</Link>
        </button>
      </div>
    </div>
  );
};

export default DoctorsApprove;