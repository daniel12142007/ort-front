import one from "../../img/one.svg"
import two from "../../img/two.svg"
import tre from "../../img/tre.svg"
export function PrepareWithUs() {
  return (
    <section>
      <div className="w-[1200px] m-auto">
        <div className="py-[75px]">
          <h2 className="text-center text-[24px] font-bold text-[#7695FF]">
            ГОТОВЬТЕСЬ К ТЕСТУ С НАМИ
          </h2>
          <p className="text-[24px] text-center font-medium mt-[22px]">
            С <span className="text-[#7695FF]">ORT.kg</span> вы получите доступ
            ко всем необходимым ресурсам{" "}
            <span className="block">для эффективной подготовки:</span>
          </p>
          <div className="flex justify-between mt-[40px]">
            <div className="w-[360px] h-[360px] rounded-full bg-[#D7E3FE24] flex flex-col justify-center items-center p-2">
              <img src={one} alt="" />
              <p className="text-[24px] font-medium text-center mt-3">
                Мгновенные результаты и анализ ошибок
              </p>
            </div>
            <div className="w-[360px] h-[360px] rounded-full bg-[#D7E3FE24] flex flex-col justify-center items-center p-2">
              <img src={two} alt="" />
              <p className="text-[24px] font-medium text-center  mt-3">
                Полные объяснения ко всем вопросам
              </p>
            </div>
            <div className="w-[360px] h-[360px] rounded-full bg-[#D7E3FE24] flex flex-col justify-center items-center p-2">
              <img src={tre} alt="" />
              <p className="text-[24px] font-medium text-center  mt-3">
                Личный прогресс и рекомендации для улучшения
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
