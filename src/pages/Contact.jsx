import { useState } from 'react';
import { Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const nextSteps = [
  { num: '01', title: 'You send your message', desc: "Fill out the form and tell us what you're working on." },
  { num: '02', title: 'We review & respond', desc: 'Kendra personally reviews every inquiry within 24 hours.' },
  { num: '03', title: 'We build a plan together', desc: 'A focused conversation to map out exactly what you need.' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'education-inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: 'education-inquiry', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      })
      .catch(() => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 6000);
      });
  };

  const inputStyle = (name) => ({
    width: '100%', padding: '0.8rem 1rem',
    border: `1.5px solid ${focused === name ? '#D4A017' : '#e2e8f0'}`,
    borderRadius: '0.625rem', outline: 'none',
    fontSize: '0.925rem', color: '#0f2244',
    background: 'white', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    boxShadow: focused === name ? '0 0 0 3px rgba(212,160,23,0.12)' : 'none',
  });

  return (
    <div style={{ width: '100%' }}>
      <Helmet>
        <title>Contact | GOPPE Go</title>
        <meta name="description" content="Get in touch with GOPPE Go. Whether you're an educator or business owner, we'd love to hear from you. Based in Killeen, Texas." />
        <meta property="og:title" content="Contact | GOPPE Go" />
        <meta property="og:description" content="Get in touch with GOPPE Go. We'd love to hear from you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goppego.org/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | GOPPE Go" />
        <meta name="twitter:description" content="Get in touch with GOPPE Go. We'd love to hear from you." />
      </Helmet>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #060e1d 0%, #0f2244 60%, #163055 100%)',
        color: 'white', padding: '6rem 1.5rem 5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '380px', height: '380px', borderRadius: '50%', background: 'rgba(212,160,23,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-40px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(99,102,241,0.07)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.35)',
            color: '#E8B840', borderRadius: '999px', padding: '0.35rem 1.1rem',
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: '1.5rem',
          }}>
            Get In Touch
          </span>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700,
            lineHeight: 1.1, marginBottom: '1.25rem',
          }}>
            Let's Build Something<br />
            <span style={{ color: '#D4A017' }}>That Actually Works</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto' }}>
            Whether you're an educator ready to level up or a business owner looking to scale with AI — this is where it starts.
          </p>
        </div>
      </section>

      {/* Main Two-Column Section */}
      <section style={{ background: '#f2f6fb', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: '2.5rem', alignItems: 'start' }}>

          {/* LEFT — Form Card */}
          <div style={{ background: 'white', borderRadius: '1.25rem', padding: '2.5rem', boxShadow: '0 4px 24px rgba(6,14,29,0.08)', border: '1px solid #edf0f7' }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: '#060e1d', marginBottom: '0.4rem' }}>
              Send a Message
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem' }}>
              We read every message and respond personally.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle size={28} color="#059669" />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: '#060e1d' }}>Message Sent!</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', maxWidth: '280px', lineHeight: 1.6 }}>
                  Thank you! Kendra will personally review your message and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Name
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange} required
                      placeholder="Your name"
                      style={inputStyle('name')}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Email
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      placeholder="you@example.com"
                      style={inputStyle('email')}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    I'm reaching out about…
                  </label>
                  <select
                    id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    style={{ ...inputStyle('subject'), appearance: 'none', cursor: 'pointer' }}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                  >
                    <option value="education-inquiry">Education Consulting</option>
                    <option value="ai-services">AI Services for My Business</option>
                    <option value="general">Something Else</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Message
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required
                    rows={5} placeholder="Tell us what you're working on, what's not working, or what you want to build…"
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '130px', fontFamily: 'inherit' }}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    background: 'linear-gradient(135deg, #D4A017, #B8840A)',
                    color: '#0f2244', fontWeight: 700, fontSize: '1rem',
                    padding: '0.9rem 1.5rem', borderRadius: '0.625rem',
                    border: 'none', cursor: 'pointer', width: '100%',
                    boxShadow: '0 4px 14px rgba(212,160,23,0.35)',
                    transition: 'opacity 0.2s',
                  }}
                >
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT — Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Contact info — dark card */}
            <div style={{
              background: 'linear-gradient(135deg, #060e1d 0%, #0f2244 100%)',
              borderRadius: '1.25rem', padding: '2rem',
              boxShadow: '0 4px 24px rgba(6,14,29,0.15)',
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'white', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Contact Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { icon: Mail, label: 'Email', value: 'hello@goppego.org', href: 'mailto:hello@goppego.org' },
                  { icon: MapPin, label: 'Location', value: 'Killeen, Texas', href: null },
                  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem', flexShrink: 0,
                      background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={16} color="#D4A017" />
                    </div>
                    <div>
                      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.1rem' }}>{label}</p>
                      {href
                        ? <a href={href} style={{ color: '#E8B840', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>{value}</a>
                        : <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Happens Next */}
            <div style={{ background: 'white', borderRadius: '1.25rem', padding: '2rem', border: '1px solid #edf0f7', boxShadow: '0 2px 12px rgba(6,14,29,0.06)' }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#060e1d', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                What Happens Next
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {nextSteps.map((step, i) => (
                  <div key={step.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '2rem', height: '2rem', borderRadius: '50%', flexShrink: 0,
                      background: 'linear-gradient(135deg, #D4A017, #B8840A)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 800, color: '#0f2244',
                    }}>
                      {step.num}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: '#060e1d', fontSize: '0.9rem', margin: '0 0 0.2rem' }}>{step.title}</p>
                      <p style={{ color: '#64748b', fontSize: '0.825rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div style={{ background: 'white', borderRadius: '1.25rem', padding: '1.5rem 2rem', border: '1px solid #edf0f7', boxShadow: '0 2px 12px rgba(6,14,29,0.06)' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Follow Along</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Twitter / X', href: '#' },
                  { label: 'LinkedIn', href: '#' },
                  { label: 'Instagram', href: '#' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={e => e.preventDefault()}
                    style={{
                      display: 'inline-block', padding: '0.45rem 1rem',
                      borderRadius: '0.5rem', border: '1.5px solid #e2e8f0',
                      fontSize: '0.825rem', fontWeight: 600, color: '#475569',
                      textDecoration: 'none', transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4A017'; e.currentTarget.style.color = '#D4A017'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#475569'; }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
