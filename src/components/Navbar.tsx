import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Typography,
  Box,
  Paper,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import LogoDevIcon from "@mui/icons-material/LogoDev";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      color="primary"
    >
      <Toolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        <LogoDevIcon
          sx={{ fontSize: "2.5rem", display: { xs: "block", sm: "none" } }}
        />
      </Toolbar>
      <Paper sx={{ p: "2px 4px" }}>
        <InputBase
          sx={{ ml: 1, flex: 1, minWidth: "30vw" }}
          placeholder="search..."
          inputProps={{ "aria-label": "search..." }}
        />
      </Paper>
      <Box
        pr="24px"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Badge
          badgeContent={4}
          color="error"
          sx={{ display: { xs: "none", sm: "inline-block" } }}
        >
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={4}
          color="error"
          sx={{ display: { xs: "none", sm: "inline-block" } }}
        >
          <NotificationsIcon />
        </Badge>
        <Avatar
          onClick={() => {
            setOpen((op) => !op);
          }}
          sx={{ display: "inline-block" }}
          alt="VHT"
          src="https://images.wallpaperscraft.com/image/single/loneliness_alone_man_173474_1280x720.jpg"
        />
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
