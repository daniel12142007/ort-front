import mathematicIcon from "@/shared/assets/icon/mathematic.svg"
import arrow from "@/shared/assets/svg/next.svg"

interface Props {
  navigation: (path: string) => void
}

const ArchiveBlock: React.FC<Props> = ({ navigation }) => {
  return (
    <button
      onClick={() => navigation("archive1")}
      className="flex items-center justify-between cursor-pointer bg-white rounded-lg overflow-hidden group transition-all duration-200 hover:scale-[1.02]"
    >
      <div className="flex items-center gap-5">
        <div className={`bg-[#D7E3FE] py-1 px-5`}>
          <img src={mathematicIcon} alt="mathematic" />
        </div>
        <p className="text-lg font-[500]">Математика</p>
      </div>
      <div className="flex items-center gap-5">
        <span>01.01.2022</span>
        <button className="flex items-center gap-2 mx-5">
          Перейти
          <img
            src={arrow}
            alt="next"
            className=" transition-all duration-200 group-hover:translate-x-2"
          />
        </button>
      </div>
    </button>
  )
}

export default ArchiveBlock
