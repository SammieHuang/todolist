const now = new Date()

const mockTodos = [
    {
        id:1,
        description:'Walk my cat',
        completed:false,
        created_at: now,
        completed_at:null
    },
    {   
        id:2,
        description:'Walk my dog',
        completed:true,
        created_at: new Date(now.getTime() + 1),
        completed_at: null
    }
]

export {mockTodos };