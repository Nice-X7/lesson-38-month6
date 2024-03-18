import { useSelector } from 'react-redux';
import { Todo } from './Todo';

export const Todos = ({handleCheck, handleDelete}) => {

    const todo = useSelector(state => state.todos)

  return (
    <Todo 
    todo={todo}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
    />
)}