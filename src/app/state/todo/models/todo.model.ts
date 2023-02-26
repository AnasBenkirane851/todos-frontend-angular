export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface TodoCreateDto {
  title: string;
  description: string;
  completed: boolean;
}

export interface TodoUpdateDto {
  id: string;
  completed: boolean;
}
