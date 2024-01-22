import React, { useState } from 'react';
import './content.css';
import female_Icon from './Assets/woman placeholder.png'
import male_Icon from './Assets/man placeholder.png'

const Employees = () => {
    const [employees, setEmployees] = useState([ {id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"}]);

  const [selectedTeam, setSelectedTeam] = useState("Team B");

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
    <main className='employees-content'>
        <div className="selections">
            <select value={selectedTeam} onChange={handleTeamSelectionChange}>
                <option value="Team A">Team A</option>
                <option value="Team B">Team B</option>
                <option value="Team C">Team C</option>
                <option value="Team D">Team D</option>
            </select>
        </div>
        <div className="card-collection">
            {employees.map((employee) => (
            // eslint-disable-next-line react/jsx-key
            <div className={(employee.teamName === selectedTeam?"card shadow":"card")} id={employee.id} onClick={handleEmployeeCardClick}>
                {employee.gender === "female" ? <img src={female_Icon} className='card-img'/>:<img src={male_Icon} className='card-img'/>}
                    <div className="card-body">
                        <p className='name'>{employee.fullName}</p>
                        <small className='disigner'>{employee.designation}</small>
                    </div>
            </div>
            ))}
        </div>
    </main>
  )
}

export default Employees
