import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Someone'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:diwash@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Get in touch</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              Have an idea, collaboration, or role in mind? Im always open to new opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <a href="mailto:diwash@example.com" className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
                <Mail className="h-5 w-5" /> diwash@example.com
              </a>
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
                <Phone className="h-5 w-5" /> +977-98XXXXXXXX
              </div>
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
                <MapPin className="h-5 w-5" /> Kathmandu, Nepal
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell me a bit about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
