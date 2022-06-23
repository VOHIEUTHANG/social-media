import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Box, Container, Stack } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar bg="yellow" fl={1} p={2} />
          <Feed bg="orange" fl={4} p={2} />
          <Rightbar bg="pink" fl={2} p={2} />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
