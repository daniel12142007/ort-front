import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import constructureSvg from '../../shared/assets/svg/constucture.svg';
import testingSvg from '../../shared/assets/svg/testing.svg';
import userSvg from '../../shared/assets/svg/user.svg';

export type Page = "constructor" | "testing" | "user";

interface SideBarProps {
  selected: Page;
  onSelect: (page: Page) => void;
}

interface NavItem {
  label: string;
  icon: React.ReactElement;
  value: Page;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Конструктор теста", icon: <img src={constructureSvg} alt="Конструктор" />, value: "constructor", path: "/" },
  { label: "Тестирование", icon: <img src={testingSvg} alt="Тестирование" />, value: "testing", path: "/" },
  { label: "Пользователь", icon: <img src={userSvg} alt="Пользователь" />, value: "user", path: "/" },
];

const StyledListItemButton = styled(ListItemButton)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    boxShadow: selected ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  })
);

export const SideBar: FC<SideBarProps> = ({ selected, onSelect }) => {
  return (
    <Box
      sx={{
        width: "297px",
        height: "100%",
        bgcolor: "background.paper",
        padding: 2,
        marginTop: "30px",
      }}
    >
      <List>
        {navItems.map((item) => (
          <NavLink
            key={item.value}
            to={item.path}
            style={{ textDecoration: 'none', color: 'inherit' }}
            onClick={() => onSelect(item.value)}
          >
            <StyledListItemButton selected={selected === item.value}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </StyledListItemButton>
          </NavLink>
        ))}
      </List>
    </Box>
  );
};
