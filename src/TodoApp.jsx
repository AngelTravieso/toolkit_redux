import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

  // Cambiar nombre a la propiedad destructurada (data: [nuevo_nombre])
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery( todoId );


  const previousTodo = () => {
    if( todoId === 1 ) return;
    setTodoId( todoId - 1 );
  }

  const nextTodo = () => {
    setTodoId( todoId + 1 );
  }


  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />

        <h4>IsLoading: { isLoading ? 'True' : 'False' } </h4>

        <pre>
            { JSON.stringify( todo ) }
        </pre>

        <button onClick={ previousTodo } >
            Previous Todo
        </button>

        <button onClick={ nextTodo }>
            Next Todo
        </button>

        {/* <ul>
          {
            todos.map( todo => (
              <li key={ todo.id }>
                <strong>{ todo.completed ? 'DONE' : 'Pending' } </strong>
                { todo.title }
              </li>
            ))
          }
        </ul> */}

     
    </>
  )
}
