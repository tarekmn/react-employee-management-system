import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAppContext } from "../utils/AppContext"

const newEmployee = {
  fname: "",
  lname: "",
  title: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  supervisor: "",
  staff: [],
  isManager: false,
  isAdmin: false
}

const EmployeeProfile = ({ employee = newEmployee }) => {
  const { appState, setAppState } = useAppContext()

  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  const handleInputChange = (e) => {

  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lname" placeholder="Doe" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="fname" placeholder="John" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" placeholder="CEO" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" placeholder="111 Elm Street" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city" placeholder="Los Angeles" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" name="state" placeholder="CA" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" name="zip" placeholder="90876" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="email" placeholder="jdoe@gmail.com" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Supervisor</Form.Label>
        <Form.Control type="text" name="supervisor" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Staff</Form.Label>
        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check type="radio" name="isManager" label="Is Manager" />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Check type="radio" name="isAdmin" label="Is Admin" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Button type="submit" variant="primary" size="md">Submit</Button>
      </Form.Group>

    </Form>
  )
}

export default EmployeeProfile