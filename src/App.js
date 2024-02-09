import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/navbar';
import Categories from './components/categories';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import TOPNEWSAPI from './components/Topnews';
import LoginPage from './components/Login';
import BAPI from './components/businessAPI'; // Import BAPI component
import SAPI from './components/sportsAPI'; // Import SAPI component
import SCAPIS from './components/ScienceAPI'; // Import SCAPIS component
import TECHAPI from './components/TechAPI'; // Import TECHAPI component
import HEALTHAPI from './components/HealthAPI'; // Import HEALTHAPI component
import ENTAPI from './components/EnterAPi'; 
// Import ENTAPI component

function App() {
  const location = useLocation();

  // Check if the current location is '/login'
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      {isLoginPage ? (
        <LoginPage />
      ) : (
        <>
          <Navbar />
          <Categories />
          <Routes>
            <Route exect path='/' Component={TOPNEWSAPI} />
            <Route path='/bapi' Component={BAPI} />
            <Route path='/sapi' Component={SAPI} />
            <Route path='/scapi2' Component={SCAPIS}/>
            <Route path= "/techapi" Component={TECHAPI}/>
            <Route path='/helapi' Component={HEALTHAPI}/>
            <Route path='/entapi' Component={ENTAPI}/>
          </Routes>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
