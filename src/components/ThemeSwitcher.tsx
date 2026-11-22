import { Monitor, Moon, Sun } from 'lucide-react';
import type { KeyboardEvent } from 'react';

export type ThemePreference = 'light' | 'system' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

interface ThemeSwitcherProps {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  onChange: (next: ThemePreference) => void;
}

const OPTIONS: {
  id: ThemePreference;
  label: string;
  title: string;
  Icon: typeof Sun;
}[] = [
  { id: 'light', label: 'Light', title: 'Light theme', Icon: Sun },
  { id: 'system', label: 'System', title: 'Match device system theme', Icon: Monitor },
  { id: 'dark', label: 'Dark', title: 'Dark theme', Icon: Moon },
];

export function ThemeSwitcher({
  preference,
  resolvedTheme,
  onChange,
}: ThemeSwitcherProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = OPTIONS.findIndex((option) => option.id === preference);
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      const next = OPTIONS[(currentIndex + 1) % OPTIONS.length];
      onChange(next.id);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      const prev = OPTIONS[(currentIndex - 1 + OPTIONS.length) % OPTIONS.length];
      onChange(prev.id);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {preference === 'system' && (
        <span className="tss-body text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
          Device: {resolvedTheme === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}
      <div
        role="radiogroup"
        aria-label="Theme preference"
        onKeyDown={handleKeyDown}
        className="relative grid grid-cols-3 items-center rounded-[10px] border p-[3px] select-none bg-[#eef2f6] border-[#e4e8ef] dark:bg-[#162033] dark:border-[#1e293b]"
      >
        <span
          aria-hidden="true"
          className="tss-theme-thumb pointer-events-none absolute top-[3px] bottom-[3px] left-[3px] z-0 w-[calc(33.3333%-2px)] rounded-[7px] border bg-white border-[#dde5f1] shadow-[0_1px_3px_rgba(13,21,36,0.1)] dark:bg-[#24314a] dark:border-slate-400/30 dark:shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
        />
        {OPTIONS.map(({ id, label, title, Icon }) => {
          const isSelected = preference === id;
          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              title={title}
              onClick={() => onChange(id)}
              className={`relative z-10 inline-flex items-center justify-center gap-1.5 min-h-[34px] px-3 py-1.5 text-xs font-medium rounded-[7px] whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400 ${
                isSelected
                  ? 'text-[#0d1524] dark:text-[#f1f5f9]'
                  : 'text-[#475569] hover:text-[#0d1524] dark:text-[#94a3b8] dark:hover:text-[#f1f5f9]'
              }`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" strokeWidth={1.8} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
