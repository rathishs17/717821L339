import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function SimplePaper1() {
  const form = useRef();
  const [openDialog, setOpenDialog] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sckwt1d', 'template_so0tvy8', form.current, 'EbVtOiJzgpt0jj69d')
      .then((result) => {
        console.log(result.text);
        setOpenDialog(true); // Open dialog on successful email send
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontFamily: '"Poppins", sans-serif', display: "flex", justifyContent: "center", marginTop: "0%", marginBottom: "1%" }}>
        <b>Feedback Form </b>

      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', fontFamily: '"Poppins", sans-serif', display: "flex", justifyContent: "center", marginTop: "4%", marginBottom: "1%" ,}}>
      We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!

      </Typography>
      

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': {
            m: 2,
            width: 324,
            height: 67,
            bgcolor: '#FFD6E5',
            borderRadius: '10px'

          },
        }}
      >

      </Box>

      <br />
      <br />

      <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <input type="text" name="user_name" placeholder='your name' style={{ marginTop: '1%', paddingLeft: '9%', paddingRight: '9%', paddingTop: '1%', paddingBottom: '1%', border: '2px solid grey', borderRadius: '8px', backgroundColor: '#ADD8E6', }} />
        <input type="email" name="user_email" placeholder='your email' style={{ marginTop: '1%', paddingLeft: '9%', paddingRight: '9%', paddingTop: '1%', paddingBottom: '1%', borderRadius: '8px', border: '2px solid grey', backgroundColor: '#ADD8E6' }} />
        <textarea name="message" placeholder='Type your message here ..' style={{ marginTop: '2%', paddingLeft: '9%', paddingRight: '9%', paddingTop: '1%', paddingBottom: '8%', border: '2px solid grey', borderRadius: '8px', backgroundColor: '#ADD8E6' }} />
        <input type="submit" value="Send Message" style={{
          marginTop: '1.5%', paddingLeft: '0.8%', paddingRight: '0.8%', paddingTop: '0.3%', paddingBottom: '0.3%',
          backgroundColor: '#000080',
          color: 'white',
          borderRadius: '6px'
        }} />
      </form>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Feedback Sent Successfully!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Thank you for your feedback. We appreciate your input to help improve our eLearning platform.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialog}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      <Grid marginLeft="47.6%" marginTop="7%">
        <Grid marginLeft="-6%"><Typography >  &copy; 2023-2024 MR Tech
      </Typography></Grid>

        <Grid  marginTop="4%" marginLeft="2%">
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <HomeIcon style={{ fontSize: '1.7rem' }} />
          </Link>
        </Grid>

      </Grid>
    </>
  );
};

