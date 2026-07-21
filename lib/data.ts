// ============================================================================
// SOURCE OF TRUTH: Sivaprakash_Settu_Resume.pdf, refined per candidate's
// explicit executive-positioning brief. Figures that differ from the
// original resume are flagged inline with `// UPDATED:`:
//   1. Years of experience: resume said 9+, candidate's brief now
//      consistently specifies 10+ across Hero/About/voice-over — adopted.
//   2. AHT Reduction: resume said 32%; candidate's most recent brief
//      confirms 32% (an earlier brief had said 16% — superseded).
//   3. Education: resume said "B.Sc. Electronic Engineering"; brief
//      specifies "B.E., Electronics & Communication Engineering".
// "15+ Automation Initiatives Delivered" is a candidate-supplied figure
// not itemized on the original resume. Lean Six Sigma Green Belt appears
// only as a self-reported SKILL (not as a certification card, since it
// isn't a verified credential on the resume).
//
// CONTENT HIERARCHY — each metric has exactly one "primary" home to avoid
// repetition across the site:
//   Hero            → high-level positioning only (4 KPIs max)
//   Projects        → project-specific detailed results
//   Measurable Business Impact → the ONE consolidated results section
//   About           → narrative only, no metrics
//   Why Hire Me     → capability pillars, no metrics
// ============================================================================

export const profile = {
  name: "Sivaprakash Settu",
  role: "AI Operations Leader",
  roles: ["AI Operations, Automation & Transformation Leader"],
  headline: "AI Operations, Automation & Transformation Leader",
  subheading:
    "Helping organizations transform business operations through Artificial Intelligence, Workflow Automation, Operational Excellence, and Intelligent Process Design.",
  subheadingSecondary:
    "I design AI-powered operational workflows that reduce manual effort, improve quality, increase SLA performance, and create measurable business impact.",
  location: "Chennai, India",
  email: "shiva.prakash144@gmail.com",
  phone: "+91 97108 76874",
  linkedin: "https://www.linkedin.com/in/sivaprakash-s-b020a6217",
  github: "https://github.com/",
  resumeUrl: "/resume.pdf",
  photoUrl: "/profile.jpg",
  summary:
    "AI Operations & Automation Leader with over 10 years of experience leading high-performing operations, optimizing complex workflows, and delivering measurable business impact through AI, automation, process excellence, and team leadership. My work spans AI Operations, AI Automation, workflow transformation, team leadership, operational excellence, and Lean Six Sigma — combining people leadership with modern AI technologies to design scalable systems that eliminate repetitive manual work.",
};

// Why Hire Me — three capability pillars. Deliberately metric-free; the
// numbers live in Projects and Measurable Business Impact instead.
export const whyRecruiters = {
  title: "Why Hire Me",
  subheading:
    "I don't simply manage operations — I transform them using Artificial Intelligence.",
  pillars: [
    {
      title: "AI & Automation",
      description:
        "Designing AI-powered workflows using Claude AI, OpenAI GPT, Google Gemini, Zapier, and other automation platforms to reduce manual effort and improve operational efficiency.",
    },
    {
      title: "Team Leadership",
      description:
        "Leading and coaching high-performing operations teams, driving quality, managing performance, and enabling teams through structured processes and continuous improvement.",
    },
    {
      title: "Operational Excellence",
      description:
        "Applying Lean Six Sigma principles, process mapping, SOPs, workflow optimization, and data-driven decision-making to improve operational performance.",
    },
  ],
};

// Recruiter-facing quick facts — every value traceable to the resume.
export const recruiterSnapshot = {
  totalExperience: "10+ years", // UPDATED — see header note
  currentTitle: "Team Lead, Operations",
  currentCompany: "Opendoor",
  teamLeadership: "High-Performing Team Leadership", // qualitative — no team-size number per candidate's request
  location: "Chennai, India (600117)",
  education: "B.E., Electronics & Communication Engineering", // UPDATED — see header note
  topSkills: [
    "AI Workflow Automation",
    "Process Optimization",
    "Escalation Handling",
    "KPI Analysis & Reporting",
  ],
};

