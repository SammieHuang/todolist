interface Todos {
  id: number
  description: string
  completed: boolean
  created_at: Date
  completed_at: Date|null
}

type TodosInput = Omit<Todos, 'id' | 'completed_at'>

export type {Todos, TodosInput}
