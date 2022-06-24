import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

const NavItem = ({
  href,
  name,
  children,
}: {
  href: string;
  name: string;
  children: any;
}) => {
  return (
    <ListItem disablePadding sx={{ w: "100%" }}>
      <ListItemButton component="a" href={href}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
