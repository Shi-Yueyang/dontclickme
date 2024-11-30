import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Stack,
} from "@mui/material";
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
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="90vh"
      padding={3}
      overflow="hidden"
    >
      <Stack
        spacing={3}
        sx={{
          alignItems: "center",
        }}
      >
        {joke && (
          <Paper elevation={3} style={{ padding: "10px" }}>
            <Typography variant="h6" color="secondary">
              {joke}
            </Typography>
          </Paper>
        )}
      </Stack>
      <Box display="flex" justifyContent="center" marginBottom={3}>
        <Button variant="contained" color="primary" onClick={handleClick} sx={{ width: '80%' }}>
          Don't click me
        </Button>
      </Box>
    </Box>
  );
};
