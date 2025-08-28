<<<<<<< HEAD
export enum TaskStatus {
  NotReady = 'Not ready',
  Ready = 'Ready',
}

export interface Tasks {
  phase1: TaskStatus;
  word: TaskStatus;
  report: TaskStatus;
  spreadsheet: TaskStatus;
  database: TaskStatus;
  website: TaskStatus;
}

export interface Student {
  id: number;
  examNumber: string;
  surname: string;
  name: string;
  tasks: Tasks;
}

export type TaskName = keyof Tasks;
=======
export enum TaskStatus {
  NotReady = 'Not ready',
  Ready = 'Ready',
}

export interface Tasks {
  phase1: TaskStatus;
  word: TaskStatus;
  report: TaskStatus;
  spreadsheet: TaskStatus;
  database: TaskStatus;
  website: TaskStatus;
}

export interface Student {
  id: number;
  examNumber: string;
  surname: string;
  name: string;
  tasks: Tasks;
}

export type TaskName = keyof Tasks;
>>>>>>> 283b3471860c05d26d569526cbfcd2e50824953e
