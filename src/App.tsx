import { Routes, Route } from "react-router-dom";
import Groups from "./components/groups/Groups";
import Layout from "./components/UI/Layout";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";
import CreateCategory from "./pages/CreateCategory";
import CreateRole from "./pages/CreateRole";
import CreateUser from "./pages/CreateUser";
import Dashboard from "./pages/Dashboard";
import Graph from "./pages/Graph";
import Products from "./pages/Products";
import Roles from "./pages/Roles";
import Users from "./pages/Users";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/create-users" element={<CreateUser />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/create-role" element={<CreateRole />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/graphs" element={<Graph />} />
        <Route path="*" element={<p>not page found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
