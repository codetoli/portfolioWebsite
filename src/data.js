// ─── SERVICES ──────────────────────────────────────────────────────────────
export const services = [
  {
    id: "generative-ai",
    name: "Generative AI",
    shortName: "Gen AI",
    tagline: "Ship AI that actually works in production.",
    overview:
      "We move past demos and proofs-of-concept to deliver AI systems your business relies on. Whether it's a customer-facing product, an internal copilot, or a fully autonomous agent pipeline — we architect, build, and maintain it.",
    detail:
      "Our AI practice spans the full stack: from evaluating which foundation model fits your workload and latency budget, to building retrieval-augmented generation pipelines with hybrid vector-keyword search, to designing agentic systems with reliable tool use and memory. We've shipped RAG systems processing millions of documents, fine-tuned domain-specific models on proprietary datasets, and built multi-agent workflows that replace entire operational processes. We don't believe in AI for its own sake — only AI that creates measurable business value.",
    deliverables: [
      "LLM selection, evaluation & fine-tuning",
      "RAG pipeline architecture & optimization",
      "AI agent & multi-agent system design",
      "Embedding strategies & vector database design",
      "Prompt engineering & guardrails",
      "AI product strategy & roadmap",
      "Inference infrastructure & cost optimization",
    ],
    caseStudy: {
      client: "HealthBridge",
      result:
        "Reduced clinical documentation time by 68% with a custom medical note generation system",
    },
  },
  {
    id: "product-development",
    name: "Product Development",
    shortName: "Product Dev",
    tagline: "From zero to one. Then to scale.",
    overview:
      "We build software products end-to-end — with the engineering discipline of a platform team and the product instinct of a founder. No handoffs. No gaps. One team that owns the outcome.",
    detail:
      "Full-stack engineering, mobile development, API design, and quality assurance under one roof. We use an iterative delivery model — weekly shipped increments, demo calls, and tight feedback loops. We're opinionated about architecture but pragmatic about technology choices. We've built everything from two-sided marketplaces to real-time data platforms to complex B2B SaaS products. Our engineers write code they'd stake their reputation on.",
    deliverables: [
      "Full-stack web application development",
      "iOS & Android mobile applications",
      "API design, documentation & integration",
      "Microservices & distributed architecture",
      "Database design & optimization",
      "Technical architecture review",
      "QA engineering & test automation",
    ],
    caseStudy: {
      client: "FleetCore",
      result:
        "Built a real-time fleet management platform from scratch — $0 to Series A in 14 months",
    },
  },
  {
    id: "staff-augmentation",
    name: "Staff Augmentation",
    shortName: "Staff Aug",
    tagline: "Senior engineers, available now.",
    overview:
      "On-demand access to vetted senior engineers who integrate with your team, follow your processes, and move with urgency. Not a body shop — a deliberate extension of your engineering capability.",
    detail:
      "We place engineers who've shipped production systems at scale. Every candidate goes through our technical assessment process before they ever meet a client. We match on timezone, tech stack, communication style, and culture — not just credentials. Our placements average 18 months, and 60% lead to direct hire. We can staff a single IC, a pod of three to five engineers, or a complete cross-functional delivery team.",
    deliverables: [
      "Senior software engineers (backend, frontend, full-stack)",
      "Solutions architects & tech leads",
      "Mobile engineers (iOS, Android, React Native)",
      "QA & test automation engineers",
      "Data engineers & ML engineers",
      "Engineering managers & delivery leads",
      "Rapid onboarding within 5 business days",
    ],
    caseStudy: {
      client: "Meridian Finance",
      result:
        "Scaled engineering team from 4 to 18 in 60 days ahead of a critical regulatory deadline",
    },
  },
  {
    id: "design",
    name: "Design",
    shortName: "Design",
    tagline: "Design that works as hard as your engineering.",
    overview:
      "Product design, UX research, and design systems built with intent. We make things that feel effortless — and that takes enormous rigor underneath.",
    detail:
      "We start with research because intuition alone doesn't scale. User interviews, competitive analysis, jobs-to-be-done mapping — we ground every design decision in evidence. Then we design systems, not screens. A design system built well means your product ships faster, looks consistent, and ages gracefully. We work in Figma, handoff with meticulous specs, and stay engaged through development to make sure what ships matches what we designed.",
    deliverables: [
      "UX research, interviews & synthesis",
      "Information architecture & user flows",
      "Wireframing & interactive prototyping",
      "UI design & visual design language",
      "Design systems & component libraries",
      "Brand identity & visual communication",
      "Usability testing & design QA",
    ],
    caseStudy: {
      client: "Lantern HR",
      result:
        "Redesigned core product — user activation rate improved 41%, support tickets down 55%",
    },
  },
  {
    id: "ai-data",
    name: "AI & Data",
    shortName: "AI & Data",
    tagline: "Data infrastructure that pays for itself.",
    overview:
      "Your data is either an asset or a liability. We build the pipelines, platforms, and models that turn it into the former — reliably, at scale, and in a way your team can actually maintain.",
    detail:
      "We design end-to-end data stacks: ingestion, transformation, storage, and serving layers that handle terabytes of events without missing a beat. On the ML side, we build, train, and deploy models that solve real business problems — churn prediction, demand forecasting, anomaly detection, recommendation systems. We instrument everything so you understand model drift before your business does.",
    deliverables: [
      "Data pipeline architecture & engineering",
      "Streaming & batch processing systems",
      "Data warehouse & lakehouse design",
      "ML model development & deployment",
      "Feature engineering & ML platform setup",
      "Analytics engineering & dbt modeling",
      "BI dashboards & reporting systems",
    ],
    caseStudy: {
      client: "NovaPay",
      result:
        "Built real-time fraud detection model — $2.3M in prevented fraud losses in the first quarter",
    },
  },
  {
    id: "devops-cloud",
    name: "DevOps & Cloud",
    shortName: "DevOps",
    tagline: "Infrastructure you stop thinking about.",
    overview:
      "Cloud-native architecture, CI/CD automation, and hardened infrastructure that gives your engineering team velocity instead of overhead.",
    detail:
      "We design systems for the failure modes that matter — not theoretical ones. That means thoughtful redundancy, automated recovery, and observability that actually surfaces problems before users find them. We work across AWS, GCP, and Azure. We use Terraform for infrastructure-as-code, Kubernetes for orchestration, and GitHub Actions or Buildkite for CI/CD. We also do cloud cost optimization — most teams we engage reduce their cloud spend 25–40% in the first two months.",
    deliverables: [
      "Cloud architecture design (AWS, GCP, Azure)",
      "Kubernetes cluster setup & management",
      "CI/CD pipeline design & automation",
      "Infrastructure-as-code (Terraform, Pulumi)",
      "Observability: logging, metrics, tracing",
      "Security hardening & compliance (SOC 2, HIPAA)",
      "Cloud cost audit & optimization",
    ],
    caseStudy: {
      client: "Crestline SaaS",
      result:
        "Reduced cloud infrastructure costs by 38% while improving P99 latency by half",
    },
  },
  {
    id: "healthcare-technology",
    name: "Healthcare Technology",
    shortName: "Health Tech",
    tagline: "Technology built for what matters most.",
    overview:
      "Healthcare software that meets the highest standards of compliance, security, and reliability. We understand the stakes — and we build accordingly.",
    detail:
      "Healthcare is the domain where technical debt becomes a safety issue. We build HIPAA-compliant systems from the architecture up — not bolted on as an afterthought. We've built clinical decision support tools, patient-facing telehealth platforms, EHR integrations using HL7 and FHIR standards, and analytics systems for population health management. Our team includes engineers who've worked within health system IT departments and understand the operational constraints from the inside.",
    deliverables: [
      "HIPAA-compliant platform architecture",
      "EHR integration (HL7, FHIR, Epic, Cerner)",
      "Telehealth & remote care platforms",
      "Clinical decision support systems",
      "Patient engagement & portal development",
      "Health data analytics & reporting",
      "Regulatory documentation support",
    ],
    caseStudy: {
      client: "CareCircle",
      result:
        "Launched HIPAA-compliant telehealth platform serving 50,000 patients in under 8 months",
    },
  },
];

