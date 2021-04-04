import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import EmployeeInfo from "./EmployeeInfo";
import "./Employee.css";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [sortedEmployees, setSortedEmployees] = useState([]);
  const [sortedDisplay, setSortedDisplay] = useState(false);
  const [filter, setFilter] = useState("none");

  function getEmployeeInfo() {
    API.getEmployee().then((results) => {
      setSortedEmployees(
        results.data.results.slice(0, 40).sort((a, b) => b.dob.age - a.dob.age)
      );
      setEmployees(results.data.results.slice(0, 40));
    });
  }
  function filterAge() {
    setSortedDisplay(!sortedDisplay);
  }
  useEffect(() => {
    getEmployeeInfo();
  }, []);

  return (
    <div>
      <div className="searchBar-container">
        <form className="searchBar">
          <input className="form-control" type="search" placeholder="Search" />
        </form>
      </div>
      <div className="filterSort-container">
        <div className="sort-container">
          <h1>Sort</h1>
          <button onClick={() => filterAge()}>Age</button>
        </div>
        <div className="filter-container">
          <h1>Filters</h1>
          <button className="filter" onClick={() => setFilter("male")}>Male</button>
          <button className="filter" onClick={() => setFilter("female")}>Female</button>
          <button className="noFilter" onClick={() => setFilter("none")}>No Filter</button>
        </div>
      </div>
      <div className="tableTop-container">
        <ul className="tableTopWords">
          <li>Image</li>
          <li>Name</li>
          <li>Phone</li>
          <li>Email</li>
          <li>DOB</li>
          <li>Age</li>
        </ul>
      </div>
      <div style={sortedDisplay ? { display: "initial" } : { display: "none" }}>
        {sortedEmployees.map((employee) => {
          return (
            <EmployeeInfo
              name={employee.name}
              picture={employee.picture.large}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.date}
              age={employee.dob.age}
              gender={employee.gender}
              filter={filter}
            />
          );
        })}
      </div>
      <div style={sortedDisplay ? { display: "none" } : { display: "initial" }}>
        {employees.map((employee) => {
          return (
            <EmployeeInfo
              name={employee.name}
              picture={employee.picture.large}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.date}
              age={employee.dob.age}
              gender={employee.gender}
              filter={filter}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Employee;
