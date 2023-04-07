
import { useEffect, useState } from "react";
import "./data.js";
import { Row } from "./components/Row/Row.jsx";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3002/clothes");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.map((item) => (
        <Row article={item} />
      ))}

    </div>
  );
}

export default App;
