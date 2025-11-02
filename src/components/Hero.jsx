import { ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-medium tracking-wide uppercase text-indigo-600">Portfolio</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Hi, I'm Diwash Acharya
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Frontend-focused developer crafting clean, responsive interfaces with React, Tailwind and modern web tools.
              I love turning ideas into delightful, performant products.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="inline-flex items-center gap-2">
                <Code className="h-4 w-4" /> React • Tailwind • FastAPI
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20 p-1">
              <div className="h-full w-full rounded-2xl bg-white dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500" />
                  <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-white">Diwash Acharya</h3>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-300">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
