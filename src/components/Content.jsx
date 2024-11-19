import React from 'react'
import {Box, Typography} from '@mui/material';
import Header from '../assets/Header.jpg';

const Content = () => {
  return (
    <>
    <Box className="w-full flex flex-col items-center text-center justify-center mt-24">
        <img className="w-auto h-[25rem]" src={Header} alt='Header'/>
        
        <div className='p-6'>
        <Typography variant='h4' className="font-extrabold">Deep Dives</Typography>
        <Typography variant='body1' className="font-thin mt-1">In-depth articles about life online</Typography>

        </div>
    </Box>
    </>
  )
}

export default Content
