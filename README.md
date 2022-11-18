# Mini Project for State Unit

Using the mern-auth-starter-kit2 repo as a starting point, create an employee management system using the MERN stack.

## Models
**Employee**
```
_id
fname
lname
address
city
state
zip
email
department
supervisor [another Employee]
staff      [other employees]
title
salary
isAdmin
isManager
password (hashed)
dateEmployed
lastReviewDate
lastReviewScore
```

**Department**
```
_id
name
```

**Review**
```
_id
employee
report
score
```

(Initial departments should be Executive, HR, Marketing, Sales, Development)

Only employees who have ```isAdmin = true``` OR ```isManager = true``` should be allowed to view the admin portions of the app.

The App will have the following pages:

## Home Page
- For admins, they will see a table list of ALL Employees w/ the following columns:

    ```[ lname, fname ] [ title ] [ email ] [ supervisor name ] [ salary ]```

- For non-admins who are managers, they will see THEIR employees only

    ```[ lname, fname ] [ title ] [ email ] [ supervisor name ] [ salary ]```

- For employees who are not managers, they will see their profile, where they can update their name or address info. They will also see their most recent performance review and score.

## Profile Page

- For admins and managers, they can click on an employee's name and see their Profile page, and edit anything aspect of the employee record. They can also enter in a new Performance Review. Admins and managers can also add a new employee.


## Key Deliverables

- Mongoose schema with proper relationships between elements 
- Seed data w/ at least 10 employees, 2-4 of which are admins and/or managers
- REST API for the following:
  - GET data for EITHER all employees, OR employees of a specific manager
  - GET data for any employee
  - POST new employee 
  - PUT update an employee
  - authentication routing
- React app with the following:
  - Context for keeping track of the logged in user 
  - Routing for the pages on the site
  - The Home page 
  - The Profile page


## Remember:

- React components are meant to be reusable, even if presented with different data.
- Some components, like EmployeeTable, can query for the data they need when they are mounted.
- In a given component, you can decide to show/hide, enable/disable certain elements depending on the user at that moment.
- You can use Insomnia or Postman to check the API routes in advance 