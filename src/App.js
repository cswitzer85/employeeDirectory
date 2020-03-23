import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./utils/API";
// import Search from "./components/SearchBar";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employees
    };
  }

  render() {
    console.log(this.state.employees);
    return (
      // <Router>
        // <div>
        //   <Search />
          <Wrapper>
            <Title>Employee List</Title>
            {this.state.employees.map(employee => (
              <EmployeeCard
              firstName={employee.name.first}
              lastName={employee.name.last}
              id={employee.login.uuid}
              image={employee.picture.thumbnail}
              email={employee.email}
              />
            ))}
          </Wrapper>
        // </div>
      // </Router>
    );
  }
}

export default App;
