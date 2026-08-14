import { createKnowledgeEntries, type KnowledgeEntry, type PublicBlogArticle } from '../data/portfolioKnowledge.ts'

export type AssistantLanguage = 'FR' | 'EN'

export type AssistantContext = {
  lastResultIds: string[]
  lastCategory?: string
}

export type SearchResult = KnowledgeEntry & { score: number }

export type AssistantResponse = {
  answer: string
  results: SearchResult[]
  context: AssistantContext
  unknown?: boolean
  error?: 'empty' | 'too-long'
}

const MAX_QUERY_LENGTH = 400
const stopWords = new Set([
  'a', 'about', 'and', 'are', 'can', 'de', 'des', 'du', 'en', 'est', 'et', 'for', 'how', 'is', 'la', 'le',
  'les', 'me', 'of', 'on', 'ou', 'par', 'pour', 'que', 'sur', 'tell', 'the', 'to', 'un', 'une',
  'what', 'with', 'you', 'your', 'vous', 'votre', 'taoufik', 'gassem', 'moi', 'parle', 'dis', 'please', 'svp',
])

const synonymGroups = [
  ['who', 'qui', 'identity', 'profil', 'profile'],
  ['automotive', 'automobile', 'car', 'cars', 'vehicle', 'vehicles', 'voiture', 'voitures', 'vehicule', 'vehicules'],
  ['testing', 'test', 'tests', 'validation', 'qa', 'quality', 'verification', 'recette'],
  ['automation', 'automate', 'automatisation', 'robot', 'pipeline', 'cicd', 'ci', 'cd'],
  ['leadership', 'leader', 'management', 'manage', 'manager', 'equipe', 'team', 'people'],
  ['experience', 'career', 'carriere', 'parcours', 'background', 'worked', 'emploi'],
  ['skills', 'skill', 'competence', 'competences', 'stack', 'technologies', 'technology', 'tools', 'outils'],
  ['projects', 'project', 'projet', 'projets', 'realisation', 'realisations'],
  ['certifications', 'certification', 'certified', 'certifie', 'certifiees'],
  ['education', 'degree', 'diplome', 'formation', 'school', 'ecole', 'etudes'],
  ['articles', 'article', 'blog', 'publication', 'publications', 'writes', 'ecrit'],
  ['servicenow', 'itsm', 'incident', 'cmdb', 'sla'],
  ['ai', 'ia', 'genai', 'artificial', 'intelligence'],
  ['current', 'today', 'actuel', 'actuellement', 'maintenant', 'present'],
  ['years', 'year', 'annees', 'annee', 'ans'],
  ['available', 'availability', 'disponible', 'disponibilite', 'open', 'opportunity', 'opportunite'],
  ['contact', 'email', 'mail', 'telephone', 'phone', 'linkedin'],
  ['cv', 'resume', 'curriculum'],
]

const synonymIndex = new Map<string, string[]>()
for (const group of synonymGroups) {
  for (const word of group) synonymIndex.set(word, group)
}

export function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/[^a-z0-9+#.€-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenise(value: string): string[] {
  return [...new Set(normalizeText(value).split(' ').filter(token => token.length > 1 && !stopWords.has(token)))]
}

function expandTokens(tokens: string[]): string[] {
  const expanded = new Set(tokens)
  for (const token of tokens) synonymIndex.get(token)?.forEach(word => expanded.add(word))
  return [...expanded]
}

function levenshtein(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index)
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j += 1) {
      const saved = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1))
      previous = saved
    }
  }
  return row[b.length]
}

function tokenMatches(queryToken: string, targetToken: string): boolean {
  if (queryToken === targetToken) return true
  if (queryToken.length >= 4 && targetToken.startsWith(queryToken)) return true
  if (queryToken.length >= 5 && targetToken.length >= 5) {
    return levenshtein(queryToken, targetToken) <= (Math.max(queryToken.length, targetToken.length) >= 8 ? 2 : 1)
  }
  return false
}

