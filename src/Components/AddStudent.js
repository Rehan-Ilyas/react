// import React, { useState } from 'react'; // Import useState

// export default function AddStudent(props) {
//   const [fields, setFields] = useState({
//     firstName: '',
//     lastName: '',
//     department: '',
//     rollNumber: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFields(prevFields => ({
//       ...prevFields,
//       [name]: value
//     }));
    
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); 
//     props.setShowText(fields);
//     setFields({
//         firstName: '',
//         lastName: '',
//         department: '',
//         rollNumber: ''
//       }); 
//   };

//   const handleClear = () => {
//     setFields({
//       firstName: '',
//       lastName: '',
//       department: '',
//       rollNumber: ''
//     });
//   };

//   return (
//     <>
//     <div>
//         <h1 className='text-center fw-bold mt-2'>Registration</h1>
//         <h2>Department: {props.showText.department}</h2>
//         <pre>{JSON.stringify(props.showText, null, 2)}</pre> {/* Display entire showText object */}
//     </div>
//     <div className="container mt-5">
//       <form onSubmit={handleSubmit}>
//         <table className="table table-bordered">
//           <tbody>
//             <tr>
//               <td>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="Enter First Name"
//                   value={fields.firstName}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Enter Last Name"
//                   value={fields.lastName}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <input
//                   type="text"
//                   name="department"
//                   placeholder="Enter Department"
//                   value={fields.department}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <input
//                   type="number"
//                   name="rollNumber"
//                   placeholder="Roll Number"
//                   value={fields.rollNumber}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <button type="submit" className="btn btn-primary me-3">Submit</button>
//         <button type="button" onClick={handleClear} className="btn btn-secondary">Clear</button>
//       </form>
//     </div>
//     </>

//   );
// }
import React, { useState } from 'react';

export default function AddStudent(props) {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    department: '',
    rollNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields(prevFields => ({
      ...prevFields,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addStudent(fields); // Add new student record
    setFields({
      firstName: '',
      lastName: '',
      department: '',
      rollNumber: ''
    });
  };

  const handleClear = () => {
    setFields({
      firstName: '',
      lastName: '',
      department: '',
      rollNumber: ''
    });
  };

  return (
    <>
      <div  style={{background:'#f7f7f7'}}>
        <h1 className='text-center fw-bold mt-2'>Registration</h1>
      </div>
      <div className='AddstuTbl pt-5 pb-5'>
      <div className="container p-2"  style={{background:'whitesmoke'}} >
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={fields.firstName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={fields.lastName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="department"
                    placeholder="Enter Department"
                    value={fields.department}
                    onChange={handleChange}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    name="rollNumber"
                    placeholder="Roll Number"
                    value={fields.rollNumber}
                    onChange={handleChange}
                    className="form-control"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className=' text-center'>
          <button type="submit" className="btn btn-primary m-2  ">Submit</button>
          <button type="button" onClick={handleClear} className="btn btn-secondary">Clear</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

