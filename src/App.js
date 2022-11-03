import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import dataJson from "./data.json"
import { useEffect, useState } from "react";
import CategoryPage from "./pages/CategoryPage";
import BookedPage from "./pages/BookedPage";
function App() {
  const [data, setData] = useState(dataJson)
 
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData}/>} />
          <Route path="/movies" element={<CategoryPage data={data} setData={setData} txt="Movie"/>} />
          <Route path="/tv" element={<CategoryPage data={data} setData={setData} txt="TV Series"/>} />
          <Route path="/bookmark" element={<BookedPage data={data} setData={setData}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
