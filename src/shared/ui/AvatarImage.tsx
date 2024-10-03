import React from "react"

interface AvatarProps {
  name: string
  photoUrl?: string
  size?: number
}

export const Avatar: React.FC<AvatarProps> = ({ name, photoUrl, size }) => {
  const getInitial = (name: string) => name.charAt(0).toUpperCase()

  return (
    <div
      className="flex items-center justify-center rounded-full bg-gray-300 overflow-hidden"
      style={{ width: size, height: size }}
    >
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <span className="text-4xl font-bold text-white">
          {getInitial(name)}
        </span>
      )}
    </div>
  )
}
