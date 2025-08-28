
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (examNumber: string) => void;
  error: string | null;
}

const Login: React.FC<LoginProps> = ({ onLogin, error }) => {
  const [examNumber, setExamNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(examNumber);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-700">
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-2">Student Sign In</h2>
      <p className="text-center text-slate-400 mb-6">Enter your exam number to update your progress.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="examNumber" className="block text-sm font-medium text-slate-300 mb-2">
            Exam Number
          </label>
          <input
            id="examNumber"
            type="text"
            value={examNumber}
            onChange={(e) => setExamNumber(e.target.value)}
            placeholder="e.g., 254735020000"
            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            required
          />
        </div>
        {error && <p className="text-red-400 text-sm text-center animate-pulse">{error}</p>}
        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transform hover:scale-105 transition-all duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;