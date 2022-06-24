import React from "react";
import {
  Box,
  List,
  Switch,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import NavItem from "./NavItem";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import NightlightIcon from "@mui/icons-material/Nightlight";
const Sidebar = ({ fl, p }: { fl: number; p: number }) => {
  return (
    <Box flex={fl} p={p} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <NavItem name="Homepage" href="#">
            <HomeIcon />
          </NavItem>
          <NavItem name="Page" href="#">
            <ContactPageIcon />
          </NavItem>
          <NavItem name="Group" href="#">
            <GroupIcon />
          </NavItem>
          <NavItem name="Setting" href="#">
            <SettingsApplicationsIcon />
          </NavItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <NightlightIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
