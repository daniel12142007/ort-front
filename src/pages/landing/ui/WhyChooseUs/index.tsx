import { Link } from "react-router-dom"
import idea from "../../img/Idea.svg"
import task from "../../img/Task.svg"
import burger from "../../img/burger.svg"
import virtual from "../../img/virtual.svg"

export function WhyChooseUs() {
  return (
    <section className="py-[50px]">
      <div className="w-[1200px] m-auto">
        <h2 className="text-[#7695FF] text-[32px] font-semibold text-center">
          ПОЧЕМУ ВЫБИРАЮТ НАС
        </h2>
        <p className="text-[24px] font-medium mt-[20px]">
          <span className="text-[#7695FF]">ORT.kg</span> -предлагает уникальный
          подход к подготовке к ОРТ:
        </p>
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-normal">
            Искусственный интеллект: Наш ИИ анализирует ваши ответы и дает
            развернутые объяснения, помогая не только найти правильный ответ, но
            и понять логику решения.
          </p>
          <img src={idea} alt="" />
        </div>
        <div className="flex justify-evenly items-center">
          <img src={task} alt="" />
          <p className="text-[20px] font-normal w-[641px]">
            Персонализированный подход: Платформа адаптируется под ваш уровень
            подготовки, предлагая материалы и тесты, соответствующие вашим
            потребностям.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-normal">
            Реалистичные симуляции: Наши тесты максимально приближены к реальным
            условиям ОРТ, что позволяет почувствовать себя уверенно на экзамене.
          </p>
          <img src={burger} alt="" />
        </div>
        <div className="flex justify-evenly items-center">
          <img src={virtual} alt="" />
          <p className="text-[20px] font-normal w-[641px]">
            Поддержка на всех этапах: Мы предлагаем консультации, советы по
            стратегии и дополнительные материалы, чтобы каждый абитуриент мог
            достичь своих целей.
          </p>
        </div>
        <div className="text-center mt-[40px]">
          <Link to="#">
            <button className="bg-[#7695FF] rounded-xl text-white px-[30px] py-[6px] text-[19px]">
              Зарегистрироваться
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
