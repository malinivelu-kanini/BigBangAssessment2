import React, { useState, useEffect } from 'react';
import './UpdateDoctorDetails.css';
import { Link } from 'react-router-dom';

const UpdateDoctorDetails = () => {
  const [doctorData, setDoctorData] = useState({
    doctorID: 0,
    doctorName: '',
    dateOfBirth: '',
    age: 0,
    gender: '',
    phone: '',
    email: '',
    specialization: '',
    experience: '',
  });

  useEffect(() => {
    fetch(`http://localhost:5066/api/User/GetById?doctorID=${localStorage.getItem("userId")}`)
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          setDoctorData(data);
        } else {
          console.log('Failed to fetch doctor details');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [doctorData.doctorID]);

  const handleUpdate = () => {
    var id = localStorage.getItem("userId")
    setDoctorData({...doctorData, doctorID:id})
    console.log(doctorData)
    fetch(`http://localhost:5066/api/User?doctorID=${localStorage.getItem("userId")}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(doctorData),
    })
      .then(async (response) => {
        if (response.ok) {
          alert('Doctor details updated successfully');
        } else {
          const errorData = await response.json();
          alert(`Failed to update doctor details: ${errorData.message}`);
          if (response.status === 401) {
            alert(`Unauthorized: ${errorData.message}`);
          } else {
            alert(`Failed to update doctor details: ${errorData.message}`);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        alert('An error occurred while updating doctor details');
      });
  };

  return (
  
    <div className="updatedoc-container">
      <h2 className="updatedoc-heading">Update Doctor Details</h2>
      <div>
        <input
          type="text"
          id="doctorName"
          placeholder="Doctor Name"
          value={doctorData.doctorName}
          onChange={(e) => setDoctorData({ ...doctorData, doctorName: e.target.value })}
          className="updatedoc-input"
        />
      </div>
      <div>
        <input
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        value={doctorData.dateOfBirth}
        onChange={(e) => setDoctorData({ ...doctorData, dateOfBirth: e.target.value })}
        className="updatedoc-input"
        />
    </div>
      <div>
        <input
          type="number"
          id="age"
          placeholder="Age"
          value={doctorData.age}
          onChange={(e) => setDoctorData({ ...doctorData, age: e.target.value })}
          className="updatedoc-input"
        />
      </div>
      <div>
        <input
          type="text"
          id="gender"
          placeholder="Gender"
          value={doctorData.gender}
          onChange={(e) => setDoctorData({ ...doctorData, gender: e.target.value })}
          className="updatedoc-input"
        />
      </div>
      <div>
        <input
          type="text"
          id="phone"
          placeholder="Phone"
          value={doctorData.phone}
          onChange={(e) => setDoctorData({ ...doctorData, phone: e.target.value })}
          className="updatedoc-input"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={doctorData.email}
          onChange={(e) => setDoctorData({ ...doctorData, email: e.target.value })}
          className="updatedoc-input"
        />
      </div>
      <div>
        <input
          type="text"
          id="specialization"
          placeholder="Specialization"
          value={doctorData.specialization}
          onChange={(e) => setDoctorData({ ...doctorData, specialization: e.target.value })}
          className="updatedoc-input"
        />
      </div>
      <div>
        <input
          type="text"
          id="experience"
          placeholder="Experience"
          value={doctorData.experience}
          onChange={(e) => setDoctorData({ ...doctorData, experience: e.target.value })}
          className="updatedoc-input"
        />
      </div>

      <button type="button" onClick={handleUpdate} className="updatedoc-button">
        Update
      </button>
      <div>
        <button classname="back-btn" style={{position:'relative',marginTop:'30px',backgroundColor:'red'}}>
          <Link to="/DoctorDashBoard" style={{color:'white'}}>Back</Link>
        </button>
      </div>
    </div>
  );
};

export default UpdateDoctorDetails;