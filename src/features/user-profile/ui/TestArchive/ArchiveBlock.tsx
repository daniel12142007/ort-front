import mathematicIcon from "@/shared/assets/icon/mathematic.svg"
import arrow from "@/shared/assets/svg/next.svg"

interface Props {
  navigation: (path: string) => void
  name: string
}

const ArchiveBlock: React.FC<Props> = ({ navigation, name }) => {
  return (
    <div
      onClick={() => navigation("mathematic")}
      className="flex items-center overflow-hidden cursor-pointer bg-white rounded-lg shadow-[3px_3px_10px_0px_rgba(0,0,0,0.4)] group hover:scale-[1.02] transition-all duration-200"
    >
      <div className="bg-[#D7E3FE] sm:w-3/12 sm:h-10 w-1/6 h-16 ">
        <img
          src={mathematicIcon}
          alt="mathematicIcon"
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-between w-full px-2 sm:text-[12px] font-[500] text-lg">
        <p>{name}</p>
        <p className="text-blue-600">10.10.2022</p>
        <button className="flex items-center">
          Перейти
          <img
            src={arrow}
            alt="arrow"
            className="sm:w-4 sm:h-4 group-hover:transform group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>
    </div>
  )
}

export default ArchiveBlock
