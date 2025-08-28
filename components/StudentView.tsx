import React from 'react';
import { Student, TaskStatus, TaskName } from '../types';

interface StatusDropdownProps {
  status: TaskStatus;
  taskName: string;
  onChange: (newStatus: TaskStatus) => void;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({ status, taskName, onChange }) => {
  const isReady = status === TaskStatus.Ready;
  const selectClasses = isReady
    ? 'bg-green-500/90 text-yellow-300 font-bold border-green-400 focus:ring-green-400'
    : 'bg-red-500/80 text-white font-bold border-red-400 focus:ring-red-400';

  return (
    <div className="flex flex-col items-center space-y-2">
      <label className="text-sm font-medium text-slate-300 capitalize">{taskName}</label>
      <select
        value={status}
        onChange={(e) => onChange(e.target.value as TaskStatus)}
        className={`w-32 text-center rounded-md border py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 ${selectClasses}`}
      >
        <option value={TaskStatus.NotReady} className="bg-slate-700 text-white font-normal">{TaskStatus.NotReady}</option>
        <option value={TaskStatus.Ready} className="bg-slate-700 text-white font-normal">{TaskStatus.Ready}</option>
      </select>
    </div>
  );
};


interface StudentViewProps {
  student: Student;
  onUpdate: (taskName: TaskName, newStatus: TaskStatus) => void;
  onLogout: () => void;
}

const StudentView: React.FC<StudentViewProps> = ({ student, onUpdate, onLogout }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-700">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-cyan-400">Welcome, {student.name}!</h2>
          <p className="text-slate-400">Update your PAT progress below.</p>
        </div>
        <button
          onClick={onLogout}
          className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200"
        >
          Sign Out
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-200 border-b-2 border-slate-600 pb-2 mb-4">Phase 1</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <StatusDropdown taskName="Phase 1" status={student.tasks.phase1} onChange={(s) => onUpdate('phase1', s)} />
            <StatusDropdown taskName="word" status={student.tasks.word} onChange={(s) => onUpdate('word', s)} />
            <StatusDropdown taskName="report" status={student.tasks.report} onChange={(s) => onUpdate('report', s)} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-200 border-b-2 border-slate-600 pb-2 mb-4">Phase 2</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <StatusDropdown taskName="spreadsheet" status={student.tasks.spreadsheet} onChange={(s) => onUpdate('spreadsheet', s)} />
            <StatusDropdown taskName="database" status={student.tasks.database} onChange={(s) => onUpdate('database', s)} />
            <StatusDropdown taskName="website" status={student.tasks.website} onChange={(s) => onUpdate('website', s)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