function includesToken(tokens: string[], queryToken: string): boolean {
  return tokens.some(target => tokenMatches(queryToken, target))
}

const contextualPatterns = [
  /\b(which ones|those|them|these|more about|tell me more)\b/,
  /\b(lesquels|lesquelles|ceux|celles|eux|davantage|plus de details|et ca|ces projets|ces outils)\b/,
]

function isContextualFollowUp(normalized: string): boolean {
  return contextualPatterns.some(pattern => pattern.test(normalized)) || tokenise(normalized).length <= 2
}

function scoreEntry(entry: KnowledgeEntry, queryTokens: string[], normalizedQuery: string, context?: AssistantContext): number {
  const titleTokens = tokenise(entry.title)
  const keywordTokens = tokenise(entry.keywords.join(' '))
  const categoryTokens = tokenise(entry.category)
  const summaryTokens = tokenise(`${entry.summary} ${entry.facts.join(' ')}`)
  let score = 0

  for (const queryToken of queryTokens) {
    if (includesToken(titleTokens, queryToken)) score += 8
    if (includesToken(keywordTokens, queryToken)) score += 6
    if (includesToken(categoryTokens, queryToken)) score += 5
    if (includesToken(summaryTokens, queryToken)) score += 2
  }

  const phrase = normalizeText(entry.title)
  if (normalizedQuery.length > 3 && phrase.includes(normalizedQuery)) score += 12
  const originalTokens = tokenise(normalizedQuery)
  const intentBoosts: Array<[string[], string[]]> = [
    [['automotive', 'automobile', 'car', 'cars', 'vehicle', 'vehicles', 'voiture', 'voitures', 'vehicule', 'vehicules'], ['automotive']],
    [['test', 'tests', 'testing', 'validation', 'qa'], ['testing']],
    [['automation', 'automate', 'automatisation', 'robot', 'pipeline', 'cicd'], ['automation']],
    [['leadership', 'leader', 'management', 'manager', 'equipe', 'team'], ['leadership']],
    [['project', 'projects', 'projet', 'projets', 'realisation', 'realisations'], ['projects']],
    [['current', 'today', 'actuel', 'actuellement', 'maintenant'], ['current-role']],
    [['experience', 'career', 'carriere', 'parcours'], ['experience']],
    [['skill', 'skills', 'competence', 'competences', 'stack', 'outils'], ['technical-skills']],
    [['certification', 'certifications', 'certified', 'certifie'], ['certifications']],
    [['years', 'year', 'annees', 'annee', 'ans', 'combien'], ['experience-years']],
    [['available', 'availability', 'disponible', 'disponibilite', 'opportunity', 'opportunite'], ['availability']],
  ]
  for (const [intentWords, entryIds] of intentBoosts) {
    if (originalTokens.some(token => intentWords.includes(token)) && entryIds.includes(entry.id)) score += 16
  }
  if (context && isContextualFollowUp(normalizedQuery)) {
    if (context.lastResultIds.includes(entry.id)) score += 12
    if (context.lastCategory && entry.category === context.lastCategory) score += 5
    if (context.lastResultIds.some(id => entry.relatedIds?.includes(id))) score += 4
  }
  return score
}

function localizedLinkLabel(label: string, lang: AssistantLanguage): string {
  if (lang === 'EN') return label
  const translations: Record<string, string> = {
    'View profile': 'Voir le profil', 'View experience': 'Voir le parcours', 'View projects': 'Voir les projets',
    'View skills': 'Voir les compétences', 'View certifications': 'Voir les certifications',
    'Contact Taoufik': 'Contacter Taoufik', 'Read article': 'Lire l’article', 'View project': 'Voir le projet',
    'View ServiceNow project': 'Voir le projet ServiceNow', 'Call Taoufik': 'Appeler Taoufik',
  }
  return translations[label] ?? label
}

type LocalizedEntryContent = {
  title: string
  summary: string
  facts?: string[]
}

