export type Todo = {
    id?: number,
    description: string,
    completed: boolean,
    created_at: Date,
    completed_at?:Date | null
}