import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Header />

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Diwash Acharya. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
