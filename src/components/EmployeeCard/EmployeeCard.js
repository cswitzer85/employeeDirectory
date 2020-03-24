import React from "react";
// import "./style.css";

function EmployeeCard(props) {
  console.log("EmployeeCard props: ", props);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.email} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>E-Mail:</strong> {props.email}
          </li>
          <li>
            <strong>Employee Number:</strong> {props.empNum}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeEmployee(props.login.uuid)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default EmployeeCard;
