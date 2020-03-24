import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

// Use mock data for employees
// import employees from "./mockEmpData.json";
// Use API call for employees
import API from "./utils/API";

// import Search from "./components/SearchBar";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";

class App extends Component {
  state = {
    employees: []
  };

  componentWillMount() {
    API.getUsers().then(res => {
      console.log("component will mount: ", res.data.results);
      this.setState({
        employees: res.data.results
      });
    });
  }

  // To be used for searching for a particular employee ----_____----____-----____
  //   getUsers = query => {
  // API.getUsers().then(res => {
  //     console.log(res);
  //       employees: res
  //     });
  //   })
  // }
  // }

  render() {
    console.log("this state employees: ", this.state.employees);
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
            empNum={employee.login.uuid}
            image={employee.picture.thumbnail}
            email={employee.email}
            key={employee.login.uuid}
          />
        ))}
      </Wrapper>
      // </div>
      // </Router>
    );
  }
}
export default App;
