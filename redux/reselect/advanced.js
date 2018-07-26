/**
 * When we need reselectors for many components
 */

 // Layout of App
 const App = () => (
  <div>
    <VisibleTodoList listId="1" />
    <VisibleTodoList listId="2" />
    <VisibleTodoList listId="3" />
  </div>
)

/** 
 * As you can see in the above we are rendering same component with different props
 * The memoziation won't work, It re-renders every time.
 * To Solve this, we are using anonymous function to return the reselector function
 */

const getVisibilityFilter = (state, props) =>
  state.todoLists[props.listId].visibilityFilter

const getTodos = (state, props) =>
  state.todoLists[props.listId].todos

const getVisibleTodos = () => createSelector(
    [ getVisibilityFilter, getTodos ],
    (visibilityFilter, todos) => {
      switch (visibilityFilter) {
        case 'SHOW_COMPLETED':
          return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
          return todos.filter(todo => !todo.completed)
        default:
          return todos
      }
    }
  )
)


/**
 * We also need to change the mapStateToProps
 */

const mapStateToProps = () => {
    const getVisibleTodo = getVisibleTodos()
    return (state, props) => getVisibleTodo(state, props)
}

