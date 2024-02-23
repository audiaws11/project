import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'




function Navbar() {
   

    return (
        <div>
            <header className="bg-white min-vh-1000 navbar-default fixed-top">
                <nav className="navbar bg-body-tertiary d-flex">
                    <div className="container d-flex justify-content-between">
                        <Link to = {"/"} className="navbar-brand fs-2" style={{ color: '#EEAE23' }}>
                            <img
                                src="image/image-from-rawpixel-id-12520860-original.png"
                                alt="HTML code ib a screen"
                                height="50"
                            />
                            <span style={{ color: '#518B25' }}>On</span>Salad
                        </Link>
                        <div>
                            <Link to={"/"} className="nav mt-3">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to={"/about"} className="nav mt-3">
                                About Us
                            </Link>
                        </div>
                        <div>
                            <Link to={"/menu"} className="nav mt-3">
                                Menu
                            </Link>
                        </div>
                        <div className="input-group d-flex" style={{ width: '120px' }}>
                            <Link to={"/contact"} >
                                <div className="d-flex">
                                    <button type="button" className="nav-style btn border border-2 rounded-pill me-3" style={{ backgroundColor: '#518B25' }}>
                                        <i className="telephone bi bi-telephone"></i> <span style={{ fontSize: '12px', color: 'beige' }}> Contact Us</span>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    );
}

export default Navbar;