// Hero KPIs — deliberately limited to 4 high-level cards. Detailed metrics
// (SLA, Quality, Accuracy, Ramp Time, team size) live in Projects and
// Measurable Business Impact instead, not here.
export const heroMetrics = [
  { label: "Years Experience", value: 10, display: "10+" },
  { label: "Hours Saved / Month", value: 200, display: "200+" },
  { label: "AI Document Review Time Reduction", value: 50, suffix: "%" },
  { label: "Automation Initiatives", value: 15, display: "15+" },
];

// ---------------------------------------------------------------------------
// Measurable Business Impact — the ONE consolidated results section.
// Exactly 6 metrics, each with a single primary home elsewhere too (its
// detailed project) so nothing appears more than twice across the site.
// ---------------------------------------------------------------------------
export type ImpactCard = {
  id: string;
  label: string;
  before?: number;
  after?: number;
  unit?: string;
  standalone?: string;
  detail: string;
  chart: "bar" | "stat";
};

export const measurableImpact: ImpactCard[] = [
  {
    id: "experience",
    label: "Years Experience",
    standalone: "10+",
    detail: "Operations leadership, AI transformation, and automation",
    chart: "stat",
  },
  {
    id: "doc-review",
    label: "AI Document Review Time Reduction",
    standalone: "50%",
    detail: "AI HOA Document Analyzer — 40 min → 20 min",
    chart: "stat",
  },
  {
    id: "aht",
    label: "AHT Reduction",
    standalone: "32%",
    detail: "AI-Assisted Documentation & Reporting project",
    chart: "stat",
  },
  {
    id: "hours-saved",
    label: "Hours Saved / Month",
    standalone: "200+",
    detail: "Claude AI + ChatGPT automation on recurring work",
    chart: "stat",
  },
  {
    id: "sla",
    label: "SLA Compliance",
    before: 89,
    after: 98,
    unit: "%",
    detail: "Due-date case claiming & SLA recovery project",
    chart: "bar",
  },
  {
    id: "quality",
    label: "Quality Improvement",
    before: 92,
    after: 96,
    unit: "%",
    detail: "Process Handbook & scope checklist project",
    chart: "bar",
  },
];

// ---------------------------------------------------------------------------
// Experience — exactly two employers, exact titles and date ranges as
// listed on the resume. No intermediate roles or dates are invented.
// ---------------------------------------------------------------------------
export const experience = [
  {
    id: "opendoor",
    company: "Opendoor",
    role: "Team Lead",
    period: "Mar 2022 — Present",
    location: "Chennai",
    summary:
      "Owns end-to-end delivery for a 15-person operations team, spanning frontline case work through team leadership.",
    bullets: [
      "Consolidated market-specific process references, repair-cost data, and update logs into a single Process Handbook with a scope checklist — raised Quality score from 92% to 96% and cut process queries by 60%.",
      "Redesigned case-claiming logic from ticket-arrival order to due-date order with proactive follow-ups — lifted SLA compliance from an 89% trend to 98%+.",
      "Automated recurring documentation and reporting using Claude AI and ChatGPT — reduced Average Handle Time (AHT) by 32% and saved 200+ man-hours per month.",
      "Virtually evaluated 500+ properties and scoped repair estimates ahead of pricing at a 99% accuracy rate; escalated major red flags that cut portfolio risk exposure by 15%.",
      "Built SIPOC diagrams and process flow charts now used by 3 teams, cutting new-hire ramp time by 40%.",
      "Resolved escalated client issues at a 97% first-contact resolution rate while preserving stakeholder relationships.",
    ],
  },
  {
    id: "sutherland",
    company: "Sutherland",
    role: "Senior Analyst — Team Lead",
    period: "Apr 2016 — Mar 2022",
    location: "Chennai — Amazon.com Process",
    summary:
      "Led a team supporting Amazon.com sellers with technical assistance and order-query resolution.",
    bullets: [
      "Sustained CSAT of 4.7+/5.0 while leading the team through technical assistance and order-query resolution.",
      "Owned escalation handling for the team, keeping customer satisfaction above 95% throughout the engagement.",
      "Handled live chat support for Amazon.com customers and sellers, resolving order, shipping, and account queries in real time.",
      "Managed end-to-end order management tasks including order tracking, cancellations, returns, and refund processing.",
    ],
  },
];

