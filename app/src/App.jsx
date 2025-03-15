import { useState } from "react"

import './App.css'
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
      <FormComponent onSendMessage={handleSendMessage} />
      <DisplayOutput response={response} />
    </>
  )
}

export default App
