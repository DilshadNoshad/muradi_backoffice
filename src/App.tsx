
import { Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import CreateUser from "./pages/CreateUser";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create-users" element={<CreateUser />} />
        <Route path="*" element={<p>not page found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
