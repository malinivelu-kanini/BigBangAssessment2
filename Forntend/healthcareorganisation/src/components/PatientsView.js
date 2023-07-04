import React, { useEffect, useState } from 'react';
import './PatientsView.css';
import { Link } from 'react-router-dom';

const PatientsView = () => {
  const [pattient, setpattient] = useState([]);

  useEffect(() => {
    const fetchpatients = async () => {
      try {
        const response = await fetch("http://localhost:5066/api/User/GetAllPatients", {
          method: "GET",
          headers: {
            "accept": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setpattient(data);
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchpatients();
  }, []);

  return (
    <div className="center-container">
     <br></br>
      <h1 className="list-head">Doctors Can Visit the Patients Here</h1>
      <div id="loggedItems"><br/><br/>

      <table id="table">
        <thead>
          <tr>
            <th>Patient Id</th> 
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Affliction</th>
          </tr>
        </thead>
        <tbody>
          {pattient.map((patient) => (
            <tr key={patient.patientId}>
              <td>{patient.patientId}</td>
              <td>{patient.patientName}</td>
              <td>{patient.gender}</td>
              <td>{patient.age}</td>
              <td>{patient.dob}</td>
              <td>{patient.email}</td>
              <td>{patient.phoneNo}</td>
              <td>{patient.affliction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button style={{
    fontSize: 'small',
    backgroundColor: 'blue',
    transition: 'background-color 0.3s',
    width: '100px', 
    height: '50px', 
    background: 'blue',
    marginTop: '-0px'

  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'blue';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'lightskyblue';
  }}><Link to="/DoctorDashBoard" style={{ color: 'black' }}>
    Back
  </Link></button>
    </div>
  );
};

export default PatientsView;