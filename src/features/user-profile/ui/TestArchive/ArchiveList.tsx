import React from "react"
import { useNavigate } from "react-router-dom"
import ArchiveBlock from "./ArchiveBlock"
import { useProfileStore } from "../../models/store"

const ArchiveList = () => {
  const navigate = useNavigate()
  const { fetchArchive, archive } = useProfileStore()

  React.useEffect(() => {
    fetchArchive()
  }, [])

  console.log(archive)

  return (
    <div className="flex flex-col gap-5 w-4/5 mx-auto py-5">
      <h3 className="text">
        В архиве сохранены ваши{" "}
        <span className="font-semibold text-[#407bff]">предыдущие тесты</span>,
        которые вы сдавали <span className="italic">раньше</span>
      </h3>

      {archive.map(({ subjectName, testId }, i) => (
        <ArchiveBlock
          key={i}
          name={subjectName}
          navigation={(path) => navigate(path, { state: testId })}
        />
      ))}
    </div>
  )
}

export default ArchiveList
