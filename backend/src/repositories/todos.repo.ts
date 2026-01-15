const createTableQuery = `
    CREATE TABLE IF NOT EXISTS TODOS(
    ID BIGSERIAL PRIMARY KEY,
    DESCRIPTION TEXT NOT NULL,
    COMPLETED BOOLEAN NOT NULL DEFAULT FALSE,
    CREATED_AT TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    COMPLETED_AT TIMESTAMPTZ DEFAULT NULL
    );
`
const getAllTodosQuery = `
    SELECT * FROM todos;
`
const createNewTodoQuery = `
    INSERT INTO todos(description, completed, created_at, completed_at)
    VALUES($1, false, NOW(), NULL)
    RETURNING *
`
const updateTodoByIdQuery = `
    UPDATE todos
    SET
      description = $1,
      completed = $2,
      completed_at = CASE WHEN $2 = true THEN NOW() ELSE NULL END
    WHERE id = $3
    RETURNING *;
`
const deleteTodoByIdQuery = `
    DELETE FROM todos
    WHERE id = $1
`

export {
  createTableQuery,
  getAllTodosQuery,
  updateTodoByIdQuery,
  createNewTodoQuery,
  deleteTodoByIdQuery,
}
