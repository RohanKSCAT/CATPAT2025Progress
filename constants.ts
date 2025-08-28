import { Student, TaskStatus } from './types';

export const ADMIN_EXAM_NUMBER = 'ADMIN2025';

const defaultTasks = {
  phase1: TaskStatus.NotReady,
  word: TaskStatus.NotReady,
  report: TaskStatus.NotReady,
  spreadsheet: TaskStatus.NotReady,
  database: TaskStatus.NotReady,
  website: TaskStatus.NotReady,
};

export const INITIAL_STUDENTS: Student[] = [
  { id: 1, examNumber: '254735020065', surname: 'Baran', name: 'Navaj', tasks: { ...defaultTasks } },
  { id: 2, examNumber: '254735020087', surname: 'Basson', name: 'Armand', tasks: { ...defaultTasks } },
  { id: 3, examNumber: '254735020104', surname: 'Bezuidenhout', name: 'Liani', tasks: { ...defaultTasks } },
  { id: 4, examNumber: '254735020321', surname: 'Dednam', name: 'Ryan', tasks: { ...defaultTasks } },
  { id: 5, examNumber: '254735020447', surname: 'Du Preez', name: 'Ruan', tasks: { ...defaultTasks } },
  { id: 6, examNumber: '254735020522', surname: 'Gaibe', name: 'Ammarah', tasks: { ...defaultTasks } },
  { id: 7, examNumber: '254735020669', surname: 'Hayes', name: 'Ashley', tasks: { ...defaultTasks } },
  { id: 8, examNumber: '254735020704', surname: 'Hughes', name: 'Dana', tasks: { ...defaultTasks } },
  { id: 9, examNumber: '254735020729', surname: 'Hugo', name: 'Danielleh', tasks: { ...defaultTasks } },
  { id: 10, examNumber: '254735020742', surname: 'Hugo', name: 'Sagen', tasks: { ...defaultTasks } },
  { id: 11, examNumber: '254735020766', surname: 'l\'Ons', name: 'Liam', tasks: { ...defaultTasks } },
  { id: 12, examNumber: '254735020962', surname: 'Kader', name: 'Tatum', tasks: { ...defaultTasks } },
  { id: 13, examNumber: '254735021064', surname: 'Kompela', name: 'Likhanyo', tasks: { ...defaultTasks } },
  { id: 14, examNumber: '254735021140', surname: 'Laubscher', name: 'Cassidy', tasks: { ...defaultTasks } },
  { id: 15, examNumber: '254735021208', surname: 'Lloyd', name: 'Damian', tasks: { ...defaultTasks } },
  { id: 16, examNumber: '254735021288', surname: 'Marais', name: 'René', tasks: { ...defaultTasks } },
  { id: 17, examNumber: '254735021401', surname: 'McCleland', name: 'Bryce', tasks: { ...defaultTasks } },
  { id: 18, examNumber: '254735021486', surname: 'Moodley', name: 'Jared', tasks: { ...defaultTasks } },
  { id: 19, examNumber: '254735021587', surname: 'Neumann', name: 'Josh', tasks: { ...defaultTasks } },
  { id: 20, examNumber: '254735021665', surname: 'Osman', name: 'Ayesha', tasks: { ...defaultTasks } },
  { id: 21, examNumber: '254735021869', surname: 'Roe', name: 'Jamie', tasks: { ...defaultTasks } },
  { id: 22, examNumber: '254735021926', surname: 'Sands', name: 'Blake', tasks: { ...defaultTasks } },
  { id: 23, examNumber: '254735022004', surname: 'Scoble', name: 'Matthew', tasks: { ...defaultTasks } },
  { id: 24, examNumber: '254735022066', surname: 'Stam', name: 'Alexander', tasks: { ...defaultTasks } },
  { id: 25, examNumber: '254735022301', surname: 'Watkins', name: 'Tamika', tasks: { ...defaultTasks } },
  { id: 26, examNumber: '254735022320', surname: 'Wepener', name: 'Karla', tasks: { ...defaultTasks } },
  { id: 27, examNumber: '254735022360', surname: 'Williams', name: 'Zach', tasks: { ...defaultTasks } },
];