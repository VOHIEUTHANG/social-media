import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { Box, Stack } from "@mui/material";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar fl={1} p={2} />
          <Feed fl={4} p={2} />
          <Rightbar fl={2} p={2} />
        </Stack>
        <Add />
      </Box>
    </div>
  );
}

export default App;
