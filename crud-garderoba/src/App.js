
import { useEffect, useState } from "react";
import "./data.js";
import { Row } from "./components/Row/Row.jsx";
import { Form } from "./components/Form/Form.jsx";
import { Filter } from "./components/Filter/Filter.jsx";
function App() {
  const [data, setData] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [criteria, setCriteria] = useState({});

  function setFilter(filter) {
    setCriteria(filter);
  }

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



  async function addArticle({ newArticle }) {
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
    const confim = window.confirm("Are you sure you want to delete?");
    if (!confim) {
      return;
    }
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

  async function editArticle({ newArticle, id }) {
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
      <h1>Articles of clothing</h1>
      {data.filter((item) => {
        if (criteria.name) {
          return item.name.toLowerCase().includes(criteria.name.toLowerCase());
        }
        return true;
      }).filter((item) => {
        if (criteria.price) {
          return Number(item.price) <= Number(criteria.price);
        }
        return true;
      }).filter((item) => {
        if (criteria.size && criteria.size !== "all") {
          return item.size === criteria.size;
        }
        return true;
      }).filter((item) => {
        if (criteria.color && criteria.color !== "all") {
          return item.color === criteria.color;
        }
        return true;
      }).filter((item) => {
        if (criteria.image) {
          return item.image.toLowerCase().includes(criteria.image.toLowerCase());
        }
        return true;
      })
        .map((item) => (
          <Row article={item} setEdit={setEdit} key={item.id} remove={deleteArticle} />
        ))}
      <div className="action-row">
        <Form addArticle={currentArticle ? editArticle : addArticle} currentArticle={currentArticle} cancelEdit={cancelEdit} />
        <Filter setFilter={setFilter} />
      </div>
    </div>
  );
}

export default App;
