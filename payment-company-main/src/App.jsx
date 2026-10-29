import { useState } from 'react'
import './App.css'

const domains = [
  { id: 'customer', number: '01', name: 'Customer Payment Portal', shortName: 'Customer', purpose: 'A protected surface for customers to view payment activity and manage their own transactions.', users: 'Customers', zone: 'DMZ / public edge', controls: ['Session management', 'Password hashing', 'Input validation'], status: 'Protected', accent: 'mint' },
  { id: 'merchant', number: '02', name: 'Merchant Management Portal', shortName: 'Merchant', purpose: 'A role-aware workspace for onboarding merchants, requesting settlements, and reviewing reports.', users: 'Merchant operators', zone: 'Partner zone', controls: ['RBAC', 'Audit logging', 'Secure APIs'], status: 'Protected', accent: 'blue' },
  { id: 'engine', number: '03', name: 'Payment Processing Engine', shortName: 'Processing', purpose: 'An internal-only transaction service that validates, routes, and tracks payment state.', users: 'Internal services', zone: 'Core services', controls: ['mTLS service identity', 'Request validation', 'Encrypted communication'], status: 'Internal only', accent: 'amber' },
  { id: 'fraud', number: '04', name: 'Fraud Monitoring Center', shortName: 'Fraud', purpose: 'A restricted analyst cockpit for risk scoring, suspicious activity review, and alert management.', users: 'Fraud analysts', zone: 'Restricted zone', controls: ['Step-up authentication', 'Alert management', 'Security logging'], status: 'Restricted', accent: 'coral' },
  { id: 'support', number: '05', name: 'Support & Compliance Portal', shortName: 'Support', purpose: 'A controlled case-management space for tickets, disputes, KYC tracking, and compliance reviews.', users: 'Support & compliance', zone: 'Restricted zone', controls: ['Role-based access', 'Audit trails', 'Sensitive data protection'], status: 'Restricted', accent: 'violet' },
]

const telemetry = [['TLS termination', 'Healthy', '100%'], ['API authentication', 'Healthy', '5 / 5 domains'], ['Audit pipeline', 'Healthy', '12.4k events']]

function App() {
  const [activeDomain, setActiveDomain] = useState('customer')
  const selected = domains.find((domain) => domain.id === activeDomain)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">P</span><span>PAYMENT<br /><b>COMPANY</b></span></div>
        <div className="sidebar-label">Architecture map</div>
        <nav aria-label="Application domains">
          {domains.map((domain) => <button className={`domain-nav ${activeDomain === domain.id ? 'active' : ''}`} key={domain.id} onClick={() => setActiveDomain(domain.id)}><span className={`nav-dot ${domain.accent}`}></span><span><small>{domain.number}</small>{domain.shortName}</span>{activeDomain === domain.id && <span className="nav-arrow">→</span>}</button>)}
        </nav>
        <div className="sidebar-footer"><span className="live-dot"></span><span><b>Prototype mode</b><small>No live payment rails</small></span></div>
      </aside>

      <main className="main-content">
        <header className="topbar"><div><span className="eyebrow">SECURITY ARCHITECTURE / PROJECT 06</span><h1>Trust boundary console</h1></div><div className="topbar-meta"><span className="status-pill"><i></i> All controls nominal</span><span className="avatar">SC</span></div></header>
        <section className="hero-band"><div><p className="kicker">Five domains. One defensible ecosystem.</p><h2>See the boundary<br /><em>before the breach.</em></h2><p className="hero-copy">A lightweight reference architecture for a payment company. Every domain has a narrow purpose, explicit trust zone, and observable security controls.</p></div><div className="hero-graphic" aria-hidden="true"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="core-node"><span>PC</span><small>CORE</small></div><div className="orbit-node node-a">01</div><div className="orbit-node node-b">03</div><div className="orbit-node node-c">05</div></div></section>
        <section className="metric-row" aria-label="Architecture summary"><div><span className="metric-value">05</span><span className="metric-label">separate domains</span></div><div><span className="metric-value">04</span><span className="metric-label">trust zones</span></div><div><span className="metric-value">09</span><span className="metric-label">core controls</span></div><div className="metric-note"><span className="pulse"></span> Designed for review, not production traffic</div></section>
        <section className="workspace-grid"><div className="domain-panel"><div className="section-heading"><div><span className="eyebrow">SELECTED DOMAIN</span><h3>{selected.number} / {selected.name}</h3></div><span className={`zone-tag ${selected.accent}`}>{selected.zone}</span></div><p className="domain-purpose">{selected.purpose}</p><div className="detail-grid"><div><span className="detail-label">Primary users</span><strong>{selected.users}</strong></div><div><span className="detail-label">Access posture</span><strong>{selected.status}</strong></div></div><div className="control-list"><span className="detail-label">Required controls</span>{selected.controls.map((control) => <div className="control-item" key={control}><span className="check">✓</span>{control}<span className="control-state">enforced</span></div>)}</div></div><div className="telemetry-panel"><div className="section-heading"><div><span className="eyebrow">CONTROL PLANE</span><h3>Security telemetry</h3></div><span className="small-link">LIVE VIEW</span></div>{telemetry.map(([label, state, value]) => <div className="telemetry-row" key={label}><span className="telemetry-icon">◈</span><span>{label}<small>{state}</small></span><b>{value}</b></div>)}<div className="boundary-note"><span className="shield">+</span><span><b>Defense in depth</b><small>Identity, network, data, and audit controls are layered across every zone.</small></span></div></div></section>
        <section className="domain-strip"><div className="section-heading"><div><span className="eyebrow">DOMAIN DIRECTORY</span><h3>Navigate the ecosystem</h3></div><span className="directory-count">{domains.length} applications</span></div><div className="domain-cards">{domains.map((domain) => <button key={domain.id} className={`domain-card ${activeDomain === domain.id ? 'selected' : ''}`} onClick={() => setActiveDomain(domain.id)}><div className={`card-number ${domain.accent}`}>{domain.number}</div><span className="card-zone">{domain.zone}</span><h4>{domain.shortName}</h4><p>{domain.purpose}</p><span className="card-link">Open domain <b>→</b></span></button>)}</div></section>
        <footer><span>ACADEMIC REFERENCE ARCHITECTURE</span><span>Payment Company / Project 06</span><span>v1.0 · 2026</span></footer>
      </main>
    </div>
  )
}

export default App
