import { Link } from "react-router-dom"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import CameraIndoorRoundedIcon from '@mui/icons-material/CameraIndoorRounded';

import './NavBar.css'
import { List, ListItem } from "@mui/material"

function NavBar() {
  return (
      <List id="nav-bar">
        <ListItem>
          <HomeRoundedIcon fontSize="large" style={{color: 'yellowgreen'}} />
          <Link to=''>Home</Link>
        </ListItem>
        <ListItem>
          <MovieCreationIcon fontSize="large" style={{color: 'orange'}} />
          <Link to='/movies'>Movies</Link>
          </ListItem>
        <ListItem>
          <RecentActorsIcon fontSize="large" style={{color: 'purple'}} />
          <Link to='/actors'>Actors</Link>
          </ListItem>
        <ListItem>
          <PaidRoundedIcon fontSize="large" style={{color: 'green'}} />
          <Link to='/directors'>Directors</Link>
        </ListItem>
        <ListItem>
          <CameraIndoorRoundedIcon fontSize="large" style={{color: 'blue'}} />
          <Link to='/studios'>Studios</Link>
        </ListItem>
    </List>
  )
}

export default NavBar