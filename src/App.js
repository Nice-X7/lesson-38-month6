import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "./actions";

export const App = () => {

  const todo = useSelector(state => state.todos)
  const load = useSelector(state => state.loading)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(data())
  }, [])

  return (
    <div className="App">
      <h1>Набор данных</h1>
      <div className="content">
        {load ? "Подождите, идет загрузка данных..." :
          todo.map((item) => {
            return (
              <>
                {item.title}
              </>
            )
          })}
      </div>
    </div>
  );
}