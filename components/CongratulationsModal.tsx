
import React, { useState, useEffect } from 'react';
import { generateCongratsMessage } from '../services/geminiService';

interface CongratulationsModalProps {
  studentName: string;
  onClose: () => void;
}

const CongratulationsModal: React.FC<CongratulationsModalProps> = ({ studentName, onClose }) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      setIsLoading(true);
      const msg = await generateCongratsMessage(studentName);
      setMessage(msg);
      setIsLoading(false);
    };

    fetchMessage();
  }, [studentName]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 border border-cyan-500/30 max-w-sm w-full text-center transform transition-all scale-95 opacity-0 animate-fade-in-scale">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Well Done!</h2>
        <div className="min-h-[6rem] flex items-center justify-center">
            {isLoading ? (
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
            ) : (
            <p className="text-slate-200 text-lg">{message}</p>
            )}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transform hover:scale-105 transition-all duration-300"
        >
          Close
        </button>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default CongratulationsModal;