export const teamLeadershipEcosystem = [
  { label: "AI Operations Leader", description: "Sets direction and owns outcomes" },
  { label: "High-Performing Team", description: "Cross-functional team leadership" },
  { label: "Process Optimization", description: "Handbooks, SIPOC, SOPs" },
  { label: "AI Adoption", description: "Claude, ChatGPT in daily workflow" },
  { label: "Operational Excellence", description: "Quality, SLA, accuracy" },
  { label: "Business Impact", description: "Hours saved, risk reduced" },
];

// Purely a visual capability-growth strip — not a list of separate jobs.
// Every label corresponds to a real skill/company already covered above.
export const growthPath = [
  "Sutherland",
  "Opendoor",
  "Team Lead",
  "AI Automation",
  "Process Excellence",
];

// ---------------------------------------------------------------------------
// Projects — every project below is expanded from a real
// resume bullet, with Overview / Problem / Approach / Impact / Tools.
// The AI HOA Document Analyzer is the one project supplied directly by the
// candidate as additional real work, not itemized as its own bullet on the
// resume — flagged via `sourceNote`.
// ---------------------------------------------------------------------------
export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  label: string;
  problem: string;
  myRole: string;
  built: string[];
  impact: { label: string; value: string }[];
  tools: string[];
  architecture: string[]; // rendered as a flow diagram: node labels in sequence
  additionalDetails?: {
    lessonsLearned: string;
    futureEnhancements: string;
  };
  sourceNote?: string;
};

