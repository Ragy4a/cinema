import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActors } from "../../store/slices/actorsSlice";
import { Grid } from "@mui/material";
import ActorItem from "./ActorsItem";

function ActorsList() {
  const dispatch = useDispatch();
  const actors = useSelector(state => state.actorsList.actors);

  useEffect(() => {
    dispatch(getActors());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {actors.map(({ id, fullName, birthYear, image }) => (
        <ActorItem
          key={id}
          id={id}
          fullName={fullName}
          birthYear={birthYear}
          image={image}
        />
      ))}
    </Grid>
  );
}

export default ActorsList;