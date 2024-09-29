import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { SideBar, NavBar } from "@/widgets"
import { Page } from "@/shared/ui/types"
import { GridContainer, Content } from "../style"
import { Header } from "../Header/Header"

export const Layout = () => {
  const [selectedPage, setSelectedPage] = useState<Page>("constructor")
  const location = useLocation()

  const isUserRoute = location.pathname.startsWith("/user")

  return (
    <>
      {isUserRoute ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <GridContainer>
          <NavBar />
          <SideBar selected={selectedPage} onSelect={setSelectedPage} />
          <Content>
            <Outlet />
          </Content>
        </GridContainer>
      )}
    </>
  )
}
