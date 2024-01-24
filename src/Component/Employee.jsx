
import './content.css';
import female_Icon from './Assets/woman placeholder.png'
import male_Icon from './Assets/man placeholder.png'

// eslint-disable-next-line react/prop-types
const Employees = ({employees,selectedTeam,handleTeamSelectionChange,handleEmployeeCardClick}) => {
  
    
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
            <div key={employee.id} className={(employee.teamName === selectedTeam?"card shadow":"card")} id={employee.id} onClick={handleEmployeeCardClick}>
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
