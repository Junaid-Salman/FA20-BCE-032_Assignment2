import React from 'react'
import { Typography,Box, AppBar, Toolbar, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NavIcon from '../assets/NavLogo.png'

const Navbar = () => {
  return (
    <>
    <div>
      <AppBar position='fixed' sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <img src={NavIcon} alt='Icon' className='w-auto h-8'/>
          <Typography variant='subtitle1' className='p-6'>Internet Culture</Typography>
          <Typography variant='subtitle1' className='p-6'>Privacy and Security</Typography>
          <Typography variant='subtitle1' className='p-6'>Products</Typography>
          <Typography variant='subtitle1' className='p-6'>Mozilla</Typography>

          <div style={{ flexGrow: 1 }} /> {/* This empty div will take up space */}

          <div>
          <SearchIcon className="mr-4" fontSize="large"/>
          <Button variant="contained">Download Firefox</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </>
  )
}

export default Navbar
