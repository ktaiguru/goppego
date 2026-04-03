import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Cpu, Target, Sparkles, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Students Impacted' },
  { value: '2', label: 'Service Tracks' },
  { value: '100%', label: 'Practical Solutions' },
];

const educatorBullets = [
  'Evidence-based instructional strategies',
  'AI tools for the modern classroom',
  'Literacy & intervention support',
  'Professional development training',
];

const bizBullets = [
  'Custom AI workflow automation',
  'Intelligent agents built for your ops',
  'AI strategy & consulting sessions',
  'Done-for-you builds that scale',
];

const whyPoints = [
  {
    icon: Target,
    color: '#6366f1',
    bg: '#eef2ff',
    title: 'Evidence-Based Methods',
    desc: 'Every strategy is grounded in research and proven results — your investment yields measurable outcomes.',
  },
  {
    icon: Sparkles,
    color: '#f59e0b',
    bg: '#fef3c7',
    title: 'AI-Native Approach',
    desc: 'Built for the modern era — integrating cutting-edge AI that enhances rather than replaces human expertise.',
  },
  {
    icon: TrendingUp,
    color: '#10b981',
    bg: '#d1fae5',
    title: 'Results That Matter',
    desc: 'Focused on tangible impact — from improved student outcomes to streamlined operations and real growth.',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <Helmet>
        <title>GOPPE Go | Empowering Educators & Accelerating Businesses</title>
        <meta name="description" content="Expert consulting, AI-powered workflows, and hands-on training that transforms how you teach, learn, and operate. Serving educators and small businesses." />
        <meta property="og:title" content="GOPPE Go | Empowering Educators & Accelerating Businesses" />
        <meta property="og:description" content="Expert consulting, AI-powered workflows, and hands-on training that transforms how you teach, learn, and operate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goppego.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GOPPE Go | Empowering Educators & Accelerating Businesses" />
        <meta name="twitter:description" content="Expert consulting, AI-powered workflows, and hands-on training that transforms how you teach, learn, and operate." />
      </Helmet>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #060e1d 0%, #0f2244 55%, #163055 100%)', color: 'white', padding: '7rem 1.5rem 6rem', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(196,168,76,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-120px', left: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(99,102,241,0.08)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <span style={{ display: 'inline-block', background: 'rgba(196,168,76,0.15)', border: '1px solid rgba(196,168,76,0.4)', color: '#E8B840', borderRadius: '999px', padding: '0.4rem 1.25rem', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '1.75rem', textTransform: 'uppercase' }}>
            Education · AI · Results
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 4.25rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Empowering Educators.<br />
            <span style={{ color: '#D4A017' }}>Accelerating Businesses.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto 2.5rem' }}>
            Expert consulting, AI-powered workflows, and hands-on training that transforms how you teach, learn, and operate.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/education" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#D4A017', color: '#0f2244', fontWeight: 700, padding: '0.9rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1rem', transition: 'background 0.2s' }}>
              Education Services <ArrowRight size={18} />
            </Link>
            <Link to="/ai-services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.12)', color: 'white', fontWeight: 700, padding: '0.9rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}>
              AI Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: '#D4A017' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: '1.75rem 1rem', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.3)' : 'none' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2244', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#2d1e00', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Two Worlds Section */}
      <section style={{ background: '#f2f6fb', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: '#eef2ff', color: '#2d5cb8', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Two Tracks, One Mission
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#060e1d' }}>
              Who Do We Serve?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '2rem' }}>
            {/* Educators Card */}
            <div style={{ background: 'white', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 4px 24px rgba(26,26,62,0.08)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '2rem 2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.875rem', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: '#0f2244' }}>For Educators</h3>
                  <p style={{ color: '#78716c', fontSize: '0.875rem', marginTop: '0.15rem' }}>Schools, teachers & instructional teams</p>
                </div>
              </div>
              <div style={{ padding: '1.75rem 2rem 2rem', flex: 1 }}>
                <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  Transform your classroom with evidence-based consulting, professional development, and innovative literacy solutions designed for educators who want to stay ahead.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {educatorBullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#374151', fontSize: '0.9rem' }}>
                      <CheckCircle style={{ width: '1rem', height: '1rem', color: '#f59e0b', flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/education" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0f2244', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', borderBottom: '2px solid #f59e0b', paddingBottom: '0.1rem' }}>
                  Explore Education Services <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Business Card */}
            <div style={{ background: 'white', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 4px 24px rgba(26,26,62,0.08)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)', padding: '2rem 2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.875rem', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cpu style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: '#0f2244' }}>For Businesses</h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.15rem' }}>Small businesses & entrepreneurs</p>
                </div>
              </div>
              <div style={{ padding: '1.75rem 2rem 2rem', flex: 1 }}>
                <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  Scale your operations with custom AI workflows and intelligent agents built for small businesses. Expert consulting that drives real results and improves your bottom line.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {bizBullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#374151', fontSize: '0.9rem' }}>
                      <CheckCircle style={{ width: '1rem', height: '1rem', color: '#6366f1', flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/ai-services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0f2244', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', borderBottom: '2px solid #6366f1', paddingBottom: '0.1rem' }}>
                  Explore AI Services <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why GOPPE Go */}
      <section style={{ background: 'white', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Why Choose Us
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#060e1d' }}>
              The G.O.P.P.E. Go Difference
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.75rem' }}>
            {whyPoints.map((p) => (
              <div key={p.title} style={{ background: '#fafafa', border: '1px solid #f1f5f9', borderRadius: '1.25rem', padding: '2.25rem 1.75rem', textAlign: 'center', transition: 'box-shadow 0.2s, transform 0.2s' }}>
                <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <p.icon style={{ width: '2rem', height: '2rem', color: p.color }} />
                </div>
                <h3 style={{ fontWeight: 700, color: '#060e1d', fontSize: '1.1rem', marginBottom: '0.6rem' }}>{p.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '4.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ fontSize: '3.5rem', color: '#b45309', lineHeight: 0.5, marginBottom: '1rem' }}>"</div>
          <blockquote style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)', color: '#0f2244', fontStyle: 'italic', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            The best solutions come from someone who's lived the problem — and built the answer from scratch.
          </blockquote>
          <cite style={{ color: '#78716c', fontWeight: 600, fontSize: '0.875rem', fontStyle: 'normal' }}>— Kendra, Founder · G.O.P.P.E. Go!</cite>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0f2244 0%, #163055 100%)', padding: '5rem 1.5rem', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.25 }}>
            Ready to transform your classroom or business?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginBottom: '2.25rem' }}>
            Let's build a plan that actually works for you.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#D4A017', color: '#0f2244', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1.05rem' }}>
            Get Started Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
