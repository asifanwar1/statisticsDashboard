import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MailIcon from '@mui/icons-material/Mail';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import Input from '@mui/joy/Input';
import { ProfileImage, VKLogo } from '../../assets/images/index.js'
import SwitchBtn from './SwitchBtn.jsx';
import { useDarkMode } from '../../context/DarkModeContext.jsx';




const drawerWidth = 240;


const menuItems = [
    {icon: <HomeIcon/>, name: 'Home', path:'/'},
    {icon: <ArticleIcon/>, name: 'Documents', path:'/documents'},
    {icon: <PeopleAltIcon/>, name: 'Users', path:'/users'}, //change from user to profile
    {icon: <MailIcon/>, name: 'Mail', path:'/mail'},
    {icon: <PlayArrowIcon/>, name: 'Stats', path:'/stats'},
    {icon: <BarChartIcon/>, name: 'Charts', path:'/charts'},
    {icon: <SettingsIcon/>, name: 'Settings', path:'/settings'},
]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    // zIndex: theme.zIndex.drawer + 1,
     
    boxShadow:'none',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    '& .MuiDrawer-paper':{
        // borderRadius: '15px',
        border:'none',
        // backgroundColor: '#282C31',
        ...(open ? openedMixin(theme) : closedMixin(theme))
    }
  }),
);

export default function SideBar() {
  const { darkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(true);


  // const handleToggle = () => {
  //   setDarkMode(!darkMode);
  //   // console.log(darkMode)
  //   // save the current mode to localStorage or a state management tool
  //   // to persist the mode between page reloads.
  // };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex',}}>
        <CssBaseline />
         <AppBar position="fixed" sx={{backgroundColor: darkMode ? '#212427' : '#EFF3F9',}}>
            <Toolbar>
                <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, gap:'25px', marginTop:{xs:'10px', md:'0'}, marginLeft: {xs:'16%', md:'11%'}, color: darkMode ? '#DFEBE9' : '#4F4F4F ',}}>
                <Typography variant="h5" >
                    Statistics
                </Typography>
                <Input startDecorator={<SearchOutlinedIcon />}/>
                <NotificationsIcon/>
                </Box>
                <Box sx={{display:{xs:'none', md:'flex'}, marginLeft:'45%', color: darkMode ? '#DFEBE9' : '#4F4F4F ',}}>
                    <Typography sx={{mt:'10px', mr:'15px'}}>Anya</Typography>
                    <Avatar alt="Remy Sharp" src={ProfileImage} />
                    <KeyboardArrowDownIcon sx={{mt:'10px'}}/>
                </Box>
            </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" open={open} sx={{ '& .MuiDrawer-paper':{backgroundColor: darkMode ? '#282C31' : '#FDFDFF',}}}>
        <DrawerHeader >
            {open ?
                <Box sx={{margin:'auto', marginTop:'20px'}} onClick={handleDrawerClose}>
                    <img src={VKLogo} alt="VKLogo" style={{ width:'150px'}}/>
                </Box>
            :
                <Box sx={{margin:'auto', marginTop:'20px'}} onClick={handleDrawerOpen}>
                    <img src={VKLogo} alt="VKLogo" style={{ width:'50px'}}/>
                </Box>
            }
        </DrawerHeader>
        <List sx={{marginTop:'25px', marginLeft: open ? '25px' : '0',}}>
        {menuItems.map((element, index) =>(
            
            <ListItem  key={index} disablePadding className="listItem" sx={{ display: 'block', py: 1,}}>
                {/* <Link to={element.path}> */}
                <ListItemButton className={`listBtn ${index === 0 ? 'active' : ''}`} sx={{ 
                        minHeight: 48, 
                        justifyContent: open ? 'initial' : 'center', 
                        px: 2.5, 
                        '&:hover': {backgroundColor:'#DFEBE9',
                                    borderRadius: '20px 0px 0px 20px',                
                                    '& .MuiListItemText-root': {color: '#CACACA !important'}, 
                                    '& .MuiListItemIcon-root': {color: '#CACACA !important'},
                                    
                        
                        }
                        
                        }}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: darkMode ? '#DFEBE9' : '#4F4F4F ',}}>
                        {element.icon}
                    </ListItemIcon>
                    <ListItemText primary={element.name} sx={{ opacity: open ? 1 : 0, color: darkMode ? '#DFEBE9' : '#4F4F4F ', }} />
                </ListItemButton>
                {/* </Link> */}
            </ListItem>

        ))}
        </List>
        <List sx={{marginLeft: open ? '25px' : '-20px',}}>
          <ListItem>
            <SwitchBtn />
          </ListItem>
        </List>
      </Drawer>
 
    </Box>
  );
}

