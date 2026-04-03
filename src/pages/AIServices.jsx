import React from 'react';
import { Zap, Bot, Link, Compass, Map, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const builds = [
  { icon: Zap, color: '#6366f1', bg: '#eef2ff', title: 'Workflow Automation', desc: 'Automate repetitive tasks and streamline operations with intelligent workflows designed specifically for your business.' },
  { icon: Bot, color: '#8b5cf6', bg: '#f5f3ff', title: 'Custom AI Agents', desc: 'Build intelligent agents that handle complex tasks independently, learn from interactions, and improve over time.' },
  { icon: Link, color: '#0ea5e9', bg: '#e0f2fe', title: 'System Integration', desc: 'Seamlessly connect your AI solutions with existing tools and systems for a cohesive technology ecosystem.' },
];

const consulting = [
  { icon: Compass, color: '#10b981', bg: '#d1fae5', title: 'AI Strategy Sessions', desc: 'Develop a clear AI strategy aligned with your business goals and competitive landscape.' },
  { icon: Users2, color: '#f59e0b', bg: '#fef3c7', title: 'Team Training Workshops', desc: 'Upskill your team with hands-on workshops covering AI fundamentals, practical tools, and best practices.' },
  { icon: Map, color: '#ef4444', bg: '#fee2e2', title: 'Implementation Roadmaps', desc: 'A clear, phased roadmap for implementing AI solutions with measurable milestones you can actually track.' },
];

function Users2({ style, className }) {
  return (
    <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const tiers = [
  {
    name: 'AI Starter',
    price: '$997',
    sub: 'one-time investment',
    desc: 'Perfect for getting started with AI',
    color: '#6366f1',
    highlight: false,
    bullets: ['AI audit of your business', 'One custom workflow build', '30-day support & check-ins', 'Tool recommendations'],
    cta: 'Get Started',
    tier: 'Starter',
  },
  {
    name: 'AI Growth',
    price: '$2,497',
    sub: 'one-time investment',
    desc: 'Scale your AI implementation',
    color: '#D4A017',
    highlight: true,
    bullets: ['Full workflow suite build', 'Custom AI agent', '60-day support & guidance', 'Team training session', 'Strategic recommendations'],
    cta: 'Get Started',
    tier: 'Growth',
  },
  {
    name: 'AI Enterprise',
    price: 'Custom',
    sub: 'tailored to your needs',
    desc: 'Full-scale AI transformation',
    color: '#6366f1',
    highlight: false,
    bullets: ['Full-scale implementation', 'Multiple AI agents', 'Ongoing support retainer', 'Full team training program', 'Priority access to Kendra'],
    cta: 'Contact Us',
    tier: 'Enterprise',
  },
];

export default function AIServices() {
  const handleGetStarted = (tier) => {
    if (tier === 'Starter') {
      window.location.href = 'https://buy.stripe.com/28E00l88vdDOfzbeqNcbC01';
    } else if (tier === 'Growth') {
      window.location.href = 'https://buy.stripe.com/bJe3cx0G38ju86J96tcbC02';
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>AI Services | GOPPE Go</title>
        <meta name="description" content="Custom AI workflows, intelligent agents, and strategic consulting to help your small business work smarter. Done-for-you builds and team training." />
        <meta property="og:title" content="AI Services | GOPPE Go" />
        <meta property="og:description" content="Custom AI workflows, intelligent agents, and strategic consulting to help your small business work smarter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goppego.org/ai-services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Services | GOPPE Go" />
        <meta name="twitter:description" content="Custom AI workflows, intelligent agents, and strategic consulting to help your small business work smarter." />
      </Helmet>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #060e1d 0%, #0f2244 55%, #0e1a40 100%)', color: 'white', padding: '6rem 1.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(99,102,241,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <span style={{ display: 'inline-block', background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)', color: '#a5b4fc', borderRadius: '999px', padding: '0.35rem 1.1rem', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            For Small Businesses
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            AI Solutions That Actually<br />
            <span style={{ color: '#a5b4fc' }}>Work for Your Business</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto 2.25rem' }}>
            Custom AI workflows, intelligent agents, and strategic consulting to help your business run smarter — not harder.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#6366f1', color: 'white', fontWeight: 700, padding: '0.9rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.95rem' }}>
              See Pricing <ArrowRight size={17} />
            </a>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: 600, padding: '0.9rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              Book a Free Call <MessageSquare size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Done-For-You Builds */}
      <section style={{ background: 'white', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: '#eef2ff', color: '#2d5cb8', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Done-For-You
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#060e1d', marginBottom: '0.75rem' }}>
              We Build It. You Run It.
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>Custom AI workflows and agents tailored to your business — from customer service to internal operations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.75rem' }}>
            {builds.map((b) => (
              <div key={b.title} style={{ background: '#fafafa', border: '1px solid #f1f5f9', borderRadius: '1.25rem', padding: '2.25rem 1.75rem', textAlign: 'center' }}>
                <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', background: b.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <b.icon style={{ width: '2rem', height: '2rem', color: b.color }} />
                </div>
                <h3 style={{ fontWeight: 700, color: '#060e1d', fontSize: '1.1rem', marginBottom: '0.6rem' }}>{b.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section style={{ background: '#f2f6fb', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: '#d1fae5', color: '#065f46', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Consulting & Training
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#060e1d', marginBottom: '0.75rem' }}>
              Not Ready for a Full Build?
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>We'll teach your team how to leverage AI effectively with hands-on sessions and proven playbooks.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.75rem' }}>
            {consulting.map((c) => (
              <div key={c.title} style={{ background: 'white', border: '1px solid #f1f5f9', borderRadius: '1.25rem', padding: '2.25rem 1.75rem', textAlign: 'center', boxShadow: '0 2px 10px rgba(26,26,62,0.05)' }}>
                <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <c.icon style={{ width: '2rem', height: '2rem', color: c.color }} />
                </div>
                <h3 style={{ fontWeight: 700, color: '#060e1d', fontSize: '1.1rem', marginBottom: '0.6rem' }}>{c.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ background: 'white', padding: '5.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Investment
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#060e1d', marginBottom: '0.75rem' }}>
              Pricing Packages
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>Choose the plan that fits where you are right now.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.75rem', alignItems: 'start' }}>
            {tiers.map((t) => (
              <div key={t.name} style={{ background: t.highlight ? 'linear-gradient(135deg, #0f2244 0%, #163055 100%)' : 'white', border: t.highlight ? '2px solid #D4A017' : '1px solid #f1f5f9', borderRadius: '1.25rem', padding: '2.25rem', boxShadow: t.highlight ? '0 20px 48px rgba(26,26,62,0.25)' : '0 2px 12px rgba(26,26,62,0.07)', position: 'relative', transform: t.highlight ? 'scale(1.03)' : 'none' }}>
                {t.highlight && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#D4A017', color: '#0f2244', fontWeight: 700, fontSize: '0.75rem', padding: '0.3rem 1rem', borderRadius: '999px', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: t.highlight ? 'white' : '#060e1d', marginBottom: '0.3rem' }}>{t.name}</h3>
                <p style={{ fontSize: '0.85rem', color: t.highlight ? 'rgba(255,255,255,0.6)' : '#94a3b8', marginBottom: '1.5rem' }}>{t.desc}</p>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '2.75rem', fontWeight: 800, color: t.highlight ? '#D4A017' : '#060e1d' }}>{t.price}</span>
                  <span style={{ fontSize: '0.85rem', color: t.highlight ? 'rgba(255,255,255,0.55)' : '#94a3b8', marginLeft: '0.5rem' }}>{t.sub}</span>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                  {t.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: t.highlight ? 'rgba(255,255,255,0.85)' : '#374151', fontSize: '0.875rem' }}>
                      <CheckCircle style={{ width: '1rem', height: '1rem', color: t.highlight ? '#D4A017' : t.color, flexShrink: 0, marginTop: '0.1rem' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleGetStarted(t.tier)}
                  style={{ width: '100%', background: t.highlight ? '#D4A017' : t.color, color: t.highlight ? '#0f2244' : 'white', fontWeight: 700, padding: '0.9rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}
                >
                  {t.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0f2244 0%, #163055 100%)', padding: '4.5rem 1.5rem', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Not sure which package fits?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2rem' }}>
            Let's figure it out together — no sales pressure, just a real conversation.
          </p>
          <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#6366f1', color: 'white', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1rem' }}>
            Get in Touch <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}
