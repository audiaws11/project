import { useState } from 'react';
import "./register.css"

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle form submission here, e.g., send data to server
        console.log("Submitted data:", { username, password, email, fullName });
    };

    return (
        <div className="form-box">
            <h2>REGISTER</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username" >Username:</label>
                <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
    
                <label htmlFor="password" >Password:</label>
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="email" >Email:</label>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="fullName" >Full Name:</label>
                <input 
                    type="text" 
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
