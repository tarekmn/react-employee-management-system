import { useEffect, useState } from "react"
import { useAppContext } from "../utils/AppContext"

const EmployeeTable = () => {
  const { appState } = useAppContext()
  const [ teamMember, setTeamMember ] = useState()

  console.log(appState)

 
  const getTeamMembers = async () => {
    const teamMembers = await fetch(`/api/employee/manager/${appState.employee._id}`)
    const json = await teamMembers.json()
    setTeamMember(json.payload)
  }

  useEffect( () => {
    getTeamMembers()

  }, [])

   if( !appState.employee.isManager ){
    return <></>
  }



  // determine what dataset is needed: all employees or some employees

  //make the approriate query : put the results into state

   return (
    
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Supervisor</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
      {/* {
        json.payload.forEach(employee => {
          return(
            <tr>
            <td>{employee.fname} {employee.lname}</td>
              <td>{employee.title}</td>
              <td>{employee.email}</td>
              <td>{employee.supervisor}</td>
              <td>{employee.salary}</td>
            </tr>
          )
        })
      } */}
      </tbody>
    </table>
   )
}

export default EmployeeTable