import React from 'react';
import './PatientDashBoard.css';
import { Link } from 'react-router-dom';


const PatientDashBoard = () => {
  const settings = {
   
  };

  return (
    <div className="patient-dashboard-container">
      <h1 style={{color:'white',marginTop:'-100px',position:'absolute',top:'20%',
      left:'25%',
      background:'grey',
      opacity:'70%',
      padding:'7px 50px 7px 50px',
      borderRadius:'20px'
    }}>Here is the Patient Dashboard Page</h1><br></br>
      <button className="view-doctors-button" style={{color:'white',
      position:'relative',
      marginTop:'30px',
      width:'fit-content',
      height:'fit-content',
      padding:'20px 40px 20px 40px',
      border:'3px solid white',
      textAlign:'center',
      background:'transparent',
      borderRadius:'20px',
      
    }}>
        <Link to='/doctorsview' style={{color:'white',fontSize:'20px'}}> View Doctors Details
        </Link>
        </button>
        
    </div>
  );
};

export default PatientDashBoard;