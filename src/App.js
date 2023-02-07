import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Checkout from "./components/Checkout";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