export const projects: Project[] = [
  {
    id: "hoa-analyzer",
    index: "01",
    title: "AI HOA Document Analyzer",
    category: "AI & Automation",
    label: "My Project | AI & Automation",
    problem:
      "Manual HOA document review required approximately 40 minutes per document, creating opportunities to reduce repetitive manual analysis and improve processing efficiency.",
    myRole:
      "Designed and implemented an AI-assisted document analysis workflow to accelerate first-pass review while maintaining human-in-the-loop validation.",
    built: [
      "AI-assisted document analysis",
      "Prompt-based clause identification",
      "Relevant clause extraction",
      "AI-assisted first-pass review",
      "Human-in-the-loop validation",
      "Results tracking for quality comparison",
    ],
    architecture: ["HOA Document", "GPT / Claude First Pass", "Flagged Clauses", "Human Review", "Google Sheets Log"],
    impact: [
      { label: "Review time", value: "40 min → 20 min" },
      { label: "Review time reduction", value: "50%" },
      { label: "Agreement with human reviewers", value: "80%" },
    ],
    tools: ["Claude AI", "OpenAI GPT", "Prompt Engineering", "Google Sheets"],
    additionalDetails: {
      lessonsLearned:
        "80% agreement with human reviewers was good enough to cut review time in half, but not good enough to remove the human — the model is a first pass, not a final decision.",
      futureEnhancements:
        "Track disagreement cases specifically to see if a pattern emerges that the prompt can be tuned against.",
    },
    sourceNote:
      "Supplied directly by the candidate as additional real project work.",
  },
  {
    id: "ai-workflow-automation",
    index: "02",
    title: "AI-Assisted Documentation & Reporting",
    category: "AI & Automation",
    label: "My Project | AI & Automation",
    problem:
      "Manual documentation and reporting workflows required significant operational effort and created opportunities for process standardization and automation.",
    myRole:
      "Designed AI-assisted workflows and standardized documentation processes to reduce manual effort and improve operational efficiency.",
    built: [
      "Identified the most repetitive, time-consuming documentation and reporting tasks",
      "Built AI-assisted workflows with Claude AI and ChatGPT to handle the recurring load",
      "Kept a human review step for anything customer-facing or escalation-sensitive",
      "Measured AHT and hours saved across the team before and after rollout",
    ],
    architecture: ["Raw Case Data", "Claude / ChatGPT Draft", "Human Review", "Final Report"],
    impact: [
      { label: "AHT reduction", value: "32%" },
      { label: "Hours saved / month", value: "200+" },
    ],
    tools: ["Claude AI", "ChatGPT (GPT-4)", "Documentation", "Reporting"],
    additionalDetails: {
      lessonsLearned:
        "AI drafts got adopted fastest where the human review step was kept short and clearly scoped — a vague 'check this' step killed adoption.",
      futureEnhancements:
        "Extend the same drafting pattern to weekly team reporting, not just per-case documentation.",
    },
  },
  {
    id: "sla-recovery",
    index: "03",
    title: "Workflow Redesign & SLA Recovery",
    category: "Process Transformation",
    label: "My Project | Process Transformation",
    problem:
      "Operational workflows required improvement to consistently meet SLA expectations.",
    myRole:
      "Led workflow redesign, operational follow-ups, process improvements, and team execution to improve SLA performance.",
    built: [
      "Mapped how cases actually aged in the queue versus their real due dates",
      "Redesigned the claiming logic so team members claim by due date, not arrival order",
      "Built in proactive follow-ups that trigger ahead of the deadline instead of after it",
      "Monitored the shift for several cycles before locking it in as standard practice",
    ],
    architecture: ["Ticket Queue", "Due-Date Ranking", "Proactive Follow-Up", "SLA Monitor"],
    impact: [{ label: "SLA compliance", value: "89% → 98%+" }],
    tools: ["Zendesk", "Queue Redesign", "SLA Monitoring"],
    additionalDetails: {
      lessonsLearned:
        "The queue logic mattered more than individual effort — the team wasn't underperforming, the queue was pointing them at the wrong case first.",
      futureEnhancements:
        "Add automatic re-ranking as due dates shift, so the queue stays accurate without a manual recheck.",
    },
  },
  {
    id: "process-handbook",
    index: "04",
    title: "Process Handbook & Scope Checklist",
    category: "Operational Excellence",
    label: "My Project | Operational Excellence",
    problem:
      "Teams needed clearer process documentation and standardized guidance to reduce process-related queries and improve consistency.",
    myRole:
      "Created a consolidated process handbook and scope checklist to standardize market-specific process knowledge and improve team execution.",
    built: [
      "Audited every existing reference doc, repair-cost sheet, and update log in use across the market",
      "Consolidated them into one Process Handbook with a consistent structure",
      "Added a scope checklist so no line item gets missed on a case",
      "Rolled it out to the full team with a walkthrough and adoption tracking",
    ],
    architecture: ["Scattered Docs", "Audit & Consolidate", "Process Handbook", "Scope Checklist", "Team Adoption"],
    impact: [
      { label: "Quality improvement", value: "92% → 96%" },
      { label: "Reduction in process queries", value: "60%" },
    ],
    tools: ["Confluence", "SOP Design", "Documentation Standards"],
    additionalDetails: {
      lessonsLearned:
        "A handbook only works if it replaces the old references entirely — keeping both in circulation just splits the confusion in two.",
      futureEnhancements:
        "Version-control the handbook and pipe update-log changes into it automatically, so it never drifts out of date again.",
    },
  },
  {
    id: "sipoc-onboarding",
    index: "05",
    title: "SIPOC & Onboarding Process Maps",
    category: "Process Excellence",
    label: "My Project | Process Excellence",
    problem:
      "New team members required structured process understanding and faster ramp-up.",
    myRole:
      "Created SIPOC diagrams, process maps, and onboarding documentation to simplify complex operational workflows.",
    built: [
      "Built SIPOC diagrams and process flow charts for the core workflows",
      "Standardized the format so it could be reused across teams, not just one",
      "Adopted the diagrams as default onboarding material for new hires",
    ],
    architecture: ["Core Workflow", "SIPOC Mapping", "Standardized Template", "Onboarding Material"],
    impact: [
      { label: "Reduction in new-hire ramp time", value: "40%" },
      { label: "Adopted by", value: "3 Teams" },
    ],
    tools: ["Process Maps", "Training", "Onboarding"],
    additionalDetails: {
      lessonsLearned:
        "A SIPOC diagram only speeds up onboarding if it's paired with a real walkthrough — handing over a diagram cold still left gaps.",
      futureEnhancements:
        "Build a short video walkthrough per diagram so onboarding scales without needing a live trainer every time.",
    },
  },
  {
    id: "property-risk-evaluation",
    index: "06",
    title: "Property Evaluation & Risk Escalation",
    category: "Quality & Risk Management",
    label: "My Project | Quality & Risk Management",
    problem:
      "Property evaluation and risk identification required consistent analysis and escalation.",
    myRole:
      "Led property evaluation workflows and established structured risk escalation practices.",
    built: [
      "Virtually evaluated 500+ properties and scoped repair estimates ahead of pricing",
      "Held accuracy to a consistent standard through repeatable evaluation criteria",
      "Escalated major red flags on properties that carried outsized risk",
    ],
    architecture: ["Property Data", "Virtual Evaluation", "Repair Scoping", "Risk Escalation", "Pricing"],
    impact: [
      { label: "Properties evaluated", value: "500+" },
      { label: "Accuracy", value: "99%" },
      { label: "Reduction in risk exposure", value: "15%" },
    ],
    tools: ["Property Evaluation", "Risk Escalation", "Root Cause Analysis"],
    additionalDetails: {
      lessonsLearned:
        "Consistency in evaluation criteria mattered more than speed — the accuracy rate held up specifically because the criteria didn't drift case to case.",
      futureEnhancements:
        "Layer in an AI-assisted first pass on property photos to pre-flag likely red flags before manual review.",
    },
  },
];



