import React from 'react'
import {Box, Typography, Card, CardContent} from '@mui/material';
import Img1 from '../assets/Card1.jpg'
import Img2 from '../assets/Card2.jpg'
import Img3 from '../assets/Card3.jpg'


const Cards = () => {
  return (
    <>
    <Box className="flex flex-col items-center text-center justify-between my-12">

    <Box className="grid gap-12 grid-cols-3">

    {/*CARD 1*/}
    <Card>
        <CardContent className='items-start'>
            <img src={Img1} alt='Card Image 1' className="w-auto h-64 p-1"/>

            <div className="w-fit bg-black rounded-md p-1 mt-5">
              <Typography variant='body2' sx={{color: 'white'}}>Internet Culture</Typography>
            </div>

            <div className="w-56 mt-5 text-start ">
              <Typography variant='h6' className='font-extrabold text-wrap'>Browsers, cookies and surfing the web: The quirky history of internet longo</Typography>
            </div>

            <a href='#' className="underline mt-4">Read More</a>
        </CardContent>
    </Card>


    {/*CARD 2*/}
    <Card>
        <CardContent className='items-start'>
            <img src={Img2} alt='Card Image 1' className="w-auto h-64 p-1"/>

            <div className="w-fit bg-black rounded-md p-1 mt-5">
              <Typography variant='body2' sx={{color: 'white'}}>Internet Culture</Typography>
            </div>

            <div className="w-56 mt-5 text-start ">
              <Typography variant='h6' className='font-extrabold text-wrap'>Did ChatGPT write this? Heres how to tell</Typography>
            </div>

            <a href='#' className="underline mt-4">Read More</a>
        </CardContent>
    </Card>


    {/*CARD 3*/}
    <Card>
        <CardContent className='items-start'>
            <img src={Img3} alt='Card Image 1' className="w-auto h-64 p-1"/>

            <div className="w-fit bg-black rounded-md p-1 mt-5">
              <Typography variant='body2' sx={{color: 'white'}}>Deep Dives</Typography>
            </div>

            <div className="w-56 mt-5 text-start ">
              <Typography variant='h6' className='font-extrabold text-wrap'>Common Sense Media's ultimate guide to parental control</Typography>
            </div>

            <a href='#' className="underline mt-4">Read More</a>
        </CardContent>
    </Card>

    </Box>
    </Box>
    </>
  )
}

export default Cards
