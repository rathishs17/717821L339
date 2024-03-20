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

  return (

    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '6%', marginLeft: '0%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Course Content
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickHtml}>
        <ListItemText primary="Module 1" />
        {openHtml ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openHtml} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <Link to={"https://youtu.be/x9bTBcron78?si=9ISmKZdXF4TlNDyk"} style={{ textDecoration: 'none',color:'black' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="1. HTML Introduction" />
          </ListItemButton>
          </Link>
          <Link to={"https://youtu.be/x9bTBcron78?si=9ISmKZdXF4TlNDyk"} style={{ textDecoration: 'none' ,color:'black'}}>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="2. HTML Tags" />
          </ListItemButton>
          </Link>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="3. HTML Elements" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="4. HTML Forms" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="5. HTML5 Features" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickCss}>
        <ListItemText primary="Module 2" />
        {openCss ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCss} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="1. CSS Basics" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="2. CSS Layout" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="3. CSS Flexbox" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="4. CSS Grid" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickJs}>
        <ListItemText primary="Module 3" />
        {openJs ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openJs} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="1. JavaScript Basics" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="2. DOM Manipulation" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="3. Events and Event Handling" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="4. Asynchronous JavaScript" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

function Homepage1() {
  return (
    <>

      <AppBar position="static" sx={{ backgroundColor: '#FFEBEB' ,width:'100%'}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            <b>MR Tech</b>
          </Typography>
          <Button color="inherit" sx={{ color: 'black', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
          </Button>
            {/* <Link to="/loginpage"> */}
          <Button color="inherit" sx={{ color: 'black', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
          </Button>
            {/* </Link> */}
            <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button color="inherit" sx={{ color: 'white', backgroundColor: '#E75480', marginLeft: '2%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            lOGOUT
          </Button>
          </Link> 
          {/* Add other navigation buttons as needed */}
        </Toolbar>
      </AppBar>


      <Grid container direction="column" marginTop="4.5%" marginLeft="5%" font fontStyle="" bgcolor="">
        <Box sx={{ width: '200%', maxWidth: 750 }}>
          <Typography variant="h4" gutterBottom>
            Web Development
          </Typography>
        </Box>
      </Grid>
      <Container maxWidth="lg" marginTop="4%">
        <NestedList />
      </Container>
      <Grid container direction="column" marginTop="5.5%" marginLeft="5%" font fontStyle="" bgcolor="">
        <Box sx={{ width: '100%', maxWidth: 1000 }}>
          <Typography variant="h4" gutterBottom>
            About this course
          </Typography>
          <Typography marginTop="5%">
        Become a Web Developer Expert.
        <br/>
        <br/>
        <hr></hr>
        <br/>
<b>By the numbers</b> : Lectures : 202, video : 22 hrs

        <br/>
        <br/>
        <hr></hr>
        <br/>
<b>Features</b> : Available on ios and Android.
        <br/>
        <br/>
        <hr></hr>
        <br/>
<b>Description</b> : 
Welcome to the HTML, JavaScript, & Bootstrap – Certification Course for Beginners

        <br/>
        <br/>
        This course gives students the knowledge necessary to take their front-end development skills to the next level. This course, is meant for beginners who have little, to no experience with coding. We start right from the foundational concepts and work our way up to intermediate level topics. By the end of this course, students will be able to create stunning, mobile responsive web pages using the latest scripting languages.
        <br/>
        <br/>
       <b> HTML Section:</b>
        <br/>
        <br/>
        HTML is a key fundamental building block when learning to develop websites. Students will initially learn the basics of HTML page structure and gradually transition into working with spacing, text formatting, lists, images, videos, links, anchors, tables, forms and much more. We also include several projects, where students are shown first-hand, how to develop and code html web pages from scratch.
        <br/>
        <br/>
       <b> JavaScript Section:
       </b>
       <br/>
        <br/>
        In Section two, students learn to integrate JavaScript components into their web pages for dynamic client-side functionality. We start by exploring basic concepts such as JavaScript placement and Output. From there we move into Variables, Arithmetic Operators, Objects, and Data Types. Students also explore intermediate concepts such as math functions, arrays, conditional statements, loops, events, and functions.
          </Typography>
        </Box>
      </Grid>

      <Box
        component="footer"
        sx={{
          backgroundColor: 'pink',
          p: 6,
          marginTop: '5%',
        }}
      >
        <Container maxWidth="lg">
          {/* Footer content */}
          <Grid container spacing={5}>
            {/* About Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are MR Tech company, dedicated to providing the best service to our customers.
              </Typography>
            </Grid>

            {/* Contact Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: mrtech@example.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>

            {/* Follow Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
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
            <Typography variant="body2" color="text.secondary" align="center">
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

export default Homepage1;