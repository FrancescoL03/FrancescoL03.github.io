import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2, Copy,
  Database, ExternalLink, Github, Linkedin, Mail, Menu, X,
} from 'lucide-react';
import { portfolio as data } from './portfolioData';

const nav = [
  { label: 'Chi sono', href: '#about' },
  { label: 'Progetti', href: '#work' },
  { label: 'Competenze', href: '#skills' },
  { label: 'Percorso', href: '#journey' },
];

function Eyebrow({ children, className = '' }) {
  return <span className={`eyebrow ${className}`}><span className="eyebrow-line" />{children}</span>;
}

function SectionHeader({ eyebrow, heading, description, number }) {
  return (
    <div className="section-header reveal">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{heading}</h2>
      </div>
      {description && <p>{description}</p>}
      <span className="section-header-number" aria-hidden="true">{number}</span>
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Francesco Lamanna, torna all'inizio" onClick={() => setMobileOpen(false)}>
          <span className="brand-monogram">FL<span>.</span></span>
          <span className="brand-caption">FRANCESCO LAMANNA<small>PORTFOLIO / 2026</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          {nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-right">
          <a className="header-contact" href="#contact">Contattami <ArrowUpRight size={16} /></a>
          <button type="button" className="mobile-menu-button" onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'} aria-expanded={mobileOpen} aria-controls="mobile-nav">
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${mobileOpen ? 'mobile-nav-open' : ''}`} id="mobile-nav" aria-label="Navigazione mobile" aria-hidden={!mobileOpen} inert={!mobileOpen ? '' : undefined}>
        {[...nav, { label: 'Contatti', href: '#contact' }].map((item, i) => <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}><small>0{i+1}</small>{item.label}<ArrowUpRight size={19}/></a>)}
      </nav>
    </header>
  );
}

// Una visualizzazione astratta dei dati: decorativa, senza metriche inventate.
const nodes = [
  [38,74], [98,37], [130,129], [180,69], [212,170], [240,32], [291,116],
  [331,52], [361,173], [415,100], [451,38], [467,202], [95,232], [171,254],
  [273,246], [351,265], [417,277], [39,171], [487,133],
];
const edges = [[0,1],[0,2],[0,17],[1,3],[2,3],[2,12],[3,4],[3,5],[3,6],[4,6],[4,13],[5,7],[6,7],[6,8],[6,14],[7,9],[7,10],[8,9],[8,15],[9,10],[9,11],[9,18],[11,16],[12,13],[13,14],[14,15],[15,16]];
function DataArtwork() {
  return (
    <div className="data-art" role="img" aria-label="Visualizzazione astratta di una rete di dati con nodi e connessioni">
      <div className="art-orbit art-orbit-a" /><div className="art-orbit art-orbit-b" />
      <div className="art-corner art-corner-tl">FIG. 01 / CONNECTIONS</div>
      <div className="art-corner art-corner-br">SIGNAL / STRUCTURE / PATTERN</div>
      <div className="art-main-card">
        <div className="art-card-header"><span><i className="art-live-dot" /> EXPLORATION / 01</span><span className="art-top-icons">○ ○ ✕</span></div>
        <div className="art-chart">
          <div className="art-chart-grid" />
          <svg viewBox="0 0 520 310" preserveAspectRatio="xMidYMid meet" focusable="false" aria-hidden="true">
            <defs>
              <radialGradient id="nodeGlow"><stop offset="0%" stopColor="#fff" stopOpacity=".25"/><stop offset="100%" stopColor="#fff" stopOpacity="0"/></radialGradient>
            </defs>
            {edges.map(([a,b],i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#b4b4b4" strokeWidth="1" opacity={.28 + (i % 3) * .09}/>) }
            {nodes.map(([x,y],i) => <g key={i}><circle cx={x} cy={y} r={i === 6 || i === 9 ? 20 : 10} fill="url(#nodeGlow)"/><circle cx={x} cy={y} r={i === 6 || i === 9 ? 5 : 3} fill={i === 6 || i === 9 ? '#fff' : '#acacac'}/></g>)}
            <circle cx="291" cy="116" r="35" stroke="white" strokeOpacity=".28" fill="none" strokeDasharray="3 6"/>
            <circle cx="415" cy="100" r="24" stroke="white" strokeOpacity=".2" fill="none"/>
          </svg>
          <div className="art-chart-readout"><span>DATA POINTS</span><strong>{String(nodes.length).padStart(2,'0')}</strong><span>CONNECTED</span></div>
        </div>
        <div className="art-card-footer"><span>DATA IS A STARTING POINT.</span><Code2 size={20} strokeWidth={1.5}/></div>
      </div>
      <div className="art-float art-float-top"><span className="float-diamond">◇</span> FIND THE PATTERN <ArrowUpRight size={14}/></div>
      <div className="art-float art-float-bottom"><Database size={17}/> {data.hero.artLabel}</div>
      <span className="art-asterisk">✳</span>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="status-pill"><span className="status-dot"/>{data.status}</span>
          <Eyebrow>{data.hero.eyebrow}</Eyebrow>
          <h1><span>{data.hero.line1}</span><span>{data.hero.line2}</span><span className="hero-highlight">{data.hero.line3}<i>✳</i></span></h1>
          <p>{data.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#work">Esplora i progetti <ArrowUpRight size={19}/></a>
            <a className="button button-ghost" href="#about">Chi sono <ArrowRight size={18}/></a>
          </div>
          <div className="hero-bottom">
            <div><span>ATTUALMENTE</span><strong>DATA SCIENCE & MACHINE LEARNING</strong></div>
            <div><span>FORMAZIONE</span><strong>UNIVERSITÀ DEGLI STUDI DI SALERNO</strong></div>
          </div>
        </div>
        <DataArtwork />
      </div>
      <a className="hero-scroll" href="#about">SCORRI PER ESPLORARE <ArrowDown size={17}/></a>
    </section>
  );
}

function Marquee() {
  return <div className="marquee" aria-hidden="true"><div className="marquee-track">
    {Array.from({length: 4}, (_,i) => <span className="marquee-group" key={i}>DATA <em>✳</em> SOFTWARE <em>✳</em> MACHINE LEARNING <em>✳</em> ANALYSIS <em>✳</em></span>)}
  </div></div>;
}

function About() {
  return (
    <section id="about" className="section about light-section">
      <div className="container about-grid">
        <div className="about-aside reveal">
          <Eyebrow>{data.about.eyebrow}</Eyebrow>
          <div className="about-stamp"><span>STUDENTE<br/>MAGISTRALE<br/>UNISA</span><span>✳</span></div>
        </div>
        <div className="about-main">
          <h2 className="about-headline reveal">{data.about.headline.split('\n').map((line,i) => <span key={i}>{line}</span>)}</h2>
          <div className="about-bio reveal"><p>{data.about.paragraph1}</p><p>{data.about.paragraph2}</p></div>
          <div className="principles">
            {data.about.principles.map(item => <div className="principle reveal" key={item.number}><span className="principle-n">{item.number} /</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight size={20}/></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenshotVisual({ project }) {
  const [index, setIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const slides = project.screenshots || [];
  const go = (value) => { setIndex((value + slides.length) % slides.length); setImageFailed(false); };
  return (
    <div className="project-visual">
      <div className="project-stage-grain" aria-hidden="true" />
      <div className="visual-caption">{project.number} / LAVORO SELEZIONATO</div>
      <div className="browser-frame">
        <div className="browser-bar"><span className="browser-dots"><i/><i/><i/></span><span className="browser-address">{project.id} / {slides[index]?.label?.toLowerCase().replaceAll(' ', '-') || 'preview'}</span><span className="browser-symbol">↗</span></div>
        <div className="browser-content">
          {slides.length > 0 && !imageFailed ? (
            <img key={slides[index].src} src={slides[index].src} alt={`Schermata di ${project.title}: ${slides[index].label}`} loading="lazy" decoding="async" onError={() => setImageFailed(true)} />
          ) : (
            <div className="browser-fallback"><Code2 size={44}/><strong>{project.title.toUpperCase()}</strong><span>Anteprima non disponibile offline.<br/>Le schermate sono nella repository GitHub.</span></div>
          )}
        </div>
        <div className="browser-foot"><span>SCREENSHOT / {String(index+1).padStart(2,'0')}</span><span>{project.title.toUpperCase()}</span></div>
      </div>
      {slides.length > 1 && <div className="slide-controls">
        <button type="button" onClick={() => go(index-1)} aria-label="Screenshot precedente"><ArrowLeft size={19}/></button>
        <span aria-live="polite">{slides[index].label} &nbsp; · &nbsp; {String(index+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span>
        <button type="button" onClick={() => go(index+1)} aria-label="Screenshot successivo"><ArrowRight size={19}/></button>
      </div>}
    </div>
  );
}

// Anteprima illustrativa della ricerca: i punti NON sono risultati sperimentali.
// La repository contiene visualizzazioni t-SNE reali consultabili dall'utente.
const conceptualPoints = Array.from({ length: 72 }, (_, i) => {
  const group = i % 3;
  const n = Math.floor(i / 3);
  const theta = n * 2.39996 + group * 0.41;
  const spread = 13 + Math.sqrt(n / 24) * (group === 1 ? 72 : 58);
  const centers = [[145, 212], [333, 126], [365, 264]];
  return { x: centers[group][0] + Math.cos(theta) * spread, y: centers[group][1] + Math.sin(theta) * spread * .68, group };
});

function ResearchVisual({ project }) {
  return (
    <div className="project-visual research-visual">
      <div className="project-stage-grain" aria-hidden="true" />
      <div className="visual-caption">{project.number} / TESI TRIENNALE</div>
      <div className="research-window" role="img" aria-label="Illustrazione concettuale di tre gruppi di embedding su un piano cartesiano. Non rappresenta dati reali della tesi.">
        <div className="research-toolbar"><span><i /> EMBEDDING EXPLORER</span><span>VISUAL / 02</span></div>
        <div className="research-body">
          <div className="research-topline"><span>FEATURE SPACE / 2D</span><span>t-SNE / CONCEPT</span></div>
          <svg className="research-chart" viewBox="0 0 520 365" aria-hidden="true" focusable="false">
            <defs>
              <pattern id="researchGrid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M 42 0 L 0 0 0 42" fill="none" stroke="#ffffff" strokeOpacity=".095" strokeWidth="1" /></pattern>
            </defs>
            <rect x="0" y="0" width="520" height="365" fill="url(#researchGrid)" />
            <line x1="35" y1="337" x2="495" y2="337" stroke="#ffffff" strokeOpacity=".28" />
            <line x1="35" y1="26" x2="35" y2="337" stroke="#ffffff" strokeOpacity=".28" />
            {conceptualPoints.map((pt, i) => <circle key={i} cx={pt.x} cy={pt.y} r={pt.group === 1 ? 4.1 : 3.5} fill={['#fff', '#8c8c8c', '#4b4b4b'][pt.group]} stroke="#ffffff" strokeOpacity=".18" strokeWidth=".6" opacity=".88" />)}
            <text x="477" y="357" fontSize="11" fill="#8b8b8b">DIM 1</text>
            <text x="7" y="26" fontSize="11" fill="#8b8b8b">DIM 2</text>
          </svg>
          <div className="research-legend"><span><i className="legend-one" /> Gruppo A</span><span><i className="legend-two" /> Gruppo B</span><span><i className="legend-three" /> Gruppo C</span></div>
        </div>
        <div className="research-bottomline"><span>IMMAGINI GENERATIVE / EMBEDDINGS</span><span>ILLUSTRAZIONE CONCETTUALE</span></div>
      </div>
      <span className="research-corner-note">MODEL COMPARISON / 2026</span>
    </div>
  );
}

function ProjectVisual({ project }) {
  return project.type === 'research' ? <ResearchVisual project={project} /> : <ScreenshotVisual project={project} />;
}

function Work() {
  return (
    <section id="work" className="section work light-section">
      <div className="container">
        <SectionHeader eyebrow="02 / PROGETTI SELEZIONATI" number="02" heading={<>Dalla teoria<br/><span>alla pratica.</span></>} description="Due esperienze universitarie, con obiettivi diversi: una dedicata allo sviluppo software e una all’analisi dei dati nell’ambito dell’intelligenza artificiale." />
        {data.projects.map(project => <article className={`project-card project-card-${project.type}`} key={project.id}>
          <ProjectVisual project={project}/>
          <div className="project-info reveal">
            <div className="project-meta"><span>{project.category}</span><span>{project.period}</span></div>
            <div className="project-info-main"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-cta-group"><a className="project-github" href={project.github} target="_blank" rel="noopener noreferrer"><Github size={19}/> {project.githubLabel || 'Repository GitHub'} <ArrowUpRight size={17}/></a>{project.extraLink && <a href={project.extraLink} target="_blank" rel="noopener noreferrer" className="project-demo">{project.extraLabel || 'Approfondisci'} <ExternalLink size={16}/></a>}</div></div>
            <div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
          </div>
        </article>)}
        <p className="work-note reveal"><span>✳</span> NUOVI PROGETTI IN ARRIVO.</p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills dark-section">
      <div className="container skills-grid">
        <div className="skills-lead reveal"><Eyebrow>{data.skills.eyebrow}</Eyebrow><h2>{data.skills.title1}<br/><span>{data.skills.title2}</span></h2><p>{data.skills.description}</p><div className="skills-orbit" aria-hidden="true">✳<span>STUDY / ANALYZE / BUILD</span></div></div>
        <div className="skills-rows">
          {data.skills.groups.map((group,i) => <div className="skill-row reveal" key={group.title}><div className="skill-row-heading"><span>0{i+1}</span><h3>{group.title}</h3><ArrowUpRight size={20}/></div><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div>{group.details && <p className="skill-detail">{group.details}</p>}</div>)}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section journey light-section">
      <div className="container">
        <SectionHeader eyebrow="04 / IL MIO PERCORSO" number="04" heading={<>Ogni passo<br/><span>aggiunge qualcosa.</span></>} description="Dalle basi informatiche all’approfondimento di dati e intelligenza artificiale: un percorso di studio ancora in evoluzione." />
        <div className="timeline">
          {data.journey.map((entry,i) => <div className="timeline-item reveal" key={entry.period}><div className="timeline-count">0{i+1}</div><div className="timeline-period">{entry.period}</div><div className="timeline-text"><span>{entry.type}</span><h3>{entry.title}</h3><strong>{entry.school}</strong><p>{entry.description}</p></div><ArrowUpRight className="timeline-arrow" size={21}/></div>)}
        </div>
        <div className="thesis reveal">
          <div className="thesis-left"><span className="thesis-asterisk">✳</span><Eyebrow>{data.thesis.eyebrow}</Eyebrow><span className="thesis-mark">RESEARCH / 2026</span></div>
          <div className="thesis-right"><h3>{data.thesis.title}</h3><p>{data.thesis.description}</p>
            <ul className="thesis-highlights">{data.thesis.highlights.map(item => <li key={item}>{item}</li>)}</ul>
            <div className="thesis-bottom"><div className="project-tags">{data.thesis.technologies.map(t => <span key={t}>{t}</span>)}</div>
              <div className="thesis-links">{data.thesis.github && <a href={data.thesis.github} target="_blank" rel="noopener noreferrer">Repository tesi <ArrowUpRight size={17}/></a>}{data.thesis.pdf && <a href={data.thesis.pdf} target="_blank" rel="noopener noreferrer">PDF della tesi <ExternalLink size={16}/></a>}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied,setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${data.email}`;
    }
  }
  return (
    <section id="contact" className="contact dark-section"><div className="container"><div className="contact-panel">
      <div className="contact-head"><Eyebrow>{data.contact.eyebrow}</Eyebrow><span><span className="contact-live"/> CONTATTI E OPPORTUNITÀ</span></div>
      <h2>{data.contact.title1}<br/>{data.contact.title2}<br/><span>{data.contact.title3}</span></h2>
      <div className="contact-bottom"><p>{data.contact.description}</p><div className="contact-actions"><a href={`mailto:${data.email}`} className="contact-write">Scrivimi un'email <ArrowUpRight size={22}/></a><button type="button" className="contact-copy" onClick={copyEmail} aria-label="Copia indirizzo email" title="Copia email">{copied ? <Check size={21}/> : <Copy size={21}/>}</button></div></div>
      {copied && <span className="copy-success" role="status">Email copiata!</span>}
      <span className="contact-decor" aria-hidden="true">↗</span>
    </div></div></section>
  );
}

