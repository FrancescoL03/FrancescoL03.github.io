// Contenuti del portfolio: presentazione, progetti, competenze e contatti.
const TESI_REPO = 'https://github.com/FrancescoL03/Tesi';
const TESI_PDF = `${TESI_REPO}/blob/main/Tesi_Elettronica_Francesco_Lamanna.pdf`;

export const portfolio = {
  name: 'Francesco Lamanna',
  initials: 'FL',
  role: 'Studente magistrale in Informatica · Data Science e Machine Learning',
  location: 'Italia',
  email: 'francescolamanna03@hotmail.it',
  status: 'Studente magistrale · UniSA',

  hero: {
    eyebrow: 'INFORMATICA / DATA SCIENCE / AI',
    line1: 'Software.',
    line2: 'Dati.',
    line3: 'AI.',
    description:
      'Frequento il primo anno della Laurea Magistrale in Informatica, curriculum Data Science e Machine Learning. Mi interessano l’analisi dei dati e l’intelligenza artificiale, in particolare il funzionamento dei modelli e le loro applicazioni concrete.',
    artLabel: 'DATA / ANALYSIS / CODE',
  },

  about: {
    eyebrow: '01 / CHI SONO',
    headline: 'Chi\nsono',
    paragraph1:
      'Sono uno studente magistrale in Informatica all’Università degli Studi di Salerno, curriculum Data Science e Machine Learning. Dopo la laurea triennale ho scelto di approfondire l’analisi dei dati e il machine learning, mantenendo un forte interesse per la programmazione e lo sviluppo software.',
    paragraph2:
      'Mi piace affrontare i problemi in modo analitico e confrontarmi con gli altri per trovare soluzioni. I lavori di gruppo durante l’università e le attività associative mi hanno aiutato a sviluppare capacità di collaborazione, adattabilità e problem solving.',
    principles: [
      {
        number: '01', title: 'Teamwork',
        text: 'Collaboro volentieri con gli altri: ascoltare prospettive differenti e confrontare le idee aiuta a raggiungere obiettivi comuni.',
      },
      {
        number: '02', title: 'Adattabilità',
        text: 'Mi inserisco con facilità in gruppi e contesti nuovi, imparando gli strumenti necessari e contribuendo alle attività condivise.',
      },
      {
        number: '03', title: 'Problem solving',
        text: 'Analizzo i problemi con metodo, valuto le alternative e cerco soluzioni pratiche e motivate.',
      },
    ],
  },

  projects: [
    {
      id: 'futureforgegear',
      type: 'web',
      number: '01',
      title: 'FutureForgeGear',
      category: 'Università · Ingegneria del Software',
      description:
        'E-commerce di computer, componenti e periferiche sviluppato nell’ambito dell’esame di Ingegneria del Software. Include catalogo, carrello, gestione degli ordini e funzionalità per gli amministratori, con database relazionale e architettura web multilivello.',
      technologies: ['Java', 'Jakarta EE', 'Servlet', 'JSP', 'JPA', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/FrancescoL03/FutureForgeGear',
      githubLabel: 'Esplora la repository',
      extraLink: '',
      extraLabel: '',
      period: '2025 — 2026',
      // Screenshot ospitati nella repository del progetto.
      screenshots: [
        { src: 'https://raw.githubusercontent.com/FrancescoL03/FutureForgeGear/main/readmeassets/home1.png', label: 'Homepage' },
        { src: 'https://raw.githubusercontent.com/FrancescoL03/FutureForgeGear/main/readmeassets/home2.png', label: 'Vetrina prodotti' },
        { src: 'https://raw.githubusercontent.com/FrancescoL03/FutureForgeGear/main/readmeassets/catalogo.png', label: 'Catalogo' },
      ],
    },
    {
      id: 'tesi',
      type: 'research',
      number: '02',
      title: 'Embedding di immagini e AI generativa',
      category: 'Tesi triennale · Informatica',
      description:
        'La mia tesi, «Caratterizzazione degli embedding di immagini prodotte da differenti modelli generativi», studia e confronta rappresentazioni numeriche di immagini create con modelli generativi diversi. La repository raccoglie la tesi completa, gli artefatti di analisi e visualizzazioni t-SNE.',
      technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
      github: TESI_REPO,
      githubLabel: 'Esplora la repository',
      extraLink: TESI_PDF,
      extraLabel: 'Leggi la tesi',
      period: '2026',
      screenshots: [],
    },
  ],

  skills: {
    eyebrow: '03 / COMPETENZE',
    title1: 'Le mie',
    title2: 'competenze.',
    description:
      'Linguaggi, tecnologie e metodi affrontati durante gli studi e nei progetti universitari.',
    groups: [
      {
        title: 'Linguaggi di programmazione',
        items: ['Java', 'C', 'Python', 'JavaScript'],
        details: 'Programmazione procedurale e orientata agli oggetti; algoritmi e strutture dati.',
      },
      {
        title: 'Analisi dei dati e machine learning',
        items: ['NumPy', 'Pandas', 'Scikit-learn'],
        details: 'Elaborazione e analisi dei dati, studio degli embedding e tecniche di visualizzazione come t-SNE.',
      },
      {
        title: 'Database',
        items: ['SQL', 'MySQL'],
        details: 'Progettazione concettuale e logica, database relazionali e interrogazioni SQL.',
      },
      {
        title: 'Sviluppo web',
        items: ['HTML', 'CSS', 'Jakarta EE', 'Servlet', 'JSP', 'JPA'],
        details: 'Sviluppo di applicazioni web, gestione delle richieste e persistenza dei dati.',
      },
      {
        title: 'Strumenti',
        items: ['Git', 'GitHub', 'Maven', 'Apache TomEE', 'VS Code', 'IntelliJ IDEA', 'MySQL Workbench'],
        details: 'Versionamento, gestione delle dipendenze e ambienti utilizzati per lo sviluppo e i database.',
      },
    ],
  },

  journey: [
    {
      period: 'SET 2026 — OGGI',
      type: 'LAUREA MAGISTRALE · IN CORSO',
      title: 'Informatica · Data Science e Machine Learning',
      school: 'Università degli Studi di Salerno',
      description:
        'Ho iniziato la magistrale a settembre 2026. Ho scelto il curriculum Data Science e Machine Learning per approfondire l\'analisi dei dati e l\'intelligenza artificiale, con particolare attenzione al funzionamento dei modelli.',
    },
    {
      period: 'SET 2022 — SET 2026',
      type: 'LAUREA TRIENNALE · CONSEGUITA',
      title: 'Laurea in Informatica',
      school: 'Università degli Studi di Salerno · 88/110',
      description:
        'Il percorso triennale mi ha fornito una preparazione in programmazione, algoritmi, strutture dati, basi di dati e ingegneria del software. Ho applicato queste conoscenze in progetti universitari e concluso gli studi con una tesi dedicata agli embedding di immagini generate da modelli differenti.',
    },
    {
      period: '2017 — 2022',
      type: 'DIPLOMA',
      title: 'Amministrazione, Finanza e Marketing',
      school: 'Istituto Tecnico Commerciale Cenni-Marconi · 77/100',
      description:
        'Ho approfondito le basi di economia aziendale e amministrazione, realizzando attività legate alla costruzione di un business plan e all’utilizzo degli strumenti Microsoft Office.',
    },
  ],

  thesis: {
    eyebrow: 'TESI TRIENNALE',
    title: 'Caratterizzazione degli embedding di immagini prodotte da differenti modelli generativi',
    description:
      'La ricerca mette a confronto gli embedding di immagini generate da modelli differenti, per esplorare come queste rappresentazioni si distribuiscono nello spazio. Nella repository sono disponibili il PDF della tesi, gli artefatti elaborati e le visualizzazioni interattive t-SNE.',
    highlights: [
      'Confronto tra embedding di immagini sintetiche',
      'Analisi e organizzazione dei dati con Python, NumPy e Pandas',
      'Visualizzazioni t-SNE degli spazi di embedding',
    ],
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
    github: TESI_REPO,
    pdf: TESI_PDF,
  },

  contact: {
    eyebrow: '05 / CONTATTI',
    title1: 'Le idee crescono',
    title2: 'quando si',
    title3: 'incontrano.',
    description: 'Hai una proposta, un’opportunità o vuoi confrontarti? Scrivimi: sarò felice di parlarne.',
  },

  social: {
    github: 'https://github.com/FrancescoL03',
    linkedin: 'https://www.linkedin.com/in/francesco-lamanna-871a39321/',
    cv: '',
  },
};
