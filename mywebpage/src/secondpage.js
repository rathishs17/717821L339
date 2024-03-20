import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Container } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { Link } from 'react-router-dom';
import v from './images/video.mp4'

import { useState, useEffect } from "react";
import axios from "axios";

function NestedList() {
  const [openHtml, setOpenHtml] = React.useState(true);
  const [openCss, setOpenCss] = React.useState(true);
  const [openJs, setOpenJs] = React.useState(true);

  const handleClickHtml = () => {
    setOpenHtml(!openHtml);
  };

  const handleClickCss = () => {
    setOpenCss(!openCss);
  };

  const handleClickJs = () => {
    setOpenJs(!openJs);
  };
  const [product, setProduct] = useState([]);

  async function fetchdata() {
    const response = await axios.get('http://localhost:7007/');
    setProduct(response.data);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (

    // <List
    //   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '6%', marginLeft: '0%' }}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Course Content
    //     </ListSubheader>
    //   }
    // >
    //   <ListItemButton onClick={handleClickHtml}>
    //     <ListItemText primary="Module 1" />
    //     {openHtml ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>
    //   <Collapse in={openHtml} timeout="auto" unmountOnExit>
    //     <List component="div" disablePadding>

    //     <Link to={"https://youtu.be/x9bTBcron78?si=9ISmKZdXF4TlNDyk"}>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="1. HTML Introduction" />
    //       </ListItemButton>
    //       </Link>
          
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="2. HTML Tags" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="3. HTML Elements" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="4. HTML Forms" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="5. HTML5 Features" />
    //       </ListItemButton>
    //     </List>
    //   </Collapse>
    //   <ListItemButton onClick={handleClickCss}>
    //     <ListItemText primary="Module 2" />
    //     {openCss ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>
    //   <Collapse in={openCss} timeout="auto" unmountOnExit>
    //     <List component="div" disablePadding>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="1. CSS Basics" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="2. CSS Layout" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="3. CSS Flexbox" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="4. CSS Grid" />
    //       </ListItemButton>
    //     </List>
    //   </Collapse>
    //   <ListItemButton onClick={handleClickJs}>
    //     <ListItemText primary="Module 3" />
    //     {openJs ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>
    //   <Collapse in={openJs} timeout="auto" unmountOnExit>
    //     <List component="div" disablePadding>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="1. JavaScript Basics" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="2. DOM Manipulation" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="3. Events and Event Handling" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <FiberManualRecordIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="4. Asynchronous JavaScript" />
    //       </ListItemButton>
    //     </List>
    //   </Collapse>
    // </List>
  //   <div className="container d-flex flex-float gap-5" style={{ marginRight:'83%', marginTop: '3%', width:'20%', height:'20%'}} >
  //   {product.map((v) => {
  //     return (
  //       <Link to={v.link} key={v.name} style={{ textDecoration: 'none' ,marginRight:'-3%'}}>
  //         <div className="card" style={{ width: '200px', height: '250px' }}>
  //           <img src={v.img} alt={v.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
  //           <p>{v.name}</p>
  //         </div>
  //       </Link>
  //     );
  //   })}
  // </div>
  <div className="container d-flex flex-float gap-5" style={{ marginRight:'109%', marginTop: '3%', width:'20%', height:'20%' }} >
  {product.map((v) => {
    return (
      <Link to={v.link} key={v.name} style={{ textDecoration: 'none' , marginRight:'-3%'}}>
        <div className="card-container" style={{ transition: 'transform 0.3s', borderRadius: '10px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <div className="card" style={{ width: '200px', height: '250px' }}>
            <img src={v.img} alt={v.name} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
            <p style={{color:'white'}}><b>{v.name}</b></p>
          </div>
        </div>
      </Link>
    );
  })}
</div>
  );
}

function Homepage1() {
  return (
    <>
    <AppBar position="fixed" sx={{ backgroundColor: '#101629',color:'', boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.2)'  }} >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '' }}>
            <b>MR Tech</b>
          </Typography>
          <Button color="inherit" sx={{ color: 'black', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
          </Button>
            {/* <Link to="/loginpage"> */}
          <Button color="inherit" sx={{ color: 'black', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
          </Button>
            {/* </Link> */}
            <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="inherit" sx={{ color: 'white', backgroundColor: '', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            HOME
          </Button>
          </Link> 
          {/* Add other navigation buttons as needed */}
        </Toolbar>
      </AppBar>
    <Grid maxWidth="81%" marginLeft="9%">


      <Grid container direction="column" marginTop="5.1%" marginLeft="0%" font fontStyle="" bgcolor="">
        <Box sx={{ width: '200%', maxWidth: 750 }}>
          <Typography variant="h3" gutterBottom>
            <b>Explore our course ..!!</b>
          </Typography>
        </Box>
      </Grid>

      <Box
  component="footer"
  sx={{
    backgroundColor: 'black',
    color: 'white',
    p: 6,
    marginTop: '5%',
    borderRadius: '2px',
    border:'2px solid white'
  }}
>
  <Container maxWidth="lg">
    {/* Footer content */}
    <Grid container spacing={5}>
      {/* About Us */}
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" color="" gutterBottom>
          <b>100 days of code : The Complete Web Development Pro Bootcamp for 2023</b>
        </Typography>
        <Typography variant="h6" color="">
        <b>Master web development by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</b></Typography>
        <Stack spacing={1}>
          <br/>
      <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
    </Stack>
    <Typography>(247,345 ratings) 123,456 students
<br/>
<br/>
Created by <a href='rat'>Dr. Rathish Shanmugam</a>
    </Typography>
    <br/>
    <Typography sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <span>🔯 Last updated on : '21.2.2024'</span>
  <span style={{ marginLeft: '8px' }}>🌐 English</span>
</Typography>
      </Grid>

<Grid marginLeft="16%" marginTop="4%">
      {/* Contact Us */}
      <Grid item xs={12} sm={6} >
      <Grid item xs={12} sm={6}>
  {/* Video import */}
  <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
    <CardCover>
      {/* Replace the YouTube video URL here */}
      <iframe
        title="YouTube Video"
        width="50%"  // Adjust the width as needed
        height="400"  // Adjust the height as needed
        src={v}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </CardCover>
    <CardContent>
      <Typography
        level="body-lg"
        fontWeight="lg"
        textColor="#000"  // Change text color as needed
        mt={{ xs: 12, sm: 18 }}
      >
      </Typography>
    </CardContent>
  </Card>      
  </Grid>
  </Grid>
  <Grid marginTop="16%" marginLeft="27%">
  <Typography>preview this course</Typography>
</Grid>
<Grid marginTop="16%" marginLeft="">
  <Typography><h1><b>$0</b></h1></Typography>
</Grid>
<Link to={""}>
<Button variant='contained' color='error'>FREE</Button>
</Link>
</Grid>
</Grid>
</Container>
</Box>



      <Grid container direction="column" marginTop="4.5%" marginLeft="0%" font fontStyle="" bgcolor="">
        <Box sx={{ width: '200%', maxWidth: 750 }}>
          <Typography variant="h4" gutterBottom>
            Our Courses
          </Typography>
        </Box>
      </Grid>
      <Container maxWidth="lg" marginTop="4%">
        <NestedList />
      </Container>
      <Grid container direction="column" marginTop="5.5%" marginLeft="0%" font fontStyle="" bgcolor="">
        <Box sx={{ width: '200%', maxWidth: 750 }}>
          <Typography variant="h4" gutterBottom>
            Requirements
          </Typography>
          <Typography marginTop="5%">
        • No programming experience needed - I'll teach you everything you need to know
        <br/>
        <br/>
        • A Mac or PC computer with access to the internet
        <br/>
        <br/>
        • No paid software required - I'll teach you how to use PyCharm, Jupyter Notebooks and Google Colab
        <br/>
          </Typography>
          
          <Typography variant="h4" gutterBottom marginTop="6%">
            Description
          </Typography>
          <Typography marginTop="5%">
<p>Welcome to the 100 Days of Code <b>the only course you need</b>  to learn to code with several languages. With over 500,000<b>5 STAR reviews</b>  and a 4.8 average, my courses are some of the HIGHEST RATED courses in the history! 
 <br/> <br/><b>100 days, 1 hour per day, learn to build 1 project per day, this is how you master any skill.

</b> </p>

            <br/>
        • No programming experience needed - I'll teach you everything you need to know
        <br/>
        <br/>
        • A Mac or PC computer with access to the internet
        <br/>
        <br/>
        • No paid software required - I'll teach you how to use VS code
        <br/>
        <br/>
        • No paid software required - I'll teach you how to use Github

          </Typography>
        </Box>
      </Grid>
      </Grid>


      <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontFamily: '"Poppins", sans-serif', display: "flex", justifyContent: "", marginTop: "4%", marginBottom: "1%" ,marginLeft:"9%"}}>
        <b>Click here 👉 <Link to="/feedbackform"><button>feedback</button></Link></b>
      </Typography>
<br/>
<hr/>

      <Box
        component="footer"
        sx={{
          backgroundColor: '#101629',
          color:'white',
          p: 6,
          marginTop: '3.6%',
        }}
      >
        <Container maxWidth="lg">
          {/* Footer content */}
          <Grid container spacing={5}>
            {/* About Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="" gutterBottom>
                {/* text.primary */}
                About Us
              </Typography>
              <Typography variant="body2" color="">
                We are MR Tech company, dedicated to providing the best service to our customers.
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
                MR Tech
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

export default Homepage1;
