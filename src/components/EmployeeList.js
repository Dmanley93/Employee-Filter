import React, { Component } from "react";
import API from "../API/API.js";
import "../styles/EmployeeListStyles.css";
import SearchForm from "./SearchForm.js";


export default class EmployeeList extends Component {
    state = {
        title: "Hello World!",
        employees: [],
        input: ''
    }
    
    componentDidMount(){
        this.setState({
            title: "Employee Filter!"
        })
        API.getUsers().then((res) => {
            this.setState({
                employees: res.data.results
            })
            console.log(res)
        })
    }

    handleInputChange = event => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
        const filterEmployee = this.state.employees.filter((event) => {
            let filteredEmployee = event.name.first.toUpperCase();
            return filteredEmployee
        })
        this.setState({ 
            employees: filterEmployee
         })
      };

    handleClick = event => {
        event.sort(function(a, b) {
            console.log(event)
            var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
           
          });
    }

    

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>Seach here to find specific employees</p>
                <SearchForm 
                handleInputChange = {this.handleInputChange}
                handleClick = {this.handleClick}
                />
                <table>
                <thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Image</th>
							<th scope="col">Email</th>
							<th scope="col">Phone</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
						</tr>
				</thead>
                <tbody>
                    {this.state.employees.map((employee) => {
                        return <tr key={`${employee.email}`}>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td><img src={employee.picture.medium}></img></td>
                        <td>{employee.email}</td>
                        <td>{employee.cell}</td>
                        <td>{employee.dob.age}</td>
                        <td>{employee.gender}</td>
                        </tr>
                    })}
                </tbody>
                </table>
                    
            </div>
        )
    }
}

