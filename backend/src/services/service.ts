import { pool } from '../db/pool.js'
import { getAllTodosQuery,createNewTodoQuery,updateTodoByIdQuery,deleteTodoByIdQuery } from '../repositories/todos.repo.js'
import type { Todos } from '../model/model.js'

const getAllTodos = async (): Promise<Todos[]> => {
  const result = await pool.query(getAllTodosQuery)
  return result.rows
}

const createNewTodo = async (description: string): Promise<Todos> => {
  const result = await pool.query(createNewTodoQuery, [description])
  return result.rows[0]
}

const updateTodoById = async (id: number, completed: boolean, description: string): Promise<Todos> => {
  const todo = await pool.query(updateTodoByIdQuery, [description,completed, id]);
  return todo.rows[0]
}

const deleteTodoById = async (id: number): Promise<void> => {
  await pool.query(deleteTodoByIdQuery,[id]);
}

export { getAllTodos, updateTodoById, createNewTodo, deleteTodoById}
