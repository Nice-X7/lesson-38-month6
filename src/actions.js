export const data = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: "todos/loading",
                    payload: json
                })
            })
    }
}