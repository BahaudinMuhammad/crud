import AddUser from "./compnents/AddUser";
import UserList from "./compnents/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./compnents/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
