import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Dashboard from './components/DashBoard';
import AddDataPage from './components/AddDataPage';
import Analysis from './components/Analysis';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const [studentData, setStudentData] = useState(() => {
    const savedData = localStorage.getItem('studentData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });

  useEffect(() => {
    if (!userName) {
      const name = prompt('Enter your name:');
      if (name) {
        setUserName(name);
        localStorage.setItem('userName', name);
      }
    }
  }, [userName]);

  useEffect(() => {
    localStorage.setItem('studentData', JSON.stringify(studentData));
  }, [studentData]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              studentData={studentData}
              setStudentData={setStudentData}
              userName={userName}
            />
          }
        />
        <Route
          path="/addData"
          element={<AddDataPage studentData={studentData} setStudentData={setStudentData} />}
        />
        <Route path="/analysis" element={<Analysis studentData={studentData} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
