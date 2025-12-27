
import React from 'react';

interface BaseFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
}

export const FormGroup: React.FC<BaseFieldProps & { children: React.ReactNode }> = ({ label, required, children, className = "" }) => (
  <div className={`space-y-3 transition-all group ${className}`}>
    <label className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em] ml-2 flex items-center gap-2 group-focus-within:text-[var(--accent)] transition-colors">
      <span className="w-1 h-1 rounded-full bg-current opacity-40"></span>
      {label} {required && <span className="text-emerald-500">*</span>}
    </label>
    <div className="relative">
      {children}
    </div>
  </div>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & BaseFieldProps> = ({ label, required, ...props }) => (
  <FormGroup label={label} required={required}>
    <input 
      {...props}
      className="w-full ultra-input rounded-2xl p-5 text-white outline-none transition-all placeholder:text-slate-800 text-sm font-medium"
    />
  </FormGroup>
);

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & BaseFieldProps> = ({ label, required, children, ...props }) => (
  <FormGroup label={label} required={required}>
    <select 
      {...props}
      className="w-full ultra-input rounded-2xl p-5 text-white outline-none transition-all cursor-pointer text-sm font-medium appearance-none"
    >
      {children}
    </select>
    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </FormGroup>
);

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & BaseFieldProps> = ({ label, required, ...props }) => (
  <FormGroup label={label} required={required}>
    <textarea 
      {...props}
      className="w-full ultra-input rounded-2xl p-5 text-white outline-none transition-all placeholder:text-slate-800 text-sm font-medium resize-none"
    />
  </FormGroup>
);

export const ActionButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'danger' | 'success' | 'outline', icon?: React.ReactNode }> = ({ children, variant = 'primary', icon, className = "", ...props }) => {
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.3)]",
    success: "bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.4)]",
    danger: "bg-red-600/10 border border-red-500/20 text-red-500 hover:bg-red-600 hover:text-white",
    outline: "bg-black/40 border border-white/5 text-white hover:bg-white/5"
  };

  return (
    <button 
      {...props}
      className={`w-full font-black py-5 px-8 rounded-2xl flex items-center justify-center gap-4 transition-all active:scale-[0.98] disabled:opacity-30 disabled:pointer-events-none text-[11px] uppercase tracking-[0.3em] overflow-hidden relative group ${variants[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      {icon && <span className="flex-shrink-0 relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
