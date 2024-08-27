import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import profileIcon from '../../shared/assets/svg/profile.svg'

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        height: "90px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <Toolbar>
        <Box flexGrow={1}></Box>

        <IconButton edge="end" color="inherit">
          <img src={profileIcon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};