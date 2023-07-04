import React, { useEffect, useState } from 'react';
import './ApprovedDoctorsView.css';
import { Link } from 'react-router-dom';


const ApprovedDoctorsView = () => {
  const [approvedDoctors, setApprovedDoctors] = useState([]);

  useEffect(() => {
    const fetchApprovedDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5066/api/User", {
          method: "GET",
          headers: {
            "accept": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          const approvedDoctors = data.filter(doctor => doctor.status === true);
          setApprovedDoctors(approvedDoctors);
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchApprovedDoctors();
  }, []);

  return (
    <div className="centerdocview-container">
      <br />
      <h1 className="list-head">Approved Doctors</h1>
      <div id="loggedItems">
        <table id="doviwtable">
          <thead>
            <tr className='docviewtr'>
              <th className='docviewth'>Doctor Id</th>
              <th className='docviewth'>Name</th>
              <th className='docviewth'>Gender</th>
              <th className='docviewth'>Age</th>
              <th className='docviewth'>DOB</th>
              <th className='docviewth'>Email</th>
              <th className='docviewth'>Phone No</th>
              <th className='docviewth'>Specialization</th>
              <th className='docviewth'>Experience</th>
            </tr>
          </thead>
          <tbody>
            {approvedDoctors.map((doctor) => (
              <tr key={doctor.doctorId} className='docviewtr'>
                <td className='docviewtd'>{doctor.doctorId}</td>
                <td className='docviewtd'>{doctor.doctorName}</td>
                <td className='docviewtd'>{doctor.gender}</td>
                <td className='docviewtd'>{doctor.age}</td>
                <td className='docviewtd'>{doctor.dob}</td>
                <td className='docviewtd'>{doctor.email}</td>
                <td className='docviewtd'>{doctor.phoneNo}</td>
                <td className='docviewtd'>{doctor.specialization}</td>
                <td className='docviewtd'>{doctor.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div>
        <button classname="back-btn" style={{position:'relative',marginTop:'40px'}}>
            <Link to="/DoctorDashBoard" >Back</Link>
        </button>
      </div>
    </div>
  );
};

export default ApprovedDoctorsView;