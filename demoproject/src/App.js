import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom"
import ListItem from './Pages/ListItem';
import Cart from './Pages/Cart';
function App() {
  return (
    <>

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ListItem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default App;
