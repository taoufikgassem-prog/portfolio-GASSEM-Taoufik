import assert from 'node:assert/strict'
import { searchPortfolio } from '../src/utils/portfolioSearch.ts'
import type { PublicBlogArticle } from '../src/data/portfolioKnowledge.ts'

const articles: PublicBlogArticle[] = [
  {
    slug: 'validation-robot-framework',
    title: 'Industrialiser la validation avec Robot Framework',
    category: 'Validation & Test',
    summary: 'Automatisation de la validation ECU avec CAPL et Robot Framework.',
    keywords: 'Robot Framework, CAPL, validation ECU, CI/CD',
    content: ['Une chaîne de tests reproductible et traçable.'],
  },
  {
    slug: 'servicenow-genai',
    title: 'GenAI dans ServiceNow',
    category: 'ServiceNow',
    summary: 'Cas d’usage de l’intelligence artificielle dans ServiceNow.',
    keywords: 'ServiceNow, GenAI, ITSM',
    content: ['Des usages encadrés pour les processus ITSM.'],
  },
]

const currentRole = searchPortfolio('Quel est son poste actuel ?', articles, 'FR')
assert.equal(currentRole.results[0]?.id, 'current-role')
assert.deepEqual(currentRole.results.map(result => result.id), ['current-role'])
assert.match(currentRole.answer, /chez Expleo/)
assert.match(currentRole.answer, /Management transverse/)

const currentRoleEn = searchPortfolio('What is his current role?', articles, 'EN')
assert.match(currentRoleEn.answer, /at Expleo/)
assert.match(currentRoleEn.answer, /Cross-functional management/)

const identity = searchPortfolio('Qui est Taoufik Gassem ?', articles, 'FR')
assert.equal(identity.results[0]?.id, 'identity')

const careerPath = searchPortfolio('Quel est son parcours ?', articles, 'FR')
assert.equal(careerPath.results[0]?.id, 'experience')

const certifications = searchPortfolio('Quelles certifications possède-t-il ?', articles, 'FR')
assert.equal(certifications.results[0]?.id, 'certifications')

const experience = searchPortfolio('Quelles sont ses expériences ?', articles, 'FR')
assert.equal(experience.results[0]?.id, 'experience')

const skills = searchPortfolio('Quelles sont ses compétences ?', articles, 'FR')
assert.equal(skills.results[0]?.id, 'technical-skills')

const years = searchPortfolio('Combien d’années d’expérience a-t-il ?', articles, 'FR')
assert.equal(years.results[0]?.id, 'experience-years')
assert.match(years.answer, /8 ans/)

const availability = searchPortfolio('Est-il disponible ?', articles, 'FR')
assert.equal(availability.results[0]?.id, 'availability')
assert.match(availability.answer, /ouvert aux opportunités/i)

const serviceNowProject = searchPortfolio('Montre-moi ses projets ServiceNow', articles, 'FR')
assert.deepEqual(serviceNowProject.results.map(result => result.id), ['servicenow-incident'])
assert.equal(serviceNowProject.results[0]?.links[0]?.href, '/blog/servicenow-itsm-industrie-incident-management')

const contact = searchPortfolio('Comment le contacter ?', articles, 'FR')
assert.equal(contact.results[0]?.id, 'contact')
assert.ok(contact.results[0]?.links.some(link => link.kind === 'phone'))
assert.ok(contact.results[0]?.links.some(link => link.label === 'LinkedIn'))
assert.ok(contact.results[0]?.links.every(link => !link.href.startsWith('mailto:')))

const synonym = searchPortfolio('Quelle expérience dans les voitures ?', articles, 'FR')
assert.equal(synonym.results[0]?.id, 'automotive')

const typo = searchPortfolio('Quels outils pour automtiser les tests ?', articles, 'FR')
assert.ok(typo.results.some(result => ['automation', 'testing'].includes(result.id)))

const projects = searchPortfolio('Quels projets a-t-il réalisés ?', articles, 'FR')
assert.equal(projects.results[0]?.id, 'projects')
const followUp = searchPortfolio('Lesquels ?', articles, 'FR', projects.context)
assert.ok(followUp.results.length > 0)
assert.equal(followUp.context.lastCategory, 'projects')

const aiArticle = searchPortfolio('Montre-moi les articles sur IA et ServiceNow', articles, 'FR')
assert.equal(aiArticle.results[0]?.id, 'article:servicenow-genai')

const unknown = searchPortfolio('Quel est son animal préféré ?', articles, 'FR')
assert.equal(unknown.unknown, true)
assert.equal(unknown.results.length, 0)

const malicious = searchPortfolio('<img src=x onerror=alert(1)>', articles, 'FR')
assert.equal(malicious.unknown, true)
assert.ok(!malicious.answer.includes('<img'))

const tooLong = searchPortfolio('a'.repeat(401), articles, 'FR')
assert.equal(tooLong.error, 'too-long')

console.log('Portfolio assistant: 19 grounded search and navigation scenarios passed.')
