import React from "react"
import { useProfileStore } from "../../models/store"

import ProfileEdit from "./ProfileEdit"
import ProfileInfo from "./ProfileInfo"
import TokenService from "@/utils"

const Profile = () => {
  const { fetchPerson, person } = useProfileStore()
  const [edit, setEdit] = React.useState(false)

  React.useEffect(() => {
    fetchPerson(TokenService.getUser()?.id)
  }, [])

  return (
    <div className="bg-white w-4/5 sm:h-full h-[calc(90vh-100px)] mx-auto my-5 rounded-xl flex flex-col gap-2">
      {edit
        ? person && <ProfileEdit person={person} setEdit={setEdit} />
        : person && <ProfileInfo person={person} setEdit={setEdit} />}
    </div>
  )
}

export default Profile
