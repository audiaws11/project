import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid d-flex justify-content-between">
                <Link to='./' className="navbar-brand d-flex align-items-center">
                    ourverse
                </Link>
              
                    <Link to='/' className="nav mt-3">Home</Link>
                
                    <Link to='/login' className="nav mt-3">Login</Link>
                
                    <Link to='/' className="nav mt-3">Register</Link>
                
                
            </div>
        </nav>
    )
}

export default Navbar;
