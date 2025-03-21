import { useState } from "react"

import './App.css'
import { Typography } from "@mui/material"
import DisplayOutput from "./components/DisplayOutput"
import FormComponent from "./components/FormComponent"

function App() {
  const [response, setResponse] = useState('');

  const handleSendMessage = async (message) => {
    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error fetching from backend:', error);
    }
  };

  return (
    <>
      <Typography variant="h3">Learn a language for business </Typography>
      <img src="/talk.png" alt="language" />
      <Typography variant="body1">What are your language goals, current skill level and context you want to learn?</Typography>
      {/* <DisplayLesson response={response} /> */}
      <DisplayOutput response={response} />
      <FormComponent onSendMessage={handleSendMessage} />
    </>
  )
}

export default App
