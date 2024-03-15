import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Modal} from 'react-bootstrap';
import axios from 'axios';
import Layout from '../../components/layout/Layout';
import './login.css';



const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [notif, setNotif] = useState("");
    const [notifError, setNotifError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    console.log(username, password);
    const handleSubmit = (event) => {
      event.preventDefault();
      const payload = {
        username: username,
        password: password,
      };
      setLoading(true);

      axios
        .post('https://reqres.in/api/login', payload)
        .then((response) => {
          setNotif ("Login Success");
          const token = response.data.token;
          localStorage.setItem("token", token);
          console.log(response);
          setTimeout(() => {
            navigate("/listuser");
          }, 3000);
        })
        .catch((error) => {
          console.log(error.response);
          setNotifError(error.response.data.error);
          setShowModal(true);
        })
        .finally(() => {
          setLoading(false);
      });
    };
  
    return (
      <Layout>
        <div className="loginpage">
            
        <div className="login-container">
            <div className="login-box">
            <h1 className="title">ourverse<span> account</span></h1>
            <h2>Ourverse Account Log in / Sign up</h2>
              <label className="form-label">Email:</label>
              <input 
              type="text" 
              placeholder="your@email.com"
              value={username}
              onChange={handleUsernameChange} /><br/>
              <label className="form-label">Password:</label>
              <input 
              type="password" 
              placeholder="password"
              value={password}
              onChange={handlePasswordChange} /><br/>
              <p className="register">Dont have account? <Link to="/register">Register</Link></p>
              <button disabled={loading?true:false} onClick={handleSubmit}>
              {loading ? "Loading..." : "Continue with this email"}</button>
              {!!notif.length && <h3>{notif}</h3>}
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                      <Modal.Header closeButton>
                      <Modal.Title>{notif}</Modal.Title></Modal.Header>
                      <Modal.Body><h4>{notifError}</h4></Modal.Body>
                </Modal>
            </div>
        </div>
    </div>
    </Layout>
    );
  }

export default Login;