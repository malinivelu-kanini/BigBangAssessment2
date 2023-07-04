import React, { useState } from 'react';
import './DoctorsDelete.css';
import { Link } from 'react-router-dom';
const DoctorsDelete = () => {
  const [doctorId, setDoctorId] = useState('');

  const handleDoctorIdChange = (e) => {
    setDoctorId(e.target.value);
  };

  const handleDeleteDoctor = async () => {
    try {
      const response = await fetch(`http://localhost:5066/api/User?doctorID=${doctorId}`, {
        method: 'DELETE',
        headers: {
          'accept': 'text/plain',
        },
      });

      if (response.ok) {
        const message = await response.text();
        console.log(message);
        alert("Doctor deleted Successfully");
       
      } else {
        console.log('Error:', response.status);
        
      }
    } catch (error) {
      console.log('Error:', error);
      
    }
  };

  return (
    <div className='bodydeldoc'>
    <div className="doctors-delete-container con" >
      <h1 className="deldoc">Delete Doctor</h1>
      <input type="text" className="deldocinpu" placeholder="Doctor ID" value={doctorId} onChange={handleDoctorIdChange} />
      <br />
      <button className="deldocbut" onClick={handleDeleteDoctor}>Delete</button>
      <Link to='/doctorsview' style={{position:'relative',paddingTop:'20px'}}> View Doctors Details </Link>
      <button className='back-btn' style={{position:'relative',marginTop:'20px'}}>
        <Link to="/AdminPage">Back</Link>
      </button>

    </div>
    </div>
    
  );
};

export default DoctorsDelete;