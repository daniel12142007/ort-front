export const CircleProgressBar = ({
  progress = 0,
  success = 0,
  total = 0,
}: {
  progress?: number
  success?: number
  total?: number
}) => {
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex items-center justify-center relative">
      <svg className="rotate-[-90deg]" width="120" height="120">
        <circle
          className="text-gray-300"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className={`${
            progress < 33
              ? "text-[#ff0000]"
              : progress < 66
              ? "text-[#ff9d00]"
              : "text-[#0dff00]"
          }`}
          strokeWidth="10"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute text-xl flex flex-col items-center z-10">
        <p>{progress}%</p>
        <p>
          {success} из {total}
        </p>
      </span>
    </div>
  )
}
