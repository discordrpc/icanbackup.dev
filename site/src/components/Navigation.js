import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './Authentication';
import logo from '../data/backup-icon.png';
import '../styling/navigation.scss';

export default function Navigation() {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <nav>
      <NavLink className="nav-main" to="/">Home</NavLink>
      <img className="nav-logo" src={logo} alt="Backup icon"></img>
      <NavLink className="nav-btn" to="/info">Information</NavLink>
      {!authed && <NavLink className="nav-btn" to="/login">
        Login
      </NavLink>}
      {authed && <button className="nav-btn" onClick={handleLogout}>
        Logout
      </button>}
    </nav>
  );
}