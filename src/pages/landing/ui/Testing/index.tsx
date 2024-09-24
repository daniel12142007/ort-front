import complate from "../../img/complate.svg"
import notebook from "../../img/fluent-emoji_spiral-notepad.svg"
export function Testing() {
  return (
    <section className="bg-[#7695FF] text-white pt-[50px] pb-[100px] mt-[75px]">
      <div className="w-[1150px] m-auto">
        <div className="relative">
          <h2 className="text-center text-[32px] font-medium">
            О ТЕСТИРОВАНИИ
          </h2>
          <p className="text-[19px] my-[20px]">
            Общереспубликанское тестирование (ОРТ) — это ключевой этап на пути к
            высшему образованию в Кыргызстане. Этот тест оценивает не только
            академические знания, но и способности к анализу, логике и
            применению информации в реальных ситуациях.
          </p>
          <p className="text-[19px] mt-[24px]">
            Он включает три основные части:
          </p>
          <div className="flex items-center gap-6 mt-[20px]">
            <p className="text-[19px]">Математическая секция</p>
            <img src={complate} alt="" />
          </div>
          <div className="flex items-center gap-6 ml-[100px]">
            <p className="text-[19px]">Словесно-логическое мышление</p>
            <img src={complate} alt="" />
          </div>
          <div className="flex items-center gap-6 ml-[200px]">
            <p className="text-[19px]">Практическая грамматика родного языка</p>
            <img src={complate} alt="" />
          </div>
          <img
            src={notebook}
            alt=""
            className="absolute right-[20px] top-[140px]"
          />
          <div className="bg-[#D7E3FE0D] w-[217px] h-[217px] rounded-full absolute right-0 top-[100px]"></div>
          <div className="bg-[#D7E3FE0D] w-[217px] h-[217px] rounded-full absolute right-[100px] top-[170px]"></div>
          <div className="bg-[#D7E3FE0D] w-[217px] h-[217px] rounded-full absolute right-0 top-[200px]"></div>
          <div className="w-[314px] h-[314px] rounded-full bg-[#D7E3FE0D] absolute top-0 left-[100px]"></div>
          <div className="w-[314px] h-[314px] rounded-full bg-[#D7E3FE0D] absolute top-[20px] right-[980px]"></div>
          <div className="w-[236px] h-[236px] rounded-full bg-[#D7E3FE0D] absolute top-[230px] right-[895px]"></div>
        </div>
      </div>
    </section>
  )
}
