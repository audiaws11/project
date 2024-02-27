import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
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
      };
    
  return (
    <div className={`container mt-5}`}>
      <div className="row">
        <div className={`leftColumn col-md-6`}>
        <h1 className={`leftHeader`}>Ourvese</h1>
          <p className={`leftParagraph`}>Enjoy every moment with artists on global fandom life platform Ourverse</p>
          <div className="social-login mt-3">
            <p>Already have an account?</p>
            <button className="btn btn-primary me-2">Login</button>
          </div>
        </div>
        <div className={`rightColumn col-md-6 `}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email ID</label>
              <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" htmlFor="terms">I Accept terms and conditions & privacy policy</label>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
