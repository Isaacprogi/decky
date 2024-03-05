import { IconType } from 'react-icons';

export interface NoteSection {
  id:string;
  title:string;
  content:string;
  owner:User;
  createdAt?: string;
  updatedAt:string;
}


export interface Note {
  id: string;
  title: string;
  category:string,
  content?: string;
  createdAt?: string;
  updatedAt:string;
  participants?:User[]
  sections?:NoteSection[]
}


export interface NoteError {
  add: string;
  update: string;
  delete: string;
  getAll:string;
  getSingle:string;
}

export interface NoteLoading {
  add: boolean;
  update: boolean;
  delete: boolean;
  getAll:boolean;
  getSingle:boolean;
}

export interface NoteContextType {
  notes: Note[];
  currentNote:Note;
  token: string | undefined;
  error: NoteError;
  loading: NoteLoading;
  readOnly:boolean;
  toggleReadOnly:() => void
  addNote: (noteData: Omit<Note, 'id'>) => Promise<void>;
  updateNote: (id: string, noteData: Partial<Note>) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  getNotes:()=>Promise<void>;
  getSingleNote:(id:string) =>Promise<void>
  setToken: (token: string | undefined) => void;
  setCurrentNote:React.Dispatch<React.SetStateAction<Note>>,
}


export interface addNoteType {
  title: string;
  category: string;
  status?: string;
  dueDate: string;
}

export interface TaskState {
  notes: Note[];
  currentNote: Note;
}






export interface RegisterData {
  fullName: string;
  email: string;
  course:string;
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
  fullName?: string,
  email?: string,
  course?:string,
  avatar: string,
  pro?:boolean,
}

export type authError = {
  login: string,
  register: string,
  logout: string, 
  refresh: string
}
export type authLoading = {
  login: boolean
  register: boolean,
  logout: boolean, 
  refresh: boolean
}


export interface AuthContextType {
  user: User
  token: string | undefined,
  error: authError,
  loading:authLoading,
  setError: React.Dispatch<React.SetStateAction<{
    login: string;
    register: string;
    refresh: string;
    logout: string;
  }>>
  setLoading: React.Dispatch<React.SetStateAction<{
    login: boolean;
    register: boolean;
    refresh: boolean;
    logout: boolean;
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

export interface FormData {
  type: string;
  email: string;
  verificationCode: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface NavOption {
  icon: IconType;
  label: string;
  to: string;
}


export interface Organization {
  id:string;
  name:string;
  email:string,
  avatar:string;
}

export interface Link {
  id:string,
  name:string;
  category:'organization' | 'individual'
  type:'project' | "task"
  email:string;
  link:string;
}








