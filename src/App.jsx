// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react';
import Header from './Component/header';
import Employees from './Component/Employee';
import Footer from './Component/footer';
import './Component/content.css'
import './App.css'

const App = () => {

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")) || [ {id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "Team A"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "Team B"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "Team C"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "Team D"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "Team D"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "Team D"}]);

const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "Team A");

useEffect(() =>{
  localStorage.setItem("employees", JSON.stringify(employees));
},[employees]);

useEffect(() =>{
  localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
},[selectedTeam])

function handleTeamSelectionChange(event){
setSelectedTeam(event.target.value);
}

function handleEmployeeCardClick(event){
const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                                            ? (employee.teamName === selectedTeam) ? {...employee, teamName:""}:{...employee, teamName: selectedTeam}
                                            :employee);
setEmployees(transformedEmployees);
}

  return (
    <div className='app-content'>
      <Header selectedTeam={selectedTeam} selectedTeamCount={employees.filter((employee) => employee.teamName === selectedTeam).length}/>
      <Employees employees={employees} selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} handleEmployeeCardClick={handleEmployeeCardClick} />
      <Footer/>
    </div>
  )
}

export default App
