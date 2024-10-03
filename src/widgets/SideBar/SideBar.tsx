import { FC, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { List, ListItemIcon, ListItemText } from "@mui/material";
import constructureSvg from "../../shared/assets/svg/constucture.svg";
import userSvg from "../../shared/assets/svg/user.svg";
import schoolSVG from '../../shared/assets/svg/school.svg';
import logout from "../../shared/assets/icon/logout-3-svgrepo-com.svg";
import { SideBarContainer, StyledListItemButton, Icon, StyledLogout, FlexBox } from "../style";
import { NavItem, Page } from "@/shared/ui/types";
import TokenService from "@/utils";

export interface SideBarProps {
  selected: Page;
  onSelect: (page: Page) => void;
}

const navItems: NavItem[] = [
  {
    label: "Конструктор теста",
    icon: constructureSvg,
    value: "constructor",
    path: "/admin",
  },
  { label: "Пользователь", icon: userSvg, value: "user", path: "/admin/users" },
  { label: "школы", icon: schoolSVG, value: "school", path: "/admin/schools" },
];

export const SideBar: FC<SideBarProps> = ({ selected, onSelect }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentItem = navItems.find((item) => item.path === location.pathname);
    if (currentItem) {
      onSelect(currentItem.value);
    }
  }, [location.pathname, onSelect]);

  const handleLogout = () => {
    TokenService.removeToken();
    navigate("/"); // Redirect after logging out
  };

  return (
    <SideBarContainer>
      <List style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          {navItems.map((item) => (
            <NavLink
              key={item.value}
              to={item.path}
              onClick={() => onSelect(item.value)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <StyledListItemButton selected={selected === item.value}>
                <ListItemIcon>
                  <Icon
                    src={item.icon}
                    alt={item.label}
                    selected={selected === item.value}
                  />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </StyledListItemButton>
            </NavLink>
          ))}
        </div>
        <StyledLogout
          selected={selected === "logout"} // Pass the selected prop
          style={{ cursor: "pointer" }}
        >
          <FlexBox onClick={handleLogout}>
            <ListItemIcon>
              <Icon
                src={logout}
                alt="выйти"
                selected={selected === "logout"} // Pass the selected prop
              />
            </ListItemIcon>
            <ListItemText primary="выйти" />
          </FlexBox>
        </StyledLogout>
      </List>
    </SideBarContainer>
  );
};
