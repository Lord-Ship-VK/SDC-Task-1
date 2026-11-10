import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const fullText = "> system.init(SDC_Recruitment_2026)...\n> Loading developer profile...\n> Status: Ready to Build.";

const TerminalText = () => {
  const [text, setText] = useState('');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    let index = 0;
    const timer = setInterval(() => {
      index++;
      setText(fullText.slice(0, index));
      if (index === fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [reduceMotion]);


  return (
    <div className="bg-black/60 border border-android/30 p-4 rounded-xl font-mono text-sm text-android text-left mt-6 max-w-lg min-w-0 mx-auto whitespace-pre-line [overflow-wrap:anywhere] shadow-lg shadow-android/10 backdrop-blur-md">
      <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-android-border/40">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
        <span className="text-[11px] text-android-muted ml-2 font-mono">bash - dev-terminal</span>
      </div>
      <p className="sr-only">{fullText}</p>
      <div aria-hidden="true" className="grid">
        <span className="invisible col-start-1 row-start-1">{fullText}_</span>
        <span className="col-start-1 row-start-1">
          {reduceMotion ? fullText : text}
          <span className="motion-safe:animate-pulse font-bold text-android">_</span>
        </span>
      </div>
    </div>
  );
};

export default TerminalText;
