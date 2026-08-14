export type PublicBlogArticle = {
  slug: string
  title: string
  category: string
  summary: string
  keywords: string
  content: string[]
}

export type KnowledgeLink = {
  label: string
  href: string
  kind: 'section' | 'article' | 'external' | 'phone'
}

export type KnowledgeEntry = {
  id: string
  category: string
  title: string
  summary: string
  facts: string[]
  keywords: string[]
  links: KnowledgeLink[]
  relatedIds?: string[]
}

export const portfolioKnowledge = {
  identity: {
    name: 'Gassem Taoufik',
    role: 'Technical Project Manager',
    location: 'Montigny-le-Bretonneux, France',
    publicContact: {
      phone: '+33 7 70 47 10 58',
      linkedin: 'https://www.linkedin.com/in/taoufik-g-387964129/',
      github: 'https://github.com/taoufikgassem-prog',
    },
  },
  experienceYears: 8,
  availability: {
    open: true,
    summary: 'Open to hybrid or partially remote opportunities. Notice period depends on the assignment.',
  },
  professionalSummary: [
    'Electronics and embedded-systems engineer who progressed into technical project management and systems engineering in automotive.',
    'Public portfolio states end-to-end V-cycle experience: requirements, supplier development, ECU integration, HIL/MIL/PIE validation and homologation.',
    'Public portfolio states ServiceNow ITSM expertise and a ServiceNow Certified System Administrator certification.',
  ],
  currentRole: {
    role: 'Team Leader / Technical Project Manager',
    company: 'Expleo',
    period: 'November 2022 – present',
    location: 'Montigny-le-Bretonneux',
    responsibilities: [
      'Cross-functional management of 22 engineers across France, Romania, India and Morocco.',
      'QCD management of a workpackage above €4M, including deliverables, invoicing and customer milestones.',
      'Monthly steering committees and reporting with Excel dashboards and JIRA.',
      'Skills matrix, training plan, activity offshoring and technical recruitment.',
      'Business development, prospecting, pre-studies and technical offer consolidation.',
    ],
    publicResults: ['Team CQP improved from 1.8 to 3.21 out of 4 (+78%).'],
  },
  professionalExperience: [
    {
      id: 'expleo-team-leader',
      role: 'Team Leader / Technical Project Manager',
      company: 'Expleo',
      period: 'November 2022 – present',
      tools: ['JIRA', 'Excel'],
      skills: ['Leadership', 'QCD', 'Workpackage management', 'Recruitment', 'International management'],
    },
    {
      id: 'renault-system-leader',
      role: 'Systems Engineering Leader',
      company: 'Groupe Renault',
      period: 'June 2021 – October 2022',
      tools: ['ONEVAL', 'REVS', 'DOORS', 'Codebeamer', 'CANalyzer'],
      skills: ['Systems architecture', 'Requirements', 'HIL', 'MIL', 'ECU validation', 'Supplier coordination'],
    },
    {
      id: 'renault-validation-leader',
      role: 'Validation Engineering Leader',
      company: 'Groupe Renault',
      period: 'March 2020 – May 2021',
      tools: ['Codebeamer', 'Robot Framework', 'CAPL', 'GitLab CI/CD', 'CANalyzer'],
      skills: ['Validation strategy', 'Test automation', 'Traceability', 'Campaign management'],
    },
    {
      id: 'renault-electronics-development',
      role: 'Electronics Development Lead',
      company: 'Groupe Renault',
      period: 'March 2019 – March 2020',
      tools: ['Builder', 'DDT2000', 'GCC', 'CANalyzer'],
      skills: ['Supplier management', 'ECU development', 'CAN diagnostics', 'HIL/PIE', 'EMC', 'Homologation'],
    },
    {
      id: 'sdec-embedded-engineer',
      role: 'Embedded Systems Engineer',
      company: 'SDEC France',
      period: 'March 2018 – February 2019',
      tools: ['C'],
      skills: ['Embedded development', 'Real-time measurement', 'Unit testing', 'System testing'],
    },
  ],
  projects: [
    {
      id: 'hands-free-access',
      title: 'Hands-Free Access System Architecture and Validation',
      summary: 'Architecture and validation of a production-vehicle hands-free access system covering more than 20 functions, including LF/RF, HFM, ESCL and VSA.',
      skills: ['Systems engineering', 'Requirements', 'Validation', 'Automotive'],
      tools: ['DOORS', 'Codebeamer', 'DDT2000', 'CANalyzer', 'ONEVAL', 'REVS', 'ECLEM'],
    },
    {
      id: 'test-industrialization',
      title: 'Test Industrialization and CI/CD',
      summary: 'Automated ECU validation chain from CAPL LLK development and Robot Framework generation to GitLab pipelines and result analysis.',
      skills: ['Test automation', 'Embedded validation', 'CI/CD'],
      tools: ['Robot Framework', 'CAPL', 'GitLab CI/CD', 'Codebeamer', 'CANalyzer'],
    },
    {
      id: 'servicenow-incident',
      title: 'ServiceNow Incident Management End-to-End',
      summary: 'Complete Incident Management implementation from requirements to rollback documentation, including portal, SLA, CMDB, ACL and more than 30 validation cases.',
      skills: ['ITSM', 'Platform administration', 'Automation', 'Security'],
      tools: ['ServiceNow', 'CMDB', 'SLA', 'ACL', 'Business Rules', 'Service Portal'],
    },
    {
      id: 'hfm-supplier',
      title: 'HFM ECU Supplier Management',
      summary: 'Supplier-led HFM ECU development covering requirements, hardware/software deliverables, diagnostics, validation and vehicle integration.',
      skills: ['Supplier management', 'ECU development', 'Automotive diagnostics'],
      tools: ['Builder', 'DDT2000', 'GCC', 'CANalyzer'],
    },
    {
      id: 'qcd-dashboard',
      title: 'QCD Project and Team Dashboard',
      summary: 'Collaborative dashboard supporting monthly project, invoicing, delivery and team-performance steering for a 22-person multi-site team.',
      skills: ['Project management', 'Leadership', 'Reporting'],
      tools: ['Excel', 'JIRA'],
    },
  ],
  skills: {
    leadership: ['International team management', 'QCD', 'Budget and workpackage management', 'KPI reporting', 'Steering committees', 'Agile/Scrum', 'Technical recruitment'],
    automotive: ['ECU', 'CAN diagnostics', 'HFM', 'ESCL', 'LF/RF', 'HIL', 'MIL', 'PIE', 'EMC', 'Homologation', 'V-cycle'],
    testing: ['Codebeamer', 'Robot Framework', 'CAPL', 'HIL/MIL/PIE', 'Traceability', 'Test campaigns'],
    automation: ['Robot Framework', 'CAPL', 'GitLab CI/CD', 'ServiceNow Business Rules', 'Client Scripts', 'Script Includes', 'UI Policies'],
    programming: ['C', 'Java'],
    servicenow: ['ITSM', 'CMDB', 'SLA', 'ACL', 'Business Rules', 'Client Scripts', 'UI Policies', 'Script Includes', 'UI Actions', 'Service Portal', 'Reports', 'Dashboards', 'Update Sets', 'GenAI'],
    tools: ['DOORS', 'JIRA', 'ECLEM', 'SBM', 'GCC', 'MS Office', 'DDT2000', 'CANalyzer', 'WOW', 'Builder', 'ONEVAL', 'REVS', 'Visual Studio', 'Eclipse', 'mikroC', 'Maven', 'Proteus'],
  },
  education: [{
    degree: 'Engineering degree in Electronics and Embedded Systems',
    institution: 'École Polytechnique de l’Université de Tours',
    period: '2015 – 2018',
    level: 'BAC+5',
  }],
  certifications: [
    'ServiceNow Certified System Administrator (CSA)',
    'The Complete Guide to ServiceNow GenAI & Agentic AI',
    'Master ServiceNow Admin & Development from Basic to Pro',
    'Selenium WebDriver with Java for Beginners',
    'Art of Leadership: Authentic Influence & Leading from Within',
    'Découvrir les méthodes agiles pour le développement logiciel',
    'L’essentiel de Java',
    'Team Leader Fundamentals Professional Certificate',
    'Développer son intelligence émotionnelle',
  ],
  languages: ['Arabic — native', 'French — native', 'English — professional'],
  cv: {
    available: false,
    note: 'The public portfolio currently shows a CV button but does not expose a working public download URL.',
  },
} as const

