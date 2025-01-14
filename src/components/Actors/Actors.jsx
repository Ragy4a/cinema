import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Routes, Route, Link, Navigate } from "react-router-dom";

import ActorsItem from "./ActorsItem";
import ActorsList from "./ActorsList";

function Actors() {
  return (
    <>
    <Card sx={{ height: '15%', width: '100%', display: 'flex',    justifyContent: 'center', alignItems: 'center' }}>
      <CardActionArea component={Link} to="/actors/new">
        <CardContent>
          <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <AddCircleOutlineRoundedIcon sx={{ fontSize: '3rem' }} />
            NEW ACTOR
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Routes>
      <Route path=':id' element={<ActorsItem />}/>
      <Route path='/' element={<ActorsList />} />
      <Route path='new' element={<Navigate to='/actors/new/:id' />} />
    </Routes>
    </>
  )
}

export default Actors