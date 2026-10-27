import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-neutral-900/95 border border-burn-red/60 text-white shadow-[0_0_30px_rgba(255,42,42,0.35)] backdrop-blur-xl animate-bounce-short">
      {toast.type === 'error' ? (
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
      ) : (
        <CheckCircle2 className="w-5 h-5 text-burn-red shrink-0" />
      )}
      <div className="text-xs font-semibold">
        {toast.message}
      </div>
      <button
        onClick={onClose}
        className="ml-2 p-1 text-neutral-400 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