const sectionLinks = {
  profile: { label: 'View profile', href: '/#profil', kind: 'section' as const },
  experience: { label: 'View experience', href: '/#parcours', kind: 'section' as const },
  projects: { label: 'View projects', href: '/#projets', kind: 'section' as const },
  skills: { label: 'View skills', href: '/#stack', kind: 'section' as const },
  certifications: { label: 'View certifications', href: '/#certifications', kind: 'section' as const },
  contact: { label: 'Contact Taoufik', href: '/#contact', kind: 'section' as const },
}

const projectArticleLinks: Record<string, KnowledgeLink> = {
  'hands-free-access': { label: 'View project', href: '/blog/architecture-acces-mains-libres-hfm-escl', kind: 'article' },
  'test-industrialization': { label: 'View project', href: '/blog/industrialiser-validation-robot-framework-capl', kind: 'article' },
  'servicenow-incident': { label: 'View ServiceNow project', href: '/blog/servicenow-itsm-industrie-incident-management', kind: 'article' },
  'hfm-supplier': { label: 'View project', href: '/blog/coordination-fournisseur-pilote-developpement-electronique', kind: 'article' },
  'qcd-dashboard': { label: 'View project', href: '/blog/pilotage-qcd-equipe-internationale-cqp', kind: 'article' },
}

