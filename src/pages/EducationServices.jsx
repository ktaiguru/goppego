import React from 'react';
import { Users, Sparkles, BookOpen, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: Users,
    color: '#f59e0b',
    bg: '#fef3c7',
    title: 'Instructional Consulting',
    desc: 'Work directly with teachers and instructional teams to strengthen lesson design, classroom management, and student engagement.',
    bullets: ['Lesson design coaching', 'Classroom management systems', 'Student engagement strategies', 'Data-driven instruction'],
  },
  {
    icon: Sparkles,
    color: '#6366f1',
    bg: '#eef2ff',
    title: 'AI Training for Educators',
    desc: 'Hands-on workshops that show teachers how to use AI tools to save time, differentiate instruction, and build future-ready classrooms.',
    bullets: ['ChatGPT & prompt engineering', 'Differentiation with AI', 'Lesson planning automation', 'Ethical AI in education'],
  },
  {
    icon: BookOpen,
    color: '#10b981',
    bg: '#d1fae5',
    title: 'Literacy & Intervention',
    desc: 'Evidence-based strategies to close reading gaps, boost comprehension, and reduce behavior referrals through structured routines.',
    bullets: ['Reading gap intervention', 'Comprehension frameworks', 'Structured literacy routines', 'Behavior & referral reduction'],
  },
];

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn about your school, team, and goals — no one-size-fits-all here.' },
  { num: '02', title: 'Custom Plan', desc: 'A tailored roadmap built around your specific needs, timeline, and budget.' },
  { num: '03', title: 'Implementation', desc: 'We work alongside your team and provide ongoing support every step of the way.' },
];

export default function EducationServices() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Education Services | GOPPE Go</title>
        <meta name="description" content="Consulting, training, and support for educators and schools ready to level up instruction with evidence-based methods and AI tools." />
        <meta property="og:title" content="Education Services | GOPPE Go" />
        <meta property="og:description" content="Consulting, training, and support for educators and schools ready to level up instruction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goppego.org/education" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Education Services | GOPPE Go" />
        <meta name="twitter:description" content="Consulting, training, and support for educators and schools ready to level up instruction." />
      </Helmet>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #060e1d 0%, #0f2244 60%, #163055 100%)', color: 'white', padding: '6rem 1.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(245,158,11,0.07)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <span style={{ display: 'inline-block', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', color: '#fcd34d', borderRadius: '999px', padding: '0.35rem 1.1rem', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            For Educators & Schools
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Education Services
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto 2.25rem' }}>
            Consulting, training, and support for educators ready to level up instruction — with and without AI.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f59e0b', color: '#0f2244', fontWeight: 700, padding: '0.9rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.95rem' }}>
            Schedule a Consultation <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: 'white', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              What We Offer
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#060e1d' }}>
              Services Built for Real Classrooms
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.75rem' }}>
            {services.map((s) => (
              <div key={s.title} style={{ background: 'white', border: '1px solid #f1f5f9', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 2px 16px rgba(26,26,62,0.07)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '2rem 2rem 1.25rem', borderBottom: '3px solid ' + s.color }}>
                  <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.875rem', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <s.icon style={{ width: '1.6rem', height: '1.6rem', color: s.color }} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 700, color: '#060e1d', marginBottom: '0.6rem' }}>{s.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
                <div style={{ padding: '1.25rem 2rem 2rem', flex: 1 }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {s.bullets.map((b) => (
                      <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#374151', fontSize: '0.875rem' }}>
                        <CheckCircle style={{ width: '0.9rem', height: '0.9rem', color: s.color, flexShrink: 0 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: '#f2f6fb', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: '#eef2ff', color: '#2d5cb8', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              The Process
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#060e1d' }}>
              How It Works
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '2rem', position: 'relative' }}>
            {/* Connector line */}
            <div style={{ position: 'absolute', top: '2.5rem', left: 'calc(16.67% + 1rem)', right: 'calc(16.67% + 1rem)', height: '2px', background: 'linear-gradient(90deg, #f59e0b, #f59e0b)', zIndex: 0 }} />
            {steps.map((step, i) => (
              <div key={step.num} style={{ background: 'white', borderRadius: '1.25rem', padding: '2.25rem 1.75rem', textAlign: 'center', boxShadow: '0 2px 12px rgba(26,26,62,0.07)', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', fontSize: '1.4rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', boxShadow: '0 4px 12px rgba(245,158,11,0.35)' }}>
                  {step.num}
                </div>
                <h3 style={{ fontWeight: 700, color: '#060e1d', fontSize: '1.1rem', marginBottom: '0.6rem' }}>{step.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', padding: '4.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Let's talk about your school's needs.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: '2rem' }}>
            No pressure. Just a real conversation about what's possible.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#92400e', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1rem' }}>
            Schedule a Consultation <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
