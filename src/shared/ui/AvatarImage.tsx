import React, { useState } from "react"

interface AvatarProps {
  name: string
  photoUrl?: string
  size?: number
}

export const Avatar: React.FC<AvatarProps> = ({ name, photoUrl, size }) => {
  const [imgError, setImgError] = useState(false)

  const getInitial = (name: string) => name.charAt(0).toUpperCase()

  return (
    <div
      className="flex items-center justify-center rounded-full bg-gray-300 overflow-hidden"
      style={{ width: size, height: size }}
    >
      {!imgError && photoUrl ? (
        <img
          src={photoUrl}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-4xl font-bold text-white">
          {getInitial(name)}
        </span>
      )}
    </div>
  )
}
