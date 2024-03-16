export const data = () => {
    return dispatch => {
        dispatch({ type: "loading/data" })

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: "todos/data",
                    payload: json
                })
            })
    }
}

export const removeTodo = (id) => {
    return dispatch => {
        dispatch(
            {
                type: "delete/todo/start", payload: id
            }
        )

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: "delete/todo",
                    payload: id
                })
            })
    }
}

export const checkBox = (id, completed) => {
    return dispatch => {
        dispatch({ type: "check/click/start", payload: id })

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                completed: !completed
            })
        })
            .then(response => response.json())
            .then(() => {
                dispatch({
                    type: "check/click/finished",
                    payload: id
                })
            })
    }
}