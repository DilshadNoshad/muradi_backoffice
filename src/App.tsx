import { Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";
import CreateCategory from "./pages/CreateCategory";
import CreateUser from "./pages/CreateUser";
import Dashboard from "./pages/Dashboard";
import Graph from "./pages/Graph";
import Products from "./pages/Products";
import Users from "./pages/Users";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create-users" element={<CreateUser />} />
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
