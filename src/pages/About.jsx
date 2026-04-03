import React from 'react';
import { Heart, Zap, Users, Target, Award, BookOpen, Cpu, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import brandPhoto from '../assets/brand_pic2-768x1007.jpg';

const stats = [
  { value: '10+', label: 'Years in Education' },
  { value: '500+', label: 'Students Impacted' },
  { value: '2', label: 'Worlds Bridged' },
  { value: '100%', label: 'Results-Driven' },
];

const values = [
  {
    icon: Target,
    color: '#f59e0b',
    bg: '#fef3c7',
    title: 'Practical Over Theoretical',
    desc: 'Every strategy is designed to work in real classrooms and real businesses — not just in theory.',
  },
  {
    icon: Zap,
    color: '#6366f1',
    bg: '#eef2ff',
    title: 'AI as a Force Multiplier',
    desc: 'Technology amplifies human expertise. It never replaces the power of great teaching and leadership.',
  },
  {
    icon: Users,
    color: '#0ea5e9',
    bg: '#e0f2fe',
    title: 'Equity in Education',
    desc: 'Every student deserves access to innovative teaching, personalized learning, and opportunity.',
  },
  {
    icon: Heart,
    color: '#ef4444',
    bg: '#fee2e2',
    title: 'Results-Driven',
    desc: 'Success is measured by tangible outcomes — improved learning, increased efficiency, real impact.',
  },
];

export default function About() {
  return (
    <div className="w-full">
      <Helmet>
        <title>About | GOPPE Go</title>
        <meta name="description" content="Meet Kendra — educator, AI builder, and founder of GOPPE Go. Learn about the mission to empower educators and small businesses." />
        <meta property="og:title" content="About | GOPPE Go" />
        <meta property="og:description" content="Meet Kendra — educator, AI builder, and founder of GOPPE Go." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goppego.org/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | GOPPE Go" />
        <meta name="twitter:description" content="Meet Kendra — educator, AI builder, and founder of GOPPE Go." />
      </Helmet>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #060e1d 0%, #0f2244 60%, #163055 100%)', color: 'white', padding: '6rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: 'rgba(196,168,76,0.15)', border: '1px solid rgba(196,168,76,0.4)', color: '#E8B840', borderRadius: '999px', padding: '0.35rem 1.1rem', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            Our Story
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Meet the Mind Behind<br />
            <span style={{ color: '#D4A017' }}>G.O.P.P.E. Go!</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            Educator. Innovator. AI builder. Kendra bridges two worlds to help people work smarter and achieve more.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#D4A017' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ padding: '1.75rem 1rem', borderRight: '1px solid rgba(255,255,255,0.3)' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f2244', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2d1e00', marginTop: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: '4rem', alignItems: 'center' }}>

            {/* Photo */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <img
                src={brandPhoto}
                alt="Kendra Turner — Founder of G.O.P.P.E. Go!"
                style={{ width: '100%', maxWidth: '320px', borderRadius: '1.25rem', objectFit: 'cover', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              />

              {/* Credential badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {['Middle School Educator', 'AI Workflow Builder', 'Micro School Founder'].map((tag) => (
                  <span key={tag} style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.75rem', fontWeight: 600, padding: '0.3rem 0.75rem', borderRadius: '999px', border: '1px solid #e2e8f0' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <span style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Kendra's Story
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#060e1d', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Where Classroom Experience Meets Cutting-Edge AI
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#475569', lineHeight: 1.8, fontSize: '1rem' }}>
                <p>
                  Kendra brings over a decade of experience as a dedicated middle school Social Studies educator — combining deep classroom expertise with innovative thinking. Her journey spans curriculum design, literacy instruction, and professional development, always with a focus on what <em>actually works</em> in real classrooms.
                </p>
                <p>
                  Recognizing the potential of AI to amplify teaching and learning, Kendra became a skilled builder of intelligent workflows and AI solutions. She founded a micro school built on principles of metacognition and personalized learning — proving that transformation is possible when you marry evidence with innovation.
                </p>
                <p>
                  Today, Kendra bridges two worlds: helping educators leverage cutting-edge tools and helping small business owners streamline operations through AI. Her unique perspective ensures that every solution is <strong style={{ color: '#0f2244' }}>practical, evidence-based, and delivers measurable results.</strong>
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link to="/contact" style={{ display: 'inline-block', background: '#D4A017', color: '#0f2244', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.95rem', transition: 'background 0.2s' }}>
                  Work With Kendra
                </Link>
                <Link to="/education" style={{ display: 'inline-block', background: 'transparent', color: '#0f2244', fontWeight: 600, padding: '0.85rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.95rem', border: '2px solid #e2e8f0' }}>
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: '#f2f6fb', padding: '4rem 1.5rem', borderTop: '1px solid #d0dff0', borderBottom: '1px solid #d0dff0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3.5rem', color: '#D4A017', lineHeight: 0.5, marginBottom: '1rem' }}>"</div>
          <blockquote style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#0f2244', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Every student and every business owner deserves solutions that actually work — built from real experience, not guesswork.
          </blockquote>
          <cite style={{ color: '#6b6b9a', fontWeight: 600, fontSize: '0.9rem', fontStyle: 'normal' }}>— Kendra, Founder of G.O.P.P.E. Go!</cite>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'inline-block', background: '#eef2ff', color: '#2d5cb8', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              What We Stand For
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#060e1d' }}>
              Our Core Values
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1.5rem' }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: 'white', border: '1px solid #f1f5f9', borderRadius: '1rem', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', transition: 'box-shadow 0.2s' }}>
                <div style={{ flexShrink: 0, width: '3rem', height: '3rem', borderRadius: '0.75rem', background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <v.icon style={{ width: '1.4rem', height: '1.4rem', color: v.color }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#060e1d', marginBottom: '0.4rem', fontSize: '1.05rem' }}>{v.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0f2244 0%, #163055 100%)', padding: '4.5rem 1.5rem', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, marginBottom: '1rem' }}>
          Ready to transform how you work?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginBottom: '2rem' }}>
          Let's build something that actually moves the needle.
        </p>
        <Link to="/contact" style={{ display: 'inline-block', background: '#D4A017', color: '#0f2244', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1rem' }}>
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
