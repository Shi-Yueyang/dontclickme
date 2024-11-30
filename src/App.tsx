import { Container, Box, Typography, Button, Paper, Stack } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const App = () => {
  const [joke, setJoke] = useState<string | null>(null);

  const fetchJoke = async () => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  const handleClick = () => {
    fetchJoke();
  };

  return (
    <Stack margin={3} spacing={3}>
        {joke && (
          <Paper elevation={3} style={{ marginTop: "20px", padding: "10px" }}>
            <Typography variant="h6" color="secondary">
              {joke}
            </Typography>
          </Paper>
        )}
        <Button variant="contained" color="primary" onClick={handleClick}>
          Don't click me
        </Button>
    </Stack>
  );
};