function Footer() {
  return <footer className="footer dark-section"><div className="container">
    <div className="footer-top"><div><a href="#top" className="footer-name">{data.name}<span>✳</span></a><p>Informatica · Data Science · AI.</p></div><div className="footer-social">
      <a href={data.social.github} target="_blank" rel="noopener noreferrer"><Github size={18}/> GITHUB <ArrowUpRight size={15}/></a>
      <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/> LINKEDIN <ArrowUpRight size={15}/></a>
      {data.social.cv && <a href={data.social.cv} target="_blank" rel="noopener noreferrer"><ExternalLink size={18}/> CV <ArrowUpRight size={15}/></a>}
      <a href={`mailto:${data.email}`}><Mail size={18}/> EMAIL <ArrowUpRight size={15}/></a>
    </div></div>
    <div className="footer-base"><span>© {new Date().getFullYear()} FRANCESCO LAMANNA</span><a href="#top">TORNA SU ↑</a></div>
  </div></footer>;
}

function ScrollProgress() {
  const [progress,setProgress] = useState(0);
  useEffect(() => {
    let frame;
    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? 100 * window.scrollY / max : 0);
      });
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', update); cancelAnimationFrame(frame); };
  }, []);
  return <div className="scroll-progress" style={{width: `${progress}%`}} aria-hidden="true"/>;
}

export default function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.04, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <><a className="skip-link" href="#about">Vai al contenuto</a><ScrollProgress/><Header/><main><Hero/><Marquee/><About/><Work/><Skills/><Journey/><Contact/></main><Footer/></>;
}
