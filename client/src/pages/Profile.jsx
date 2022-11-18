import { useAppContext } from "../utils/AppContext"
import Container from "react-bootstrap/Container"
import EmployeeProfile from "../components/EmployeeProfile"

const ProfilePage = (props) => {
  const { appState, setAppState } = useAppContext()
  
  return (
    <Container style={{ paddingTop: "1em" }}>
      <EmployeeProfile />
    </Container>
  )
}

export default ProfilePage