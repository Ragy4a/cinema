import { Grid, Card, CardContent, CardMedia, Typography, ButtonGroup, Button } from "@mui/material";
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import './ActorsItem.css'
import { deleteActor } from "../../store/slices/actorsSlice";


function  ActorItem({ id, image, fullName, birthYear }) {

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteActor(id));
  }

  return (
    <Grid item xs={12} md  key={id}>
        <Card sx={{ height: '100%', width: '200px'}}>
          <CardMedia
              component="img"
              height={300}
              image={image}
              alt={fullName}
           />
          <CardContent >
            <Typography gutterBottom variant="h6" component="div">
               {fullName}
             </Typography>
            <Typography variant="body2" color="text.secondary">
              Birth year: {birthYear}
             </Typography>
          </CardContent>
          <ButtonGroup>
            <Link>
              <Button id="watch"><TheatersRoundedIcon/></Button>
            </Link>
            <Link to={`/actors/new/${id}`}>
              <Button id="edit"><EditIcon/></Button>
            </Link>
            <Button id="delete" onClick={onDelete}><ClearIcon/></Button>
          </ButtonGroup>
        </Card>
    </Grid>
  )
}

export default ActorItem