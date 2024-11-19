import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <Grid container spacing={12}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" className="font-semibold">
              Mozilla
            </Typography>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" color="inherit" underline="hover">About</Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">Contact Us</Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">Donate</Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6" className="font-semibold">
              Firefox
            </Typography>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" color="inherit" underline="hover">Download Firefox</Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">Desktop</Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">Mobile</Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">Features</Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">Beta, Nightly, Developer Edition</Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6" className="font-semibold">
              Resources
            </Typography>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" color="inherit" underline="hover">Privacy Hub</Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">Browser Comparison</Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">Brand Standards</Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6" className="font-semibold">
              Social
            </Typography>
            <div className="flex-col items-center space-x-4 mt-2">
              <div>
                <Typography className="font-semibold">Follow @Firefox</Typography>
                <div className="flex space-x-2">
                  <Link href="#" color="inherit" underline="none"><TwitterIcon /></Link>
                  <Link href="#" color="inherit" underline="none"><InstagramIcon /></Link>
                  <Link href="#" color="inherit" underline="none"><YouTubeIcon /></Link>
                </div>
              </div>
              <div className='mt-6'>
                <Typography className="font-semibold">Follow @Mozilla</Typography>
                <div className="flex space-x-2">
                  <Link href="#" color="inherit" underline="none"><TwitterIcon /></Link>
                  <Link href="#" color="inherit" underline="none"><InstagramIcon /></Link>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400 flex space-x-4">
          <Link href="#" color="inherit" className='underline'>Website Privacy Notice</Link>
          <Link href="#" color="inherit" className='underline'>Cookies</Link>
          <Link href="#" color="inherit" className='underline'>Legal</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
