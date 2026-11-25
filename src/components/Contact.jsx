import { useState } from 'react';
import { Send, Loader2, CheckCircle, Mail, MapPin, Clock, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const emptyForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState('idle');

  const handleChange = ({ target: { name, value } }) => {
    setFormData((draft) => ({ ...draft, [name]: value }));
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xyeeregz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setFormData(emptyForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-semibold text-primary tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-ink">
            Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted text-lg">
            Have a question about the showcase? Send a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-0 lg:col-span-3 rounded-2xl bg-surface border border-white/10 p-4 sm:p-8 relative z-10"
          >
            <form onSubmit={handleSubmit} aria-busy={status === 'submitting'} className="space-y-4 relative z-10">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-muted uppercase mb-1.5">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-canvas text-ink placeholder:text-muted border border-white/10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-muted uppercase mb-1.5">University Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="you@vitbhopal.ac.in"
                  className="w-full px-4 py-3 rounded-xl bg-canvas text-ink placeholder:text-muted border border-white/10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-muted uppercase mb-1.5">Message</label>
                <textarea
                  rows="4"
                  id="contact-message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="Tell us what you're excited to build..."
                  className="w-full px-4 py-3 rounded-xl bg-canvas text-ink placeholder:text-muted border border-white/10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 transition-all"
                ></textarea>
              </div>

              {/* Local payload preview */}
              {(formData.name || formData.email || formData.message) && (
                <div className="min-w-0 [overflow-wrap:anywhere] bg-canvas border border-primary/30 p-3.5 rounded-xl font-mono text-xs text-primary text-left whitespace-pre-line shadow-lg shadow-primary/10">
                  <div className="flex flex-wrap items-center justify-between gap-1 pb-1.5 mb-1.5 border-b border-white/10 text-[10px] text-muted uppercase tracking-wider">
                    <span>Developer Payload</span>
                    <span className="flex items-center gap-1.5 text-primary font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-android"></span>
                      LOCAL PREVIEW
                    </span>
                  </div>
                  <div className="space-y-1">
                    {formData.name && (
                      <p className="text-muted">
                        &gt; applicant: <span className="text-ink font-medium">{formData.name}</span>
                      </p>
                    )}
                    {formData.email && (
                      <p className="text-muted">
                        &gt; university_email: <span className="text-ink font-medium">{formData.email}</span>
                      </p>
                    )}
                    {formData.message && (
                      <p className="text-muted">
                        &gt; payload_length: <span className="text-primary font-medium">{formData.message.length} chars</span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div role="alert" className={status === 'error' ? 'rounded-xl border border-secondary/40 bg-secondary/10 px-4 py-3 text-sm text-secondary' : 'sr-only'}>
                {status === 'error' && 'Your message could not be sent. Your draft is still here. Please try again.'}
              </div>
              <p role="status" className="sr-only">
                {status === 'success' && 'Message sent successfully.'}
              </p>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full py-3.5 rounded-xl bg-primary text-canvas font-bold text-sm hover:bg-primary/90 transition flex justify-center items-center gap-2 disabled:bg-primary/50 cursor-pointer disabled:cursor-not-allowed relative z-10"
              >
                {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'success' && <CheckCircle className="w-4 h-4" />}
                {(status === 'idle' || status === 'error') && <Send className="w-4 h-4" />}

                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Retry sending' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="min-w-0 lg:col-span-2 space-y-6 relative z-10"
          >
            {/* Info cards */}
            <div className="rounded-2xl bg-surface border border-white/10 p-6 space-y-5 relative z-10">
              <h3 className="text-sm font-semibold text-ink">Sample Club Details</h3>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ink">Email</h4>
                  <p className="text-sm text-muted [overflow-wrap:anywhere]">androidclub@vitbhopal.ac.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ink">Location</h4>
                  <p className="text-sm text-muted">Academic Block, Lab 204</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ink">Meeting Hours</h4>
                  <p className="text-sm text-muted">Sat & Sun — 2:00 PM to 5:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/Lord-Ship-VK"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-muted transition-colors hover:text-primary"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              Author on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
