import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';


const RegistrationForm = () => {
    const [notif, setNotif] = useState("");
    const [notifError, setNotifError] = useState("");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const payload = {
          email: formData.email,
          password: formData.password
        };
        axios
          .post('https://reqres.in/api/register', payload)
          .then((response) => {
            setNotif ("Register Success");
            const token = response.data.token;
            localStorage.setItem("token", token);
            console.log(response);
            setTimeout(() => {
              navigate("/");
            }, 3000);
          })
          .catch((error) => {
            console.log(error.response);
            setNotifError(error.response.data.error);
          });
      };
    
  return (
    <Layout>
    <div className={`container mt-5}`}>
      <div className="row">
        <div className={`leftColumn col-md-6`}>
        <h1 className={`leftHeader`}>ourverse</h1>
          <p className={`leftParagraph`}>Enjoy every moment with artists on global fandom life platform Ourverse</p>
          <div className="social-login mt-3">
            <p>Already have an account?</p>
            <Link to="/login">
            <button className="btn btn-primary me-2">Login</button></Link>
          </div>
        </div>
        <div className={`rightColumn col-md-6 `}>
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email ID</label>
              <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
              {!!notifError.length && <h3>{notifError}</h3>}
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" htmlFor="terms">I Accept terms and conditions & privacy policy</label>
            </div>
            <button type="submit" className="btn">Register</button>
            {!!notif.length && <h4>{notif}</h4>}
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default RegistrationForm;
