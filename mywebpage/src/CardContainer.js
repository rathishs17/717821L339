import React, { useState, useEffect } from "react";
import axios from "axios";
import ProCard from "./cards";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Container, CardMedia } from '@mui/material';
import { Form, Button as BootstrapButton } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


function AdminDashboard() {
  const [product, setProduct] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    cost: 0,
    link:""
  });

  async function fetchdata() {
    const response = await axios('http://localhost:5001/');
    setProduct(response.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const sumbitForm = (e) => {
    axios.post('http://localhost:5000/newProduct', formData)
      .then((response) => {
        console.log("Product added successfully", response);
        // Optionally, you can fetch updated data after adding a new product
        fetchdata();
      })
      .catch((error) => {
        console.error("Error adding product", error);
      });
  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#101629',color:'white' ,boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.2)'  }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            <b>ADMIN DASHBOARD</b>
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
  <Button color="inherit" sx={{ color: 'white', backgroundColor: '', marginLeft: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    HOME
  </Button>
</Link>
{/* #E75480 */}
        </Toolbar>
      </AppBar>

      {/* FormProductData */}
      <Form className="w-50 m-auto" marginTop="25%">
      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setFormData({ ...formData, name:e.target.value })}} placeholder="Enter product name" />
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image url</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setFormData({ ...formData, img:e.target.value })}}  placeholder="url" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cost</Form.Label>
            <Form.Control type="number" onChange={(e)=>{setFormData({ ...formData, cost:e.target.value })}}  placeholder="Eg: 4500" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Link</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setFormData({ ...formData, link:e.target.value })}}  placeholder="url" />
          </Form.Group>
          
          <Box border={1} borderRadius={5} borderColor="white" p={1} display="inline-block">
  <Button variant="primary" onClick={sumbitForm}>
    Submit
  </Button>
</Box>

      </Form>


      <br/>
      <br/>
      <br/>

      {/* CardContainer */}
      <div className="container d-flex flex-wrap gap-5 justify-content-center">
        {product.map(v => {
          return <ProCard key={v.name} data={v} />;
        })}
      </div>
      <br/>
      <br/>
      <br/>

     
      <hr/>
      <Box
        component="footer"
        sx={{
          backgroundColor: '#101629',
          color:"white",
          p: 6,
          marginTop: '5%',
        }}
      >
        <Container maxWidth="lg">
          {/* Footer content */}
          <Grid container spacing={5}>
            {/* About Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="">
                We are MR Tech company, dedicated to providing the best service to our learners.
              </Typography>
            </Grid>

            {/* Contact Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="">
                Email: mrtech@example.com
              </Typography>
              <Typography variant="body2" color="">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>

            {/* Follow Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>

          {/* Copyright */}
          <Box mt={5}>
            <Typography variant="body2" color="" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box> 




      
    </>
  );
}

export default AdminDashboard;