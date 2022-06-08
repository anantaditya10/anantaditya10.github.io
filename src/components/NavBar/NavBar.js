import './_navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="text navigation">
      <div className="navigation-menu">
        <ul>
          <li>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/addexpense">
              Add Expense
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/addgroup">
              Add Group
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
