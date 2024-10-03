import React from "react"

import ProfileEdit from "./ProfileEdit"
import ProfileInfo from "./ProfileInfo"

const Profile = () => {
  const [edit, setEdit] = React.useState(false)
  return (
    <div className="bg-white w-4/5 h-[calc(90vh-100px)] mx-auto my-5 rounded-xl flex flex-col gap-2 relative">
      {edit ? (
        <ProfileEdit setEdit={setEdit} />
      ) : (
        <ProfileInfo setEdit={setEdit} />
      )}
    </div>
  )
}

export default Profile
