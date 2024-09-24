import logo from "@/shared/assets/icon/logo.svg"
import { Link } from "react-router-dom"
export function Header() {
  return (
    <header className="bg-[#7695FF] h-[70px] flex items-center shadow-xl">
      <div className="w-[1200px] m-auto">
        <div className="flex justify-between ">
          <img src={logo} alt="" width={100} />
          <Link to="auth/sign-in">
            <button className="text-white rounded-[20px] border-2 border-white px-[20px]">
              Вход
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
