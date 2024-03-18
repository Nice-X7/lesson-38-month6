import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, removeTodo, checkBox } from "./actions";
import { Todos } from "./components/Todos";
import ReactLoading from 'react-loading';

export const App = () => {

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
        {
          load ? (
            <div className="loading">
              <ReactLoading
                className="loading"
                type={"balls"}
                color={"blue"}
                width={"120px"}
                height={"120px"} />
            </div>
          ) :
            <Todos
              handleDelete={handleDelete}
              handleCheck={handleCheck}
            />
        }
      </div>
    </div>
  );
}