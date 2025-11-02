import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-neutral-900 dark:text-white text-lg tracking-tight">
          Diwash Acharya
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-5 w-px bg-neutral-300 dark:bg-neutral-700" />
          <a
            href="mailto:diwash@example.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 px-3 py-1.5 rounded-md hover:opacity-90 transition"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 px-3 pt-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
