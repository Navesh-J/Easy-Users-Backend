import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

import UsersList from "./components/User/UsersList";
import CreateUser from "./components/User/CreateUser";
import RetrieveUser from "./components/User/RetrieveUser";

function App() {

  return (
    <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/all" element={<UsersList />} />
                <Route path="/add" element={<CreateUser />} />
                <Route path="/:userId" element={<RetrieveUser />} />
              </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;