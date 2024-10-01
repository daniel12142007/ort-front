import { FC, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { List, ListItemIcon, ListItemText } from "@mui/material"
import constructureSvg from "../../shared/assets/svg/constucture.svg"
import userSvg from "../../shared/assets/svg/user.svg"
import schoolSVG from '../../shared/assets/svg/school.svg'
import { SideBarContainer, StyledListItemButton, Icon } from "../style"
import { NavItem, Page } from "@/shared/ui/types"

export interface SideBarProps {
  selected: Page
  onSelect: (page: Page) => void
}

const navItems: NavItem[] = [
  {
    label: "Конструктор теста",
    icon: constructureSvg,
    value: "constructor",
    path: "/admin",
  },
  { label: "Пользователь", icon: userSvg, value: "user", path: "/admin/users" },
  {label: "школы", icon: schoolSVG, value: "school", path: "/admin/schools"},
]

export const SideBar: FC<SideBarProps> = ({ selected, onSelect }) => {
  const location = useLocation()

  useEffect(() => {
    const currentItem = navItems.find((item) => item.path === location.pathname)
    if (currentItem) {
      onSelect(currentItem.value)
    }
  }, [location.pathname, onSelect])

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
                <Icon
                  src={item.icon}
                  selected={selected === item.value}
                  alt={item.label}
                />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </StyledListItemButton>
          </NavLink>
        ))}
      </List>
    </SideBarContainer>
  )
}
