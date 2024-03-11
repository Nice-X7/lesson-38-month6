import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, removeTodo, checkBox } from "./actions";

export const App = () => {

  const todo = useSelector(state => state.todos)
  console.log(todo);
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
        {load ? "Подождите, идет загрузка данных..." :
          todo.map((item) => {
            return (
              <div className="element">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={
                    () => handleCheck(item.id, item.completed)
                  }
                />
                <span>{item.title}</span>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )
          })}
      </div>
    </div>
  );
}