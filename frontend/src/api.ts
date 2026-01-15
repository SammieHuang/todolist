import type { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
    const data = await fetch('/api/todos');
    if (!data.ok) throw new Error('Error fetching todos')
    return data.json()
}

export const createNewTodos = async (description: string): Promise<Todo> => {
    const data = await fetch('/api/todos', {
        method: 'POST',
        headers: {
            "Content-type":'application/json'          
        },
        body: JSON.stringify({description})
    })
    if (!data.ok) throw new Error("Error creating todos");
    return data.json()
}

export const updateCompleted = async (id: number, completed: boolean, description:string): Promise<void> => {
    await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            completed,
            description
        })
    })
}

export const deleteTodo = async (id: number): Promise<void> => {
    await fetch(`/api/todos/${id}`, {
        method: 'DELETE', 
        headers: {
            "Content-type": "application/json"
        }, 
    })
}

