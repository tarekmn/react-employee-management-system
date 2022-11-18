import { useAppContext } from "../utils/AppContext"

const EmployeeTable = () => {
  const { appState } = useAppContext()

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
      
      </tbody>
    </table>
   )
}

export default EmployeeTable