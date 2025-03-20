export interface IEmployeeService{
    createNewTodo(content: string, userId: string): Promise<any>;
  getAllTodo(userId: string): Promise<any>;
  updateTodo(todoId: string, userId: string, content: string): Promise<any>;
  deleteTodo(todoId: string, userId: string): Promise<any>;
}