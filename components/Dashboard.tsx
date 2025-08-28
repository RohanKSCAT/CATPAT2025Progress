import React from 'react';
import { Student, TaskStatus } from '../types';

interface StatusCellProps {
  status: TaskStatus;
}

const StatusCell: React.FC<StatusCellProps> = ({ status }) => {
  const isReady = status === TaskStatus.Ready;
  const cellClasses = isReady
    ? 'bg-green-500/20 text-yellow-300'
    : 'bg-red-500/10 text-red-400 font-semibold';

  return (
    <td className={`p-3 text-center border-r border-slate-700 last:border-r-0 ${cellClasses}`}>
      <span className={`px-3 py-1 text-sm rounded-full ${isReady ? 'bg-green-500/30' : 'bg-red-500/20'}`}>
        {status}
      </span>
    </td>
  );
};

interface DashboardProps {
  students: Student[];
}

const Dashboard: React.FC<DashboardProps> = ({ students }) => {
  return (
    <div className="w-full bg-slate-800/50 rounded-xl shadow-2xl p-4 sm:p-6 border border-slate-700 backdrop-blur-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-100 mb-6">CAT SBA: PAT 2025 Progress</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700 border-collapse">
                <thead className="bg-slate-900/70">
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 border-r border-slate-600">#</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white border-r border-slate-600">Exam Number</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white border-r border-slate-600">Name</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white border-r border-slate-600">Surname</th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-white border-r border-slate-600">Phase 1</th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-white border-r border-slate-600">Word</th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-white border-r border-slate-600">Report</th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-white border-r border-slate-600">Spreadsheet</th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-white border-r border-slate-600">Database</th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-white">Website</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                    {students.map((student) => (
                        <tr key={student.id} className="hover:bg-slate-800/60 transition-colors duration-200">
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-300 sm:pl-6 border-r border-slate-700">{student.id}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-400 font-mono border-r border-slate-700">{student.examNumber}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-200 border-r border-slate-700">{student.name}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-200 border-r border-slate-700">{student.surname}</td>
                            <StatusCell status={student.tasks.phase1} />
                            <StatusCell status={student.tasks.word} />
                            <StatusCell status={student.tasks.report} />
                            <StatusCell status={student.tasks.spreadsheet} />
                            <StatusCell status={student.tasks.database} />
                            <StatusCell status={student.tasks.website} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Dashboard;