import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

// import "./index.css"
import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";

function App() {

  return (
    <>
        <Container fluid className="mt-4 mb-3 text-blue-800">
          <ToastContainer />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/add" element={<CreateUser />} />
              </Routes>
            </BrowserRouter>
        </Container>
    </>
  );
}

export default App; 