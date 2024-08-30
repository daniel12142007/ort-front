import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar, NavBar } from "@/widgets";
import { Page } from "@/shared/ui/types";
import { GridContainer, Content } from "../style";

export const Layout = () => {
  const [selectedPage, setSelectedPage] = useState<Page>("constructor");

  return (
    <GridContainer>
      <NavBar />
      <SideBar selected={selectedPage} onSelect={setSelectedPage} />
      <Content>
        <Outlet />
      </Content>
    </GridContainer>
  );
};
