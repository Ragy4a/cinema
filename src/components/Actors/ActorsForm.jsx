import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createActor, editActor } from '../../store/slices/actorsSlice';
import { createEmptyActor } from '../../constants';

const schema = Yup.object({
  fullName: Yup.string().required('Required!'),
});

const CustomTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    color: 'white',
    fontSize: '16px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gold', 
    },
    '&:hover fieldset': {
      borderColor: 'yellowgreen', 
    },
    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
  },
}));

const ActorsForm = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const actors = useSelector(state => state.actorsList.actors);
  const actor = actors.find((actor) => actor.id === Number(id))
  const dispatch = useDispatch();

  const onFormSubmit = (values) => {
    if(!values.id) {  
     dispatch(createActor(values));
     navigate('/actors');
     return
    }
    dispatch(editActor(values));
    navigate('/actors');
  };

  return (
    <Formik
      initialValues={actor ? actor : createEmptyActor()}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      {({ isValid }) => (
        <Form>
          <Box display="flex" flexDirection="column" p={2}>
            <Typography variant="h6" component="div" gutterBottom>
              Service
            </Typography>

            <Field
              as={CustomTextField}
              name="fullName"
              label="Full Name"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <ErrorMessage name="fullName" component="div" className="error" />

            <Field
              as={CustomTextField}
              name="birthYear"
              label="Birth year"
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <Field
              as={CustomTextField}
              name="nationality"
              label="Nationality"
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <Field
              as={CustomTextField}
              name="image"
              label="Poster"
              variant="outlined"
              margin="normal"
              fullWidth
            /> 
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button type="submit" variant="contained" color="primary" disabled={!isValid}>
                Save
              </Button>
              <Button type="reset" variant="contained" color="secondary"> 
                Reset
              </Button>
              <Button variant="contained" onClick={() => navigate('/actors')}>
                Return
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ActorsForm;