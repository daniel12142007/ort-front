import { useNavigateLogic } from "@/hooks/crossLogic"

export const MainPage = () => {
  const { navigateWithFetch, loading } = useNavigateLogic()

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center">Добро пожаловать</h1>
      <div className="flex gap-4 p-5 flex-col md:flex-row">
        <button
          disabled
          className="bg-blue-500 w-52 text-white px-4 py-2 text-lg rounded-lg shadow-sm hover:bg-blue-600 disabled:bg-gray-500"
        >
          Подготовка к ОРТ
        </button>
        <button
          disabled={loading}
          onClick={() => navigateWithFetch("prev")}
          className="bg-blue-500 w-52 text-white px-4 py-2 text-lg rounded-lg shadow-sm hover:bg-blue-600 disabled:bg-gray-500"
        >
          {loading ? "Загрузка..." : "Пробный тест"}
        </button>
        <button
          disabled
          className="bg-blue-500 w-52 text-white px-4 py-2 text-lg rounded-lg shadow-sm hover:bg-blue-600 disabled:bg-gray-500"
        >
          Профиль
        </button>
      </div>
    </div>
  )
}
