import React from "react";
import "./Employee.css";

function EmployeeInfo(props) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  if (props.filter === "male") {
    if (props.gender === "female") {
      return <div></div>;
    } else {
      return (
        <div>
          <div className="employee-container">
            <div className="employeeImg">
              <img src={props.picture} alt="employee pic" />
            </div>
            <div className="employeeName">
              <p>
                {props.name.first} {props.name.last}
              </p>
            </div>
            <div className="employeeNumber">
              <p>{props.phone}</p>
            </div>
            <div className="employeeEmail">
              <a href="mailto:" target="__blank">
                {props.email}
              </a>
            </div>
            <div className="employeeDOB">
              <p>{formatDate(props.dob)}</p>
            </div>
            <div className="employeeAge">
              <p>{props.age}</p>
            </div>
          </div>
        </div>
      );
    }
  } else if (props.filter === "female") {
    if (props.gender === "male") {
      return <div></div>;
    } else {
      return (
        <div>
          <div className="employee-container">
            <div className="employeeImg">
              <img src={props.picture} alt="employee pic" />
            </div>
            <div className="employeeName">
              <p>
                {props.name.first} {props.name.last}
              </p>
            </div>
            <div className="employeeNumber">
              <p>{props.phone}</p>
            </div>
            <div className="employeeEmail">
              <a href="mailto:" target="__blank">
                {props.email}
              </a>
            </div>
            <div className="employeeDOB">
              <p>{formatDate(props.dob)}</p>
            </div>
            <div className="employeeAge">
              <p>{props.age}</p>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <div className="employee-container">
          <div className="employeeImg">
            <img src={props.picture} alt="employee pic" />
          </div>
          <div className="employeeName">
            <p>
              {props.name.first} {props.name.last}
            </p>
          </div>
          <div className="employeeNumber">
            <p>{props.phone}</p>
          </div>
          <div className="employeeEmail">
            <a href="mailto:" target="__blank">
              {props.email}
            </a>
          </div>
          <div className="employeeDOB">
            <p>{formatDate(props.dob)}</p>
          </div>
          <div className="employeeAge">
            <p>{props.age}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeInfo;
