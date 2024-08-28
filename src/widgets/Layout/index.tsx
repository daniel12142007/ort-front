import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { SideBar, NavBar } from "@/widgets";
import { Page } from "@/shared/ui/types";

export const Layout = () => {
  const [selectedPage, setSelectedPage] = useState<Page>("constructor");

  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid item>
        <NavBar/>
      </Grid>
      <Grid container item flexGrow={1}>
        <Grid item style={{ width: "297px" }}>
          <SideBar selected={selectedPage} onSelect={setSelectedPage} />
        </Grid>
        <Grid item style={{ flexGrow: 1, padding: "60px 88px", backgroundColor: "#A5B4C2",zIndex: -1}}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};