// ─── TEAM ──────────────────────────────────────────────────────────────────
export const team = [
  {
    name: "Arjun Shrestha",
    role: "Founder & CEO",
    linkedin: "https://linkedin.com",
    bio: "Former engineering lead at Palantir. Built and exited two B2B SaaS companies before founding archive. Obsessive about engineering culture and long-term client partnerships.",
    expertise: [
      "Engineering Leadership",
      "Product Strategy",
      "Organizational Design",
    ],
    education: "B.S. Computer Science, IIT Bombay",
  },
  {
    name: "Priya Malla",
    role: "Chief Technology Officer",
    linkedin: "https://linkedin.com",
    bio: "15 years building distributed systems at scale. Led infrastructure for a payments platform handling $4B in annual volume. Architect of archive's engineering standards and technical practices.",
    expertise: [
      "Distributed Systems",
      "Cloud Architecture",
      "Engineering Practices",
    ],
    education: "M.S. Computer Science, Carnegie Mellon",
  },
  {
    name: "Rohan Thapa",
    role: "Head of Product Design",
    linkedin: "https://linkedin.com",
    bio: "Design lead at Intercom for six years. Has designed products used by tens of millions of people. Believes the best design is invisible — it just works.",
    expertise: ["Product Design", "Design Systems", "UX Research"],
    education: "B.Des. Interaction Design, NID Ahmedabad",
  },
  {
    name: "Sunita KC",
    role: "VP of Engineering",
    linkedin: "https://linkedin.com",
    bio: "Managed engineering teams of up to 80 people at Grab. Brought the discipline of large-scale engineering to archive's delivery model. Runs the practice leads across all seven service areas.",
    expertise: [
      "Engineering Management",
      "Delivery Excellence",
      "Team Scaling",
    ],
    education: "B.E. Computer Engineering, Tribhuvan University",
  },
];

