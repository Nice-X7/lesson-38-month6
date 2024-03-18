import ReactLoading from 'react-loading';
import { Button } from './Button';
import { Checkbox } from './Checkbox';

export const Todo  = ({todo, handleCheck, handleDelete}) => {
  return (
    <>
      <div>
      {
          todo.map((item) => {
            return (
              <div className="element">
                {item.checking ? (
                  <ReactLoading 
                  type={"spin"} 
                  color={"#000"} 
                  width={"20px"} 
                  height={"20px"} />
                ) : (
                <Checkbox 
                id={item.id}
                completed={item.completed}
                handleCheck={handleCheck}/>
                )}
                <span>{item.title}</span>
                <Button 
                todo={item}
                handleDelete={handleDelete}/>
              </div>
            )
          }
      )}
    </div>
    </>
  );
}
