import { Link } from "react-router-dom"
import { useAppContext } from "../utils/AppContext"
import EmployeeProfile from "../components/EmployeeProfile"
import EmployeeTable from "../components/EmployeeTable"

const Home = (props) => {
  const { appState } = useAppContext()

  // console.log(appState.employee)

  
  if(!appState || !appState.employee ){
    // window.location.href = "/login"
  } 

  return (
    <>

  


      { (appState?.employee?.isAdmin || appState?.employee?.isManager) ? (
        
        <EmployeeTable />
      ) : (
       
        <EmployeeProfile subject={appState.employee}  />
      )}
 
    

    
    </>
  )
}

export default Home