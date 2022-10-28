import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import app from '../config/FirebaseConfig'
import { getDatabase, ref, push, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';

function Formlist() {
    const navigate = useNavigate()
    const database = getDatabase(app);
    const [data, setData] = useState({
    firstname: '',
    lastname: '',
    cnic : '',
    fathername : '',
    fathercnic : '',
    course : '',
    section : '',
    number : '',
    emergencynumber : ''
    })
  
    console.log(data, "data");
  
    const Registered = () => {
             const reference = ref(database, 'users');
             push(reference, data);
             navigate('/show', {
              state : {data}
             })
            }
            
  
    return (
      <>
      <Grid container sx={{display : "flex", justifyContent : "center", marginTop : 8}}>
        <Grid item md="">
      <Box>
        <Box> <Typography > Form List </Typography> </Box>
      <Box>
        <TextField onChange={(e)=>setData((prev)=>({...prev, firstname:e.target.value}))} label="firstname" variant="standard" />
      </Box>
      <Box>
        <TextField onChange={(e)=>setData((prev)=>({...prev, lastname:e.target.value}))} label="lastname" variant="standard" />
      </Box><Box>
        <TextField onChange={(e)=>setData((prev)=>({...prev, cnic:e.target.value}))} label="CNIC" variant="standard" />
      </Box><Box>
        <TextField onChange={(e)=>setData((prev)=>({...prev, fathername :e.target.value}))} label="fatherName" variant="standard" />
      </Box><Box>
        <TextField onChange={(e)=>setData((prev)=>({...prev, fathercnic:e.target.value}))} label="Father CNIC" variant="standard" />
      </Box><Box>
        <TextField onChange={(e)=>setData((prev)=>({...prev, course:e.target.value}))} label="course" variant="standard" />
      </Box><Box>
        <TextField onChange={(e)=>setData((prev)=>({...prev, section :e.target.value}))} label="section" variant="standard" />
      </Box><Box>
        <TextField onChange={(e)=>setData((prev)=>({...prev, number:e.target.value}))} label="contact" variant="standard" />
      </Box><Box>
        <TextField onChange={(e)=>setData((prev)=>({...prev,emergencynumber :e.target.value}))} label="emergency contact" variant="standard"/>
      </Box>
      <Box sx={{marginTop : 2}}>
        <Button onClick={Registered} variant="contained"> Registered </Button>
      </Box>
      </Box>
      </Grid>
      </Grid>
      </>   
    );
  }

export default Formlist