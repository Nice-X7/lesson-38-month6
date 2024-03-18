export const Checkbox = ({handleCheck, completed, id}) => {
  return (
    <>
        <input
            type="checkbox"
            checked={completed}
            onChange={
            () => handleCheck(id, completed)
            }
        />
    </>
  );
}
