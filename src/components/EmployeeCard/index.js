import React from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
  console.log("EmployeeCard props: ", props);
  return (

//     <div className="card">
//       <div className="img-container">
//         <img alt={props.email} src={props.image} />
//       <span onClick={() => props.removeEmployee(props.login.uuid)} className="remove">
//         X
//       </span>
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.firstName} {props.lastName}
//           </li>
//           <li>
//             <strong>E-Mail:</strong> {props.email}
//           </li>
//           <li>
//             <strong>Employee Number:</strong> {props.empNum}
//           </li>
//         </ul>
//       </div>
//     </div>

<div className="card">
<img className="card-img-top" src={props.image} alt={props.email} />
    <strong>Name:</strong> {props.firstName} {props.lastName}
<div className="card-body">
  <h4 className="card-title">
  </h4>
  <ul className="empList">
    <li>
      <strong>E-Mail:</strong> {props.email}
    </li>
    <li>
      <strong>Employee Number:</strong> {props.empNum}
    </li>
  </ul>
  <a href={props.key} className="deleteButton">
    Delete
  </a>
</div>
<br></br>
</div>
);
}

export default EmployeeCard;
