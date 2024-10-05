import { useNavigate } from "react-router-dom"
import ArchiveBlock from "./ArchiveBlock"

const ArchiveList = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-5 w-4/5 mx-auto">
      {[...Array(10)].map((_, i) => (
        <ArchiveBlock key={i} navigation={(path) => navigate(path)} />
      ))}
    </div>
  )
}

export default ArchiveList
