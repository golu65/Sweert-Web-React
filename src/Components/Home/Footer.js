import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      

      <Box display="flex" mb={2}>
        <Link href="#" sx={{ margin: '0 10px' }}>About</Link>
        <Link href="#" sx={{ margin: '0 10px' }}>Careers</Link>
        <Link href="#" sx={{ margin: '0 10px' }}>Contact</Link>
        <Link href="#" sx={{ margin: '0 10px' }}>Feedback</Link>
      </Box>

      <Box display="flex" mb={2}>
        <Link href="#" sx={{ margin: '0 10px' }}>Terms &amp; Conditions</Link>
        <Link href="#" sx={{ margin: '0 10px' }}>Privacy Policy</Link>
        <Link href="#" sx={{ margin: '0 10px' }}>Cookies Policy</Link>
      </Box>

      <Box display="flex" mb={2}>
        <IconButton component={Link} href="#" target="_blank" rel="noopener" aria-label="Facebook" sx={{ margin: '0 10px' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton component={Link} href="#" target="_blank" rel="noopener" aria-label="Twitter" sx={{ margin: '0 10px' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton component={Link} href="#" target="_blank" rel="noopener" aria-label="YouTube" sx={{ margin: '0 10px' }}>
          <YouTubeIcon />
        </IconButton>
        <IconButton component={Link} href="#" target="_blank" rel="noopener" aria-label="Instagram" sx={{ margin: '0 10px' }}>
          <InstagramIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" color="textSecondary" mb={2}>
        &copy; {new Date().getFullYear()} Your Website Golu. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
