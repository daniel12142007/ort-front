// import aboutImg from "../../img/aboutImg.svg"
import aboutImg from "../../img/img.svg"
import book from "../../img/book.svg"
import { Link } from "react-router-dom"

export function About() {
  return (
    <section className="mt-[50px]">
      <div className="w-[1200px] m-auto">
        <div className="flex justify-between items-center relative">
          <p className="text-[19px] text-start w-[630px] font-medium">
            <span className="text-[24px] font-bold text-[#407BFF]">ORT.kg</span>
            — ведущая платформа, разработанная для подготовки школьников к
            Общереспубликанскому тестированию (ОРТ). С нами вы получите все
            необходимые инструменты для успешной сдачи теста и поступления в
            престижные вузы страны.
          </p>
          <div className="">
            <img src={book} alt="" className="z-10" />
            <img
              src={aboutImg}
              alt=""
              className=" absolute right-[95px] top-[25px]"
            />
            <div className="w-[200px] h-[200px] rounded-full bg-[#FFFBA1] blur-2xl absolute top-0 right-0 z-[-1]"></div>
          </div>
          <div className="w-[222px] h-[222px] rounded-full bg-[#D7E3FE24] absolute"></div>
          <div className="w-[222px] h-[222px] rounded-full bg-[#D7E3FE24] absolute left-[100px] top-[20px]"></div>
        </div>
        <div className="text-center mt-[64px]">
          <Link to="/auth/sign-up">
            <button className="bg-[#7695FF] rounded-xl text-white px-[30px] py-[6px] text-[19px]">
              Зарегистрироваться
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
