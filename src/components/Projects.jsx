import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Creative Portfolio UI',
    description:
      'A responsive portfolio template built with React and Tailwind, featuring smooth animations and dark mode.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Task Manager API',
    description:
      'FastAPI backend with MongoDB for managing tasks, JWT auth, and robust validation.',
    tags: ['FastAPI', 'MongoDB', 'JWT'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Design System Kit',
    description:
      'Reusable component library following shadcn/ui patterns for rapid prototyping and production apps.',
    tags: ['Design', 'Components', 'Accessibility'],
    live: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">A selection of things Ive been working on recently.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
              <div className="h-36 bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-emerald-500/30" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:underline underline-offset-4">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline"
                  >
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:underline"
                  >
                    Code <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
