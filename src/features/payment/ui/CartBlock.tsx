import { useNavigate } from "react-router-dom"

const CartBlock = () => {
  const navigate = useNavigate()

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full flex justify-center items-center">
      <div className="bg-white p-5 rounded-2xl shadow-lg">
        <h1 className="text-xl font-bold">
          Оплата картой
        </h1>
        <div className="flex flex-col gap-5 my-5">
          <input
            type="number"
            className="w-full p-4 bg-[#edf2f8] rounded-[10px]"
            placeholder="Номер карты" />
          <div className="flex gap-4 relative">
            <input placeholder="MM/YY" className="p-4 bg-[#edf2f8] rounded-[10px]" />
            <input placeholder="CVC/CVV" className="p-4 bg-[#edf2f8] rounded-[10px]" />
            <span
              title="Это поле конфидециальная"
              className="absolute border rounded-full w-5 h-5 flex items-center
              justify-center bg-amber-50 bottom-5 right-3 cursor-pointer">
              ?
            </span>
          </div>
        </div>
        <button
          className="w-full rounded-[10px] bg-[rgb(0,0,0,.7)] duration-150 active:shadow-[inset_0px_0px_15px_3px_rgba(0,0,0,.5)]"
        >
          <button
            onClick={() => navigate("../checkout")}
            className="w-full p-4 bg-[#267fff] text-2xl text-white rounded-[10px]
              active:scale-x-[0.98] active:scale-y-[0.94] transition ease-in-out duration-150
              active:shadow-[inset_0px_0px_15px_3px_rgba(0,0,0,.9)]"
          >
            Оплатить
          </button>
        </button>
      </div>
    </div>
  )
}

export default CartBlock

