 import React, { useState } from 'react';

export default function ShowStudentDetail(props) {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEditClick = (student) => {
      setSelectedStudent(student);
      setIsEditing(true);
    };
  
    const handleUpdate = () => {
      // Call the update function passed in via props
      props.updateStudent(selectedStudent);
      setIsEditing(false);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSelectedStudent((prev) => ({ ...prev, [name]: value }));
    };
  
    return (
      <div className="container mt-5">
        <h2 className="text-center">Student Details</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Index</th>
              <th>Roll Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((student, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{student.rollNumber}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.department}</td>
                <td>
                  <button onClick={() => handleEditClick(student)}>Edit</button>
                  <button onClick={() => props.deleteStudent(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {isEditing && (
          <div className="modal">
            <div className="modal-content">
              <h3>Edit Student</h3>
              {/* <label>Roll Number:</label>
              <input
                type="text"
                name="rollNumber"
                value={selectedStudent.rollNumber}
                onChange={handleInputChange}
              /> */}
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={selectedStudent.firstName}
                onChange={handleInputChange}
              />
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={selectedStudent.lastName}
                onChange={handleInputChange}
              />
              <label>Department:</label>
              <input
                type="text"
                name="department"
                value={selectedStudent.department}
                onChange={handleInputChange}
              />
              <button className='p-2' style={{backgroundColor:'red'}} onClick={handleUpdate}>Update</button>
              <button className='p-2'style={{backgroundColor:'blue'}} onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    );
  }
  