const frenchEntryContent: Record<string, LocalizedEntryContent> = {
  identity: {
    title: 'Profil de Taoufik',
    summary: 'Gassem Taoufik est Technical Project Manager, basé à Montigny-le-Bretonneux en France.',
    facts: [
      'Ingénieur en électronique et systèmes embarqués ayant évolué vers le pilotage de projet technique et l’ingénierie système automobile.',
      'Le portfolio public décrit une expérience du cycle en V de bout en bout : exigences, développement fournisseur, intégration ECU, validation HIL/MIL/PIE et homologation.',
      'Le portfolio public indique une expertise ServiceNow ITSM et une certification ServiceNow Certified System Administrator.',
    ],
  },
  'current-role': {
    title: 'Poste actuel',
    summary: 'Team Leader / Technical Project Manager chez Expleo depuis novembre 2022.',
    facts: [
      'Management transverse de 22 ingénieurs répartis entre la France, la Roumanie, l’Inde et le Maroc.',
      'Pilotage QCD d’un workpackage supérieur à 4 M€, avec suivi des livrables, de la facturation et des jalons client.',
      'Comités de pilotage mensuels et reporting avec des tableaux de bord Excel et JIRA.',
      'Matrice de compétences, plan de formation, offshoring d’activités et recrutement technique.',
      'Le portfolio indique une progression du CQP de l’équipe de 1,8 à 3,21 sur 4 (+78 %).',
    ],
  },
  experience: {
    title: 'Expérience professionnelle',
    summary: 'Le parcours public couvre Expleo, Groupe Renault et SDEC France, de l’ingénierie embarquée au pilotage de projet technique.',
    facts: [
      'Team Leader / Technical Project Manager — Expleo (novembre 2022 à aujourd’hui).',
      'Leader Ingénierie Système — Groupe Renault (juin 2021 à octobre 2022).',
      'Leader Ingénierie Validation — Groupe Renault (mars 2020 à mai 2021).',
      'Pilote Développement Électronique — Groupe Renault (mars 2019 à mars 2020).',
      'Ingénieur Systèmes Embarqués — SDEC France (mars 2018 à février 2019).',
    ],
  },
  'experience-years': {
    title: 'Années d’expérience',
    summary: 'Le portfolio public indique 8 ans d’expérience professionnelle.',
    facts: ['Le parcours présenté va de mars 2018 à aujourd’hui, chez SDEC France, Groupe Renault puis Expleo.'],
  },
  availability: {
    title: 'Disponibilité',
    summary: 'Taoufik est ouvert aux opportunités en mode hybride ou partiellement à distance.',
    facts: ['Le préavis dépend de la mission.', 'Postes ciblés : Technical Project Manager, Engineering Manager ou Responsable Validation.'],
  },
  leadership: {
    title: 'Leadership et management d’équipe',
    summary: 'Le portfolio décrit le management transverse de 22 ingénieurs dans quatre pays et le pilotage QCD d’un workpackage supérieur à 4 M€.',
    facts: ['Management international', 'Pilotage QCD', 'Budget et workpackage', 'Reporting KPI', 'Comités de pilotage', 'Recrutement technique'],
  },
  automotive: {
    title: 'Automobile et systèmes embarqués',
    summary: 'L’expérience automobile couvre le développement ECU série, l’accès mains libres HFM/ESCL, le diagnostic CAN, la coordination fournisseur, la validation en cycle en V et l’homologation.',
    facts: ['ECU', 'Diagnostic CAN', 'HFM', 'ESCL', 'LF/RF', 'HIL', 'MIL', 'PIE', 'CEM', 'Homologation', 'Cycle en V'],
  },
  testing: {
    title: 'Tests et validation',
    summary: 'L’expérience couvre la stratégie de validation, la traçabilité Codebeamer, les campagnes HIL/MIL/PIE, l’analyse CAN et la validation ECU automatisée.',
    facts: ['Codebeamer', 'Robot Framework', 'CAPL', 'HIL/MIL/PIE', 'Traçabilité', 'Campagnes de test'],
  },
  automation: {
    title: 'Automatisation',
    summary: 'Les travaux publics combinent Robot Framework, CAPL et GitLab CI/CD pour la validation ECU, ainsi que l’automatisation de plateforme ServiceNow.',
    facts: ['Robot Framework', 'CAPL', 'GitLab CI/CD', 'ServiceNow Business Rules', 'Client Scripts', 'Script Includes', 'UI Policies'],
  },
  servicenow: {
    title: 'ServiceNow et ITSM',
    summary: 'Le portfolio présente la certification ServiceNow CSA et des travaux sur ITSM, CMDB, SLA, ACL, automatisation, Service Portal, reporting et GenAI.',
  },
  'technical-skills': {
    title: 'Compétences techniques et outils',
    summary: 'La stack publique combine validation embarquée, diagnostic automobile, outils système/projet, C, Java et administration/développement ServiceNow.',
  },
  projects: {
    title: 'Projets sélectionnés',
    summary: 'Cinq projets détaillés couvrent l’accès mains libres automobile, l’industrialisation des tests, ServiceNow Incident Management, le pilotage fournisseur HFM et le reporting QCD.',
  },
  'hands-free-access': {
    title: 'Architecture et validation d’un système d’accès mains libres',
    summary: 'Architecture et validation d’un système d’accès mains libres pour véhicule série couvrant plus de 20 fonctions, dont LF/RF, HFM, ESCL et VSA.',
  },
  'test-industrialization': {
    title: 'Industrialisation des tests et CI/CD',
    summary: 'Chaîne de validation ECU automatisée, du développement LLK en CAPL et de la génération Robot Framework aux pipelines GitLab et à l’analyse des résultats.',
  },
  'servicenow-incident': {
    title: 'ServiceNow Incident Management end-to-end',
    summary: 'Implémentation complète depuis les exigences jusqu’à la documentation de rollback, avec portail, SLA, CMDB, ACL et plus de 30 cas de validation.',
  },
  'hfm-supplier': {
    title: 'Pilotage fournisseur du calculateur HFM',
    summary: 'Développement fournisseur du calculateur HFM couvrant exigences, livrables hardware/software, diagnostic, validation et intégration véhicule.',
  },
  'qcd-dashboard': {
    title: 'Dashboard projet et équipe QCD',
    summary: 'Tableau de bord collaboratif pour le pilotage mensuel des projets, de la facturation, des livraisons et de la performance d’une équipe multisite de 22 personnes.',
  },
  education: {
    title: 'Formation',
    summary: 'Diplôme d’ingénieur en électronique et systèmes embarqués de l’École Polytechnique de l’Université de Tours, 2015–2018 (BAC+5).',
  },
  certifications: {
    title: 'Certifications',
    summary: 'Le portfolio liste neuf certifications couvrant ServiceNow, GenAI, administration/développement, Selenium, Java, méthodes agiles et leadership.',
  },
  languages: {
    title: 'Langues',
    summary: 'L’arabe et le français sont indiqués comme langues maternelles ; l’anglais est indiqué au niveau professionnel.',
    facts: ['Arabe — langue maternelle', 'Français — langue maternelle', 'Anglais — niveau professionnel'],
  },
  contact: {
    title: 'Contacter Taoufik',
    summary: 'Les moyens de contact publics proposés sont le téléphone et LinkedIn.',
  },
  cv: {
    title: 'Disponibilité du CV',
    summary: 'Le portfolio ne publie actuellement aucune URL fonctionnelle de téléchargement du CV. Utilisez la section contact pour le demander.',
  },
  blog: {
    title: 'Blog technique',
    summary: 'Le portfolio public contient 33 articles sur les systèmes embarqués, l’ingénierie automobile, la validation, le management et ServiceNow.',
  },
}

