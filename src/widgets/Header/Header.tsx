import { NavLink } from "react-router-dom"
import LogoSVG from "../../shared/assets/svg/logo.svg"
import ProfileSVG from "../../shared/assets/svg/profile.svg"
import { Container } from "@/shared/ui/Container"

export const Header = () => {
  return (
    <div className="bg-[#407BFF] w-full h-[79px] flex justify-center items-center sticky top-0">
      <Container>
        <div className="flex justify-between w-full">
          <div className="flex items-center w-[40%]">
            <NavLink to="/main">
              <img
                src={LogoSVG}
                className="w-[90%] h-[90%] cursor-pointer"
                alt="Logo"
              />
            </NavLink>
          </div>
          <div className="flex items-center justify-between w-[60%] text-white font-roboto">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black" : "text-white"
              }
              to="/main/trainingPage"
            >
              <div className="text-[24px] font-medium">Подготовка к ОРТ</div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black" : "text-white"
              }
              to="/main/trial-testing"
            >
              <div className="text-[24px] font-medium">Пробный тест</div>
            </NavLink>
            <div className="flex items-center space-x-4">
              <NavLink to="">
                <div className="text-white">
                  <div className="text-[16px]">Асанов Али</div>
                  <div className="text-[16px]">Бишкек</div>
                </div>
              </NavLink>
              <img
                src={ProfileSVG}
                className="w-[50px] h-[50px] rounded-full"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
