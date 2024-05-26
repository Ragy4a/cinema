import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getActors } from "../../store/slices/actorsSlice";
import { Box } from "@mui/material";

import './ActorsList.css'


function ActorsList() {

  const dispatch = useDispatch();
  const actors = useSelector(state => state.actorsList.actors)

  useEffect(() => {
    dispatch(getActors())
  }, [dispatch])

  return (
    <ul>
        {actors.map(({id, fullName, image}) => (
          <Box key={id} className='actor'>
            <img src={image} alt="poster" />
            {fullName}
          </Box>
        ))}
    </ul>
  )
}

export default ActorsList