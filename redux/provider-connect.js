import { connect, Provider } from 'react-redux'

// Creating a Component
const TodoItem = ({ todo, destroyTodo }) => {
  return (
    <div>
      {todo.text}
      <span onClick={destroyTodo}> x </span>
    </div>
  )
}

// Container Component Boilerplate
const mapStateToProps = state => {
  return {
    todo: state.todos[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    destroyTodo: () =>
      dispatch({
        type: 'DESTROY_TODO'
      })
  }
}

// Connecting component to the store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem)

// This is the store we create with redux's createStore method
const store = createStore(todoApp, {})

/*
* Provider is used let the react know about the store presence,
* also to pass the store the child components
*/
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-node')
)
