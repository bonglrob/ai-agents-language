import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

function DisplayOutput({response}) {
  
    return (
      <Paper 
        style={{ 
          display: response === '' ? 'none' : 'block', 
          padding: "10px", 
          margin: "10px" 
        }} 
        elevation={3}
      >
        <Typography variant="body1">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              ul: ({ children }) => <List>{children}</List>,
              li: ({ children }) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={children} />
                  </ListItemButton>
                </ListItem>
              )
            }}
          >
            {response}
          </ReactMarkdown>
        </Typography>
      </Paper>
    );
  };

export default DisplayOutput;
