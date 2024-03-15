import { Link, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './navbar.css';

const Navbar = () => {
    const [collapseOpen, setCollapseOpen] = useState(false);
    const toggleCollapse = () => {
        setCollapseOpen(!collapseOpen);
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid d-flex justify-content-between">
                <Link to='/' className="navbar-brand d-flex align-items-center">
                    ourverse
                </Link>
              
                    <Link to='/' className="nav mt-3">Home</Link>
                
                    <Link to='/login' className="nav mt-3">Login</Link>
                
                    <Link to='/register' className="nav mt-3">Register</Link>
                    <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>
                    <div className={`collapse navbar-collapse ${collapseOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/listuser' className="nav-link">List User</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleLogout} className="logout nav-link">Logout</button>
                        </li>
                    </ul>
                </div>
        
                
                
            </div>
        </nav>
    )
}

export default Navbar;
