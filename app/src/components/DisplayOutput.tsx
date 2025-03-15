import React from "react";
import Typography from '@mui/material/Typography';

function DisplayOutput({response}) {

  console.log("response in output:", response);
  

  return (
    <Typography variant="body1">
      {response}
    </Typography>
  );
}

export default DisplayOutput;
