import React, { useState, useEffect, useCallback } from 'react';
import { Student, TaskStatus, TaskName } from './types';
import { INITIAL_STUDENTS, ADMIN_EXAM_NUMBER } from './constants';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import StudentView from './components/StudentView';
import CongratulationsModal from './components/CongratulationsModal';
import Toast from './components/Toast';

const LOCAL_STORAGE_KEY = 'pat-progress-tracker-data';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(() => {
    try {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      return savedData ? JSON.parse(savedData) : INITIAL_STUDENTS;
    } catch (error) {
      console.error("Failed to parse from localStorage", error);
      return INITIAL_STUDENTS;
    }
  });

  const [currentUser, setCurrentUser] = useState<Student | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
    } catch (error) {
      console.error("Failed to save to localStorage", error);
    }
  }, [students]);

  const handleLogin = (examNumber: string) => {
    const trimmedExamNumber = examNumber.trim();
    if (trimmedExamNumber === ADMIN_EXAM_NUMBER) {
        setIsAdmin(true);
        setCurrentUser(null);
        setLoginError(null);
    } else {
        const student = students.find(s => s.examNumber === trimmedExamNumber);
        if (student) {
          setCurrentUser(student);
          setIsAdmin(false);
          setLoginError(null);
        } else {
          setLoginError('Invalid exam number. Please try again.');
          setTimeout(() => setLoginError(null), 3000);
        }
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
  };

  const handleStatusChange = (taskName: TaskName, newStatus: TaskStatus) => {
    if (!currentUser) return;

    const updatedStudents = students.map(s => {
      if (s.examNumber === currentUser.examNumber) {
        const updatedStudent = { ...s, tasks: { ...s.tasks, [taskName]: newStatus } };
        setCurrentUser(updatedStudent); // Update current user state immediately

        // Check for completion
        const allTasksReady = Object.values(updatedStudent.tasks).every(status => status === TaskStatus.Ready);
        if (allTasksReady) {
            setShowCongratsModal(true);
        }

        return updatedStudent;
      }
      return s;
    });

    setStudents(updatedStudents);
    setToastMessage('Task status updated successfully!');
  };
  
  const closeCongratsModal = useCallback(() => {
    setShowCongratsModal(false);
  }, []);

  const renderContent = () => {
    if (isAdmin) {
      return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-cyan-400">Admin Dashboard</h2>
                <button
                    onClick={handleLogout}
                    className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200"
                >
                    Sign Out
                </button>
            </div>
            <Dashboard students={students} />
        </div>
      );
    }
    if (currentUser) {
      return <StudentView student={currentUser} onUpdate={handleStatusChange} onLogout={handleLogout} />;
    }
    return <Login onLogin={handleLogin} error={loginError} />;
  }

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Computer Applications Technology
          <br />
          PAT Progress Tracker{' '}
          <span className="text-[80%] text-cyan-400 font-bold">2025</span>
        </h1>
      </header>
      
      <main className="space-y-12">
        {renderContent()}
      </main>

      {showCongratsModal && currentUser && (
        <CongratulationsModal studentName={currentUser.name} onClose={closeCongratsModal} />
      )}
      
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
};

export default App;