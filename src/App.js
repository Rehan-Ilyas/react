
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddStudent from './Components/AddStudent';
import ShowStudentDetail from './Components/ShowStudentDetail';
import Navbar from './Components/XyzNav';

const NoPage = () => {
  return <div>Page Not Found</div>;
};

// function App() {
//   const [students, setStudents] = useState([]); // Array to store multiple student records

//   const addStudent = (newStudent) => {
//     setStudents(prevStudents => [...prevStudents, newStudent]);
//   };


//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<AddStudent addStudent={addStudent} />} />
//         <Route exact path="/AddStudent" element={<AddStudent addStudent={addStudent} />} />
//         <Route exact path="/ShowStudentDetail" element={<ShowStudentDetail students={students} />} />
//         <Route path="*" element={<NoPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents(prevStudents => [...prevStudents, newStudent]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(prevStudents => 
      prevStudents.map(student =>
        student.rollNumber === updatedStudent.rollNumber ? updatedStudent : student
      )
    );
  };

  const deleteStudent = (index) => {
    setStudents(prevStudents => prevStudents.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddStudent addStudent={addStudent} />} />
        <Route exact path="/AddStudent" element={<AddStudent addStudent={addStudent} />} />
        <Route 
          exact 
          path="/ShowStudentDetail" 
          element={
            <ShowStudentDetail 
              students={students} 
              updateStudent={updateStudent} 
              deleteStudent={deleteStudent} 
            />
          } 
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

 export default App;