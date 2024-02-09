import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SouthIcon from '@mui/icons-material/South';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {BarChartData, LineChartData, PieChartData} from '../../components/dashboardComponents/ChartData'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ProgressBar from '../../components/dashboardComponents/ProgressBar';
import { useDarkMode } from '../../context/DarkModeContext';



const Home = () => {

    const { darkMode } = useDarkMode();

    const [users, setUsers] = useState([
        {category: 'Friends', count: 271, percentage: '+ 0.7 %', icon:<ArrowUpwardIcon/>},
        {category: 'Unique visitors', count: 69, percentage: '- 1.7 %', icon:<SouthIcon/>},
        {category: 'Followers', count: 288, percentage: '+ 1 %', icon:<ArrowUpwardIcon/>},
    ])

    const [geoStats, setGeoStats] = useState([
        {country: 'Russia',  percentage: 94},
        {country: 'China',  percentage: 10},
        {country: 'Ukraine',  percentage: 5},
        {country: 'USA',  percentage: 15},
        {country: 'Mongolia',  percentage: 3},
        {country: 'Other',  percentage: 5},
    ])


  return (
    <>

        <Grid container sx={{ mt: {xs:'11rem', md:'5rem'}, gap: 5, ml:{xs:'21%', md:'12%'},  color: darkMode ? '#CACACA' : '#4F4F4F', }}>
            {users.map((element, index) =>(
            
                <Grid item md={3} xs={9} key={index} > 
                    <Box sx={{backgroundColor: darkMode ? '#282C31' : '#FDFDFF', border: darkMode ? '1px solid #4D4D4D' : '1px solid #EFF3F9', borderRadius:'13px', padding:'15px', width:'100%', height:'9rem',}}>
                        <Box sx={{display:'flex'}}>
                            <Typography variant='body1' >{element.category}</Typography>
                            <MoreHorizOutlinedIcon sx={{marginLeft:'auto', }}/>
                        </Box>
                        <br></br>
                        <br></br>
                        <Box sx={{display:'flex'}}>
                            <Typography variant='body1' >{element.count} people</Typography>
                            <Box sx={{display:'flex', marginLeft:'auto', gap:'5px'}}>
                            <Typography variant='body1' >{element.percentage}</Typography>
                            <Box sx={{color:'#E786D7'}}>{element.icon}</Box>
                            </Box>
                        </Box>
                        <br></br>
                    </Box>
                </Grid>

            ))}
        </Grid>
        <br></br>

               
                {/* Second Layer */}

        <Grid container sx={{ gap: 10, ml:{xs:'21%', md:'12%'},  color: darkMode ? '#CACACA' : '#4F4F4F', }}>
            <Grid item md={6} xs={9} > 
                <Box sx={{backgroundColor: darkMode ? '#282C31' : '#FDFDFF', border: darkMode ? '1px solid #4D4D4D' : '1px solid #EFF3F9', borderRadius:'13px', padding:'15px',}}>
                    <Box  sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
                        <Typography variant='h5' >Audience reach</Typography>
                        <Box sx={{display:'flex', marginLeft:{xs:'0', md:'auto'}, flexDirection:{xs:'column', md:'row'}}}>
                        <Box sx={{display:'flex', mt:'10px', }}>
                            <Typography >31/01/2020 - 06/02/2020 </Typography>
                            <KeyboardArrowDownOutlinedIcon />
                        </Box>
                        <Box sx={{display:'flex', marginLeft:'15px'}}>
                                <FormControlLabel control={<Checkbox defaultChecked sx={{'&.Mui-checked':{color:'#7F7FD5'}}}/>} label="Total" />
                                <FormControlLabel control={<Checkbox defaultChecked sx={{'&.Mui-checked':{color:'#E786D7'}}}/>} label="Follower"/>
                        </Box>
                    </Box>
                    </Box>
                    <LineChartData/>
                </Box>
            </Grid>




            <Grid item md={3} xs={9} > 
                    <Box sx={{backgroundColor: darkMode ? '#282C31' : '#FDFDFF', border: darkMode ? '1px solid #4D4D4D' : '1px solid #EFF3F9', borderRadius:'13px', padding:'25px',}}>
                        <Box>
                            <Typography variant='h5'>Reach by device</Typography>
                        </Box>
                        <br></br>
                        <PieChartData/>
                    </Box>
            </Grid>
        </Grid>
        <br></br>






                {/* Third Layer */}

        <Grid container sx={{ gap: 10, ml:{xs:'21%', md:'12%'}, color: darkMode ? '#CACACA' : '#4F4F4F', }}>
            <Grid item md={6} xs={9} > 
                <Box sx={{backgroundColor: darkMode ? '#282C31' : '#FDFDFF', border: darkMode ? '1px solid #4D4D4D' : '1px solid #EFF3F9', borderRadius:'13px', padding:'15px',}}>
                    <Box  sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
                        <Typography variant='h5' >Gender / Age</Typography>
                        <Box sx={{display:'flex', marginLeft:{xs:'0', md:'auto'}, }}>
                        <Box sx={{display:'flex',}}>
                            <CropSquareIcon sx={{backgroundColor:'#E786D7', borderRadius:'5px', color:'#E786D7'}}/>
                            <Typography sx={{ fontSize:'12px', ml:'10px'}}>women</Typography>
                        </Box>
                        <Box sx={{display:'flex', ml:'15px'}}>
                            <CropSquareIcon sx={{backgroundColor:'#7F7FD5', borderRadius:'5px', color:'#7F7FD5'}}/>
                            <Typography sx={{ fontSize:'12px', ml:'10px'}}>Men</Typography>
                        </Box>
                    
                    </Box>
                    </Box>
                    <BarChartData/>
                </Box>
            </Grid>




            <Grid item md={3} xs={9} > 
                    <Box sx={{backgroundColor: darkMode ? '#282C31' : '#FDFDFF', border: darkMode ? '1px solid #4D4D4D' : '1px solid #EFF3F9', borderRadius:'13px', padding:'25px',}}>
                        <Box sx={{display:'flex'}}>
                            <Typography variant='h5' >Geo</Typography>
                            <Typography variant='body2' sx={{ ml:'auto'}}>Country City</Typography>
                        </Box>
                        <br></br>
                        <Box sx={{display:'flex', flexWrap:'wrap', gap:'28px'}}>
                        {geoStats.map((element, index) =>(
                            <Box key={index} sx={{ width:{xs:'100%',md:'45%'}}}>
                                <Box sx={{display:'flex'}}>
                                    <Typography sx={{ fontSize:'14px'}}>{element.country}</Typography>
                                    <Typography sx={{ fontSize:'14px', ml:'auto'}}>{element.percentage} %</Typography>
                                </Box>
                                <ProgressBar data={element.percentage}/>
                            </Box>
                        ))}
                        </Box>
                    </Box>
            </Grid>
        </Grid>
        <br></br>

    </>
  )
}

export default Home