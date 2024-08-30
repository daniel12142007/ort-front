import { FC } from "react";
import { NavLink } from "react-router-dom";
import { List, ListItemIcon, ListItemText } from "@mui/material";
import constructureSvg from "../../shared/assets/svg/constucture.svg";
import testingSvg from "../../shared/assets/svg/testing.svg";
import userSvg from "../../shared/assets/svg/user.svg";
import { SideBarContainer, StyledListItemButton, Icon } from "../style";
import { NavItem, Page } from "@/shared/ui/types";

export interface SideBarProps {
  selected: Page;
  onSelect: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: "Конструктор теста", icon: constructureSvg, value: "constructor", path: "/test-constructor" },
  { label: "Тестирование", icon: testingSvg, value: "testing", path: "/testing" },
  { label: "Пользователь", icon: userSvg, value: "user", path: "/user" },
];

export const SideBar: FC<SideBarProps> = ({ selected, onSelect }) => {
  return (
    <SideBarContainer>
      <List>
        {navItems.map((item) => (
          <NavLink
            key={item.value}
            to={item.path}
            onClick={() => onSelect(item.value)}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <StyledListItemButton selected={selected === item.value}>
              <ListItemIcon>
                <Icon src={item.icon} selected={selected === item.value} alt={item.label} />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </StyledListItemButton>
          </NavLink>
        ))}
      </List>
    </SideBarContainer>
  );
};
