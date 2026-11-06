import React, { useState, useEffect } from 'react';
import { X, Play, RefreshCw, Terminal, CheckCircle } from 'lucide-react';

interface ConsoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  code: string;
  expectedOutput: string;
}

export const ConsoleModal: React.FC<ConsoleModalProps> = ({
  isOpen,
  onClose,
  title,
  code,
  expectedOutput
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      handleRun();
    }
  }, [isOpen, code, expectedOutput]);

  const handleRun = () => {
    setIsRunning(true);
    setDisplayedOutput('');
    const startTime = performance.now();

    // Simulate compilation & execution steps
    setTimeout(() => {
      setDisplayedOutput(expectedOutput);
      setIsRunning(false);
      setExecutionTime(Math.round(performance.now() - startTime) + 42); // simulated JVM boot
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 flex items-center justify-center border border-indigo-500/40">
              <Terminal className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Java JVM Execution Simulator</h3>
              <p className="text-xs text-slate-400 truncate max-w-md">{title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 overflow-y-auto flex-1">
          {/* Source Code View */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Source Code (Java 17/21)
              </span>
              <span className="text-xs text-slate-500 font-mono">javac *.java</span>
            </div>
            <pre className="flex-1 p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-auto border border-slate-800 leading-relaxed max-h-[50vh]">
              <code>{code}</code>
            </pre>
          </div>

          {/* Terminal Output View */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Console Standard Output
              </span>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center space-x-1 px-2.5 py-1 text-xs font-medium rounded bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50 transition-colors"
              >
                {isRunning ? (
                  <RefreshCw className="w-3 h-3 animate-spin" />
                ) : (
                  <Play className="w-3 h-3 fill-current" />
                )}
                <span>{isRunning ? 'Compiling...' : 'Re-Run'}</span>
              </button>
            </div>

            <div className="flex-1 p-4 rounded-xl bg-black font-mono text-xs border border-slate-800 flex flex-col justify-between max-h-[50vh] overflow-auto">
              {isRunning ? (
                <div className="flex flex-col items-center justify-center h-48 text-slate-400 space-y-2">
                  <RefreshCw className="w-6 h-6 animate-spin text-indigo-400" />
                  <p className="text-xs">Compiling with javac &amp; executing JVM...</p>
                </div>
              ) : (
                <pre className="text-amber-300/90 whitespace-pre-wrap leading-relaxed">
                  {displayedOutput}
                </pre>
              )}

              {executionTime && !isRunning && (
                <div className="pt-3 mt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" /> Process finished with exit code 0
                  </span>
                  <span>Execution time: {executionTime}ms</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Standard JNTU / Autonomous University R19 Examination Solution</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
