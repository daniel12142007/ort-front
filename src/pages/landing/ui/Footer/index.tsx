import React from "react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <section
      className="bg-[rgb(255,255,255)] h-[300px] py-[40px] "
      style={{
        background:
          "linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(118,149,255,1) 50%)",
      }}
    >
      <div className="w-[1200px] m-auto">
        <div className="relative">
          <h1 className="text-[28px] font-medium text-center text-white">
            Не откладывайте свою подготовку! Начните уже сегодня, чтобы
            гарантировать успешное поступление в ВУЗ.
          </h1>
          <div className="w-[204px] h-[204px] rounded-full bg-[#D7E3FE0D] absolute bottom-0 left-0"></div>
          <div className="w-[121px] h-[121px] rounded-full bg-[#D7E3FE0D] absolute bottom-[60px] right-0"></div>
          <div className="text-center mt-[80px]">
            <Link to="#">
              <button className="bg-[#7695FF] rounded-xl text-white px-[30px] py-[6px] text-[19px]">
                Зарегистрироваться
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
