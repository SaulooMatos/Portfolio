(() => {
  "use strict";

  const root = document.getElementById("root");
  if (!root) return;

  const STACK = [
    {
      title: "Front-end",
      tag: "01 / UI",
      icon: "Code",
      items: ["React", "JavaScript", "HTML5", "CSS3", "UI Systems", "Performance"],
    },
    {
      title: "Back-end",
      tag: "02 / API",
      icon: "Server",
      items: ["Python", "Node.js", "C#", "FastAPI", "REST APIs", "Observabilidade"],
    },
    {
      title: "Cloud / DevOps",
      tag: "03 / Infra",
      icon: "Cloud",
      items: ["Docker", "GCP", "Azure DevOps", "CI/CD", "GitHub Actions"],
    },
    {
      title: "Bancos de dados",
      tag: "04 / Data",
      icon: "Database",
      items: ["MySQL", "SQL Server", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
      title: "Dados / ETL",
      tag: "05 / Pipeline",
      icon: "Layers",
      items: ["SQL", "Pandas", "ETL", "Modelagem", "Dashboards"],
    },
    {
      title: "IA / Automacao",
      tag: "06 / Intelligence",
      icon: "Sparkles",
      items: ["OpenAI", "Gemini", "RAG", "Automacao", "Agentes", "Prompt Eng."],
    },
  ];

  const PROJECTS = [
    {
      featured: true,
      title: "Donkey Kong - Runner",
      tag: "Game - Canvas",
      tagType: "warm",
      desc: "Runner em canvas com fases dinamicas, cenarios trocando em tempo real e mecanica responsiva. Suporte a teclado e toque, com pontuacao persistente e progressao de dificuldade.",
      problem:
        "Como criar um jogo casual em browser, leve, sem framework, que funcione em qualquer dispositivo?",
      tech: ["JavaScript", "Canvas API", "HTML5", "CSS3", "LocalStorage"],
      img: "assets/Kong-Pulando.jpg",
      links: [
        {
          label: "Jogar",
          href: "https://sauloomatos.github.io/Donkey-Kong-Jogo-Final/",
          icon: "External",
          primary: true,
        },
        {
          label: "Repositorio",
          href: "https://github.com/SaulooMatos/Donkey-Kong-Jogo",
          icon: "Github",
        },
      ],
    },
    {
      title: "API + IA aplicada",
      tag: "Em desenvolvimento",
      tagType: "muted",
      desc: "Servico de insights com FastAPI integrado a OpenAI/Gemini. Pipeline de RAG sobre documentos internos, com cache e observabilidade.",
      problem:
        "Reduzir tempo de busca de informacao tecnica em equipes em uma unica pergunta.",
      tech: ["Python", "FastAPI", "OpenAI", "Redis", "Docker"],
      placeholder: "API - IA - RAG",
      links: [{ label: "Em breve", href: "#", icon: "ArrowRight", muted: true }],
    },
    {
      title: "Dashboard de operacoes",
      tag: "Em desenvolvimento",
      tagType: "muted",
      desc: "Painel de metricas operacionais com ETL noturno, agregacoes em SQL Server e visualizacoes em React. Alertas via webhook.",
      problem:
        "Ter visibilidade clara de KPIs operacionais sem depender de planilhas espalhadas.",
      tech: ["React", "Node.js", "SQL Server", "Azure DevOps"],
      placeholder: "Dashboard - KPIs",
      links: [{ label: "Em breve", href: "#", icon: "ArrowRight", muted: true }],
    },
    {
      title: "Automacao cloud",
      tag: "Em desenvolvimento",
      tagType: "muted",
      desc: "Conjunto de workers serverless para processamento assincrono de jobs, com fila, retry e dead-letter. Provisionamento via Terraform.",
      problem: "Automatizar tarefas repetitivas sem manter servidores ociosos.",
      tech: ["Python", "GCP", "Cloud Run", "Pub/Sub"],
      placeholder: "Automacao - Cloud",
      links: [{ label: "Em breve", href: "#", icon: "ArrowRight", muted: true }],
    },
  ];

  const DIFFERENTIALS = [
    {
      num: "01",
      title: "Visao de produto, nao so de codigo",
      desc: "Penso na experiencia final, no problema do usuario e no impacto no negocio, nao so na implementacao.",
    },
    {
      num: "02",
      title: "Foco em entrega real",
      desc: "Codigo limpo, deploy automatizado e iteracao rapida. Prefiro algo simples no ar do que complexo no papel.",
    },
    {
      num: "03",
      title: "Curiosidade tecnica constante",
      desc: "Estou sempre experimentando ferramentas novas, IA, cloud e automacao para acelerar e simplificar.",
    },
  ];

  const TECH_MARQUEE = [
    "Python",
    "Node.js",
    "React",
    "FastAPI",
    "Docker",
    "GCP",
    "Azure",
    "MySQL",
    "MongoDB",
    "SQL Server",
    "OpenAI",
    "Gemini",
    "C#",
    "REST",
    "RAG",
    "ETL",
    "CI/CD",
  ];

  const CODE_FRAMES = [
    {
      file: "welcome.tsx",
      lines: [
        [{ t: "com", v: "// Bem-vindo ao meu portfolio." }],
        [{ t: "com", v: "// Construindo solucoes com codigo, dados e IA." }],
        [],
        [{ t: "key", v: "const " }, { t: "var", v: "saulo" }, { t: "op", v: " = " }, { t: "punct", v: "{" }],
        [{ t: "prop", v: "  role" }, { t: "punct", v: ": " }, { t: "str", v: "\"Full Stack Developer\"" }, { t: "punct", v: "," }],
        [{ t: "prop", v: "  focus" }, { t: "punct", v: ": " }, { t: "punct", v: "[" }, { t: "str", v: "\"backend\"" }, { t: "punct", v: ", " }, { t: "str", v: "\"APIs\"" }, { t: "punct", v: ", " }, { t: "str", v: "\"IA\"" }, { t: "punct", v: "]" }, { t: "punct", v: "," }],
        [{ t: "prop", v: "  available" }, { t: "punct", v: ": " }, { t: "key", v: "true" }],
        [{ t: "punct", v: "};" }],
      ],
    },
    {
      file: "api.py",
      lines: [
        [{ t: "com", v: "# APIs escalaveis - Python - FastAPI" }],
        [{ t: "key", v: "from " }, { t: "var", v: "fastapi" }, { t: "key", v: " import " }, { t: "var", v: "FastAPI" }],
        [{ t: "key", v: "from " }, { t: "var", v: "openai" }, { t: "key", v: " import " }, { t: "var", v: "OpenAI" }],
        [],
        [{ t: "var", v: "app" }, { t: "op", v: " = " }, { t: "fn", v: "FastAPI" }, { t: "punct", v: "()" }],
        [{ t: "var", v: "ai" }, { t: "op", v: " = " }, { t: "fn", v: "OpenAI" }, { t: "punct", v: "()" }],
        [],
        [{ t: "punct", v: "@" }, { t: "var", v: "app" }, { t: "punct", v: "." }, { t: "fn", v: "post" }, { t: "punct", v: "(" }, { t: "str", v: "\"/insight\"" }, { t: "punct", v: ")" }],
        [{ t: "key", v: "async def " }, { t: "fn", v: "insight" }, { t: "punct", v: "(" }, { t: "var", v: "q" }, { t: "punct", v: ": " }, { t: "tag", v: "str" }, { t: "punct", v: "):" }],
        [{ t: "key", v: "    return " }, { t: "var", v: "ai" }, { t: "punct", v: "." }, { t: "fn", v: "complete" }, { t: "punct", v: "(" }, { t: "var", v: "q" }, { t: "punct", v: ")" }],
      ],
    },
    {
      file: "deploy.sh",
      lines: [
        [{ t: "com", v: "# Cloud - Docker - CI/CD" }],
        [{ t: "fn", v: "docker " }, { t: "var", v: "build" }, { t: "op", v: " -t " }, { t: "str", v: "saulo/api:latest" }, { t: "op", v: " ." }],
        [{ t: "fn", v: "docker " }, { t: "var", v: "push" }, { t: "op", v: " " }, { t: "str", v: "saulo/api:latest" }],
        [{ t: "fn", v: "gcloud " }, { t: "var", v: "run deploy" }, { t: "op", v: " --image=" }, { t: "str", v: "saulo/api:latest" }],
        [{ t: "com", v: "# deploy concluido em 42s" }],
        [{ t: "com", v: "# APIs no ar - 99.9% uptime" }],
      ],
    },
  ];

  const TERMINAL_SUGGESTIONS = ["whoami", "stack", "projects", "contact", "help"];

  const CMD_COMMANDS = [
    { id: "nav-about", label: "Ir para Sobre", hint: "section - about", kw: "sobre about", icon: "Layers", action: () => (location.hash = "#about") },
    { id: "nav-stack", label: "Ir para Stack", hint: "section - stack", kw: "stack tech", icon: "Cpu", action: () => (location.hash = "#stack") },
    { id: "nav-projects", label: "Ir para Projetos", hint: "section - projects", kw: "projetos projects", icon: "Folder", action: () => (location.hash = "#projects") },
    { id: "nav-terminal", label: "Abrir terminal interativo", hint: "section - terminal", kw: "terminal cli console", icon: "Code", action: () => (location.hash = "#terminal") },
    { id: "nav-contact", label: "Ir para Contato", hint: "section - contato", kw: "contato contact", icon: "Mail", action: () => (location.hash = "#contato") },
    { id: "ext-github", label: "Abrir GitHub", hint: "github.com/SaulooMatos", kw: "github repos", icon: "Github", action: () => window.open("https://github.com/SaulooMatos", "_blank", "noopener") },
    { id: "ext-linkedin", label: "Abrir LinkedIn", hint: "linkedin.com/in/saulo-matos", kw: "linkedin", icon: "Linkedin", action: () => window.open("https://www.linkedin.com/in/saulo-matos", "_blank", "noopener") },
    { id: "ext-whatsapp", label: "Abrir WhatsApp", hint: "+55 14 99620-4876", kw: "whatsapp wpp zap", icon: "Whatsapp", action: () => window.open("https://wa.me/5514996204876", "_blank", "noopener") },
    { id: "ext-email", label: "Enviar email", hint: "matossaulo.h@gmail.com", kw: "email mail", icon: "Mail", action: () => (window.location.href = "mailto:matossaulo.h@gmail.com") },
    { id: "ext-cv", label: "Abrir curriculo", hint: "PDF", kw: "cv curriculo resume", icon: "Download", action: () => window.open("assets/curriculo_saulo_matos.pdf", "_blank", "noopener") },
  ];

  const ICON = {
    ArrowRight: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    External: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
    Github: () =>
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"></path></svg>',
    Linkedin: () =>
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>',
    Whatsapp: () =>
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2A10 10 0 0 0 2 12a10 10 0 0 0 1.5 5.3L2 22l4.8-1.5A10 10 0 0 0 12 22a10 10 0 0 0 0-20zm0 18.3a8.3 8.3 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8.3 8.3 0 1 1 6.9 3.7z"></path></svg>',
    Mail: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    Download: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
    Code: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    Server: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
    Cloud: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
    Database: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    Sparkles: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8L20 10l-5.8 1.9L12 18l-1.9-5.8L4 10l5.8-1.9z"></path><path d="M19 3v4"></path><path d="M21 5h-4"></path><path d="M5 17v3"></path><path d="M6.5 18.5h-3"></path></svg>',
    Cpu: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="2" x2="9" y2="4"></line><line x1="15" y1="2" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="22"></line><line x1="15" y1="20" x2="15" y2="22"></line><line x1="20" y1="9" x2="22" y2="9"></line><line x1="20" y1="15" x2="22" y2="15"></line><line x1="2" y1="9" x2="4" y2="9"></line><line x1="2" y1="15" x2="4" y2="15"></line></svg>',
    Layers: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    Menu: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
    Close: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    GitBranch: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>',
    Search: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    File: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
    Folder: () =>
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',
  };

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function icon(name, opts = {}) {
    const raw = (ICON[name] || ICON.ArrowRight)();
    const cls = opts.className ? ` class="${opts.className}"` : "";
    const styleParts = [];
    if (opts.size) {
      styleParts.push(`width:${opts.size}px`);
      styleParts.push(`height:${opts.size}px`);
    }
    if (opts.style) styleParts.push(opts.style);
    const style = styleParts.length ? ` style="${styleParts.join(";")}"` : "";
    return raw.replace("<svg", `<svg${cls}${style}`);
  }

  function render() {
    const marqueeItems = [...TECH_MARQUEE, ...TECH_MARQUEE]
      .map((it) => `<span class="marquee-item"><span class="dot"></span>${esc(it)}</span>`)
      .join("");

    const stackCards = STACK.map((s) => {
      const pills = s.items
        .map((it) => `<span class="stack-pill"><span class="pill-dot"></span>${esc(it)}</span>`)
        .join("");
      return `
        <div class="stack-card">
          <div class="stack-card-head">
            <div class="stack-card-icon">${icon(s.icon, { size: 22 })}</div>
            <div>
              <span class="stack-card-tag">${esc(s.tag)}</span>
              <span class="stack-card-title">${esc(s.title)}</span>
            </div>
          </div>
          <div class="stack-pills">${pills}</div>
        </div>
      `;
    }).join("");

    const projectCards = PROJECTS.map((p) => {
      const actions = p.links
        .map((l) => {
          const target = l.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
          const cls = `btn-link${l.primary ? " primary" : ""}`;
          const style = l.muted ? ' style="opacity:.55;pointer-events:none"' : "";
          return `<a href="${esc(l.href)}"${target} class="${cls}"${style}>${icon(l.icon, { size: 14 })}${esc(l.label)}</a>`;
        })
        .join("");

      const tech = p.tech.map((t) => `<span class="tech-pill">${esc(t)}</span>`).join("");
      const media = p.img
        ? `<img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy" />`
        : `<div class="project-mockup-placeholder">${esc(p.placeholder || "preview")}</div>`;

      return `
        <div class="project-card${p.featured ? " featured" : ""}">
          <div class="project-preview">
            <div class="project-preview-bg"></div>
            <div class="project-preview-glow"></div>
            <div class="project-mockup">${media}</div>
          </div>
          <div class="project-body">
            <span class="project-tag ${esc(p.tagType || "")}">${esc(p.tag)}</span>
            <h3 class="project-title">${esc(p.title)}</h3>
            <p class="project-desc">${esc(p.desc)}</p>
            ${p.problem ? `<p class="project-problem">${esc(p.problem)}</p>` : ""}
            <div class="project-tech">${tech}</div>
            <div class="project-actions">${actions}</div>
          </div>
        </div>
      `;
    }).join("");

    const diffCards = DIFFERENTIALS.map((d) => `
      <div class="diff-card">
        <div class="diff-card-num">${esc(d.num)} -</div>
        <h3>${esc(d.title)}</h3>
        <p>${esc(d.desc)}</p>
      </div>
    `).join("");

    root.innerHTML = `
      <div class="bg-layer"></div>
      <div class="bg-grid"></div>
      <div class="bg-noise"></div>

      <nav class="nav" id="main-nav">
        <a class="nav-brand" href="#hero">
          <span class="nav-brand-mark">SM</span>
          <span>saulo.matos</span>
        </a>
        <ul class="nav-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#terminal">Terminal</a></li>
          <li><a href="#diff">Diferenciais</a></li>
        </ul>
        <a href="#contato" class="nav-cta">Vamos conversar ${icon("ArrowRight", { size: 14 })}</a>
        <button class="nav-mobile-toggle" id="mobile-open" aria-label="Menu">${icon("Menu", { size: 18 })}</button>
      </nav>

      <div class="mobile-menu" id="mobile-menu" hidden>
        <button class="nav-mobile-toggle" id="mobile-close" aria-label="Fechar" style="position:absolute;top:24px;right:24px;">${icon("Close", { size: 18 })}</button>
        <a href="#about">Sobre</a>
        <a href="#stack">Stack</a>
        <a href="#projects">Projetos</a>
        <a href="#terminal">Terminal</a>
        <a href="#diff">Diferenciais</a>
        <a href="#contato" class="nav-cta">Vamos conversar ${icon("ArrowRight", { size: 14 })}</a>
      </div>

      <section class="hero" id="hero">
        <div class="hero-glow"></div>
        <div class="hero-content">
          <div class="hero-text reveal in-view">
            <div class="hero-pill"><span class="live-dot"></span><span>Disponivel para novas oportunidades</span></div>
            <h1><span class="gradient-text">Construindo solucoes com</span><br /><span class="accent-text">codigo, dados e IA.</span></h1>
            <p class="hero-lead">Sou Saulo Matos - desenvolvedor full stack focado em backend, APIs, automacao e IA aplicada. Transformo ideias em produtos rapidos, confiaveis e com visual marcante.</p>
            <div class="hero-actions">
              <a href="#projects" class="btn btn-primary">Ver projetos ${icon("ArrowRight", { size: 16 })}</a>
              <a href="#contato" class="btn btn-ghost">Vamos conversar</a>
            </div>
          </div>

          <div class="notebook-stage" id="notebook-stage">
            <div class="notebook" id="hero-notebook">
              <div class="notebook-screen">
                <div class="ide">
                  <div class="ide-tabs" id="ide-tabs"></div>
                  <div class="ide-body">
                    <div class="ide-sidebar">
                      ${icon("Folder", { className: "ide-sidebar-icon active" })}
                      ${icon("Search", { className: "ide-sidebar-icon" })}
                      ${icon("GitBranch", { className: "ide-sidebar-icon" })}
                      ${icon("Code", { className: "ide-sidebar-icon" })}
                    </div>
                    <div class="ide-editor">
                      <div class="ide-gutter" id="ide-gutter"></div>
                      <div class="ide-code" id="ide-code"></div>
                    </div>
                  </div>
                  <div class="ide-statusbar">
                    <span class="ide-status-pill"><span class="live-dot"></span><span id="ide-status-file"></span></span>
                    <span style="opacity:.6">UTF-8</span>
                    <span style="opacity:.6">LF</span>
                    <span style="margin-left:auto;opacity:.7">main - saulo@dev</span>
                  </div>
                </div>
              </div>
              <div class="notebook-base"></div>
            </div>

            <div class="float-tag float-tag-1 float-anim d1" style="text-align:left">${icon("Cpu", { className: "tag-icon" })}<span>FastAPI - Python</span></div>
            <div class="float-tag float-tag-2 float-anim d2">${icon("Sparkles", { className: "tag-icon" })}<span>OpenAI - Gemini</span></div>
            <div class="float-tag float-tag-3 float-anim d3">${icon("Cloud", { className: "tag-icon" })}<span>Docker - GCP</span></div>
            <div class="float-tag float-tag-4 float-anim d4">${icon("Database", { className: "tag-icon" })}<span>MySQL - MongoDB</span></div>
          </div>
        </div>
        <div class="scroll-indicator" aria-hidden="true"><div class="scroll-indicator-dot"></div></div>
      </section>

      <div class="marquee"><div class="marquee-track">${marqueeItems}</div></div>

      <section class="section" id="about">
        <div class="container">
          <div class="section-head reveal">
            <p class="eyebrow">Sobre</p>
            <h2 class="gradient-text">Construo solucoes completas, do conceito ao deploy.</h2>
            <p>Stack solida, mentalidade de produto e foco em entrega real.</p>
          </div>
          <div class="about-grid">
            <div class="about-text reveal">
              <p>Sou desenvolvedor <strong>full stack</strong> com forte atuacao em <strong>backend, APIs, automacoes, cloud, dados e IA aplicada</strong>. Trabalho com <strong>Python, Node.js, C#</strong> e tenho experiencia solida em bancos relacionais e NoSQL.</p>
              <p>Combino codigo limpo com mentalidade de produto: penso em performance, observabilidade, custo e experiencia. Curto integrar IA generativa em fluxos reais, nao como demonstracao, mas como ganho mensuravel de produtividade.</p>
              <p>Estou em evolucao constante, experimentando arquiteturas, ferramentas e modelos para entregar produtos confiaveis, rapidos e bonitos.</p>
              <div class="about-stats">
                <div class="stat"><span class="stat-num">3+</span><span class="stat-label">anos construindo software</span></div>
                <div class="stat"><span class="stat-num">15+</span><span class="stat-label">tecnologias em uso ativo</span></div>
                <div class="stat"><span class="stat-num">infinito</span><span class="stat-label">curiosidade tecnica</span></div>
                <div class="stat"><span class="stat-num">99%</span><span class="stat-label">commits passam no CI</span></div>
              </div>
            </div>
            <div class="about-cards reveal-stagger">
              <div class="about-card"><div class="about-card-icon">${icon("Server", { size: 22 })}</div><h3>Arquitetura e APIs</h3><p>Modelagem clara, integracoes estaveis e contratos bem documentados. REST, eventos e cache.</p></div>
              <div class="about-card"><div class="about-card-icon">${icon("Sparkles", { size: 22 })}</div><h3>IA aplicada</h3><p>Solucoes com OpenAI e Gemini para automacao, busca semantica e ganho real de produtividade.</p></div>
              <div class="about-card"><div class="about-card-icon">${icon("Database", { size: 22 })}</div><h3>Dados e Performance</h3><p>Consultas eficientes, caches, metricas e dashboards para tomada de decisao baseada em fato.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="stack">
        <div class="container">
          <div class="section-head reveal">
            <p class="eyebrow">Stack</p>
            <h2 class="gradient-text">Stack moderna, escolhida com intencao.</h2>
            <p>Cada ferramenta foi escolhida por um motivo especifico. Sem cargo cult.</p>
          </div>
          <div class="stack-grid reveal-stagger">${stackCards}</div>
        </div>
      </section>

      <section class="section" id="projects">
        <div class="container">
          <div class="section-head reveal">
            <p class="eyebrow">Projetos</p>
            <h2 class="gradient-text">Produtos com foco em performance, clareza e entrega.</h2>
            <p>Uma selecao de trabalhos, alguns no ar, outros em construcao.</p>
          </div>
          <div class="projects-grid reveal-stagger">${projectCards}</div>
          <div style="text-align:center;margin-top:40px" class="reveal">
            <a href="https://github.com/SaulooMatos?tab=repositories" target="_blank" rel="noreferrer" class="btn btn-ghost">
              ${icon("Github", { size: 16 })} Ver todos no GitHub ${icon("External", { size: 14 })}
            </a>
          </div>
        </div>
      </section>

      <section class="section terminal-section" id="terminal">
        <div class="container">
          <div class="section-head reveal">
            <p class="eyebrow">Terminal</p>
            <h2 class="gradient-text">Interaja por linha de comando.</h2>
            <p>Cliquei em explorar como dev? Use o terminal abaixo. Tente <code class="inline-code">whoami</code>, <code class="inline-code">stack</code> ou <code class="inline-code">projects</code>.</p>
          </div>
          <div class="terminal-card reveal" id="terminal-card">
            <div class="terminal-head">
              <div class="ide-traffic"><span class="ide-dot r"></span><span class="ide-dot y"></span><span class="ide-dot g"></span></div>
              <div class="terminal-title">saulo@portfolio - ~/dev</div>
              <div class="terminal-suggestions" id="terminal-suggestions"></div>
            </div>
            <div class="terminal-body" id="terminal-body">
              <div id="terminal-history"></div>
              <form id="terminal-form" class="term-input-row">
                <span class="term-prompt">saulo@dev:~$</span>
                <input id="terminal-input" class="term-input" spellcheck="false" autocomplete="off" aria-label="Terminal input" />
                <span class="term-cursor"></span>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="diff">
        <div class="container">
          <div class="section-head reveal">
            <p class="eyebrow">Diferenciais</p>
            <h2 class="gradient-text">O que eu trago alem do codigo.</h2>
          </div>
          <div class="diff-grid reveal-stagger">${diffCards}</div>
        </div>
      </section>

      <section class="contact-section" id="contato">
        <div class="container">
          <div class="contact-card reveal">
            <p class="eyebrow" style="justify-content:center;display:inline-flex">Contato</p>
            <h2 class="gradient-text" style="margin-top:14px">Vamos transformar ideias<br />em solucoes reais?</h2>
            <p>Se voce chegou ate aqui, vale uma conversa. Mando ideias, mockups, codigo ou so um cafe para trocar referencia.</p>
            <div class="contact-actions">
              <a href="https://wa.me/5514996204876?text=Ola%2C+gostaria+de+conversar+sobre+um+projeto%21" target="_blank" rel="noreferrer" class="btn btn-primary">${icon("Whatsapp", { size: 16 })} WhatsApp</a>
              <a href="https://www.linkedin.com/in/saulo-matos" target="_blank" rel="noreferrer" class="btn btn-ghost">${icon("Linkedin", { size: 16 })} LinkedIn</a>
              <a href="https://github.com/SaulooMatos" target="_blank" rel="noreferrer" class="btn btn-ghost">${icon("Github", { size: 16 })} GitHub</a>
              <a href="assets/curriculo_saulo_matos.pdf" target="_blank" rel="noreferrer" class="btn btn-ghost">${icon("Download", { size: 16 })} Curriculo</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <div class="footer-socials">
            <a href="https://github.com/SaulooMatos" target="_blank" rel="noreferrer" aria-label="GitHub">${icon("Github", { size: 16 })}</a>
            <a href="https://www.linkedin.com/in/saulo-matos" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon("Linkedin", { size: 16 })}</a>
            <a href="https://www.instagram.com/sauloo_h/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor" style="width:16px;height:16px"><path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.07 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.07-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.05-.41-2.22C2.16 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.16 8.8 2.16 12 2.16zm0 5.68A4.16 4.16 0 1 0 12 16.16a4.16 4.16 0 0 0 0-8.32zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4zm5.3-7.03a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0z"></path></svg></a>
            <a href="mailto:matossaulo.h@gmail.com" aria-label="Email">${icon("Mail", { size: 16 })}</a>
          </div>
          <p>© 2025 Saulo Henrique de Oliveira Matos - Built with HTML, CSS e JavaScript.</p>
        </div>
      </footer>

      <div class="cmdk-overlay" id="cmdk-overlay" hidden>
        <div class="cmdk-panel" role="dialog" aria-label="Command palette">
          <div class="cmdk-input-row">
            ${icon("Search", { size: 16, style: "color:var(--text-muted)" })}
            <input id="cmdk-input" class="cmdk-input" placeholder="Digite um comando ou navegue..." />
            <kbd class="cmdk-kbd">esc</kbd>
          </div>
          <div class="cmdk-list" id="cmdk-list"></div>
          <div class="cmdk-footer">
            <span><kbd class="cmdk-kbd-sm">↑↓</kbd> navegar</span>
            <span><kbd class="cmdk-kbd-sm">↵</kbd> selecionar</span>
            <span><kbd class="cmdk-kbd-sm">esc</kbd> fechar</span>
          </div>
        </div>
      </div>
    `;
  }

  function initNav() {
    const nav = document.getElementById("main-nav");
    const menu = document.getElementById("mobile-menu");
    const openBtn = document.getElementById("mobile-open");
    const closeBtn = document.getElementById("mobile-close");
    if (!nav || !menu || !openBtn || !closeBtn) return;

    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const open = () => {
      menu.hidden = false;
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      menu.hidden = true;
      document.body.style.overflow = "";
    };

    openBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      open();
    });
    closeBtn.addEventListener("click", close);
    menu.addEventListener("click", (e) => {
      if (e.target === menu) close();
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !menu.hidden) close();
    });
  }

  function initHeroMotion() {
    const stage = document.getElementById("notebook-stage");
    const notebook = document.getElementById("hero-notebook");
    if (!stage || !notebook) return;

    const state = { x: 0, y: 0, scale: 1, ty: 0, mx: 0, my: 0 };

    const applyTransform = () => {
      const rotX = (state.x || -10) + (state.my || 0);
      const rotY = state.mx || 0;
      const ty = state.ty || 0;
      const scale = state.scale || 1;
      notebook.style.transform = `translateY(${ty}px) scale(${scale}) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };

    const onScroll = () => {
      const y = window.scrollY;
      const limit = window.innerHeight * 0.8;
      const p = Math.min(y / limit, 1);
      state.x = -10 + p * 6;
      state.scale = 1 - p * 0.05;
      state.ty = -p * 40;
      applyTransform();
    };

    stage.addEventListener("mousemove", (e) => {
      const rect = stage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      state.mx = px * 6;
      state.my = py * -4;
      applyTransform();
    });
    stage.addEventListener("mouseleave", () => {
      state.mx = 0;
      state.my = 0;
      applyTransform();
    });

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function frameTotalChars(frame) {
    let total = 0;
    frame.lines.forEach((line) => {
      line.forEach((tok) => {
        total += tok.v.length;
      });
      total += 1;
    });
    return total;
  }

  function sliceFrame(frame, count) {
    const out = [];
    let remaining = count;
    frame.lines.forEach((line) => {
      if (remaining <= 0) {
        out.push([]);
        return;
      }
      const current = [];
      line.forEach((tok) => {
        if (remaining <= 0) return;
        if (tok.v.length <= remaining) {
          current.push(tok);
          remaining -= tok.v.length;
        } else {
          current.push({ t: tok.t, v: tok.v.slice(0, remaining) });
          remaining = 0;
        }
      });
      out.push(current);
      if (remaining > 0) remaining -= 1;
    });
    return out;
  }

  function findCursorLine(lines) {
    for (let i = lines.length - 1; i >= 0; i -= 1) {
      if (lines[i].length > 0) return i;
    }
    return 0;
  }

  function initNotebook() {
    const tabs = document.getElementById("ide-tabs");
    const gutter = document.getElementById("ide-gutter");
    const code = document.getElementById("ide-code");
    const statusFile = document.getElementById("ide-status-file");
    if (!tabs || !gutter || !code || !statusFile) return;

    let frameIdx = 0;
    let count = 0;
    let phase = "typing";
    let manualLockUntil = 0;
    let timer = 0;
    let tabButtons = [];

    const renderTabs = () => {
      tabs.innerHTML = `
        <div class="ide-traffic"><span class="ide-dot r"></span><span class="ide-dot y"></span><span class="ide-dot g"></span></div>
        ${CODE_FRAMES.map((f, i) => `
          <button type="button" class="ide-tab${i === frameIdx ? " active" : ""}" data-tab-index="${i}" aria-label="Abrir ${esc(f.file)}">
            ${icon("File", { className: "ide-tab-icon", size: 11 })}
            ${esc(f.file)}
          </button>
        `).join("")}
      `;
      tabButtons = Array.from(tabs.querySelectorAll("[data-tab-index]"));
    };

    const updateActiveTab = () => {
      tabButtons.forEach((btn, i) => {
        btn.classList.toggle("active", i === frameIdx);
      });
    };

    const renderNotebook = () => {
      const current = CODE_FRAMES[frameIdx];
      const visible = sliceFrame(current, count);
      const cursorLine = findCursorLine(visible);

      gutter.innerHTML = current.lines.map((_, i) => `<div>${i + 1}</div>`).join("");
      code.innerHTML = visible.map((line, i) => {
        const tokens = line.map((tok) => `<span class="tk-${tok.t}">${esc(tok.v)}</span>`).join("");
        const cursor = i === cursorLine ? '<span class="cursor-blink"></span>' : "";
        return `<span class="line">${tokens}${cursor}</span>`;
      }).join("");

      statusFile.textContent = current.file;
      updateActiveTab();
    };

    const schedule = () => {
      clearTimeout(timer);
      const frame = CODE_FRAMES[frameIdx];
      const total = frameTotalChars(frame);

      if (phase === "typing") {
        if (count >= total) {
          timer = window.setTimeout(() => {
            phase = "paused";
            schedule();
          }, 1400);
          return;
        }
        const speed = 18 + Math.random() * 30;
        timer = window.setTimeout(() => {
          count += 1;
          renderNotebook();
          schedule();
        }, speed);
        return;
      }

      if (phase === "paused") {
        const extraHold = Math.max(0, manualLockUntil - Date.now());
        timer = window.setTimeout(() => {
          phase = "erasing";
          schedule();
        }, 1800 + extraHold);
        return;
      }

      if (count <= 0) {
        frameIdx = (frameIdx + 1) % CODE_FRAMES.length;
        phase = "typing";
        renderNotebook();
        schedule();
        return;
      }

      timer = window.setTimeout(() => {
        count = Math.max(0, count - 4);
        renderNotebook();
        schedule();
      }, 12);
    };

    tabs.addEventListener("click", (e) => {
      const target = e.target.closest("[data-tab-index]");
      if (!target) return;
      const i = Number(target.getAttribute("data-tab-index"));
      if (Number.isNaN(i) || i === frameIdx) return;
      frameIdx = i;
      count = 0;
      phase = "typing";
      manualLockUntil = Date.now() + 14000;
      renderNotebook();
      schedule();
    });

    renderTabs();
    renderNotebook();
    schedule();
  }

  function initTerminal() {
    const historyEl = document.getElementById("terminal-history");
    const inputEl = document.getElementById("terminal-input");
    const form = document.getElementById("terminal-form");
    const body = document.getElementById("terminal-body");
    const card = document.getElementById("terminal-card");
    const suggestions = document.getElementById("terminal-suggestions");
    if (!historyEl || !inputEl || !form || !body || !card || !suggestions) return;

    const state = {
      history: [
        {
          kind: "out",
          lines: [
            { c: "muted", t: "saulo-portfolio-cli - v1.0.0" },
            { c: "muted", t: "digite 'help' para ver os comandos - 'clear' para limpar" },
          ],
        },
      ],
      cmdHistory: [],
      hIdx: -1,
    };

    const commands = {
      help: () => ({
        type: "block",
        lines: [
          { c: "muted", t: "Comandos disponiveis:" },
          { c: "row", k: "whoami", v: "quem e o Saulo" },
          { c: "row", k: "stack", v: "tecnologias em uso" },
          { c: "row", k: "projects", v: "projetos em destaque" },
          { c: "row", k: "contact", v: "formas de contato" },
          { c: "row", k: "skills", v: "areas de dominio" },
          { c: "row", k: "clear", v: "limpa o terminal" },
        ],
      }),
      whoami: () => ({
        type: "block",
        lines: [
          { c: "accent", t: "saulo.matos@dev:~$" },
          { c: "text", t: "Saulo Henrique de Oliveira Matos" },
          { c: "muted", t: "Full Stack Developer - Backend - APIs - IA aplicada" },
          { c: "muted", t: "Disponivel para novas oportunidades - Brasil" },
        ],
      }),
      stack: () => ({
        type: "block",
        lines: [
          { c: "accent", t: "> stack list" },
          { c: "row", k: "front-end", v: "React - JS - HTML5 - CSS3" },
          { c: "row", k: "back-end", v: "Python - Node.js - C# - FastAPI" },
          { c: "row", k: "cloud", v: "Docker - GCP - Azure DevOps" },
          { c: "row", k: "data", v: "MySQL - SQL Server - MongoDB" },
          { c: "row", k: "ai", v: "OpenAI - Gemini - RAG" },
        ],
      }),
      projects: () => ({
        type: "block",
        lines: [
          { c: "accent", t: "> projects --featured" },
          { c: "text", t: "1. Donkey Kong Runner - Canvas + JS puro" },
          { c: "muted", t: "   github.com/SaulooMatos/Donkey-Kong-Jogo" },
          { c: "text", t: "2. API + IA aplicada - FastAPI + RAG" },
          { c: "muted", t: "   em desenvolvimento" },
          { c: "text", t: "3. Dashboard de operacoes" },
          { c: "muted", t: "   em desenvolvimento" },
        ],
      }),
      contact: () => ({
        type: "block",
        lines: [
          { c: "accent", t: "> contact --all" },
          { c: "row", k: "email", v: "matossaulo.h@gmail.com" },
          { c: "row", k: "linkedin", v: "/in/saulo-matos" },
          { c: "row", k: "github", v: "/SaulooMatos" },
          { c: "row", k: "whatsapp", v: "+55 14 99620-4876" },
        ],
      }),
      skills: () => ({
        type: "block",
        lines: [
          { c: "accent", t: "> skills --by-category" },
          { c: "row", k: "backend", v: "★★★★★" },
          { c: "row", k: "apis", v: "★★★★★" },
          { c: "row", k: "automacao", v: "★★★★☆" },
          { c: "row", k: "cloud", v: "★★★★☆" },
          { c: "row", k: "ia aplicada", v: "★★★★☆" },
          { c: "row", k: "front-end", v: "★★★☆☆" },
        ],
      }),
      clear: () => ({ type: "clear" }),
      ls: () => ({ type: "block", lines: [{ c: "muted", t: "drwxr-xr-x  about/  stack/  projects/  contact/" }] }),
      date: () => ({ type: "block", lines: [{ c: "muted", t: new Date().toString() }] }),
    };

    function renderHistory() {
      historyEl.innerHTML = state.history
        .map((item) => {
          if (item.kind === "in") {
            return `<div class="term-in"><span class="term-prompt">saulo@dev:~$</span><span>${esc(item.t)}</span></div>`;
          }
          return `<div class="term-out">${item.lines
            .map((line) => {
              if (line.c === "row") {
                return `<div class="term-row"><span class="term-row-k">${esc(line.k)}</span><span class="term-row-dots"></span><span class="term-row-v">${esc(line.v)}</span></div>`;
              }
              return `<div class="term-line term-${esc(line.c)}">${esc(line.t)}</div>`;
            })
            .join("")}</div>`;
        })
        .join("");
      body.scrollTop = body.scrollHeight;
    }

    function run(raw) {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;

      state.cmdHistory.push(raw);
      state.hIdx = -1;

      if (cmd === "clear") {
        state.history = [];
        renderHistory();
        return;
      }

      const fn = commands[cmd];
      const result = fn
        ? fn()
        : { type: "block", lines: [{ c: "error", t: `command not found: ${cmd} - try 'help'` }] };

      state.history.push({ kind: "in", t: raw });
      if (result && result.lines) state.history.push({ kind: "out", lines: result.lines });
      renderHistory();
    }

    suggestions.innerHTML = TERMINAL_SUGGESTIONS.map((s) => `<button class="term-chip" type="button" data-cmd="${esc(s)}">${esc(s)}</button>`).join("");
    suggestions.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cmd]");
      if (!btn) return;
      run(btn.getAttribute("data-cmd") || "");
      inputEl.focus();
    });

    card.addEventListener("click", () => inputEl.focus());
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      run(inputEl.value);
      inputEl.value = "";
    });

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!state.cmdHistory.length) return;
        state.hIdx = state.hIdx === -1 ? state.cmdHistory.length - 1 : Math.max(0, state.hIdx - 1);
        inputEl.value = state.cmdHistory[state.hIdx];
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (state.hIdx === -1) return;
        const next = state.hIdx + 1;
        if (next >= state.cmdHistory.length) {
          state.hIdx = -1;
          inputEl.value = "";
        } else {
          state.hIdx = next;
          inputEl.value = state.cmdHistory[state.hIdx];
        }
      }
    });

    renderHistory();
  }

  function initCommandPalette() {
    const overlay = document.getElementById("cmdk-overlay");
    const panel = overlay ? overlay.querySelector(".cmdk-panel") : null;
    const input = document.getElementById("cmdk-input");
    const list = document.getElementById("cmdk-list");
    if (!overlay || !panel || !input || !list) return;

    let open = false;
    let query = "";
    let active = 0;

    function filtered() {
      if (!query.trim()) return CMD_COMMANDS;
      const q = query.toLowerCase();
      return CMD_COMMANDS.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(q) ||
          cmd.hint.toLowerCase().includes(q) ||
          cmd.kw.toLowerCase().includes(q)
      );
    }

    function closePalette() {
      open = false;
      overlay.hidden = true;
    }

    function openPalette() {
      open = true;
      query = "";
      active = 0;
      input.value = "";
      overlay.hidden = false;
      renderList();
      setTimeout(() => input.focus(), 50);
    }

    function run(cmd) {
      closePalette();
      setTimeout(() => cmd.action(), 80);
    }

    function renderList() {
      const items = filtered();
      if (!items.length) {
        list.innerHTML = '<div class="cmdk-empty">Nenhum comando encontrado.</div>';
        return;
      }
      if (active >= items.length) active = items.length - 1;
      list.innerHTML = items
        .map(
          (cmd, i) => `
          <button class="cmdk-item${i === active ? " active" : ""}" data-cmd-id="${esc(cmd.id)}" type="button">
            <span class="cmdk-item-icon">${icon(cmd.icon, { size: 15 })}</span>
            <span class="cmdk-item-label">${esc(cmd.label)}</span>
            <span class="cmdk-item-hint">${esc(cmd.hint)}</span>
            ${icon("ArrowRight", {
              size: 12,
              style: i === active ? "opacity:1;color:var(--accent)" : "opacity:0;color:var(--accent)",
            })}
          </button>
        `
        )
        .join("");
    }

    window.addEventListener("keydown", (e) => {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      const cmdK = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k";
      if (cmdK) {
        e.preventDefault();
        if (open) closePalette();
        else openPalette();
        return;
      }
      if (e.key === "Escape" && open) closePalette();
    });

    overlay.addEventListener("click", closePalette);
    panel.addEventListener("click", (e) => e.stopPropagation());

    input.addEventListener("input", () => {
      query = input.value;
      active = 0;
      renderList();
    });

    input.addEventListener("keydown", (e) => {
      const items = filtered();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        active = Math.min(active + 1, Math.max(0, items.length - 1));
        renderList();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        active = Math.max(active - 1, 0);
        renderList();
      } else if (e.key === "Enter" && items[active]) {
        e.preventDefault();
        run(items[active]);
      }
    });

    list.addEventListener("mouseenter", (e) => {
      const row = e.target.closest("[data-cmd-id]");
      if (!row) return;
      const items = filtered();
      const idx = items.findIndex((it) => it.id === row.getAttribute("data-cmd-id"));
      if (idx >= 0) {
        active = idx;
        renderList();
      }
    }, true);

    list.addEventListener("click", (e) => {
      const row = e.target.closest("[data-cmd-id]");
      if (!row) return;
      const item = CMD_COMMANDS.find((it) => it.id === row.getAttribute("data-cmd-id"));
      if (item) run(item);
    });
  }

  function initRevealObserver() {
    const targets = document.querySelectorAll(".reveal, .reveal-stagger");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
  }

  function initCardMouseFollow() {
    const cards = document.querySelectorAll(".about-card, .stack-card, .project-card, .diff-card");
    const onMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
          card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          card.style.setProperty("--my", `${e.clientY - rect.top}px`);
        }
      });
    };
    window.addEventListener("mousemove", onMove);
  }

  render();
  initNav();
  initHeroMotion();
  initNotebook();
  initTerminal();
  initCommandPalette();
  initRevealObserver();
  initCardMouseFollow();
})();

