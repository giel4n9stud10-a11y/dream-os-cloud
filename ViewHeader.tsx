
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ViewHeaderProps {
  title: string;
  onBack: () => void;
  icon?: React.ReactNode;
}

const ViewHeader: React.FC<ViewHeaderProps> = ({ title, onBack, icon }) => (
  <div className="flex items-center gap-4 mb-8">
    <button 
      onClick={onBack} 
      className="p-2 hover:bg-slate-700 rounded-full text-yellow-500 transition-colors focus:ring-2 focus:ring-yellow-500 outline-none"
      aria-label="Kembali"
    >
      <ArrowLeft size={24} />
    </button>
    <div className="flex items-center gap-3">
      {icon && <div className="text-yellow-500">{icon}</div>}
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
    </div>
  </div>
);

export default ViewHeader;
