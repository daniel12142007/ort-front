import React from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

type Period = {
  id: number
  name: string
  price: number
  discount: number
}
const periodPayment: Period[] = [
  { id: 1, name: "1 месяц", price: 500, discount: 0 },
  { id: 2, name: "3 месяц", price: 1500, discount: 5 },
  { id: 3, name: "6 месяц", price: 2700, discount: 10 },
  { id: 4, name: "12 месяц", price: 5000, discount: 15 },
]
const methodPayment = [
  {
    id: 1,
    icon: "/src/shared/assets/icon/balance.png",
    vertical: false,
    name: "O!Деньги",
  },
  {
    id: 2,
    icon: "/src/shared/assets/icon/elcart.png",
    vertical: false,
    name: "Элкарт",
  },
  {
    id: 3,
    icon: "/src/shared/assets/icon/elsom.png",
    vertical: false,
    name: "Элсом",
  },
  {
    id: 4,
    icon: "/src/shared/assets/icon/mbank.png",
    vertical: true,
    name: "Доступные способы оплаты",
  },
  {
    id: 5,
    icon: "/src/shared/assets/icon/omoney.png",
    vertical: false,
    name: "Balance.kg",
  },
  {
    id: 6,
    icon: "/src/shared/assets/icon/visa.svg",
    vertical: true,
    name: "Доступные способы оплаты",
  },
]

const Payment = () => {
  const navigate = useNavigate()
  const [activePeriod, setActivePeriod] = React.useState<Period>()
  const [activePaymentMethod, setActivePaymentMethod] = React.useState<{id: number,method: string}>({id: 0, method: ""})
  const [coupon, setCoupon] = React.useState<string>("")
  const [confirmed, setConfirmed] = React.useState<number>(0)

  const handleCoupon: (e: React.ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
    setCoupon(e.target.value)
  }

  const fetchCoupon: () => void = () => {
    if (coupon != "ort-coupon") {
      toast.error("К сажедению промокод не действителен")
      setConfirmed(-1)
      setCoupon("")
      return;
    }
    setCoupon("")
    toast.success("Промокод успешно введен, Благодарим за покупку")
    setConfirmed(10)
    console.log(coupon)
  }

  return (
    <div className="w-4/5 mx-auto flex flex-col gap-2">
      <h1 className="text-3xl font-semibold text-center">
        Выберите период оплаты
      </h1>
      <div className="flex justify-between gap-10">
        {periodPayment.map((period, i) => (
          <div
            key={i}
            onClick={() => setActivePeriod(period)}
            className={`bg-[#c1d4dc] text-white py-2 rounded-lg flex-1 flex flex-col items-center
                            cursor-pointer shadow-[2px_2px_5px_0_rgb(0,0,0,0.4)]  
                            ${activePeriod?.id === period.id && "bg-green-300"}`}>
            <p className="text-2xl">{period.name}</p>
            <div className="flex gap-5 text-xl">
              <span>{period.price} сом</span>
              {period.discount > 0 && <span>{period.discount}% скидка</span>}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-between items-start mt-5 gap-5">
          <div className="flex-1">
            <h5 className="text-2xl font-semibold mb-2">Итого к оплате</h5>
            <div className="bg-white rounded-xl p-2 px-4 h-24 w-full flex flex-col justify-evenly">
              <span>
                <p>
                  Сумма: <b>{activePeriod?.price || "0"} сом</b>
                </p>
              </span>
              <span>
                <p>
                  Описание:{" "}
                  <b>
                    {activePeriod && activePeriod?.discount > 0
                      ? `Скидка ${activePeriod?.discount}% при оплате за ${activePeriod?.name}`
                      : "Без скидки"}
                  </b>
                </p>
              </span>
            </div>
            <p className="text-red-500 mt-1">
              <b>Внимание! : </b>
              Ваш платеж защищен
            </p>
          </div>
          <div className="flex-1">
            <h5 className="text-2xl font-semibold  mb-2">Итого к оплате</h5>
            <div className="flex gap-5 items-end">
              <div className="bg-white rounded-xl p-2 px-4 h-24 w-full">
                {confirmed >= 1 ? (
                  <div className="flex flex-col justify-evenly h-full">
                    <span><p>Начальная цена: <b>{activePeriod?.price}</b></p></span>
                    <span><p>С учетом скидки: <b>1280 (со скидкой {confirmed}%)</b></p></span>
                  </div>
                ) : (
                  <textarea
                    readOnly={!activePeriod}
                    className="w-full h-full outline-none resize-none"
                    placeholder={!activePeriod ? "Выберите курс" : "Введите промокод тут"}
                    onChange={handleCoupon} value={coupon} />
                )}
              </div>
              <button disabled={!coupon}
                className="bg-orange-500 py-1 px-4 text-white rounded-md disabled:bg-amber-200"
                onClick={fetchCoupon}>
                Применить
              </button>
            </div>
            {confirmed === -1 ? (
              <p className="text-red-500 mt-1">
                Промокод не действителен
              </p>
            ) : confirmed >= 1 && (
              <p className="text-green-500 mt-1">
                Промокод успешно применен
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col py-10">
        <h5 className="text-2xl font-semibold text-center mb-2">
          Способы оплаты
        </h5>
        <div className="grid grid-cols-3 gap-5 py-10">
          {methodPayment.map((method, i) => (
            <div
              onClick={() => setActivePaymentMethod({id: method.id, method: method.name})}
              className={`cursor-pointer flex items-center bg-white rounded-xl p-2 px-4 justify-center gap-5 
                h-28 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] 
                ${method.vertical && "flex-col"}
                ${activePaymentMethod.id == method.id && "bg-green-400"}
                `}
              key={i}
            >
              <img
                src={method.icon}
                alt={i.toString()}
                className={`${method.vertical ? "h-[50px]" : "w-[70px]"}`}
              />
              <p className={`font-semibold ${method.vertical ? "text-sm" : "text-2xl"}`}>{method.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-start gap-3">
          <button
            className="bg-blue-500 py-3 px-7 text-2xl text-white rounded-xl w-2/6 disabled:bg-amber-200"
            disabled={!activePaymentMethod.id}
            onClick={() => navigate("cart")}
          >
            Перейти к оплате
          </button>
          <span
            title="Информация о возврате или отмене подписки Вы можете отменить подписку в любое время.
                Возврат средств возможен в течение 14 дней после оплаты."
            className="border-2 border-red-600 text-red-600 rounded-xl font-bold w-6 h-6 flex justify-center items-center cursor-help"
          >
            ?
          </span>
        </div>
      </div>
    </div>
  )
}

export default Payment
