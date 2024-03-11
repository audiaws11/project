import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout';
import './login.css';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [notif, setNotif] = useState("");
    const [notifError, setNotifError] = useState("");
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
        <p className="register">Dont have account? <Link to="/">Register</Link></p>
        <button disabled={loading?true:false} onClick={handleSubmit}>
        {loading ? "Loading..." : "Continue with this email"}</button>
        {!!notif.length && <h3>{notif}</h3>}
        {!!notifError.length && <h4>{notifError}</h4>}
            </div>
        </div>
    </div>
    </Layout>
    );
  }

export default Login;