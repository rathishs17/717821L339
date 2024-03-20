import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Card, CardContent, Container,  CardMedia } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import webpic from "./images/webpic.jpg";
import m1 from "./images/mentor1.jpg";
import m2 from "./images/mentor2.jpg";
import m3 from "./images/mentor3.jpg";
import m4 from "./images/mentor4.jpg";
import homee from "./images/hom.jpg";
import rev from "./images/rev.jpg";
import s3 from "./images/student3.jpg";
import logo from "./images/logoimg.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: '',
    color: theme.palette.text.secondary,
    height: 'auto', // Adjusted height to fit content
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row', // Align items in row
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically center items
    bgcolor:'#f0f0f0'
  }));
  
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
function Homepage() {











  const [faqs, setFaqs] = useState([
    {
      question: 'What are the dimensions of the product?',
      answer: 'The dimensions of the product are [insert dimensions here].',
      isOpen: false,
    },
    {
      question: 'What materials is the product made of?',
      answer: 'The product is made of high-quality [insert materials here].',
      isOpen: false,
    },
    {
      question: 'What colors are available?',
      answer: 'The product is available in [insert available colors here].',
      isOpen: false,
    },
    {
      question: 'What is the warranty policy?',
      answer: 'We offer a [insert warranty policy details here].',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) => {
      const newFaqs = [...prevFaqs];
      newFaqs[index].isOpen = !newFaqs[index].isOpen;
      return newFaqs;
    });
  };











  const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Emily Taylor', 'Michael Clark'];
  const comments = [
    "This product is amazing! It exceeded my expectations.",
    "Great quality and fast shipping. Highly recommended!",       "Great quality and fast shipping. Highly recommended!",
    "Great quality and fast shipping. Highly recommended!",    "This product is amazing! It exceeded my expectations.", "Great quality and fast shipping. Highly recommended!", ];

  const profilePics = [
m1,m2,m3,m4,m2,m3
];
  const [product, setProduct] = useState([]);

  async function fetchdata() {
    const response = await axios.get('http://localhost:5001/');
    setProduct(response.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
    <Grid maxWidth="78%">

      <AppBar position="fixed"  sx={{ backgroundColor: '#101629',color:'white' , boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.2)' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '' }}>
            <b>MegaMartOnline</b>
          </Typography>
         
          
          <Link to="" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '' , marginLeft: '-30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           Home
          </Button></Link>
        
          <Link to="/login" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '' , marginLeft: '18.5%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Admin
          </Button></Link>
        </Toolbar>
      </AppBar>





      <Box sx={{ marginTop: 5.9, padding: 4, marginLeft:"10%" ,marginRight:"0%",backgroundColor:"",width:"104%"}}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
          <Grid item xs={12} md={6} textAlign="center" marginTop="0%" >
            <img src={homee} alt="Profile" style={{ width: '70%', height: 'auto',marginTop:'18%', borderRadius: 8 , animation: 'float 3s infinite'}} />
          </Grid>

          {/* Right Column (Text) */}
          <Grid item xs={10} md={6} >
          <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: '' , marginTop: '15%',}}>
              <b color='grey'>"Click. Shop. Smile. Your favorite products, just a click away!"






</b> {/* Replace with your actual text */}
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', marginTop: '3%', letterSpacing: '0.5px', fontSize: '1.2rem' }}>
            <Typography
  variant="body1" // or "body2" depending on your design
  sx={{
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'justify',
    fontSize: '1 rem', 
    lineHeight: '1.6',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: '',
  }}
>
 
  <br/>
  <br/>
  <br/>
  <br/>
  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <AvatarGroup total={24}>
              <Avatar alt="Remy Sharp" src={m1} />
              <Avatar alt="Travis Howard" src={m2} />
              <Avatar alt="Agnes Walker" src={m3} />
              <Avatar alt="Trevor Henderson" src={m4} />
              
            </AvatarGroup>
            <span style={{ marginLeft: '35px' }}>20k people already trusted us</span>
          </div>
</Typography>
</Typography>
               </Grid>
        </Grid>
      </Box>



      <Container maxWidth="lg" marginTop="4%">
        <Grid container direction="column" marginLeft="3.9%" marginTop="5%">
          <Box sx={{ width: '200%', maxWidth: 840 }}>
            <Typography variant="h3" gutterBottom marginTop="4%" marginLeft="2.5%" >
              <b>Products List</b>
              <br/>
            </Typography>
          </Box>
        </Grid>


<div className="container d-flex flex-float gap-5" style={{ marginRight:'75.3%', marginTop: '3%', width:'20%', height:'20%' }} >
  {product.map((v) => {
    return (
      <Link to={v.link} key={v.name} style={{ textDecoration: 'none' , marginRight:'-3%'}}>
        <div className="card-container" style={{ transition: 'transform 0.3s', borderRadius: '10px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <div className="card" style={{ width: '200px', height: '250px' }}>
            <img src={v.img} alt={v.name}  style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
            <p style={{color:'black'}}><b>{v.name}{}</b></p>
          </div>
        </div>
      </Link>
    );
  })}
</div>



<Box sx={{ marginTop: 5.9, padding: 4, marginLeft:"10%" ,marginRight:"0%",backgroundColor:"",width:"104%"}}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
          <Grid item xs={12} md={6} textAlign="center" marginTop="0%" >
            <img src={rev} alt="Profile" style={{ width: '70%', height: 'auto',marginTop:'18%', borderRadius: 8 , animation: 'float 3s infinite'}} />
          </Grid>

          {/* Right Column (Text) */}
          <Grid item xs={10} md={6} >
          <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: '' , marginTop: '15%',}}>
              <b color='grey'>What our happy Customers say</b> {/* Replace with your actual text */}
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', marginTop: '3%', letterSpacing: '0.5px', fontSize: '1.2rem' }}>
            <Typography
  variant="body1" // or "body2" depending on your design
  sx={{
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'justify',
    fontSize: '1 rem', 
    lineHeight: '1.6',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: '',
  }}
>


  <br/>
  <br/>
  <br/>
  <br/>

</Typography>
</Typography>
               </Grid>
        </Grid>
      </Box>

      </Container>
    </Grid>
    <br/>


    <Box sx={{ marginLeft: "8.6%" }}>
      <Grid container spacing={2}>
        {[darkTheme].map((theme, index) => (
          <Grid item xs={11} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: '#101629',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Item key={index} elevation={2} style={{ backgroundColor: '#00000d' }}>
                    <Avatar alt={names[index]} src={profilePics[index]} sx={{ marginRight: '10px' }} />
                    <div style={{ flex: '1', marginRight: '10px' }}>
                      <strong>{names[index]}</strong>
                      <br />
                      "{comments[index]}"
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Rating name={`rating-${index}`} value={5} readOnly />
                    </div>
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </Box>


    <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: 'center' , marginTop: '5%',marginBottom:'5%'}}>
              <b color='grey'>Frequently asked questions</b> 
    </Typography>


    <div style={{ textAlign: 'left', marginLeft: '30px', fontSize: '21px' }}>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '15px', display: 'block' }}>
          <div
            style={{ cursor: 'pointer', fontWeight: '' }}
            onClick={() => toggleFAQ(index)}
          >

            <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px',paddingTop: '15px'  }}>{faq.question}</div>
            {faq.isOpen ? '' : ''}
          </div>
          {faq.isOpen && (
            <>
              <p>{faq.answer}</p>
            </>
          )}
        </div>
      ))}
    </div>

<br/>
<br/>
<br/>


    <hr/>
      <Box
        component="footer"
        sx={{
          
          backgroundColor: '#101629',
          color:'white',
          p: 6,
          marginTop: '4%',
          width: '100%',
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

export default Homepage;