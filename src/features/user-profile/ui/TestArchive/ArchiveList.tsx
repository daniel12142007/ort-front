import { useNavigate } from "react-router-dom"
import ArchiveBlock from "./ArchiveBlock"

const ArchiveList = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-5 w-4/5 mx-auto py-5">
      <h3 className="text">
        В архиве сохранены ваши{" "}
        <span className="font-semibold text-[#407bff]">предыдущие тесты</span>,
        которые вы сдавали <span className="italic">раньше</span>
      </h3>

      {[...Array(10)].map((_, i) => (
        <ArchiveBlock key={i} navigation={(path) => navigate(path)} />
      ))}
    </div>
  )
}

export default ArchiveList
