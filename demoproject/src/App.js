import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom"
import ListItem from './Pages/ListItem';
import Cart from './Pages/Cart';
import ProductPage from "./Pages/Productpage";
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Dashboard from './Pages/Dashboard';
import CheckOutPage from './Pages/CheckOutPage';
import ProtectedRoute from './components/ProtectedRoute';
import SearchPage from './search/SearchPage';
function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ListItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/searchresults" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute>
          <CheckOutPage />
        </ProtectedRoute>} />
      </Routes>
    </>
  );
}
export default App;