function localizeEntry(entry: SearchResult, lang: AssistantLanguage): SearchResult {
  if (lang === 'EN') return entry
  if (entry.id.startsWith('article:')) {
    return {
      ...entry,
      facts: entry.facts.map(fact => fact.replace(/^Category:/, 'Catégorie :').replace(/^Related skills:/, 'Compétences liées :').replace('No explicit skill relation extracted', 'Aucune relation explicite extraite')),
    }
  }
  const translated = frenchEntryContent[entry.id]
  if (!translated) return entry
  return {
    ...entry,
    title: translated.title,
    summary: translated.summary,
    facts: translated.facts ?? entry.facts,
  }
}

function buildAnswer(results: SearchResult[], lang: AssistantLanguage): string {
  const primary = results[0]
  if (!primary) return ''
  if (primary.category === 'blog') {
    const count = Math.min(results.filter(item => item.category === 'blog').length, 3)
    return lang === 'FR'
      ? `J’ai trouvé ${count} article${count > 1 ? 's' : ''} pertinent${count > 1 ? 's' : ''} dans le portfolio.`
      : `I found ${count} relevant portfolio article${count > 1 ? 's' : ''}.`
  }
  const facts = primary.facts.slice(0, 3)
  return [primary.summary, ...facts.map(fact => `• ${fact}`)].join('\n')
}

