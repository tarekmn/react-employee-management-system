import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./utils/AppContext"
import Container from "react-bootstrap/Container"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import PageNotFound from "./pages/404"
import Navigation from "./components/Navigation"

import "bootstrap/dist/css/bootstrap.min.css"

function App() {



  return (
    <AppProvider value={{}}>
      <Navigation />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:id?" element={<Profile/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AppProvider>
  );
}

export default App;
