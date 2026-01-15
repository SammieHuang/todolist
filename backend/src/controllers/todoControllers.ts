import type { Request, Response, NextFunction } from 'express'
import {
  getAllTodos,
  createNewTodo,
  updateTodoById,
  deleteTodoById,
} from '../services/service.js'
import { describe } from 'node:test'

const getAllTodosController = async (
  _: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const todos = await getAllTodos()
    res.status(200).json(todos)
  } catch (error) {
    console.error('Error: Error fetching todos', error)
    next(error)
  }
}

const createNewTodoController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { description, completed } = req.body
    const todo = await createNewTodo(description)
    res.status(201).json(todo)
  } catch (error) {
    console.error('Error: Error creating todos', error)
    next(error)
  }
}

const updateTodoByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { description, completed } = req.body
    const id = parseInt(req.params.id!)
    const todo = await updateTodoById(id, completed, description)
    res.json(todo)
  } catch (error) {
    console.error(`Error: Error updating todo : ${error}`)
    next(error)
  }
}

const deleteTodoByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = parseInt(req.params.id!)
    await deleteTodoById(id)
  } catch (error) {
    console.error(`Error: Error deleting todo : ${error}`)
    next(error)
  }
}

export {
  getAllTodosController,
  createNewTodoController,
  updateTodoByIdController,
  deleteTodoByIdController,
}
