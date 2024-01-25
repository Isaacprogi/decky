import { Dispatch } from "react";

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  dueDate: string;
}
export interface Book {
  _id: string;
  author: string;
  title: string;
  file: string;
  description: string;
  image:string,
}

export interface addTaskType {
  title: string;
  description: string;
  status?: string;
  dueDate: string;
}

export interface TaskState {
  tasks: Task[];
  currentTask: Task;
}
export interface BookState {
  books: Book[];
  currentBook: Book | null;
}

export interface collectionState {
  collection: Book[];
}


export type TaskAction =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "SET_CURRENT_TASK"; payload: Task }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "UPDATE_TASK"; payload: { taskId: string; updatedTask: Task } };

export type CollectionAction =
  | { type: "SET"; payload: Book[] }
  | { type: "ADD"; payload: Book }
  | { type: "REMOVE"; payload: string }

export type BookAction =
  | { type: "SET"; payload: Book[] }


  export type taskError = {
    getTasks: string,
    addTask: string,
    updateTask: string, 
    deleteTask: string
  }

  export type collectionError = {
    getCollection: string,
    addToCollection: string, 
    removeFromCollection: string,
  }

  export type bookError = {
    getBooks: string,
    searchBooks:string
  }

  export type taskLoading = {
    getTasks: boolean,
    addTask: boolean,
    updateTask:boolean, 
    deleteTask: boolean
  }

  export type bookLoading = {
    getBooks: boolean,
    searchBooks:boolean
  }

  export type collectionLoading = {
    getCollection: boolean,
    addToCollection: boolean,
    removeFromCollection:boolean, 
  }

  export interface TaskContextProps {
    state: TaskState;
    loading: taskLoading;
    error: taskError;
    dispatch: Dispatch<TaskAction>;
    getTasks: () => void;
    addTask: (task: addTaskType) => void;
    deleteTask: (taskId: string) => void;
    updateTask: (taskId: string, updatedTask: Task) => void;
    addTaskForm:addTaskType;
    setAddTaskForm: React.Dispatch<React.SetStateAction<addTaskType>>;
    updateTaskForm:Task;
    setUpdateTaskForm: React.Dispatch<React.SetStateAction<Task>>;
    deleteActive:boolean;
    setDeleteActive:React.Dispatch<React.SetStateAction<boolean>>;
    modalActive:boolean;
    setModalActive:React.Dispatch<React.SetStateAction<boolean>>;
  }

  export interface CollectionContextProps {
    state: collectionState;
    loading: collectionLoading;
    error: collectionError;
    dispatch: Dispatch<CollectionAction>;
    getCollection: () => void;
    addToCollection: (book: Book) => void;
    removeFromCollection: (bookId: string) => void;
  }

  export interface BookContextProps {
    state: BookState;
    loading: bookLoading;
    error: bookError;
    dispatch: Dispatch<BookAction>;
    getBooks: () => void;
    searchBooks: ({category,searchValue}:{category?:string,searchValue?:string}) => void;
  }


export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id?: string,
  fullName: string,
  email: string,
  avatar: string,
}

export type authError = {
  login: string,
  register: string,
  logout: string, 
  refresh: string
}


export interface AuthContextType {
  user: User
  token: string | undefined,
  error: authError,
  setError: React.Dispatch<React.SetStateAction<{
    login: string;
    register: string;
    refresh: string;
    logout: string;
  }>>
  login: (userData: LoginData) => void;
  register: (userData: RegisterData) => void;
  logout: () => void
  refresh: () => void;
}

export interface HeaderContextProps {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}