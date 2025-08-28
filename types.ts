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
