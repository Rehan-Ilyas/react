import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('/AddStudent');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '/AddStudent' ? 'active-link' : ''}`}
                  to="/AddStudent"
                  onClick={() => handleLinkClick('/AddStudent')}
                >
                  Add Student
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '/ShowStudentDetail' ? 'active-link' : ''}`}
                  to="/ShowStudentDetail"
                  onClick={() => handleLinkClick('/ShowStudentDetail')}
                >
                  Show Detail
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
