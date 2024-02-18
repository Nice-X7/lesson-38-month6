import { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json()
      }).then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch(e => console.error(e))
  }, [])


  return (
    <div className="App">
      <h1>Набор данных</h1>
      <div className="content">
        {
          loading ? "Идет загрузка данных..." : data.map(element => {
            return (
              <div className="data">
                {element.completed ? <span>{element.title}</span> : ""}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}