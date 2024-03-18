export const Button = ({todo, handleDelete}) => {
  return (
    <>
        <button onClick={() => handleDelete(todo.id)} disabled={todo.deleting}>
            Delete
        </button>
    </>
  );
}
