import React from "react";
import './DoctorDashBoard.css';
import { Link } from 'react-router-dom';



const DoctorDashBoard = () => {
    const settings = {

    };

    return (
        <div className="doc-dashboard">
        <h1>Doctor Dashboard Page</h1><br></br>
        <div className="abc">
            <div>
        <button className="view-Doc-button">
        <Link to="/ApprovedDoctorsView"style={{color:'white'}} >View Approved Status</Link>
        </button>
        <button className="update-doc">
        <Link to="/UpdateDoctorDetails" style={{color:'white'}}>Update Doctor Profile</Link>
        </button>
        <button className="update-doc">
        <Link to="/PatientsView" style={{color:'white'}}>Patients Details</Link>
        </button>
        <button>
        <Link to="/SignIn" style={{color:'white'}}>Logout</Link>
        </button>
        </div>
        </div>
        </div>
    );
};
export default DoctorDashBoard;