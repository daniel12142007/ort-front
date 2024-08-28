import { Toolbar, Box, } from "@mui/material";
import profileIcon from '../../shared/assets/svg/profile.svg';
import { StyledAppBar, ProfileIconButton, StartTypography } from '../style';

export const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StartTypography variant="h6" sx={{ flexGrow: 1 }}>
          ORT.kg
        </StartTypography>
        <ProfileIconButton edge="end" color="inherit">
          <img src={profileIcon} alt="Profile" />
        </ProfileIconButton>
      </Toolbar>
    </StyledAppBar>
  );
};
