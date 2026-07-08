export type Project = {
  name: string
  category: string
  status: string
  problem: string
  solution: string
  tools: string[]
  href?: string
  demoHref?: string
  featured?: boolean
}

export const focusAreas = [
  'Sales Operations',
  'Quoting & RFQ Workflows',
  'Dashboard Development',
  'Business Analysis',
  'Economic Analysis',
  'Project Coordination',
]

export const projects: Project[] = [
  {
    name: 'Finance Market Intelligence Dashboard',
    category: 'Finance / Data Dashboard',
    status: 'Live Demo',
    problem:
      'Market data can be scattered across equities, ETFs, futures, and proxy instruments, making it hard to compare performance, risk, drawdown, and correlations quickly.',
    solution:
      'A Docker-refreshable SQLite and CSV data pipeline with a browser dashboard for comparing 17 market groups, 36 instruments, indexed performance, return versus risk, and pairwise strategy comparisons.',
    tools: [
      'Python',
      'SQLite',
      'Docker',
      'Power Automate',
      'Dashboard design',
      'Market data',
      'CSV/XLSX outputs',
      'Interactive charts',
    ],
    href: '/projects/finance-market-dashboard',
    demoHref: '/demos/finance-dashboard/index.html',
    featured: true,
  },
  {
    name: 'Quote & Project Management Dashboard',
    category: 'Sales Operations / Excel Dashboard',
    status: 'In Development',
    problem:
      'Sales and project teams need better visibility into quotes, bidders, active bids, quote status, project value, and outside sales follow-ups.',
    solution:
      'An Excel-based dashboard using structured project data, dynamic lists, KPI summaries, follow-up tracking, and project-level reporting.',
    tools: [
      'Excel',
      'Dynamic arrays',
      'Dashboard design',
      'Data cleaning',
      'Sales operations',
      'KPI design',
      'Project tracking',
    ],
    featured: true,
  },
  {
    name: 'Canadian Regional Economic Intelligence Dashboard',
    category: 'Economic Analysis / Business Intelligence',
    status: 'Planning / In Development',
    problem:
      'Economic pressure varies by region, but people often lack a clean way to compare cost of living, inflation, housing, and income conditions across Canada.',
    solution:
      'A dashboard concept that tracks regional economic indicators and presents them in a practical, decision-friendly format.',
    tools: [
      'Economic analysis',
      'Data sourcing',
      'Dashboard planning',
      'Power BI',
      'APIs',
      'Python',
      'Regional comparison',
    ],
    featured: true,
  },
  {
    name: 'Inside Sales Representative AI Prompt Manual',
    category: 'Workflow Improvement / AI Operations',
    status: 'Drafted',
    problem:
      'Inside sales representatives handle repeated workflows involving RFQs, sourcing, supplier emails, quote comparisons, and customer responses.',
    solution:
      'A structured AI prompt manual to help inside sales teams draft emails, analyze requests, compare quotes, source products, and improve workflow consistency.',
    tools: [
      'Workflow mapping',
      'Prompt engineering',
      'Sales operations',
      'Documentation',
      'RFQ support',
      'Business communication',
    ],
  },
  {
    name: 'Mock Portfolio & Investing Sandbox',
    category: 'Finance / Product Concept',
    status: 'Concept',
    problem:
      'People may want to test trading strategies and portfolio decisions before using real money.',
    solution:
      'A simulated investing app concept where users can mock trades, build sample portfolios, and evaluate performance using APIs and market data.',
    tools: [
      'Product planning',
      'Finance concepts',
      'API planning',
      'Portfolio logic',
      'User workflow design',
    ],
  },
]

export const resumeSkillGroups = [
  {
    title: 'Business & Operations',
    skills: [
      'Sales Operations',
      'RFQ Support',
      'Quoting Workflows',
      'Customer Communication',
      'Project Coordination',
      'Process Improvement',
    ],
  },
  {
    title: 'Analytics & Tools',
    skills: [
      'Microsoft Excel',
      'Dashboard Development',
      'Data Analysis',
      'Power BI',
      'SQL Fundamentals',
      'Python Fundamentals',
    ],
  },
  {
    title: 'Economic & Research',
    skills: [
      'Economic Analysis',
      'Data Interpretation',
      'Policy Analysis',
      'Research & Writing',
      'Critical Thinking',
    ],
  },
]
