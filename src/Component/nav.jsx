import {Link} from "react-router-dom";
import './content.css'

const nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
            <Link to="GroupedTeamMembers" className="nav-link">Team</Link>
            </li>
        </ul>
    </nav>
  )
}

export default nav