export function searchPortfolio(
  rawQuery: string,
  articles: PublicBlogArticle[],
  lang: AssistantLanguage = 'FR',
  previousContext?: AssistantContext,
): AssistantResponse {
  const sanitized = rawQuery.replace(/[\u0000-\u001f\u007f]/g, ' ').trim()
  const emptyContext = previousContext ?? { lastResultIds: [] }
  if (!sanitized) return { answer: '', results: [], context: emptyContext, error: 'empty' }
  if (sanitized.length > MAX_QUERY_LENGTH) {
    return {
      answer: lang === 'FR' ? 'Votre question est trop longue (400 caractères maximum).' : 'Your question is too long (400 characters maximum).',
      results: [], context: emptyContext, error: 'too-long',
    }
  }

  const normalized = normalizeText(sanitized)
  const queryTokens = expandTokens(tokenise(normalized))
  const entries = createKnowledgeEntries(articles)
  const ranked = entries
    .map(entry => ({ ...entry, score: scoreEntry(entry, queryTokens, normalized, previousContext) }))
    .filter(entry => entry.score >= 5)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))

  const asksForArticles = queryTokens.some(token => ['articles', 'article', 'blog', 'publication', 'publications'].includes(token))
  const asksForServiceNowProject = queryTokens.some(token => ['servicenow', 'itsm'].includes(token))
    && queryTokens.some(token => ['project', 'projects', 'projet', 'projets'].includes(token))
  const articleResults = ranked.filter(entry => entry.category === 'blog' && entry.id.startsWith('article:'))
  const serviceNowProject = ranked.find(entry => entry.id === 'servicenow-incident')
  const minimumRelatedScore = ranked.length ? Math.max(5, ranked[0].score * 0.35) : 5
  const highConfidenceResults = ranked.filter(entry => entry.score >= minimumRelatedScore)
  const top = (asksForServiceNowProject && serviceNowProject
    ? [serviceNowProject]
    : asksForArticles && articleResults.length
      ? articleResults
      : highConfidenceResults).slice(0, 3)
  if (!top.length) {
    return {
      answer: lang === 'FR'
        ? 'Je n’ai pas trouvé cette information dans les données publiques du portfolio. Essayez une question sur le parcours, les projets, les compétences, les certifications ou les articles.'
        : 'I could not find that information in the public portfolio data. Try asking about experience, projects, skills, certifications or articles.',
      results: [], context: emptyContext, unknown: true,
    }
  }

  const localizedTop = top.map(entry => localizeEntry(entry, lang))
  const context = { lastResultIds: top.map(entry => entry.id), lastCategory: top[0].category }
  return {
    answer: buildAnswer(localizedTop, lang),
    results: localizedTop.map(entry => ({ ...entry, links: entry.links.map(link => ({ ...link, label: localizedLinkLabel(link.label, lang) })) })),
    context,
  }
}

export { MAX_QUERY_LENGTH }
