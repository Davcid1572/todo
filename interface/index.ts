export interface formProps {
  submitItem: (title: string) => void;
}

export interface listProps {
  todos: { id: string; title: string; completed: boolean }[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string, completed: boolean) => void;
}
