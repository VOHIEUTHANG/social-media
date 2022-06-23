import React from "react";
import { Box } from "@mui/material";

const Sidebar = ({ bg, fl, p }: { bg: string; fl: number; p: number }) => {
  return (
    <Box
      bgcolor={bg}
      flex={fl}
      p={p}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
