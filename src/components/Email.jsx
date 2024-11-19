import React from 'react';
import {Box, Typography, Button, TextField} from '@mui/material';
import EmailImg from '../assets/Email.jpg'

const Email = () => {
  return (
    <>
    <div>
        <Box className="w-full flex items-center text-center justify-center mb-12">
            <Box className="flex flex justify-between">
                <img src={EmailImg} alt='Email Image' className='w-auto h-96'></img>
                
                <div className="flex flex-col pt-24 text-start">
                    <Typography variant='h-5' className="font-extrabold">Keep up with all things Firefox</Typography>
                    <Typography variant='h-6' className="font-extralight mt-1">Get how-tos, advice and news to make your Firefox experience work best for you.</Typography>

                    <div className='p-4'>
                        <Typography>Your e-mail address</Typography>
                        <TextField className="w-full" placeholder="yourname@email.com" focused />
                    </div>

                    <Button 
                        variant="contained" 
                        disableElevation
                        sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgray' } }}
                    >
                        Sign up now
                    </Button>
                </div>
            </Box>
        </Box>
    </div>
    </>
  )
}

export default Email