export function createKnowledgeEntries(articles: PublicBlogArticle[]): KnowledgeEntry[] {
  const entries: KnowledgeEntry[] = [
    {
      id: 'identity',
      category: 'identity',
      title: 'Who is Taoufik?',
      summary: `${portfolioKnowledge.identity.name} is a ${portfolioKnowledge.identity.role} based in ${portfolioKnowledge.identity.location}.`,
      facts: [...portfolioKnowledge.professionalSummary],
      keywords: ['who', 'profile', 'summary', 'taoufik', 'identity', 'about', 'location', 'based'],
      links: [sectionLinks.profile],
      relatedIds: ['current-role', 'experience'],
    },
    {
      id: 'current-role',
      category: 'experience',
      title: 'Current role',
      summary: `${portfolioKnowledge.currentRole.role} at ${portfolioKnowledge.currentRole.company} since ${portfolioKnowledge.currentRole.period.split(' – ')[0]}.`,
      facts: [...portfolioKnowledge.currentRole.responsibilities, ...portfolioKnowledge.currentRole.publicResults],
      keywords: ['current', 'role', 'job', 'position', 'today', 'work', 'expleo', 'responsibility', 'responsibilities'],
      links: [sectionLinks.experience],
      relatedIds: ['leadership', 'experience'],
    },
    {
      id: 'experience',
      category: 'experience',
      title: 'Professional experience',
      summary: 'Public experience includes Expleo, Groupe Renault and SDEC France, spanning embedded engineering, ECU development, validation, systems engineering and technical project leadership.',
      facts: portfolioKnowledge.professionalExperience.map(item => `${item.role} — ${item.company} (${item.period})`),
      keywords: ['experience', 'career', 'companies', 'worked', 'employment', 'renault', 'expleo', 'sdec', 'background'],
      links: [sectionLinks.experience],
      relatedIds: ['current-role', 'automotive', 'testing', 'leadership'],
    },
    {
      id: 'experience-years',
      category: 'experience',
      title: 'Years of experience',
      summary: `The public portfolio states ${portfolioKnowledge.experienceYears} years of professional experience.`,
      facts: ['Career shown from March 2018 to the present across SDEC France, Groupe Renault and Expleo.'],
      keywords: ['years', 'year', 'years of experience', 'experience', 'seniority', 'tenure', 'annees', 'ans', 'combien'],
      links: [sectionLinks.experience],
      relatedIds: ['experience', 'current-role'],
    },
    {
      id: 'availability',
      category: 'availability',
      title: 'Availability',
      summary: portfolioKnowledge.availability.summary,
      facts: ['Open to Technical Project Manager, Engineering Manager and Validation Lead opportunities.'],
      keywords: ['available', 'availability', 'open', 'opportunity', 'opportunities', 'disponible', 'disponibilite', 'opportunite', 'recruitment'],
      links: [sectionLinks.contact],
      relatedIds: ['contact', 'current-role'],
    },
    {
      id: 'leadership',
      category: 'leadership',
      title: 'Leadership and team management',
      summary: 'Taoufik’s public portfolio describes cross-functional leadership of 22 engineers across four countries and QCD ownership of a workpackage above €4M.',
      facts: [...portfolioKnowledge.currentRole.responsibilities, ...portfolioKnowledge.currentRole.publicResults],
      keywords: ['leadership', 'leader', 'manage', 'management', 'team', 'engineers', 'international', 'qcd', 'budget', 'people'],
      links: [sectionLinks.experience, sectionLinks.projects],
      relatedIds: ['current-role', 'qcd-dashboard'],
    },
    {
      id: 'automotive',
      category: 'automotive',
      title: 'Automotive and embedded-systems experience',
      summary: 'Automotive experience covers production ECU development, HFM/ESCL hands-free access, CAN diagnostics, supplier coordination, V-cycle validation and homologation.',
      facts: [...portfolioKnowledge.skills.automotive],
      keywords: ['automotive', 'vehicle', 'car', 'ecu', 'embedded', 'hfm', 'escl', 'can', 'renault', 'validation', 'homologation'],
      links: [sectionLinks.experience, sectionLinks.projects],
      relatedIds: ['hands-free-access', 'hfm-supplier', 'testing'],
    },
    {
      id: 'testing',
      category: 'testing',
      title: 'Testing and validation experience',
      summary: 'Testing experience includes validation strategy, Codebeamer traceability, HIL/MIL/PIE campaigns, CAN analysis and automated ECU validation.',
      facts: [...portfolioKnowledge.skills.testing],
      keywords: ['test', 'testing', 'validation', 'qa', 'quality', 'hil', 'mil', 'pie', 'codebeamer', 'campaign', 'traceability'],
      links: [sectionLinks.projects, sectionLinks.skills],
      relatedIds: ['test-industrialization', 'automation', 'automotive'],
    },
    {
      id: 'automation',
      category: 'automation',
      title: 'Automation experience',
      summary: 'Automation work includes Robot Framework, CAPL and GitLab CI/CD for ECU validation, plus ServiceNow workflow and platform automation.',
      facts: [...portfolioKnowledge.skills.automation],
      keywords: ['automation', 'automate', 'robot', 'robot framework', 'capl', 'pipeline', 'ci', 'cicd', 'gitlab', 'workflow'],
      links: [sectionLinks.projects, sectionLinks.skills],
      relatedIds: ['testing', 'test-industrialization', 'servicenow'],
    },
    {
      id: 'servicenow',
      category: 'servicenow',
      title: 'ServiceNow and ITSM',
      summary: 'The portfolio presents ServiceNow CSA certification and practical work across ITSM, CMDB, SLA, ACL, automation, Service Portal, reporting and GenAI.',
      facts: [...portfolioKnowledge.skills.servicenow],
      keywords: ['servicenow', 'itsm', 'cmdb', 'sla', 'acl', 'portal', 'incident', 'csm', 'hrsd', 'genai'],
      links: [projectArticleLinks['servicenow-incident'], sectionLinks.skills],
      relatedIds: ['servicenow-incident', 'certifications'],
    },
    {
      id: 'technical-skills',
      category: 'skills',
      title: 'Technical skills and tools',
      summary: 'The public stack combines embedded validation, automotive diagnostics, systems/project tools, C and Java, and ServiceNow administration and development.',
      facts: [
        `Programming: ${portfolioKnowledge.skills.programming.join(', ')}`,
        `Testing: ${portfolioKnowledge.skills.testing.join(', ')}`,
        `Automotive: ${portfolioKnowledge.skills.automotive.join(', ')}`,
        `ServiceNow: ${portfolioKnowledge.skills.servicenow.join(', ')}`,
      ],
      keywords: ['skill', 'skills', 'technology', 'technologies', 'tool', 'tools', 'stack', 'programming', 'language', 'software'],
      links: [sectionLinks.skills],
      relatedIds: ['testing', 'automation', 'automotive', 'servicenow'],
    },
    {
      id: 'projects',
      category: 'projects',
      title: 'Selected projects',
      summary: 'The portfolio presents five detailed projects covering hands-free automotive systems, test industrialization, ServiceNow Incident Management, HFM supplier management and QCD reporting.',
      facts: portfolioKnowledge.projects.map(project => `${project.title}: ${project.summary}`),
      keywords: ['project', 'projects', 'portfolio', 'work', 'case', 'case study', 'achievement', 'delivery'],
      links: [sectionLinks.projects],
      relatedIds: portfolioKnowledge.projects.map(project => project.id),
    },
    ...portfolioKnowledge.projects.map(project => ({
      id: project.id,
      category: 'projects',
      title: project.title,
      summary: project.summary,
      facts: [`Skills: ${project.skills.join(', ')}`, `Tools: ${project.tools.join(', ')}`],
      keywords: [...project.skills, ...project.tools, ...project.title.split(' ')],
      links: [projectArticleLinks[project.id]],
    })),
    {
      id: 'education',
      category: 'education',
      title: 'Education',
      summary: 'Engineering degree in Electronics and Embedded Systems from École Polytechnique de l’Université de Tours, 2015–2018 (BAC+5).',
      facts: [],
      keywords: ['education', 'degree', 'school', 'university', 'polytech', 'study', 'studies', 'academic', 'background'],
      links: [sectionLinks.certifications],
    },
    {
      id: 'certifications',
      category: 'certifications',
      title: 'Certifications',
      summary: 'The portfolio lists nine certifications spanning ServiceNow, GenAI, administration/development, Selenium, Java, agile methods and leadership.',
      facts: [...portfolioKnowledge.certifications],
      keywords: ['certification', 'certifications', 'certified', 'certificate', 'csa', 'servicenow', 'udemy', 'linkedin learning'],
      links: [sectionLinks.certifications],
    },
    {
      id: 'languages',
      category: 'languages',
      title: 'Languages',
      summary: 'Arabic and French are listed as native languages; English is listed at professional level.',
      facts: [...portfolioKnowledge.languages],
      keywords: ['language', 'languages', 'speak', 'arabic', 'french', 'english', 'fluency'],
      links: [sectionLinks.profile],
    },
    {
      id: 'contact',
      category: 'contact',
      title: 'Contact Taoufik',
      summary: 'Public contact options are phone and LinkedIn.',
      facts: [
        `Phone: ${portfolioKnowledge.identity.publicContact.phone}`,
        `LinkedIn: ${portfolioKnowledge.identity.publicContact.linkedin}`,
      ],
      keywords: ['contact', 'phone', 'telephone', 'linkedin', 'reach', 'message'],
      links: [
        sectionLinks.contact,
        { label: 'Call Taoufik', href: `tel:${portfolioKnowledge.identity.publicContact.phone.replace(/\s/g, '')}`, kind: 'phone' },
        { label: 'LinkedIn', href: portfolioKnowledge.identity.publicContact.linkedin, kind: 'external' },
      ],
    },
    {
      id: 'cv',
      category: 'cv',
      title: 'CV availability',
      summary: portfolioKnowledge.cv.note,
      facts: [],
      keywords: ['cv', 'resume', 'download', 'curriculum'],
      links: [sectionLinks.contact],
    },
  ]

  const skillVocabulary = [...new Set([
    ...portfolioKnowledge.skills.testing,
    ...portfolioKnowledge.skills.automotive,
    ...portfolioKnowledge.skills.automation,
    ...portfolioKnowledge.skills.servicenow,
    ...portfolioKnowledge.skills.tools,
  ])]

  const blogEntries = articles.map(article => {
    const searchable = `${article.title} ${article.category} ${article.summary} ${article.keywords} ${article.content.join(' ')}`.toLowerCase()
    const relatedSkills = skillVocabulary.filter(skill => searchable.includes(skill.toLowerCase())).slice(0, 8)
    return {
      id: `article:${article.slug}`,
      category: 'blog',
      title: article.title,
      summary: article.summary,
      facts: [`Category: ${article.category}`, `Related skills: ${relatedSkills.join(', ') || 'No explicit skill relation extracted'}`],
      keywords: [article.category, ...article.keywords.split(',').map(keyword => keyword.trim()), ...relatedSkills],
      links: [{ label: 'Read article', href: `/blog/${article.slug}`, kind: 'article' as const }],
      relatedIds: relatedSkills.map(skill => skill.toLowerCase().replace(/\s+/g, '-')),
    }
  })

  entries.push({
    id: 'blog',
    category: 'blog',
    title: 'Technical blog',
    summary: `The public portfolio contains ${articles.length} articles about embedded systems, automotive engineering, validation, management and ServiceNow.`,
    facts: [],
    keywords: ['blog', 'article', 'articles', 'write', 'writing', 'topics', 'publication'],
    links: [{ label: 'View all articles', href: '/blog', kind: 'article' }],
    relatedIds: blogEntries.map(article => article.id),
  })

  return [...entries, ...blogEntries]
}