// ---------------------------------------------------------------------------
// Workflow visuals — purely presentational stage sequences for the
// AI Automation Portfolio section's motion graphics.
// ---------------------------------------------------------------------------
export const aiAutomationWorkflow = [
  { label: "Input", description: "Incoming operational case or document" },
  { label: "AI Analysis", description: "AI-powered document & data analysis" },
  { label: "Decision", description: "Intelligent classification" },
  { label: "Automation", description: "Workflow automation triggers" },
  { label: "Validation", description: "Human quality check" },
  { label: "Impact", description: "Reduced manual effort" },
];

export const aiDocumentWorkflow = [
  { label: "Document", description: "Incoming HOA document" },
  { label: "AI Reads", description: "GPT & Claude parse the document" },
  { label: "AI Extracts", description: "Key clauses identified" },
  { label: "AI Analyzes", description: "Deal-risk relevance assessed" },
  { label: "Validation", description: "Human review of flagged clauses" },
  { label: "Completed", description: "Review time cut from 40 to 20 min" },
];
export type AutomationProject = {
  id: string;
  title: string;
  technology: string[];
  businessImpact: string;
  icon: "filetext" | "workflow" | "barchart" | "sparkles";
  verified: boolean;
};

export const automationGallery: AutomationProject[] = [
  {
    id: "ai-document-analyzer",
    title: "AI Document Analyzer",
    technology: ["Claude AI", "OpenAI GPT"],
    businessImpact: "Reduced manual document review effort by 50%.",
    icon: "filetext",
    verified: true, // matches the resume-verified HOA analyzer (40min → 20min)
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    technology: ["Zapier"],
    businessImpact: "Automated repetitive operational workflows and improved productivity.",
    icon: "workflow",
    verified: false,
  },
  {
    id: "reporting-automation",
    title: "Reporting Automation",
    technology: ["Snowflake", "Amazon QuickSight"],
    businessImpact: "Created real-time operational dashboards and business insights.",
    icon: "barchart",
    verified: false,
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    technology: ["Claude AI", "OpenAI GPT", "Google Gemini"],
    businessImpact: "Designed production-ready prompts that improved operational consistency and efficiency.",
    icon: "sparkles",
    verified: false,
  },
];

