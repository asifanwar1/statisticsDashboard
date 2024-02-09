import React from 'react'
import SideBar from '../../components/dashboardComponents/SideBar'
import Home from './Home'
import Box from '@mui/material/Box';
import { useDarkMode } from '../../context/DarkModeContext'

const Dashboard = () => {

  const { darkMode } = useDarkMode();

  return (
    <>
      <Box sx={{backgroundColor: darkMode ? '#212427' : '#EFF3F9' , height:'100vh'}}>
        <SideBar/>
        <Home/>
      </Box>
    </>
  )
}

export default Dashboard