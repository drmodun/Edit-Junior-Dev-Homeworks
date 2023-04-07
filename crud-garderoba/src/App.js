
import { useEffect, useState } from "react";
import "./data.js";
import { Row } from "./components/Row/Row.jsx";
import { Form } from "./components/Form/Form.jsx";
function App() {
  const [data, setData] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3002/clothes");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);



  async function addArticle({newArticle}) {
    try {
      const response = await fetch("http://localhost:3002/clothes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticle),
      });
      const data = await response.json();
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteArticle(id) {
    try {
      const response = await fetch(`http://localhost:3002/clothes/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  async function editArticle({newArticle, id}) {
    try {
      const response = await fetch(`http://localhost:3002/clothes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticle),
      });
      const data = await response.json();
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  function setEdit(id) {
    const article = data.find((item) => item.id === id);
    setCurrentArticle(article);
    console.log(article);
  }

  function cancelEdit() {
    setCurrentArticle(null);
  }

  return (
    <div className="App">
      {data.map((item) => (
        <Row article={item} setEdit={setEdit} key={item.id} remove={deleteArticle}/>
      ))}
      <Form addArticle={currentArticle ? editArticle : addArticle} currentArticle={currentArticle} cancelEdit={cancelEdit}/>

    </div>
  );
}

export default App;