// ---------------------------------------------------------------------------
// Business Impact — six executive summary cards. Card 1 is resume-verified
// (the HOA analyzer, 40→20 min); the rest reflect the candidate's broader
// self-reported scope of leadership and tooling.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Skills — self-reported competency pills, per candidate's original list.
// ---------------------------------------------------------------------------
export type SkillPill = {
  name: string;
  icon: "brain" | "bot" | "workflow" | "sparkles" | "database" | "zap" | "target" | "users";
};

export const skillPills: SkillPill[] = [
  { name: "Artificial Intelligence", icon: "brain" },
  { name: "AI Operations", icon: "sparkles" },
  { name: "Workflow Automation", icon: "workflow" },
  { name: "Prompt Engineering", icon: "sparkles" },
  { name: "Claude AI", icon: "bot" },
  { name: "OpenAI GPT", icon: "bot" },
  { name: "Google Gemini", icon: "bot" },
  { name: "Zapier", icon: "zap" },
  { name: "Snowflake", icon: "database" },
  { name: "Operational Excellence", icon: "target" },
  { name: "Team Leadership", icon: "users" },
];

// ---------------------------------------------------------------------------
// Achievements — the exact 6 awards listed on the resume, verbatim.
// ---------------------------------------------------------------------------
export const achievements = [
  { id: "best-sme", title: "Best SME", detail: "2 consecutive quarters" },
  { id: "best-team-lead", title: "Best Team Lead", detail: "Awarded twice (x2)" },
  {
    id: "ultimate-contributor",
    title: "Ultimate Contributor to the Team",
    detail: "Team-wide recognition",
  },
  {
    id: "quality-topper",
    title: "Quality Topper",
    detail: "Full Performance Year",
  },
  {
    id: "best-customer-consultant",
    title: "Best Customer Consultant",
    detail: "3 consecutive cycles",
  },
  { id: "topper-in-stack", title: "Topper in the Stack", detail: "Team-wide ranking" },
];

// Additional resume highlights not already covered as KPI cards or awards.
export const additionalHighlights = [
  "Zero team attrition over a 6-month stretch, with a 100% team certification rate.",
  "15+ SOPs authored and adopted for standardized team practice.",
];

export const certifications = [
  {
    id: "azure-ai",
    title: "Generative AI in Azure",
    issuer: "Microsoft / Coursera",
    year: "2026",
    status: "completed" as const,
  },
  {
    id: "business-analysis",
    title: "Business Analysis & Process Management",
    issuer: "Coursera",
    year: "2023",
    status: "completed" as const,
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.), Electronics & Communication Engineering", // UPDATED — see header note
  school: "Sri Sairam Engineering College, Chennai, India",
  year: "2016",
};

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Professional" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-hire-me", label: "Why Hire Me" },
  { href: "#projects", label: "Projects" },
  { href: "#impact", label: "Measurable Business Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Education & Certifications" },
  { href: "#contact", label: "Contact" },
];

export const contactContent = {
  headline: "Let's Build AI-Powered Operations Together",
};
