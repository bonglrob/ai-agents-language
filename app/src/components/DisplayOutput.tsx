import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function DisplayOutput({response}) {

  return (
    <>
      <Paper 
        style={{ 
          display: response === '' ? 'none' : 'block', 
          padding: "10px", 
          margin: "10px" 
        }} 
        elevation={3}
      >
        <Typography variant="body1">
          {response}
        </Typography>
      </Paper>
    </>
  );
}

export default DisplayOutput;
