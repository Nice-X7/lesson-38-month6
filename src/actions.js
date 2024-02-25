export const data = () => {
    return (dispatch) => {
        dispatch({ type: "loading/data" })

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: "todos/data",
                    payload: json
                })
            })
    }
}