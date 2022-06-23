import { Box } from "@mui/material";
import React from "react";

const Feed = ({ bg, fl, p }: { bg: string; fl: number; p: number }) => {
  return (
    <Box bgcolor={bg} flex={fl} p={p}>
      Sidebar
    </Box>
  );
};

export default Feed;
