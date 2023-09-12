import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import { Result } from "./components/Result";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    "Purchase Price": 140_000,
    "Down Payment": 70_000,
    "Repayment Time": 5,
    "Interest Rate": 8,
  });

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen h-[3/4] py-6 bg-shade3 border-b-8 border-gray-800">
        <Container data={data} setData={setData}></Container>
        <Result data={data}></Result>
      </div>
      <Footer />
    </div>
  );
}

export default App;
