import { useLocation } from "react-router-dom"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

const routeName: Record<string, string> = {
  "": "Главная",
  main: "Главная",
  "trial-testing": "Пробный тест",
  "information-block": "Общая информация",
  testing: "Пробный тест",
  finish: "Результат",
  profile: "Профиль",
  archive: "Архив",
  "training-test": "Подготовка к ОРТ",
}

export function BreadCrumbs() {
  const location = useLocation()
  const locate = location.pathname.split("/").filter((item) => item !== "")
  const pathArray = locate.map((_, index) => {
    return "/" + locate.slice(0, index + 1).join("/")
  })

  const handleClick = () => {
    console.log("Breadcrumb clicked")
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {locate.map((item, index) =>
          index + 1 === locate.length ? (
            <Typography key={index} sx={{ color: "text.primary" }}>
              {decodeURIComponent(routeName[item] || item)}
            </Typography>
          ) : (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={pathArray[index]} // Формируем корректный URL
            >
              {decodeURIComponent(routeName[item] || item)}
            </Link>
          ),
        )}
      </Breadcrumbs>
    </div>
  )
}