// ─── BLOG POSTS ─────────────────────────────────────────────────────────────
export const posts = [
  {
    id: "rag-production",
    category: "Generative AI",
    title: "Building RAG Systems That Actually Work in Production",
    subtitle:
      "Most RAG demos look great. Most RAG systems in production quietly fail. Here's the gap — and how to close it.",
    date: "November 18, 2024",
    readTime: "9 min read",
    author: "Dev Pandey",
    authorRole: "Head of AI Practice",
    tags: ["RAG", "LLMs", "Production AI"],
    body: `
Retrieval-Augmented Generation has become the default architecture for enterprise AI systems. The pattern makes sense: rather than relying on a model's baked-in knowledge, you retrieve relevant documents at inference time and feed them as context. In theory, this solves hallucination, keeps answers current, and makes outputs attributable.

In practice, most production RAG systems underperform badly. Teams demo them on hand-picked queries, ship them, and then spend months responding to support tickets about wrong or missing answers.

Here's what actually goes wrong — and how to fix it.

## The Chunking Problem Is Underestimated

Most engineers chunk documents by character count or sentence boundary. This is a reasonable starting point, but it creates a fundamental problem: semantically coherent information gets split across chunks. When a user asks a question, the retrieval step returns fragments that each hold part of the answer — but no single chunk contains enough to respond correctly.

The better approach is semantic chunking, where you use embedding similarity to detect where one topic ends and another begins. More important is **parent-document retrieval**: chunk finely for precision, but return the larger parent segment for context. A retrieved chunk that says "this increased conversion by 34%" is useless without the surrounding context explaining what "this" refers to.

## Embedding Models Are Not Interchangeable

Teams pick OpenAI's text-embedding-ada-002 because it's the default and they've heard it's good. It is good — for general-purpose tasks. But if you're building a system for legal documents, medical records, or financial filings, a general embedding model will miss domain-specific semantic relationships that a fine-tuned or domain-specific model would catch.

Run an embedding model evaluation before you commit. Build a test set of 200–400 query-document pairs from your actual domain. Score precision@k and recall@k. The 15% improvement you get from the right embedding model is often more valuable than any prompt engineering you'll do.

## Hybrid Search Is Not Optional

Pure semantic search misses exact matches. Pure keyword search misses paraphrase and intent. The answer is hybrid: run both BM25 (or equivalent) and dense vector retrieval in parallel, then merge the result sets using a reciprocal rank fusion algorithm.

This is now supported natively in Elasticsearch, Weaviate, and Qdrant. There's no reason not to implement it. We've seen hybrid search improve recall by 20–35% on domain-specific corpora compared to dense retrieval alone.

## Evaluate Retrieval Separately From Generation

This is the most important architectural discipline, and the most commonly skipped. Teams evaluate RAG end-to-end: they ask a question and judge whether the final answer is correct. But this conflates two separate failure modes: bad retrieval and bad generation.

Instrument your retrieval step independently. Log which documents were retrieved for each query. Measure whether the ground-truth document was in the top-k results. If your retrieval recall is 65%, no amount of prompt engineering will get your end-to-end accuracy above 65%. Fix retrieval first.

## Re-ranking Is Worth the Latency

After retrieval, run a cross-encoder re-ranker on the candidate set before passing results to the LLM. Cross-encoders are expensive — O(n) inference calls — so you use them to re-rank a small candidate set (typically top 20–50) down to the final context (typically top 5–10).

The latency cost is 50–200ms depending on your re-ranker model. The accuracy improvement is typically 10–20%. For most enterprise applications, that's a worthwhile trade.

## Production Considerations

Cache aggressively. Most production RAG systems see 30–50% query repetition. Semantic caching — where you cache based on embedding similarity rather than exact match — can reduce your LLM costs significantly while improving P99 latency.

Stream responses. Users tolerate 5 seconds of wait much better when they see text appearing after 300ms. Streaming is table stakes.

Build feedback loops from day one. Every answer a user accepts or rejects is a training signal. Most teams don't collect it. Don't be most teams.
    `,
  },
  {
    id: "product-users-love",
    category: "Product",
    title: "How to Ship a Product Users Actually Love",
    subtitle:
      "The gap between products that get built and products that get used is almost always a research problem, not an engineering one.",
    date: "October 29, 2024",
    readTime: "7 min read",
    author: "Rohan Thapa",
    authorRole: "Head of Product Design",
    tags: ["Product Design", "UX", "Strategy"],
    body: `
After designing products for fifteen years — at Intercom, at two early-stage startups, and now at archive — I've watched the same failure mode play out dozens of times: a team spends six months building something technically impressive that nobody uses.

It's almost never an engineering failure. The engineers did exactly what they were asked. The problem is upstream: the product was designed from the inside out.

## Designing From the Inside Out vs. the Outside In

Inside-out design starts with what you can build and works forward to what you'll offer. Outside-in design starts with a specific person in a specific moment of frustration and works backward to the minimal thing that relieves it.

The tell-tale sign of inside-out design is when your product pitch starts with capabilities: "We have an AI engine that..." or "Our platform supports..." Outside-in design pitches start with the user: "When a head of sales is trying to figure out which deals to prioritize on a Monday morning..."

The gap sounds simple. Closing it is hard.

## The Research Mistake Teams Make

Most teams do user research once — at the beginning, to validate the idea — and then treat it as done. This is backwards. The most valuable user research happens after you've shipped something and you're watching real users bump into real problems with it.

Research at the start is hypothesis generation. Research after shipping is calibration. You need both, continuously.

The minimum viable research program: five user interviews before you design anything, bi-weekly usability testing during development, and a structured feedback review every sprint. That's roughly four hours a week of research activity. Most teams won't prioritize it. The ones that do ship dramatically better products.

## The Feature Trap

Product teams at growing companies face constant pressure to ship features. Enterprise customers ask for them. Sales uses them to close deals. The product roadmap fills up with them.

Features accumulate faster than teams can remove them. The product gets complicated. The user who joined six months ago and loved the simplicity of the original product is now confused. Support tickets rise. The team ships more features to address the confusion, and the cycle continues.

The discipline of saying no to features is a design skill. It requires having a clear, written articulation of what your product is and isn't — and reviewing every new proposal against it.

## Activation Is a Design Problem

Most SaaS products have an activation problem. Users sign up, poke around, and leave before experiencing the core value. The team's instinct is to improve onboarding with tooltips, tours, and emails. These help at the margin, but they're treating the symptom.

The root cause is almost always that the product takes too long to deliver its first value moment. The question to ask is: what is the minimum someone has to do in your product before they've experienced the thing that makes you different? Every step before that moment is a churn risk. Systematically eliminate them.

## What "Done" Means

A feature isn't done when it's deployed. It's done when it's adopted. Define adoption metrics before you build — what does success look like for this feature at 30 days? 90 days? Make those metrics visible to the team. Review them in your sprint retrospectives.

This sounds obvious. Almost no one does it. The teams that do ship very differently.
    `,
  },
  {
    id: "monorepo-2024",
    category: "Engineering",
    title: "The Case for Monorepos in 2024",
    subtitle:
      "Polyrepos made sense when tooling was immature. That's no longer the case. Here's why we've moved all new client projects to monorepos.",
    date: "October 15, 2024",
    readTime: "6 min read",
    author: "Priya Malla",
    authorRole: "Chief Technology Officer",
    tags: ["Engineering", "Architecture", "DevOps"],
    body: `
Two years ago, when we proposed a monorepo structure to a client, we'd typically get pushback. Monorepos felt like a big-company thing — something Google and Meta could afford to invest in, but not a practical choice for a 15-person engineering team shipping a SaaS product.

That conversation has changed. Tooling has matured. The cost of monorepos has dropped. And we've seen enough polyrepo codebases age badly that we've become opinionated: for most product companies, a well-structured monorepo is the right default.

Here's the case.

## The Coordination Tax of Polyrepos

Polyrepos feel simple at first. Each service owns its repository. Teams work independently. No stepping on each other's toes.

The tax appears when you need to make a cross-cutting change. Update a shared interface definition. Bump a shared dependency. Rename a module that three services use. In a polyrepo, this becomes a coordination exercise across multiple PRs, multiple CI pipelines, and multiple deployment processes. In a monorepo, it's one PR.

This tax is invisible until it isn't. Teams often don't see it until they're three years in and a simple breaking change takes three weeks to propagate across twelve repositories.

## The Discovery Problem

In a polyrepo setup, knowledge lives in repository boundaries. To understand how data flows through a system, you're context-switching between five GitHub tabs, reading five different READMEs, and hoping the documentation is up to date (it isn't).

Monorepos make code discoverable. A new engineer can clone one repository and see the full system. They can search across all services with a single grep. They can trace a data flow without leaving their editor.

We've measured onboarding time for new engineers at several clients who've migrated from polyrepo to monorepo. The reduction in time-to-first-meaningful-contribution has averaged 40%.

## What Tooling Has Changed

The practical arguments against monorepos used to be about tooling: CI/CD was slow, IDEs struggled, dependency management was painful. These arguments are largely historical now.

Turborepo and Nx have solved incremental builds — only the packages affected by a change get rebuilt and tested. Remote caching means CI pipeline times for large monorepos are often faster than polyrepo equivalents. PNPM workspaces handle dependency management cleanly.

The setup cost for a well-configured monorepo is a few days of work. The ongoing maintenance overhead is minimal with the right tooling in place.

## When Polyrepos Still Make Sense

Monorepos aren't universal. They make less sense when:
- Teams have genuinely independent release cycles and no shared code
- Security requirements demand hard repository isolation between components
- Services are written in multiple languages with no cross-language code sharing

For most product teams building a coherent product, none of these apply.

## Migration Path

If you're sitting on a collection of polyrepos and considering migration, the path doesn't have to be disruptive. We've successfully migrated several clients using an incremental approach: stand up the monorepo structure, move the most actively-developed services first, let the legacy repos become read-only over six months. The migration pays for itself within a quarter.
    `,
  },
  {
    id: "design-systems-scale",
    category: "Design",
    title: "Design Systems That Scale: Lessons From the Field",
    subtitle:
      "A design system is an investment, not a project. Here's what we've learned building them for companies from 10 to 500 engineers.",
    date: "September 30, 2024",
    readTime: "8 min read",
    author: "Rohan Thapa",
    authorRole: "Head of Product Design",
    tags: ["Design Systems", "UI", "Frontend"],
    body: `
We've built design systems for startups with three designers and enterprises with forty. The systems that succeed share a set of characteristics that have nothing to do with the component library technology and everything to do with process, ownership, and documentation.

The systems that fail are usually technically sound but organizationally broken.

## The Component Trap

Most design systems start the same way: a designer notices inconsistency across the product, proposes a design system, and starts building a comprehensive component library. Six months later, the library has 80 components, extensive Storybook documentation, and almost no adoption.

The failure mode is building supply before demand. Teams build components they think will be needed rather than components that are being duplicated right now. The result is a library that doesn't fit the actual patterns in the product.

Start with an audit. Spend a week cataloging what exists in your product today. Identify the ten most-repeated UI patterns. Build those first, with production-quality implementation. Get them adopted. Then expand.

## The Token Foundation

Before a single component gets built, invest in design tokens. Tokens are the named values — colors, spacing, typography, shadow — that every component references. A design system without tokens is a collection of components that will drift apart the moment someone makes a judgment call.

The token hierarchy matters: global tokens (raw values like \`--color-green-600: #2D6A4F\`) reference-aliased by semantic tokens (purpose-based like \`--color-action-primary: var(--color-green-600)\`) reference by component tokens (\`--button-bg: var(--color-action-primary)\`). Three levels. Every component consumes semantic tokens, never global ones directly. This lets you retheme the system without touching component code.

## Figma and Code Must Stay in Sync

The most common design system failure we see: the Figma library and the code component library diverge within six months of launch. Designers keep iterating in Figma. Engineers keep shipping code. Nobody's syncing them. The "source of truth" becomes fiction.

This is an organizational problem masquerading as a technical one. You need a person — a design systems engineer or a dedicated designer-engineer hybrid — who treats sync as their responsibility. Automated tooling (Tokens Studio, Style Dictionary) helps, but it doesn't replace ownership.

## Documentation as a Product

Your design system documentation will be read more than any component's source code. It needs to be as carefully designed as any customer-facing product.

Good documentation includes: the principle behind the component (not just usage), examples of correct and incorrect usage side-by-side, accessibility requirements, and a changelog. The changelog is the most underinvested part of almost every design system. Engineers and designers need to know what changed and why, or they'll stop trusting the system.

## Measuring Adoption

Define adoption metrics before you launch. Component coverage: what percentage of instances in the production codebase use the design system component vs. a one-off implementation? Drift rate: how quickly is that percentage changing? Token compliance: what percentage of color and spacing values come from the token system?

These metrics should be visible to leadership. A design system with 30% adoption in a 200-engineer company is not a success — it's a coordination failure with a Storybook attached to it.
    `,
  },
  {
    id: "data-pipeline-ml",
    category: "AI & Data",
    title: "Why Your Data Pipeline Is Killing Your ML Model",
    subtitle:
      "The model isn't the problem. The data feeding it is. A guide to building ML-ready data infrastructure.",
    date: "September 18, 2024",
    readTime: "9 min read",
    author: "Dev Pandey",
    authorRole: "Head of AI Practice",
    tags: ["ML Engineering", "Data Pipelines", "MLOps"],
    body: `
There's a persistent myth in machine learning that better models lead to better outcomes. Sometimes that's true. More often, the model is fine and the data infrastructure feeding it is the bottleneck.

I've reviewed ML systems at two dozen companies over the past few years. In roughly 70% of them, improving the data pipeline would have a larger impact than replacing the model. In many cases, the existing model with cleaner, fresher, and better-engineered data would have outperformed a new model trained on the original data.

Here's what to look at.

## Training-Serving Skew Is Everywhere

Training-serving skew is when the features your model sees during training differ from the features it sees at inference time. This is the single most common cause of ML models that work in offline evaluation and fail in production.

Causes include: transformations applied in training pipelines that are subtly different from those in serving pipelines, training on historical data with imputation strategies that can't be replicated at inference time, and feature values that are computed at training time from future data (leakage).

The solution is a feature store that defines features once and serves them consistently across training and inference. If you're not using a feature store and your model lives in production, you likely have training-serving skew. Build an evaluation set with production traffic and compare it to your offline evaluation scores. If they diverge by more than a few points, you've confirmed the problem.

## Data Freshness as a First-Class Concern

Most ML systems treat data freshness as an operational detail. It's actually a modeling decision. The right update frequency depends on how fast your target variable changes.

A fraud detection model where transaction patterns change daily needs fresh features, ideally real-time or near-real-time. A churn prediction model where behavioral signals accumulate over weeks can afford daily batch features. Mismatching the freshness requirement to the architecture leads to stale features at inference time — which degrades model accuracy in ways that are hard to debug.

Document your freshness requirements per feature before you build the pipeline. Then instrument and alert on freshness SLAs the same way you'd instrument any production service.

## Schema Evolution Is Underplanned

Data schemas change. Upstream teams add columns, rename fields, and drop tables. In a mature data system, these changes are communicated, versioned, and backward-compatible. In most data systems, they're discovered when a pipeline fails at 2am.

Invest in schema validation at ingestion. Use a schema registry. Treat schema changes as breaking changes and require explicit versioning. This sounds like overhead — it's actually just the work of building reliable systems.

## The Feature Engineering Tax

Feature engineering is where most of the value in ML lives, and it's also where the most technical debt accumulates. Features get created by data scientists, live in Jupyter notebooks, get productionized by someone else, and then diverge. The feature that was computed with \`fillna(0)\` in the notebook gets productionized with \`fillna(None)\`. The model trains on one thing and serves another.

Two practices that help: feature documentation (a data dictionary for every feature, including the business logic, the expected distribution, and the computation method) and automated feature validation (statistical tests that alert when a feature's distribution shifts significantly from its historical baseline). Neither is glamorous. Both are necessary.

## Monitoring After Deployment
    `,
  },
  {
    id: "zero-downtime-deployments",
    category: "DevOps",
    title: "Zero-Downtime Deployments: A Practical Guide",
    subtitle:
      "Every deployment is a risk. Here's how to make the risk manageable — and eventually invisible — without slowing down your release velocity.",
    date: "September 5, 2024",
    readTime: "6 min read",
    author: "Priya Malla",
    authorRole: "Chief Technology Officer",
    tags: ["DevOps", "CI/CD", "Reliability"],
    body: `
Maintenance windows used to be a fact of life. Every deployment required taking the application down, running migrations, and bringing it back up — with users watching a sorry-we'll-be-back-soon page for twenty minutes. For most teams building modern web applications, this is no longer necessary or acceptable.

Zero-downtime deployments are achievable for the vast majority of web applications with disciplined database practices and the right deployment tooling. Here's the approach we use and recommend.

## The Database Problem

Most deployment-related downtime is actually a database schema migration problem. You deploy new code that requires a new column or a renamed table. Your old code breaks. You have to coordinate the schema change and the deployment simultaneously, which creates a window of inconsistency.

The solution is expand-contract migrations, also called backward-compatible migrations. The pattern has three phases:

**Expand:** Add new columns/tables while keeping old ones. Deploy code that writes to both old and new structures. Run this in production until you're confident.

**Migrate:** Backfill data from old to new. Run any necessary data transformations.

**Contract:** Deploy code that reads only from the new structure. Remove the old columns in a subsequent migration.

This means every schema change takes multiple deployments to complete. That sounds slow. In practice, it makes every individual deployment safe — which means you can deploy more frequently with less anxiety.

## Blue-Green Deployments

With blue-green, you maintain two identical production environments. One is live (blue), one is idle (green). You deploy to green, run your full smoke test suite, and then shift traffic atomically from blue to green. Your old environment stays alive for fifteen minutes as a rollback target.

The infrastructure cost is roughly double while both environments are running, which is typically a few minutes per deployment. The safety benefit is enormous: you can roll back any deployment in under a minute with no data loss.

This requires your application to be stateless (which it should be anyway) and your database to be external to both environments (which it should be anyway).

## Feature Flags Are a Deployment Tool
    `,
  },
];
