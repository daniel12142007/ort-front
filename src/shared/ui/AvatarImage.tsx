import React from "react"
import { getFullFile } from "@/utils"

interface AvatarProps {
    name: string
    photoUrl?: string
    size?: number
    newUrl?: string
}

export const Avatar: React.FC<AvatarProps> = ({ name, photoUrl, newUrl, size }) => {
    const getInitial = (name: string) => name.charAt(0).toUpperCase()
    const image = newUrl ? newUrl : getFullFile(photoUrl)
    return (
        <div
            className="flex items-center justify-center rounded-full bg-gray-300 overflow-hidden"
            style={{ width: size, height: size }}
        >
            {image ? (
                <img
                    src={image}
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full"
                />
            ) : (
                <span className="text-4xl font-bold text-white">{getInitial(name)}</span>
            )}
        </div>
    )
}
