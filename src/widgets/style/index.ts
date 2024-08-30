import { styled } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { AppBar, IconButton, Typography } from "@mui/material";

export const SideBarContainer = styled("div")`
  grid-area: menu;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-areas:
    "header header header header"
    "menu main main main"
    "menu main main main";
    "menu main main main";
  background-color: #a5b4c2;
  height: 100vh;

  grid-template-rows: 80px auto;
  grid-template-columns: 270px auto;

  & > div {
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 30px;
  }
`;

export const Content = styled("div")`
  margin: 30px;
  grid-area: main;
`;

export const StyledListItemButton = styled(ListItemButton)<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#4285B4 !important" : "transparent")};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ selected }) => (selected ? "#ffffff" : "inherit")};
  text-decoration: none;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#4285B4" : "#e0e0e0")};
  }
`;
export const Icon = styled("img")<{ selected: boolean }>`
  filter: ${({ selected }) => (selected ? "invert(1)" : "none")}; /* Инвертирует цвет для белого при selected */
  width: 24px; /* Установите размеры по вашему усмотрению */
  height: 24px;
  transition: filter 0.3s ease;
`;
export const StyledAppBar = styled(AppBar)`
  grid-area: header;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  justify-content: center;
  background-color: #ffffff;
  color: #000000;
`;

export const ProfileIconButton = styled(IconButton)`
  img {
    width: 40px;
    height: 40px;
  }
`;
export const StartTypography = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  color: #000;
  display: flex;
  justify-content: start;
  color: #4285b4;
  font: Roboto;
`;
