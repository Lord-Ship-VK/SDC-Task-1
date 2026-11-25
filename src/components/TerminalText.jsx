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
    <div className="min-w-0 whitespace-pre-wrap [overflow-wrap:anywhere] text-ink">
      <p className="mb-3 font-mono text-[11px] text-muted">bash - dev-terminal</p>
      <p className="sr-only">{fullText}</p>
      <div aria-hidden="true" className="grid">
        <span className="invisible col-start-1 row-start-1">{fullText}_</span>
        <span className="col-start-1 row-start-1">
          {reduceMotion ? fullText : text}
          <span className="motion-safe:animate-pulse font-bold text-primary">_</span>
        </span>
      </div>
    </div>
  );
};

export default TerminalText;
