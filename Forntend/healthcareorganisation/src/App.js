import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import RegisterHome from './components/RegisterHome';
import PatientRegister from './components/PatientRegister';
import DoctorRegister from './components/DoctorRegister';
import AdminPage from './components/AdminPage';
import DoctorsView from './components/DoctorsView';
import DoctorsDelete from './components/DoctorsDelete';
import DoctorsApprove from './components/DoctorsApprove';
import PatientDashBoard from './components/PatientDashBoard';
import DoctorDashBoard from './components/DoctorDashBoard';



function App() {
  return (
    <BrowserRouter>

    <div className="App">
     <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/registerhome' element={<RegisterHome/>}/>
      <Route path='/patregistration' element={<PatientRegister/>}/>
      <Route path='/docregistration' element={<DoctorRegister/>}/>
      <Route path='/adminpage' element={<AdminPage/>}/>
      <Route path='/doctorsview' element={<DoctorsView/>}/>
      <Route path='/doctorsdelete' element={<DoctorsDelete/>}/>
      <Route path='/DoctorsApprove' element={<DoctorsApprove/>}/>
      <Route path='/PatientDashBoard' element={<PatientDashBoard/>}/>
      <Route path='/DoctorDashBoard' element={<DoctorDashBoard/>}/>
      
     </Routes>

    </div>
    </BrowserRouter>

  );
}

export default App;