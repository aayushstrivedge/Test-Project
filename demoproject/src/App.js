import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom"
import ListItem from './Pages/ListItem';
import Cart from './Pages/Cart';
import ProductPage from "./Pages/Productpage";
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ListItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default App;
