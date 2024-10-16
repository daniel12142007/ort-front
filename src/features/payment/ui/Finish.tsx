import { useNavigate } from "react-router-dom"

import successIcon from "@/shared/assets/svg/successIcon.svg"
import errorIcon from "@/shared/assets/svg/errorIcon.svg"

const Finish = () => {
  const navigate = useNavigate()
  const isSuccess = false

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full flex justify-center items-center">
      <div className="bg-white p-5 rounded-2xl w-2/5 shadow-lg">
        <div className="flex flex-col gap-5 items-center">
          <div className={`${isSuccess ? "border-[#35a500] bg-[#dcf9d2]" : "border-[#ff0000] bg-[#ffc8b6]"}
           border-2 w-24 h-24 flex items-center justify-center rounded-full`}>
            <img src={isSuccess ? successIcon : errorIcon} alt="status" className="w-1/2 h-1/2" />
          </div>
          {isSuccess ? (
            <>
              <div className="w-full">
                <div className="border-b px-5 py-2 text-lg text-gray-600">Номер транзакции: <b
                  className="text-black">121412512513</b></div>
                <div className="border-b px-5 py-2 text-lg text-gray-600">Сумма: <b className="text-black"> 1260</b>
                </div>
                <div className="border-b px-5 py-2 text-lg text-gray-600">Дата оплаты: <b
                  className="text-black">21.10.24</b></div>
              </div>

              <div className="flex flex-col gap-2 mt-5 w-2/3">
                <button
                  onClick={() => navigate("/main")}
                  className="py-3 bg-blue-700 rounded-xl text-white text-lg font-semibold"
                >Вернуться на главную
                </button>
                <button
                  onClick={() => navigate("/main")}
                  className="py-3 bg-blue-700 rounded-xl text-white text-lg font-semibold"
                >Начать подготовку
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-2xl font-medium text-center">
                К сожалению, платеж не прошел. Проверьте данные карты или попробуйте другой способ оплаты
              </p>
              <button
                onClick={() => navigate("../")}
                className="py-3 bg-blue-700 rounded-xl w-2/3 text-white text-lg font-semibold"
              >Повторить попытку
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Finish