import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, removeTodo, checkBox } from "./actions";
import ReactLoading from 'react-loading';

export const App = () => {

  const todo = useSelector(state => state.todos)
  const load = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(data())
  }, [])

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }

  const handleCheck = (id, completed) => {
    dispatch(checkBox(id, completed))
  }

  return (
    <div className="App">
      <h1>Набор данных</h1>
      <div className="content">
        {load ? (
          <div className="loading">
            <ReactLoading className="loading" type={"balls"} color={"#blue"} width={"120px"} height={"120px"} />
          </div>
        ) :
          todo.map((item) => {
            return (
              <div className="element">
                {item.checking ? (
                  <ReactLoading type={"spin"} color={"#000"} width={"20px"} height={"20px"} />
                ) : (
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={
                      () => handleCheck(item.id, item.completed)
                    }
                  />
                )}
                <span>{item.title}</span>
                <button onClick={() => handleDelete(item.id)} disabled={item.deleting}>
                  Delete
                </button>
              </div>
            )
          })}
      </div>
    </div>
  );
}