import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const FormComponent = ({onSendMessage}) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('message to be sent', message);
    

    onSendMessage(message);
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Enter something"
        variant="outlined"
        value={message}
        onChange={handleInputChange}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ marginTop: '10px' }}
      >
        Submit
      </Button>
    </div>
  );
};

export default FormComponent;
