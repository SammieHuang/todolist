import { Router } from 'express'
import {
  getAllTodosController,
  createNewTodoController,
  updateTodoByIdController,
  deleteTodoByIdController,
} from '../controllers/todoControllers.js'

const route: Router = Router()

route.get('/todos', getAllTodosController)
route.post('/todos', createNewTodoController)
route.patch('/todos/:id', updateTodoByIdController)
route.delete('/todos/:id', deleteTodoByIdController)

export default route
