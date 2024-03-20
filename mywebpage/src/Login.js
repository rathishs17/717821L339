import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const SignIn = () => {
  const [user, setUser] = useState('test');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const adminPassword = 'Rathish123'; // Replace with your actual admin password
  const adminName='Rathish'
  const handleButtonClick = () => {
    if (!user) {
      // If the user is logged in, navigate to the user's home page
      navigate('/');
    } else if (password === adminPassword && name==adminName) {
      // If the admin password is correct, navigate to the admin page
      navigate('/card-container');
    } else {
      // Handle incorrect password case or display an error message
      alert('Incorrect password. Access denied.');
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        {user && (
          <div style={{ border: "3px solid white", padding: "50px", borderRadius: "3%", color: "white" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <TextField
                type="text"
                label="Admin Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: "19px", color: "white", borderRadius:"5px" }} // Remove border from style
                InputLabelProps={{ style: { color: "white" } }} // Set label color to white
                InputProps={{ style: { color: "white", border: "1px solid white" } }} // Set input text color and border color to white
              />
              <TextField
                type="password"
                label="Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "19px", color: "white", borderRadius:"5px" }} // Remove border from style
                InputLabelProps={{ style: { color: "white" } }} // Set label color to white
                InputProps={{ style: { color: "white", border: "1px solid white" } }} // Set input text color and border color to white
              />

              <div style={{ display: 'flex', gap: '10px' }}>
    <Button variant="contained" onClick={handleButtonClick}>
      Go to Admin
    </Button>
    <Link to="/">
      <Button variant="contained">
        BACK
      </Button>
    </Link>
  </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
  
};

export default SignIn;

