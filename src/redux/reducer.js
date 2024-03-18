const initialization = {
    todos: [],
    loading: false
}

export const reducer = (state = initialization, action) => {

    switch (action.type) {
        case "loading/data":
            return {
                loading: true
            }

        case "todos/data":
            return {
                todos: action.payload,
                loading: false
            }

        case "delete/todo":
            return {
                ...state,
                loading: false,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        case "delete/todo/start":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            deleting: true
                        }
                    }

                    return todo;
                })
            }

        case "check/click/start":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            checking: true
                        }
                    }

                    return todo;
                })
            }

        case "check/click/finished":
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed,
                            checking: false
                        }
                    }

                    return item
                })
            }

        default:
            return state
    }
}
