import { useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

  // Cambiar nombre a la propiedad destructurada (data: [nuevo_nombre])
  const { data: todos = [], isLoading } = useGetTodosQuery();



  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />

        <h4>IsLoading: { isLoading ? 'True' : 'False' } </h4>

        <pre>
            
        </pre>

        <ul>
          {
            todos.map( todo => (
              <li key={ todo.id }>
                <strong>{ todo.completed ? 'DONE' : 'Pending' } </strong>
                { todo.title }
              </li>
            ))
          }
        </ul>

        <button>
            Next Todo
        </button>
    </>
  )
}
