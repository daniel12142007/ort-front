import { useNavigate } from "react-router-dom"

const MainPage = () => {
  const navigate = useNavigate()
  const nav = () => {
    navigate("/main/trial-testing")
  }
  return (
    <div>
      <button onClick={nav}>Trial Testing</button>
    </div>
  )
}

export default MainPage
