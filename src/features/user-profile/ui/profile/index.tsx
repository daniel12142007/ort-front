import React from "react"

import ProfileEdit from "./ProfileEdit"
import ProfileInfo from "./ProfileInfo"

const person = {
  image: "https://picsum.photos/200",
  name: "Асанов Али Жанарович",
  age: 24,
  school: "Лицеи №2 имени Ленина",
  phone_number: "+996 (700) 111 201",
}

const Profile = () => {
  const [edit, setEdit] = React.useState(false)
  return (
    <div className="bg-white w-4/5 sm:h-full h-[calc(90vh-100px)] mx-auto my-5 rounded-xl flex flex-col gap-2">
      {edit ? (
        <ProfileEdit person={person} setEdit={setEdit} />
      ) : (
        <ProfileInfo person={person} setEdit={setEdit} />
      )}
    </div>
  )
}

export default Profile
