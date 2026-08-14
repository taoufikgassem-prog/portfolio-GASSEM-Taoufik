import { useEffect, useState, useRef } from 'react'
import PortfolioAssistant from './components/PortfolioAssistant'

type Lang = 'FR' | 'EN'
type View = 'home' | 'blog' | 'article'

type BlogArticle = {
  slug: string
  title: string
  category: string
  categoryColor: string
  date: string
  dateISO: string
  readTime: string
  imageAlt: string
  image: string
  summary: string
  keywords: string
  content: string[] // paragraphs
  bullets?: string[]
  related?: string[]
}

const blogArticles: BlogArticle[] = [
  {
    slug: 'industrialiser-validation-robot-framework-capl',
    title: 'Industrialiser la validation des systèmes embarqués avec Robot Framework et CAPL',
    category: 'Validation & Test',
    categoryColor: '#FF6B35',
    date: 'Juin 2026',
    dateISO: '2026-06-15',
    readTime: '6 min',
    imageAlt: 'Industrialisation tests embarqués Robot Framework CAPL - chaîne automatisation ECU',
    image: '/images/blog-1.jpg',
    summary: "Retour d'expérience sur la mise en place d'une chaîne d'automatisation complète pour les campagnes de validation ECU, de la génération des tests LLK au lancement des pipelines CI/CD.",
    keywords: 'Robot Framework, CAPL, validation ECU, test automation, GitLab CI/CD, systèmes embarqués',
    content: [
      "Dans l'industrie des systèmes embarqués critiques, la validation manuelle est devenue le goulot d'étranglement majeur. Chaque campagne mobilise des bancs HIL coûteux, des ingénieurs hautement qualifiés et des semaines de tests peu reproductibles. C'est le constat que j'ai fait en tant que Leader Ingénierie Validation chez Renault : nos campagnes prenaient 3 à 4 semaines pour une couverture partielle et une traçabilité fragile entre exigences, tests et résultats.",
      "La réponse a été une industrialisation complète : développer les LLK (Low Level Knowledge) en CAPL, générer automatiquement les fichiers .robot pour Robot Framework, et intégrer l'ensemble dans une pipeline GitLab CI/CD compatible avec l'écosystème ITAF. Le principe est simple mais redoutablement efficace : chaque configuration de banc est uploadée et versionnée, les LLK sont développés en CAPL avec des patterns réutilisables, puis un générateur convertit ces LLK en cas de tests Robot Framework exploitables directement sur banc.",
      "Le processus détaillé que j'ai mis en place suit 8 étapes verrouillées : 1) Upload de la configuration banc dans le référentiel, 2) Développement des LLK en CAPL par l'équipe de validation, 3) Génération automatique des fichiers .robot, 4) Exécution des tests sur banc HIL avec collecte des logs CAN, 5) Analyse des logs et diagnostic des écarts, 6) Création d'une merge request vers la branche master avec revue par l'équipe ITAF, 7) Lancement automatique de la pipeline GitLab CI/CD, 8) Analyse des résultats et intégration dans les campagnes HLK/LLK officielles. Ce workflow, documenté et tracé dans Codebeamer, garantit une traçabilité bidirectionnelle exigences ↔ tests ↔ résultats.",
      "Résultat : la durée d'une campagne est passée de semaines à quelques jours, avec une reproductibilité à 100% et une réduction drastique des régressions. Les livrables HLK/LLK sont industrialisés, versionnés et réutilisables d'un projet à l'autre — que ce soit en automobile, défense ou ferroviaire où la même rigueur s'applique. Cette approche, transposable aux secteurs aéronautique et spatial (norme DO-178C, EN 50128), est aujourd'hui la fondation de toute stratégie de validation moderne que je recommande."
    ],
    bullets: [
      "Outils maîtres : Robot Framework, CAPL, GitLab CI/CD, Codebeamer, CANalyzer, HIL/MIL",
      "Gain : division par 3 du cycle de validation, zéro perte de traçabilité",
      "Transposable : automobile, défense, aéronautique, ferroviaire, spatial"
    ]
  },
  {
    slug: 'servicenow-itsm-industrie-incident-management',
    title: "ServiceNow ITSM pour l'industrie : conception end-to-end d'un processus Incident Management",
    category: 'ServiceNow & ITSM',
    categoryColor: '#00D4AA',
    date: 'Mai 2026',
    dateISO: '2026-05-20',
    readTime: '7 min',
    imageAlt: 'ServiceNow ITSM Incident Management industrie - Service Portal et Business Rules',
    image: '/images/blog-2.jpg',
    summary: "De l'analyse des besoins métiers à la documentation de rollback, découvrez comment j'ai conçu et livré un processus Incident Management complet sur ServiceNow.",
    keywords: 'ServiceNow ITSM, Incident Management, Business Rules, Service Portal, CMDB, SLA, certification CSA',
    content: [
      "Concevoir un processus ITSM dans l'industrie ne consiste pas à paramétrer un outil : c'est traduire des exigences opérationnelles en un système fiable, traçable et sécurisé. Sur mon instance personnelle ServiceNow, j'ai mené un projet end-to-end d'Incident Management complet, du cahier des charges à la documentation de rollback, comme je le ferais pour un client grand compte.",
      "Le périmètre fonctionnel est complet : cycle de vie Incident avec gardes d'état par profil (N1, N2, Coordinateur, Référent), formulaire BO enrichi (bénéficiaire, CI initial, compteurs relance/rejet, raison d'annulation), assignation intelligente avec qualification de groupe et escalade via CMDB, SLA multi-niveaux (VIP, non-VIP, P1, P2+ avec pause/reprise/stop), Service Portal FO custom (Record Producer, pages my_incidents_cdc et incident_ticket_cdc, widgets, menu), reporting avec 12 indicateurs (Single Score, Column, Donut, Average) et Dashboard Classic, et sécurité avec 4 rôles custom et ACL propriétaire/lecture globale.",
      "L'architecture technique illustre la rigueur d'un vrai delivery : 7 champs custom, 12 Business Rules (cycle de vie, compteurs, validation, héritage parent/enfant), 3 Script Includes (utils formulaire, qualifier groupe, escalation CI), 4 Client Scripts (cascading CI/Service, affichage conditionnel), 4 UI Policies + OOTB, 1 UI Action custom (Escalader via CI), 2 Scheduled Jobs (auto-close à 15 jours, réactivation On Hold). Chaque composant est packagé dans des Update Sets versionnés, avec documentation de traçabilité et procédure de rollback.",
      "La qualité est au niveau industriel : 30+ cas de test validés (PVAL complet), matrice de traçabilité CDC, zéro bug bloquant. Les livrables professionnels comprennent 10 documents : Release Note, Documentation Fonctionnelle, Dossier Technique Détaillé, PVAL, Guides de Déploiement et de Rollback, Guide Service Portal FO, Guide Reports & Dashboard, Limitations & Décisions, Matrice de Traçabilité, plus les données de référence XML (users, groups, roles, CMDB, SLA). Une approche directement transposable à l'ITSM en environnement de production industrielle, où la disponibilité et la traçabilité sont critiques."
    ],
    bullets: [
      "Stack : ServiceNow CSA, CMDB, SLA, ACL, Business Rules, Script Includes, Service Portal, GenAI",
      "Qualité : 30+ tests, PVAL, traçabilité CDC, Update Sets",
      "Livrables : 10 documents + XML — prêt pour audit client"
    ]
  },
  {
    slug: 'pilotage-qcd-equipe-internationale-cqp',
    title: "Pilotage QCD d'une équipe internationale : comment j'ai fait passer le CQP de 1,8 à 3,21",
    category: 'Management & Leadership',
    categoryColor: '#7C3AED',
    date: 'Avril 2026',
    dateISO: '2026-04-10',
    readTime: '5 min',
    imageAlt: 'Management équipe internationale QCD CQP - pilotage workpackage 4M euros',
    image: '/images/blog-3.jpg',
    summary: "Management transverse de 22 ingénieurs sur 4 pays, pilotage d'un workpackage de plus de 4M€. Retour sur les leviers qui ont permis d'améliorer la performance d'équipe de 78%.",
    keywords: 'Management international, pilotage QCD, CQP, performance équipe, workpackage, offshore, recrutement technique',
    content: [
      "Prendre le pilotage d'une équipe de 22 ingénieurs répartis sur France, Roumanie, Inde et Maroc, avec un workpackage dépassant 4M€, c'est d'abord affronter une réalité : un score CQP (Contrat Qualité Projet) à 1,8/4. Ce score, qui mesure la qualité, le respect des jalons et la satisfaction client, était un signal d'alarme. En tant que Team Leader / Technical Project Manager chez Expleo pour Renault, ma mission était de transformer cette équipe dispersée en une unité performante.",
      "Le diagnostic initial a révélé trois causes : compétences hétérogènes sans matrice de suivi, absence de plan de formation structuré, et cloisonnement des activités entre les sites. Ma réponse a été méthodique. D'abord, une matrice de compétences individualisée pour chaque ingénieur, avec un plan de formation ciblé (outils, processus, domaine fonctionnel). Ensuite, un offshoring intelligent des activités : les tâches à plus faible valeur ajoutée ont été transférées vers les sites offshore, libérant les experts de Montigny pour le pilotage et l'expertise système. Enfin, la mise en place d'un dashboard Excel collaboratif, mis à jour par les collaborateurs eux-mêmes, avec tickets JIRA pour la transparence totale sur les blocages et l'avancement.",
      "L'animation a été le levier humain : comités de pilotage mensuels avec le client, revues de performance transparentes, et animation d'une culture de la qualité où chaque ingénieur comprend son impact sur le CQP. La facturation (BL/FDT) et le suivi des livrables sont devenus rigoureux, les écarts maîtrisés et remontés sans délai. Cette transparence a créé un cercle vertueux : le client voit le progrès, accorde sa confiance, et confie de nouvelles missions.",
      "Résultat : en moins d'un an, le CQP est passé de 1,8 à 3,21/4, soit +78% — l'une des meilleures progressions de l'entité. Au-delà du chiffre, c'est la confiance client qui a été reconstruite, avec le recrutement de nouvelles missions, l'amélioration de la marge projet et la reconnaissance de l'équipe. Une démonstration que le pilotage QCD, quand il est incarné et outillé, transcende les fuseaux horaires et les cultures — applicable en automobile comme en défense, aéronautique ou ferroviaire où la même exigence de qualité prévaut."
    ],
    bullets: [
      "Leviers : matrice compétences, plan formation, offshoring, dashboard Excel + JIRA",
      "Gouvernance : comités mensuels, reporting KPI, transparence BL",
      "Impact : +78% CQP, confiance client, nouvelles missions, marge améliorée"
    ]
  },
  {
    slug: 'cycle-en-v-automobile-exigence-homologation',
    title: "Le cycle en V dans l'automobile : de l'exigence client à l'homologation véhicule",
    category: 'Ingénierie Système',
    categoryColor: '#0A2540',
    date: 'Mars 2026',
    dateISO: '2026-03-12',
    readTime: '6 min',
    imageAlt: 'Cycle en V automobile exigences homologation - du SOW à la conformité',
    image: '/images/blog-4.jpg',
    summary: "De la spécification des exigences système à la validation HIL et l'homologation, décryptage du cycle en V appliqué au développement d'un calculateur HFM.",
    keywords: 'Cycle en V, ingénierie système automobile, calculateur HFM, homologation, CEM, HIL, validation ECU',
    content: [
      "Le cycle en V n'est pas une théorie : c'est le squelette de tout développement de calculateur en environnement sécuritaire. Sur le développement du calculateur HFM (Hands-Free Module) chez Renault, j'ai piloté l'intégralité de ce cycle, de l'exigence client à l'homologation, avec la rigueur qu'exigent aujourd'hui les secteurs défense, aéronautique et ferroviaire.",
      "La phase amont est critique : elle part du cahier des charges client et des exigences système. Je cadrais les spécifications techniques, consolidais le dossier fournisseur (SOW, matrices de conformité) et m'assurais que chaque exigence était traçable, testable et allouée. Cette traçabilité, gérée dans DOORS et Codebeamer, est la même exigence que l'on retrouve dans la défense (normes de sûreté) ou le ferroviaire (EN 50128) : aucune exigence ne doit rester sans preuve de couverture.",
      "La phase de développement impliquait le suivi des livrables hardware (schémas, BOM, connectique, alimentation, fiabilité) et software (architecture SW, messagerie CAN, diagnostic). En tant que Pilote Développement Électronique, je supervisais les revues fournisseur, gérais la liste des points ouverts et suivais l'exécution des plans d'action selon les jalons véhicule (Gates V-cycle). La création de la database diagnostic via l'outil Builder, puis son exploitation via DDT2000 et la génération du dossier de configuration via GCC (avec fusion TradConf) illustrent cette interface permanente entre hardware, software et système.",
      "La phase de validation et d'homologation concrétise la branche descendante du V : campagnes HIL/PIE, tests CEM (compatibilité électromagnétique), tests d'environnement, debug sur véhicule, et constitution du dossier d'homologation (FMRS/DDMRS, conformité européenne ZNC). Chaque écart était traité jusqu'à clôture, avec une traçabilité bidirectionnelle exigences ↔ tests ↔ résultats. Ce cycle, maîtrisé sur HFM, est directement transposable : les mêmes principes régissent le développement d'un calculateur avionique (DO-178C) ou d'un système de signalisation ferroviaire. La rigueur du cycle en V est universelle."
    ],
    bullets: [
      "Amont : SOW, matrices conformité, traçabilité DOORS/Codebeamer",
      "Développement : HW (schémas, BOM) + SW (CAN, diag) + dossier fournisseur",
      "Validation : HIL/PIE, CEM, environnement, homologation FMRS/DDMRS"
    ]
  },
  {
    slug: 'architecture-acces-mains-libres-hfm-escl',
    title: "Architecture d'un système d'accès mains libres : HFM, ESCL et virtualisation de clé",
    category: 'Systèmes Embarqués',
    categoryColor: '#FF6B35',
    date: 'Février 2026',
    dateISO: '2026-02-18',
    readTime: '7 min',
    imageAlt: 'Architecture HFM ESCL accès mains libres véhicule - système VSA VirtualKey',
    image: '/images/blog-5.jpg',
    summary: "Plongée technique dans l'architecture et la validation d'un système d'accès mains libres couvrant 20+ fonctions : LF/RF, HFM, ESCL, VSA, VirtualKey, RemoteParking...",
    keywords: 'HFM, ESCL, VSA, accès mains libres, système antivol, virtualisation clé, diagnostic CAN',
    content: [
      "Un système d'accès mains libres moderne est un concentré de systèmes embarqués critiques. Sur le projet ST pour l'Alliance Renault-Nissan-Mitsubishi, j'ai piloté en tant que Leader Ingénierie Système puis Leader Validation une architecture couvrant plus de 20 fonctions — un véritable système distribué où chaque milliseconde et chaque décibel comptent.",
      "Les briques fondamentales sont la LF (Low Frequency, 125 kHz) pour la localisation précise du badge autour du véhicule, la RF (Radio Frequency) pour la communication longue portée, le HFM (Hands-Free Module) qui orchestre la logique d'accès, et l'ESCL (Electronic Steering Column Lock) qui verrouille électroniquement la colonne de direction. Autour de ce cœur, les fonctions VSA (Vehicle System Architecture) gèrent l'authentification, la VirtualKey (clé virtuelle sur smartphone), la DataInKey, l'Ignition, la Protection antivol et le RemoteParking. Les fonctions MMI (Man Machine Interface) portent l'Antitheft, l'Engine Stop, les alertes ESCL Failed ou Kazashi — toutes avec des exigences de sûreté élevées.",
      "L'arborescence fonctionnelle ST que j'ai pilotée est structurée : Easy Trunk Access (ouverture coffre mains libres), Handfree Access, RKE_HFM-BCM, ESCL, VSA avec ses sous-fonctions Authentication, VirtualKey, RemoteParking, MMI avec Inviol, RES, ParkByWire, Dongle, Buzzer, Gateway Addon, FOTA, CLOCK CRC, CID Resynchro, ainsi que les fonctions transverses UPMD_APPRUN, WAL, etc. Chaque fonction a son dossier fonctionnel, ses exigences et son plan de validation.",
      "La validation est physique autant que logicielle : tuning RF avec mesures d'antenne et contrôle d'impédance, tests de portée et de robustesse aux perturbations CEM, campagnes HIL avec simulation des scénarios d'accès (approche, éloignement, brouillage), et validation de la chaîne de diagnostic CAN. Les outils maîtres sont CANalyzer pour l'analyse bus, DDT2000 pour le diagnostic et le reflashage, Builder pour la database diagnostic, GCC pour la configuration, et ONEVAL/REVS pour la gestion des campagnes. Cette expertise, pointue en automobile, est directement valorisable en défense et aéronautique où les systèmes d'accès sécurisés et la virtualisation de clé sont des enjeux majeurs de cybersécurité embarquée."
    ],
    bullets: [
      "Briques : LF/RF, HFM, ESCL, VSA, MMI — 20+ fonctions",
      "Fonctions phares : VirtualKey, RemoteParking, Antitheft, FOTA, Gateway",
      "Validation : tuning RF, CEM, HIL, diagnostic CAN (Builder, DDT2000, CANalyzer)"
    ]
  },
  {
    slug: 'ingenierie-systeme-transposable-defense-aeronautique',
    title: "Pourquoi l'ingénierie système automobile est transposable à la défense et l'aéronautique",
    category: 'Transversal & Secteurs',
    categoryColor: '#7C3AED',
    date: 'Janvier 2026',
    dateISO: '2026-01-15',
    readTime: '5 min',
    imageAlt: 'Ingénierie système défense aéronautique ferroviaire - normes ISO 26262 DO-178C',
    image: '/images/blog-6.jpg',
    summary: "Les standards de l'ingénierie système (ISO 26262, DO-178C, EN 50128) partagent une même exigence : la traçabilité, la validation et la sûreté de fonctionnement. Explications.",
    keywords: 'Ingénierie système, défense, aéronautique, ferroviaire, spatial, normes sécurité, DO-178C, EN 50128, ISO 26262',
    content: [
      "On oppose souvent l'automobile à la défense ou à l'aéronautique. Pourtant, un ingénieur système qui a développé un calculateur HFM conforme à l'ISO 26262 possède 90% des compétences pour contribuer à un système avionique DO-178C ou à une signalisation ferroviaire EN 50128. La raison est simple : ces normes, bien que sectorielles, reposent sur les mêmes fondamentaux de l'ingénierie système.",
      "Le premier fondamental est le cycle en V et la traçabilité. Que vous développiez un ECU automobile, un calculateur de vol ou un poste d'aiguillage, la chaîne est identique : spécification des exigences système → architecture → développement fournisseur → intégration → validation HIL/MIL/PIE → homologation. Dans chaque secteur, la traçabilité bidirectionnelle exigences ↔ tests ↔ résultats est non négociable, outillée par DOORS, Codebeamer ou équivalents. Le niveau de rigueur (ASIL pour ISO 26262, SIL pour EN 50128, DAL pour DO-178C) ne change que l'intensité de la preuve, pas la méthode.",
      "Le second fondamental est la validation indépendante et la sûreté de fonctionnement. L'automobile avec ses tests CEM, ses validations HIL et sa gestion des DTC diagnostiques prépare directement aux tests environnementaux aéronautiques ou aux validations de sécurité ferroviaire. Les outils sont transverses : HIL, Robot Framework, CAPL, GitLab CI/CD pour l'automatisation, DDT2000 et CANalyzer pour le diagnostic — autant de briques que j'ai industrialisées sur ST et HFM.",
      "Enfin, le management fournisseur et le pilotage QCD sont universels. Consolider un dossier SOW, suivre une BOM, animer des revues de maturité, piloter un workpackage multi-sites : ces compétences, que j'ai exercées sur 22 ingénieurs et 4 pays, s'appliquent à tout système embarqué critique. C'est pourquoi je positionne aujourd'hui mon expertise comme transverse : automobile bien sûr, mais aussi défense, aéronautique, spatial et ferroviaire — tous les secteurs où la défaillance n'est pas une option."
    ],
    bullets: [
      "Normes parallèles : ISO 26262 (auto) ↔ DO-178C (aéro) ↔ EN 50128 (ferro) ↔ ECSS (spatial)",
      "Commun : cycle en V, ASIL/SIL/DAL, traçabilité, validation indépendante",
      "Outils transférables : DOORS, HIL, CAPL, Robot Framework, diagnostic CAN"
    ]
  },
  {
    slug: 'database-diagnostic-builder-ddt2000',
    title: 'Créer une database diagnostic automobile avec Builder et DDT2000',
    category: 'Outils & Technique',
    categoryColor: '#0A2540',
    date: 'Décembre 2025',
    dateISO: '2025-12-05',
    readTime: '6 min',
    imageAlt: 'Database diagnostic Builder DDT2000 reflashage ECU - outil diagnostic Renault',
    image: '/images/blog-7.jpg',
    summary: "Guide technique sur la création d'une database diagnostic, son exploitation via DDT2000 pour le reflashage et le diagnostic de calculateurs ECU.",
    keywords: 'Builder, DDT2000, diagnostic ECU, reflashage, database, CAN, cybersécurité',
    content: [
      "La database diagnostic est le langage secret d'un calculateur ECU. Sans elle, impossible de diagnostiquer, de recharger ou de configurer un boîtier. Sur le projet HFM, j'ai créé et exploité cette database de bout en bout — une compétence rare qui fait le lien entre le hardware, le software et le véhicule.",
      "L'outil Builder est le point de départ : il permet de créer les paramètres de diagnostic, de structurer les requêtes serveur (services UDS : ReadDataByIdentifier, WriteDataByIdentifier, RoutineControl...), de définir les DTC (Diagnostic Trouble Codes) et leurs conditions d'apparition. Chaque paramètre est typé, avec son scaling, son unité et sa correspondance CAN. La database ainsi créée est la référence unique pour tous les acteurs : développement, validation et après-vente.",
      "L'exploitation se fait via DDT2000, l'outil de diagnostic Renault. DDT2000 utilise la database Builder pour dialoguer avec le calculateur en CAN : lecture des paramètres en temps réel, reflashage du software via bootloader, upload du dossier de configuration. Le processus complet que j'ai piloté est : création de la database dans Builder → génération du dossier de configuration via GCC (qui contient les paramètres véhicule) → fusion TradConf (fichier GCC + database Builder) → récupération de la messagerie CAN côté LIS → vérification via DDT2000. La subtilité industrielle : la différence entre reflashage avant-vente (clé série usine, bootloader ouvert) et après-vente (clé série sécurisée, procédure de cybersécurité renforcée avec tests DST/RTT et diag hardening).",
      "Cette chaîne — Builder → GCC → TradConf → DDT2000 → reflashage — est critique pour la maintenabilité des calculateurs en usine et en concession. Elle illustre une expertise transverse : les mêmes principes de database diagnostic et de reflashage sécurisé s'appliquent aux calculateurs de défense ou aéronautiques, où la cybersécurité et la traçabilité du reflashage sont encore plus exigeantes."
    ],
    bullets: [
      "Chaîne : Builder (database) → GCC (config) → TradConf (fusion) → DDT2000 (diag/reflash)",
      "Protocoles : UDS, CAN, DTC, bootloader, clé série",
      "Enjeu : avant-vente vs après-vente, cybersécurité, diagnostic sécurisé"
    ]
  },
  {
    slug: 'servicenow-genai-agentic-ai-itsm',
    title: "ServiceNow GenAI & Agentic AI : l'avenir de l'ITSM dans l'industrie",
    category: 'ServiceNow & ITSM',
    categoryColor: '#00D4AA',
    date: 'Novembre 2025',
    dateISO: '2025-11-10',
    readTime: '5 min',
    imageAlt: 'ServiceNow GenAI Agentic AI ITSM industrie - Now Assist et agents autonomes',
    image: '/images/blog-8.jpg',
    summary: "Analyse des capacités GenAI et Agentic AI de ServiceNow et de leur impact sur l'industrialisation des processus IT dans les environnements de production.",
    keywords: 'ServiceNow GenAI, Agentic AI, ITSM industrie, maintenance prédictive, Now Assist',
    content: [
      "L'ITSM industriel est à un tournant. Après avoir industrialisé les processus (Incident, Request, CMDB) et automatisé les workflows (Business Rules, SLA), ServiceNow franchit une étape décisive avec GenAI et Agentic AI. En tant que certifié CSA et formé sur 'The Complete Guide to ServiceNow GenAI & Agentic AI', j'analyse ici ce que ces technologies changent concrètement pour une usine ou un site de production.",
      "ServiceNow GenAI, via Now Assist, apporte trois ruptures : la génération automatique de résumés d'incidents et de knowledge articles à partir des résolutions passées, la résolution assistée avec suggestion de solutions contextuelles, et la classification automatique des tickets avec extraction d'intentions. Concrètement, un technicien de maintenance n'a plus à rédiger manuellement un compte-rendu : Now Assist le génère, le structure et propose la base de connaissances associée. Le temps de résolution moyen chute, et la capitalisation du savoir devient automatique.",
      "Agentic AI va plus loin : ce sont des agents autonomes qui orchestrent des workflows de bout en bout. Un agent peut router un incident en analysant la CMDB et l'historique SLA, un autre peut prédire une panne à partir des logs et déclencher une demande préventive, un troisième peut croiser un incident avec la base de problèmes pour proposer une solution de contournement. Dans un contexte industriel, cela signifie : maintenance prédictive intégrée à l'ITSM, réduction des temps d'arrêt non planifiés, et knowledge base qui s'enrichit seule.",
      "Ces capacités, que j'ai explorées sur mon instance ServiceNow, sont l'extension logique du projet Incident Management que j'ai livré : le même socle (CMDB propre, SLA rigoureux, processus traçable) devient le terreau pour l'IA. Pour un groupe industriel — automobile, défense, aéronautique ou ferroviaire — l'enjeu est de passer d'un ITSM réactif à un ITSM prédictif, où l'IT devient un levier de disponibilité opérationnelle. C'est cette vision que je porte : un ITSM industriel augmenté par l'IA, mais fondé sur des processus robustes et maîtrisés."
    ],
    bullets: [
      "GenAI : Now Assist, génération knowledge, résolution assistée",
      "Agentic AI : agents autonomes de routing, prédiction, résolution",
      "Impact industrie : disponibilité opérationnelle, maintenance prédictive, capitalisation auto"
    ]
  },
  {
    slug: 'gestion-exigences-doors-tracabilite',
    title: "Gestion des exigences système avec DOORS : de la spécification à la traçabilité",
    category: 'Ingénierie Système',
    categoryColor: '#0A2540',
    date: 'Juillet 2026',
    dateISO: '2026-07-10',
    readTime: '5 min',
    imageAlt: 'Arbre exigences DOORS stylisé avec liens traçabilité et validation verte - système embarqué',
    image: '/images/blog-9.jpg',
    summary: "Retour d'expérience sur la gestion des exigences système dans un projet d'accès mains libres : structuration DOORS, traçabilité bidirectionnelle et gestion des évolutions.",
    keywords: 'DOORS, exigences système, traçabilité, Codebeamer, HFM ESCL, ingénierie système',
    content: [
      "En tant que Leader Ingénierie Système chez Renault, j'ai structuré le dossier fonctionnel d'un système d'accès mains libres (HFM/ESCL) en utilisant DOORS. Le défi : plusieurs centaines d'exigences client, techniques et réglementaires à faire coexister sans perdre la traçabilité.",
      "J'ai mis en place une architecture à 3 niveaux : exigences client (haut niveau), exigences système (décomposition), et exigences logicielles/matérielles (bas niveau). Chaque exigence système était liée à un cas de test dans Codebeamer via un identifiant unique. Lorsqu'une évolution client arrivait en cours de projet, je pouvais remonter l'impact en quelques clics : quels tests à rejouer, quels livrables fournisseur impactés, quels jalons véhicule menacés.",
      "Cette rigueur a permis de passer les revues de maturité système sans écart majeur. La clé : imposer une nomenclature stricte dès le début du projet et former les contributeurs à l'outil. Une discipline qui s'applique à l'identique en défense, aéronautique ou ferroviaire où la moindre exigence non tracée peut compromettre la certification.",
    ],
    bullets: [
      "Architecture 3 niveaux : client → système → SW/HW, nomenclature stricte",
      "Traçabilité bidirectionnelle DOORS ↔ Codebeamer via identifiant unique",
      "Impact analysis instantanée à chaque évolution client"
    ]
  },
  {
    slug: 'coordination-fournisseur-pilote-developpement-electronique',
    title: "Coordination fournisseur dans l'automobile : le rôle du Pilote Développement Électronique",
    category: 'Management Fournisseur',
    categoryColor: '#FF6B35',
    date: 'Juin 2026',
    dateISO: '2026-06-22',
    readTime: '5 min',
    imageAlt: 'Ingénieurs échangeant dossier technique avec calculateur ECU au centre - coordination fournisseur',
    image: '/images/blog-10.webp',
    summary: "Comment piloter un fournisseur de calculateur automobile du SOW à l'homologation : revues de maturité, matrices de conformité et gestion des écarts.",
    keywords: 'Pilote Développement Électronique, fournisseur ECU, SOW, matrice conformité, HFM',
    content: [
      "Le rôle de Pilote Développement Électronique chez Renault consiste à être le garant client d'un fournisseur de calculateur. Pour le calculateur HFM (Hands-Free Module), j'ai cadré les exigences via un SOW (Statement of Work) détaillé et des matrices de conformité.",
      "Chaque livrable hardware (schémas, BOM, connectique, alimentation) et software (architecture SW, messagerie CAN, diagnostic) était soumis à une revue de maturité avant chaque jalon véhicule. J'animais les revues fournisseur hebdomadaires avec une liste des points ouverts et des plans d'action datés.",
      "Lorsqu'un écart apparaissait — retard de livraison, non-conformité CEM, bug software bloquant — je le qualifiais immédiatement (impact, criticité, jalons touchés) et je montais un plan de résolution avec le fournisseur. Cette proximité technique et commerciale a permis de livrer le calculateur dans les temps pour l'intégration véhicule, une méthode directement transposable aux fournisseurs de systèmes défense ou aéronautiques."
    ],
    bullets: [
      "SOW + matrices conformité comme contrat technique et qualité",
      "Revues hebdomadaires, points ouverts tracés, jalons véhicule respectés",
      "Gestion écarts : qualification impact/criticité + plan résolution immédiat"
    ]
  },
  {
    slug: 'analyse-logs-can-canalyzer-debug',
    title: "Analyse de logs CAN : déboguer un calculateur avec CANalyzer",
    category: 'Outils & Technique',
    categoryColor: '#00D4AA',
    date: 'Mai 2026',
    dateISO: '2026-05-18',
    readTime: '5 min',
    imageAlt: 'Écran logs CAN avec trames hexadécimales et graphique temporel - CANalyzer',
    image: '/images/blog-11.webp',
    summary: "Plongée dans l'analyse de logs CAN pour diagnostiquer un comportement anormal d'un calculateur HFM : trames, signaux et corrélation avec les exigences.",
    keywords: 'CANalyzer, logs CAN, debug ECU, HFM, trames CAN, diagnostic',
    content: [
      "Lorsqu'un incident remontait sur véhicule ou banc HIL, mon premier réflexe était d'ouvrir CANalyzer. En tant que LIS et LIV, j'ai passé des heures à analyser des logs CAN pour comprendre pourquoi une fonction ne se comportait pas comme prévu.",
      "Le processus est méthodique : d'abord identifier la période temporelle du dysfonctionnement, puis filtrer les IDs CAN pertinents (messagerie HFM, BCM, ESCL), extraire les signaux concernés, et corréler avec l'exigence fonctionnelle. Par exemple, un défaut de démarrage mains libres s'est révélé être une incohérence entre l'état du signal 'KeyPresent' et la validation du capteur LF.",
      "Grâce à l'analyse des logs, j'ai remonté un bug de configuration au fournisseur qui a été corrigé dans la release suivante. CANalyzer n'est pas qu'un outil : c'est la boîte noire du véhicule, indispensable en automobile comme en ferroviaire ou aéronautique pour prouver la conformité temporelle des signaux."
    ],
    bullets: [
      "Méthode : fenêtre temporelle → filtrage IDs → extraction signaux → corrélation exigence",
      "Cas réel : incohérence KeyPresent / capteur LF résolue via log",
      "Outil clé : CANalyzer, traçabilité preuve pour audit"
    ]
  },
  {
    slug: 'gestion-configuration-ecu-gcc-builder-tradconf',
    title: "Gestion de configuration ECU : GCC, Builder et la fusion TradConf",
    category: 'Outils & Technique',
    categoryColor: '#0A2540',
    date: 'Avril 2026',
    dateISO: '2026-04-25',
    readTime: '5 min',
    imageAlt: 'Schéma 3 blocs GCC Builder TradConf convergent vers ECU - gestion configuration',
    image: '/images/blog-12.webp',
    summary: "Comment se construit un dossier de configuration de calculateur : création de la database diagnostic avec Builder, paramétrage GCC, et fusion via TradConf.",
    keywords: 'GCC, Builder, TradConf, configuration ECU, database diagnostic, DDT2000',
    content: [
      "La configuration d'un calculateur automobile est un assemblage complexe de plusieurs sources. Chez Renault, j'utilisais trois outils en chaîne. D'abord, l'outil Builder pour créer la database diagnostic : c'est là que je définissais les paramètres de lecture, les DTC (Diagnostic Trouble Codes), et les requêtes serveur.",
      "Ensuite, l'outil GCC pour construire le dossier de configuration proprement dit : chaque paramètre recevait sa valeur selon les MTC (Modes de Transport et de Commercialisation) et les DT (Définitions Techniques). La troisième étape était la fusion via TradConf : le fichier généré par GCC était fusionné avec la database Builder pour créer le fichier de référence unique.",
      "Ce fichier était ensuite uploadé sur le serveur pour être exploitable via DDT2000. Une erreur à n'importe quelle étape rendait le calculateur non reflashable ou mal configuré. La rigueur de ce processus est absolue — et identique pour un calculateur défense ou aéronautique où la configuration détermine la sécurité opérationnelle."
    ],
    bullets: [
      "Builder : database diagnostic, DTC, requêtes serveur",
      "GCC : MTC/DT, paramétrage valeurs par variante véhicule",
      "TradConf : fusion + upload serveur → DDT2000 exploitable"
    ]
  },
  {
    slug: 'homologation-fmrs-ddmrs-znc',
    title: "Homologation véhicule : FMRS, DDMRS et conformité ZNC",
    category: 'Réglementation & Qualité',
    categoryColor: '#7C3AED',
    date: 'Mars 2026',
    dateISO: '2026-03-28',
    readTime: '5 min',
    imageAlt: 'Document homologation avec tampon HOMOLOGUÉ et drapeau européen - ZNC',
    image: '/images/blog-13.webp',
    summary: "De la validation technique à l'homologation commerciale : constitution du dossier FMRS/DDMRS et obtention de la conformité ZNC pour l'Europe.",
    keywords: 'FMRS, DDMRS, ZNC, homologation, New PDM, CEM, PIE',
    content: [
      "L'homologation d'un véhicule ne se limite pas à faire rouler un prototype. En tant que LIV et LIS, j'ai constitué les dossiers FMRS (Fichier de Mise en Route Série) et DDMRS (Dossier de Décision de Mise en Route Série) qui prouvent que le véhicule respecte l'ensemble des normes européennes.",
      "Ce dossier regroupe les rapports de validation software (campagnes HIL/LLK), les résultats de tests CEM, les rapports de tests sécuritaires PIE/EIPF, les résultats de debug comp sur véhicule, et la matrice de conformité finale. Tout ce contenu était uploadé dans l'outil New PDM.",
      "La conformité ZNC (Zero Non-Conformity) était le graal : elle signifiait que le véhicule pouvait être commercialisé en Europe sans restriction. Obtenir ce ZNC nécessitait une traçabilité parfaite entre les exigences, les tests, les résultats et les écarts résolus — une exigence que l'on retrouve en aéronautique (certification) et ferroviaire (homologation)."
    ],
    bullets: [
      "FMRS/DDMRS : preuve conformité européenne, New PDM",
      "Contenu : HIL/LLK, CEM, PIE/EIPF, debug, matrice conformité",
      "ZNC : zéro non-conformité, commercialisation sans restriction"
    ]
  },
  {
    slug: 'management-equipe-distance-22-ingenieurs',
    title: "Management d'équipe à distance : 22 ingénieurs sur 4 pays",
    category: 'Management & Leadership',
    categoryColor: '#FF6B35',
    date: 'Février 2026',
    dateISO: '2026-02-14',
    readTime: '5 min',
    imageAlt: 'Carte du monde avec 4 points lumineux France Roumanie Inde Maroc - management international',
    image: '/images/blog-14.webp',
    summary: "Comment manager une équipe technique répartie sur 4 fuseaux horaires : communication, outils et culture du résultat.",
    keywords: 'Management distance, équipe internationale, Expleo, dashboard Excel, JIRA, CQP',
    content: [
      "Manager 22 ingénieurs répartis sur 4 pays (France, Roumanie, Inde, Maroc) est un exercice de synchronisation permanente. Chez Expleo, j'ai mis en place trois piliers.",
      "Premier pilier : la communication structurée. Un daily court par équipe locale, un weekly transverse par groupe de compétences, et un comité de pilotage mensuel avec le client. Deuxième pilier : l'outillage commun. Dashboard Excel collaboratif mis à jour par les collaborateurs, tickets JIRA pour les points bloquants, et revues de code partagées. Troisième pilier : la culture du résultat. Chacun sait comment sa tâche contribue au livrable client final.",
      "J'ai également instauré une matrice de compétences individualisée pour identifier les lacunes et lancer des formations ciblées. Le résultat : le CQP est passé de 1,8 à 3,21/4, et le client nous a confié de nouvelles missions — preuve qu'un management structuré transcende les fuseaux horaires."
    ],
    bullets: [
      "Communication : daily local + weekly transverse + comité mensuel",
      "Outillage : dashboard Excel collaboratif + JIRA + revues code",
      "Résultat : CQP 1,8 → 3,21 (+78%), confiance et nouvelles missions"
    ]
  },
  {
    slug: 'cybersecurite-calculateurs-hardening-dst-rtt',
    title: "Cybersécurité des calculateurs : hardening, DST et RTT",
    category: 'Cybersécurité & Sûreté',
    categoryColor: '#00D4AA',
    date: 'Janvier 2026',
    dateISO: '2026-01-22',
    readTime: '5 min',
    imageAlt: 'Bouclier cybersécurité avec cadenas et circuit imprimé ECU - hardening DST RTT',
    image: '/images/blog-15.webp',
    summary: "Les tests de cybersécurité obligatoires pour tout calculateur automobile : diagnostic hardening, DST (Diagnostic Security Test) et RTT (Resilience Test Tool).",
    keywords: 'Cybersécurité ECU, hardening, DST, RTT, bootloader, clé série',
    content: [
      "La cybersécurité automobile n'est plus optionnelle. En tant que Pilote Développement Électronique, je devais m'assurer que le calculateur HFM résistait aux attaques par diagnostic.",
      "Trois types de tests étaient systématiques. Le DST (Diagnostic Security Test) vérifiait que les accès non autorisés étaient bloqués et que les seeds/keys étaient correctement implémentés. Le RTT (Resilience Test Tool) testait la robustesse du calculateur face à des flux CAN malformés ou agressifs. Le hardening diagnostic consistait à vérifier que les services de reflashage étaient protégés : le bootloader devait exiger une clé série en après-vente, et les services avant-vente ne devaient pas permettre de modifications non autorisées.",
      "Chaque non-conformité était remontée au fournisseur avec un plan d'action et une re-vérification systématique — une rigueur directement applicable aux calculateurs défense et aéronautiques où la compromission n'est pas une option."
    ],
    bullets: [
      "DST : seeds/keys, blocage accès non autorisés",
      "RTT : robustesse face à flux CAN malformés",
      "Hardening : bootloader + clé série, avant/après-vente cloisonnés"
    ]
  },
  {
    slug: 'tests-banc-hil-mil-valider-avant-integrer',
    title: "Tests sur banc HIL et MIL : valider avant d'intégrer",
    category: 'Validation & Test',
    categoryColor: '#0A2540',
    date: 'Décembre 2025',
    dateISO: '2025-12-18',
    readTime: '5 min',
    imageAlt: 'Banc de test HIL avec calculateur et câbles et écran simulation - validation',
    image: '/images/blog-16.webp',
    summary: "L'intérêt des bancs HIL (Hardware In the Loop) et MIL (Model In the Loop) pour valider les fonctions logicielles avant l'intégration véhicule.",
    keywords: 'HIL, MIL, banc test, validation, Renault, cycle en V',
    content: [
      "L'intégration véhicule est coûteuse. Une erreur détectée sur route peut coûter des semaines de retard. C'est pourquoi, en tant que Leader Validation puis Leader Système, j'ai piloté des campagnes HIL et MIL en amont.",
      "Le banc MIL permet de tester la logique fonctionnelle (modélisation) sans hardware réel. Le banc HIL injecte des signaux réalistes (CAN, LF, RF, alimentation) dans le calculateur pour tester son comportement dans des conditions proches du véhicule. J'ai spécifié les besoins de ces bancs, affecté les ressources, et contrôlé les résultats à chaque jalon.",
      "Les écarts détectés en HIL (latence de réponse, mauvaise interprétation d'un signal) étaient corrigés par le fournisseur avant même que le premier prototype ne soit assemblé. C'est l'efficacité du cycle en V appliquée à l'extrême — transposable en défense et ferroviaire où chaque intégration ratée coûte des millions."
    ],
    bullets: [
      "MIL : test logique sans hardware, rapide et peu coûteux",
      "HIL : signaux réalistes CAN/LF/RF, proche véhicule",
      "Gain : correction avant prototype, jalons sécurisés"
    ]
  },
  {
    slug: 'reflashage-calculateurs-bootloader-versions',
    title: "Reflashage de calculateurs : gestion des versions software et bootloader",
    category: 'Outils & Technique',
    categoryColor: '#FF6B35',
    date: 'Novembre 2025',
    dateISO: '2025-11-15',
    readTime: '5 min',
    imageAlt: 'Calculateur ECU avec flux lumineux de mise à jour et version v2.1 - reflashage',
    image: '/images/blog-17.webp',
    summary: "Le processus de reflashage d'un calculateur automobile : gestion des versions SW, bootloader et différences avant-vente / après-vente.",
    keywords: 'Reflashage ECU, bootloader, version SW, avant-vente après-vente, DDT2000',
    content: [
      "Le reflashage est l'opération qui permet de mettre à jour le software d'un calculateur déjà installé dans un véhicule. Mais cette opération est réglementée. En tant que Pilote Développement Électronique, j'ai défini les règles de reflashage pour le calculateur HFM.",
      "En avant-vente (usine), le reflashage est libre car le véhicule n'est pas encore vendu. En après-vente (concession/client), le reflashage doit être protégé par une clé série unique pour éviter les piratages. Le software doit donc contenir un bootloader capable de gérer ces deux modes.",
      "J'ai vérifié via DDT2000 que le dossier de configuration uploadé sur le serveur contenait bien les bonnes références de version SW et que le processus de reflashage en concession se déroulait sans erreur. La traçabilité des versions est critique : chaque calculateur reflashé doit être traçable pour les rappels éventuels — une exigence renforcée en aéronautique et défense."
    ],
    bullets: [
      "Avant-vente : reflashage libre usine, après-vente : clé série sécurisée",
      "Bootloader bi-mode, version SW traçable via DDT2000",
      "Enjeu : traçabilité rappels, anti-piratage"
    ]
  },
  {
    slug: 'eclem-oneval-jalonnement-renault',
    title: "ECLEM et ONEVAL : les outils de jalonnement chez Renault",
    category: 'Outils & Projet',
    categoryColor: '#7C3AED',
    date: 'Octobre 2025',
    dateISO: '2025-10-08',
    readTime: '5 min',
    imageAlt: 'Deux écrans ECLEM ONEVAL avec planning et jalons colorés - Renault',
    image: '/images/blog-18.webp',
    summary: "Comment les outils ECLEM et ONEVAL structurent le jalonnement projet : suivi des livrables, plans de validation et maturité aux gates.",
    keywords: 'ECLEM, ONEVAL, jalonnement, Renault, livrables, gates',
    content: [
      "Dans l'ingénierie système automobile Renault, deux outils structurent le quotidien : ECLEM et ONEVAL. ECLEM est l'outil de gestion des livrables par jalon. Chaque baseline (PPC, SOP, etc.) y est définie avec ses exigences et ses livrables attendus.",
      "En tant que LIS/LIV, je devais y indiquer le statut de mes livrables (validation SW, résultats ENV, résultats CEM) et justifier les écarts éventuels. ONEVAL est l'outil de planification et de suivi de la validation. J'y construisais les plans de validation, affectais les ressources, et contrôlais la couverture des tests à chaque jalon.",
      "Ces deux outils sont interconnectés : un retard dans ECLEM impacte directement le planning ONEVAL, et un écart de validation dans ONEVAL bloque le passage du jalon dans ECLEM. Maîtriser cette boucle est essentiel pour tout Pilote ou Leader en ingénierie système — et la même logique de jalonnement outillé existe en aéronautique et ferroviaire."
    ],
    bullets: [
      "ECLEM : livrables par baseline, justif écarts, gates",
      "ONEVAL : plans validation, ressources, couverture",
      "Interdépendance : retard ECLEM → impact ONEVAL, blocage gate"
    ]
  },
  {
    slug: 'health-check-cmdb-qualite-donnees',
    title: "Health Check CMDB : auditer la qualité des données et identifier les écarts",
    category: 'ServiceNow CMDB',
    categoryColor: '#00D4AA',
    date: 'Septembre 2025',
    dateISO: '2025-09-15',
    readTime: '5 min',
    imageAlt: 'Base de données CMDB stylisée avec indicateurs qualité et loupe diagnostic - ServiceNow',
    image: '/images/blog-19.webp',
    summary: "Méthodologie de health check sur une instance ServiceNow CMDB : analyse de la volumétrie, détection des doublons, vérification des relations et recommandations d'optimisation.",
    keywords: 'CMDB, health check, ServiceNow, data quality, sys_db_object',
    content: [
      "Dans le cadre de ma pratique ServiceNow, j'ai réalisé un health check complet sur une instance CMDB. L'audit a porté sur quatre axes : la volumétrie des tables (sys_db_object), la qualité de l'indexation (sys_dictionary), l'audit des modifications (sys_audit) et la cohérence des relations (cmdb_rel_ci).",
      "J'ai identifié plusieurs anomalies : tables sans index, relations CI orphelines, et une croissance anormale du text indexing. Les logs transactionnels (syslog_transaction) ont révélé des temps de réponse SQL élevés sur certaines tables critiques.",
      "J'ai produit un rapport structuré avec constats, risques métier et recommandations : création d'index manquants, purge des données obsolètes, et mise en place d'une politique d'archivage (sys_archive). Ce type d'audit est transposable à toute instance ServiceNow industrielle où la CMDB est le cœur du système."
    ],
    bullets: [
      "4 axes : volumétrie, indexation, audit, relations cmdb_rel_ci",
      "Anomalies : sans index, orphelines, text indexing, SQL lents",
      "Livrable : rapport constats/risques/recommandations + archivage"
    ]
  },
  {
    slug: 'peupler-cmdb-discovery-identification-ci',
    title: "Peupler la CMDB avec ServiceNow Discovery : identification automatique des CI",
    category: 'ServiceNow CMDB',
    categoryColor: '#00D4AA',
    date: 'Août 2025',
    dateISO: '2025-08-12',
    readTime: '5 min',
    imageAlt: 'Réseau avec nœuds serveurs convergeant vers CMDB centrale - Discovery ServiceNow',
    image: '/images/blog-20.webp',
    summary: "Comment utiliser ServiceNow Discovery pour identifier automatiquement les Configuration Items, créer leurs relations et maintenir la CMDB à jour sans saisie manuelle.",
    keywords: 'Discovery, CMDB, ServiceNow, CI, cmdb_ci_server',
    content: [
      "La saisie manuelle de la CMDB est source d'erreurs. J'ai exploré ServiceNow Discovery pour automatiser l'identification des CI réseau, serveurs et postes de travail. Le processus consiste à configurer des credentials sécurisés, définir des schedules de discovery par plage IP, et mapper les données découvertes aux classes CMDB appropriées (cmdb_ci_server, cmdb_ci_network_gear, etc.).",
      "J'ai ensuite vérifié la qualité des données découvertes : les attributs clés (nom, IP, fabricant, modèle) étaient-ils renseignés ? Les relations de dépendance étaient-elles créées correctement ? La reconciliation avec les CI existants a nécessité la définition de règles basées sur l'adresse MAC et le numéro de série.",
      "Discovery est un accélérateur puissant, mais il demande une gouvernance rigoureuse pour éviter le chaos de données. Bien paramétré, il transforme une CMDB statique en système vivant et fiable."
    ],
    bullets: [
      "Credentials + schedules IP + mapping classes CMDB",
      "Vérif attributs clés et relations dépendance",
      "Reconciliation MAC / numéro série, gouvernance indispensable"
    ]
  },
  {
    slug: 'gestion-relations-ci-impact-analysis',
    title: "Gestion des relations CI : services, dépendances et impact analysis",
    category: 'ServiceNow CMDB',
    categoryColor: '#00D4AA',
    date: 'Juillet 2025',
    dateISO: '2025-07-08',
    readTime: '5 min',
    imageAlt: 'Schéma relations CI serveur application service métier - impact analysis CMDB',
    image: '/images/blog-21.webp',
    summary: "Structurer les relations entre Configuration Items dans ServiceNow pour activer l'impact analysis et le business service mapping.",
    keywords: 'CMDB relations, impact analysis, cmdb_rel_ci, ServiceNow',
    content: [
      "Une CMDB sans relations est juste un annuaire. J'ai travaillé sur la structuration des relations CI dans ServiceNow pour activer l'impact analysis. Le modèle que j'ai mis en place distingue trois types de relations : \"Depends on\" (dépendance technique), \"Used by\" (consommation de service) et \"Contains\" (composition).",
      "Par exemple, un serveur physique \"Contains\" une VM, qui \"Depends on\" un switch réseau, et qui est \"Used by\" l'application métier de gestion des incidents. Cette structuration permet, lors d'un incident sur le serveur, d'identifier automatiquement les services métiers impactés et de notifier les bonnes équipes.",
      "J'ai utilisé les cmdb_rel_ci et vérifié la cohérence via des rapports de conformité. L'enjeu : passer d'une CMDB technique à une CMDB orientée services, directement exploitable pour le pilotage opérationnel."
    ],
    bullets: [
      "3 types : Depends on / Used by / Contains",
      "Exemple : serveur → VM → switch → appli métier",
      "Impact analysis auto + rapports conformité cmdb_rel_ci"
    ]
  },
  {
    slug: 'data-quality-cmdb-normalisation-deduplication',
    title: "Data quality CMDB : normalisation, déduplication et règles de reconciliation",
    category: 'ServiceNow CMDB',
    categoryColor: '#00D4AA',
    date: 'Juin 2025',
    dateISO: '2025-06-20',
    readTime: '5 min',
    imageAlt: 'Données qui s’organisent en lignes ordonnées avec validation verte - data quality CMDB',
    image: '/images/blog-22.webp',
    summary: "Comment garantir la qualité des données CMDB : normalisation des attributs, détection des doublons et mise en place de règles de reconciliation automatiques.",
    keywords: 'CMDB data quality, normalisation, déduplication, reconciliation ServiceNow',
    content: [
      "La qualité des données CMDB se dégrade naturellement. J'ai mis en place un framework de data quality comprenant trois couches. Premièrement, la normalisation : imposer des formats standard pour les noms (majuscules, pas d'espaces), les numéros de série, et les localisations.",
      "Deuxièmement, la déduplication : utiliser des rapports ServiceNow pour identifier les CI avec le même nom ou la même IP, puis fusionner ou supprimer via des update sets contrôlés. Troisièmement, la reconciliation : définir des règles qui déterminent quelle source a raison en cas de conflit (Discovery vs saisie manuelle vs import Excel).",
      "J'ai aussi configuré des data policies et des UI policies pour empêcher la saisie de données non conformes dès la source. Résultat : une CMDB fiable, base de tout processus ITSM et CSM."
    ],
    bullets: [
      "Normalisation : formats noms, série, localisation",
      "Déduplication : rapports doublons + update sets",
      "Reconciliation + data/UI policies anti non-conforme"
    ]
  },
  {
    slug: 'cmdb-industrielle-assets-it-production',
    title: "CMDB industrielle : connecter les assets IT aux équipements de production",
    category: 'ServiceNow CMDB',
    categoryColor: '#FF6B35',
    date: 'Mai 2025',
    dateISO: '2025-05-18',
    readTime: '5 min',
    imageAlt: 'Serveurs IT et équipements industriels ECU bancs reliés par CMDB centrale - hybride',
    image: '/images/blog-23.webp',
    summary: "Extension de la CMDB au-delà du IT : modélisation des assets industriels, calculateurs embarqués et bancs de test dans ServiceNow.",
    keywords: 'CMDB industrielle, assets, ECU, banc HIL, ServiceNow industrie',
    content: [
      "La CMDB n'est pas réservée aux serveurs et postes IT. Dans mon contexte automobile, j'ai réfléchi à l'extension de la CMDB pour y intégrer les assets industriels : bancs de test HIL/MIL, calculateurs ECU, stations de diagnostic, et postes de reflashage.",
      "J'ai créé des classes CMDB custom (héritant de cmdb_ci_hardware) avec des attributs spécifiques : numéro de série du calculateur, version software installée, date de dernière calibration du banc, et localisation physique (salle, ligne de production).",
      "Les relations entre ces CI industriels et les services IT (réseau, applications de test) permettent de tracer l'impact d'une panne réseau sur une ligne de production. Cette approche CMDB industrielle est directement transposable à la défense, l'aéronautique et le ferroviaire où l'IT et l'OT convergent."
    ],
    bullets: [
      "Classes custom cmdb_ci_hardware : série, version SW, calibration, localisation",
      "Relations IT/OT pour impact panne réseau → production",
      "Transposable défense, aéro, ferro"
    ]
  },
  {
    slug: 'portail-client-csm-case-knowledge',
    title: "Conception d'un portail client avec ServiceNow CSM : case management et knowledge base",
    category: 'ServiceNow CSM',
    categoryColor: '#7C3AED',
    date: 'Avril 2025',
    dateISO: '2025-04-14',
    readTime: '5 min',
    imageAlt: 'Portail CSM stylisé avec formulaire et knowledge base et dashboard satisfaction',
    image: '/images/blog-24.webp',
    summary: "De l'analyse des besoins client à la livraison : conception d'un portail CSM sur ServiceNow avec case management, base de connaissances et suivi de satisfaction.",
    keywords: 'CSM, ServiceNow, case management, knowledge base, CSAT',
    content: [
      "ServiceNow Customer Service Management (CSM) étend l'ITSM vers la relation client. J'ai conçu un portail CSM permettant aux clients finaux de créer des cases (réclamations, demandes d'information), de consulter une knowledge base auto-alimentée, et de suivre l'avancement de leur demande en temps réel.",
      "Le case management repose sur des workflows adaptés : routage automatique selon la catégorie, escalation vers des experts techniques, et résolution avec enquête de satisfaction (CSAT). J'ai configuré des entitlements pour gérer les niveaux de support selon les contrats clients, et des SLAs spécifiques CSM.",
      "Le portail intègre une recherche intelligente qui suggère des articles de la knowledge base avant même la soumission de la case, réduisant le volume d'incidents de premier niveau et améliorant l'autonomie client."
    ],
    bullets: [
      "Portail CSM : cases + knowledge + suivi temps réel",
      "Workflows routage/escalation + entitlements + SLA CSM",
      "Recherche intelligente pré-soumission, déflation volume"
    ]
  },
  {
    slug: 'omni-channel-csm-email-chat-telephonie',
    title: "Omni-channel CSM : intégrer email, chat et téléphonie dans ServiceNow",
    category: 'ServiceNow CSM',
    categoryColor: '#7C3AED',
    date: 'Mars 2025',
    dateISO: '2025-03-10',
    readTime: '5 min',
    imageAlt: 'Canaux email chat téléphone convergeant vers ServiceNow unique - omni-channel',
    image: '/images/blog-25.webp',
    summary: "Mise en place d'une stratégie omni-channel sur ServiceNow CSM : centralisation des interactions client email, chat et voix dans une seule plateforme.",
    keywords: 'CSM omni-channel, email, chat, CTI, case ServiceNow',
    content: [
      "Les clients contactent l'entreprise par email, chat, téléphone et réseaux sociaux. J'ai travaillé sur l'intégration omni-channel dans ServiceNow CSM pour centraliser toutes ces interactions.",
      "Chaque email entrant génère automatiquement une case CSM pré-remplie avec l'expéditeur, l'objet et le contenu. Le chat intégré au portail client permet une résolution en temps réel avec transfert vers un agent humain si le bot ne résout pas. La téléphonie (via CTI) ouvre automatiquement la fiche client et l'historique des cases lors de l'appel.",
      "L'avantage : l'agent a une vue 360° du client indépendamment du canal utilisé. J'ai configuré les routing rules pour éviter les doublons de cases lorsqu'un client contacte par email puis par chat cinq minutes plus tard."
    ],
    bullets: [
      "Email → case auto, chat temps réel + bot, CTI + historique",
      "Vue 360° client unifiée",
      "Routing anti-doublons multi-canal"
    ]
  },
  {
    slug: 'csm-vs-itsm-architectures-processus',
    title: "CSM vs ITSM : architectures, processus et différences de mise en œuvre",
    category: 'ServiceNow CSM',
    categoryColor: '#7C3AED',
    date: 'Février 2025',
    dateISO: '2025-02-18',
    readTime: '5 min',
    imageAlt: 'Comparaison deux colonnes ITSM engrenage vs CSM client - ServiceNow',
    image: '/images/blog-26.webp',
    summary: "Comparaison technique et fonctionnelle entre ServiceNow ITSM et CSM : différences d'architecture, de processus et de configuration.",
    keywords: 'CSM vs ITSM, ServiceNow, case vs incident, architecture',
    content: [
      "ITSM et CSM partagent la même plateforme ServiceNow mais répondent à des logiques différentes. ITSM est centré sur les processus internes (incidents, problèmes, changements) avec des acteurs IT. CSM est centré sur le client externe (cases, demandes, réclamations) avec des acteurs commerciaux et support client.",
      "Techniquement, CSM utilise des tables spécifiques (sn_customerservice_case) mais peut s'appuyer sur les mêmes SLAs, workflows et CMDB. J'ai analysé les écarts fonctionnels : le case CSM gère des entitlements et des contrats de service que l'incident ITSM ne gère pas.",
      "Le portail CSM est orienté \"self-service client\" tandis que le portail ITSM est orienté \"service interne\". La configuration des rôles diffère aussi : un agent CSM n'a pas besoin du rôle ITIL complet. Comprendre ces différences est essentiel pour choisir le bon module selon le contexte métier."
    ],
    bullets: [
      "ITSM interne (incident) vs CSM externe (case)",
      "Tables sn_customerservice_case + entitlements/contrats",
      "Rôles et portails distincts, même socle SLA/CMDB"
    ]
  },
  {
    slug: 'automatisation-csm-workflows-virtual-agent',
    title: "Automatisation CSM : workflows, Virtual Agent et auto-routing des cases",
    category: 'ServiceNow CSM',
    categoryColor: '#7C3AED',
    date: 'Janvier 2025',
    dateISO: '2025-01-20',
    readTime: '5 min',
    imageAlt: 'Chatbot Virtual Agent assistant client avec workflows en arrière-plan - CSM automatisation',
    image: '/images/blog-27.webp',
    summary: "Industrialiser le traitement des cases client avec l'automatisation ServiceNow : workflows intelligents, Virtual Agent et routage automatique.",
    keywords: 'CSM automatisation, Virtual Agent, workflow, auto-routing ServiceNow',
    content: [
      "L'automatisation est le levier principal de l'efficacité CSM. J'ai configuré des workflows qui routent automatiquement une case vers le bon groupe de résolution selon la catégorie, la criticité et le contrat client.",
      "Le Virtual Agent (chatbot) intégré au portail CSM répond aux questions fréquentes, guide le client dans la création de case, et ouvre des cases pré-qualifiées. J'ai aussi mis en place des Business Rules qui enrichissent automatiquement la case avec des données CMDB.",
      "L'objectif : réduire le temps de traitement des cases récurrentes de 40% tout en améliorant le CSAT, avec des notifications proactives informant le client de l'avancement sans intervention humaine."
    ],
    bullets: [
      "Workflows routage auto par catégorie/criticité/contrat",
      "Virtual Agent + cases pré-qualifiées",
      "Enrichissement CMDB + notif proactive, -40% temps traitement"
    ]
  },
  {
    slug: 'metriques-dashboard-csm-csat-sla',
    title: "Métriques et dashboard CSM : CSAT, SLA client et temps de résolution",
    category: 'ServiceNow CSM',
    categoryColor: '#FF6B35',
    date: 'Décembre 2024',
    dateISO: '2024-12-08',
    readTime: '5 min',
    imageAlt: 'Dashboard CSM avec jauges CSAT et graphiques SLA et courbe résolution',
    image: '/images/blog-28.webp',
    summary: "Construire un tableau de bord de pilotage CSM sur ServiceNow : suivi du CSAT, des SLA clients et des indicateurs opérationnels de l'équipe support.",
    keywords: 'Dashboard CSM, CSAT, SLA, ServiceNow reporting',
    content: [
      "Un dashboard CSM efficace ne se limite pas au nombre de cases ouvertes. J'ai construit un tableau de bord de pilotage comprenant cinq familles d'indicateurs. Premièrement, la satisfaction client (CSAT) : taux de réponse aux enquêtes, note moyenne, répartition par catégorie.",
      "Deuxièmement, les SLA : taux de respect des SLA de première réponse et de résolution, ventilé par priorité et par contrat client. Troisièmement, la productivité de l'équipe : nombre de cases résolues par agent, temps moyen de traitement, taux de réouverture.",
      "Quatrièmement, la qualité : taux de cases résolues au premier contact, taux d'escalade. Cinquièmement, la knowledge base : articles les plus consultés, taux de déflation. Ces indicateurs permettent au manager de piloter son équipe avec des données factuelles."
    ],
    bullets: [
      "CSAT + SLA par priorité/contrat",
      "Productivité agent + qualité 1er contact",
      "KB : consultation et déflation"
    ]
  },
  {
    slug: 'employee-center-hrsd-portail-rh-unifie',
    title: "Employee Center sur ServiceNow HRSD : le portail RH unifié",
    category: 'ServiceNow HRSD',
    categoryColor: '#00D4AA',
    date: 'Novembre 2024',
    dateISO: '2024-11-12',
    readTime: '5 min',
    imageAlt: 'Portail RH Employee Center avec tuiles congés paie formation - HRSD',
    image: '/images/blog-29.webp',
    summary: "Conception et déploiement d'un Employee Center sur ServiceNow HRSD : regrouper toutes les demandes RH des collaborateurs dans un portail unique et intuitif.",
    keywords: 'HRSD, Employee Center, ServiceNow RH, portail collaborateur',
    content: [
      "ServiceNow HR Service Delivery (HRSD) transforme l'expérience collaborateur. J'ai conçu un Employee Center regroupant les demandes RH les plus fréquentes : demandes de congés, accès aux fiches de paie, inscriptions aux formations, mises à jour de données personnelles, et demandes de matériel IT à l'onboarding.",
      "Chaque tuile du portail pointe vers un workflow HRSD configuré avec des approbations en cascade (manager, RH, IT selon le cas). Le portail est personnalisé selon le profil de l'employé : un manager voit les demandes de son équipe, un nouveau collaborateur voit son parcours d'intégration.",
      "L'intégration avec la CMDB permet de commander automatiquement le matériel IT adapté au poste, et le manager est notifié des demandes en attente."
    ],
    bullets: [
      "Tuiles : congés, paie, formation, données, matériel",
      "Approbations cascade manager/RH/IT",
      "Personnalisation profil + CMDB matériel"
    ]
  },
  {
    slug: 'onboarding-automatise-hrsd-integration',
    title: "Onboarding automatisé : intégrer un nouveau collaborateur avec ServiceNow HRSD",
    category: 'ServiceNow HRSD',
    categoryColor: '#00D4AA',
    date: 'Octobre 2024',
    dateISO: '2024-10-10',
    readTime: '5 min',
    imageAlt: 'Parcours onboarding étapes 1 à 4 avec badge ordinateur formation - HRSD',
    image: '/images/blog-30.webp',
    summary: "Automatisation du processus d'intégration d'un nouveau collaborateur : création de compte, commande de matériel, formation et validation des étapes sur ServiceNow HRSD.",
    keywords: 'Onboarding, HRSD, ServiceNow, Flow Designer, intégration',
    content: [
      "L'onboarding manuel est source d'oublis et de retards. J'ai automatisé le processus sur ServiceNow HRSD avec un workflow à étapes. Étape 1 : la RH crée la fiche employé, ce qui déclenche automatiquement la création du compte AD et l'envoi du matériel IT via une demande liée à la CMDB.",
      "Étape 2 : le manager reçoit une tâche de bienvenue avec un checklist de formation à planifier. Étape 3 : le collaborateur reçoit un accès au Employee Center avec son parcours personnalisé. Étape 4 : après 30 jours, un questionnaire d'intégration est envoyé automatiquement.",
      "J'ai utilisé des Flow Designer pour orchestrer ces étapes entre les différentes tables (HR Case, Catalog Item, CMDB) et des notifications pour alerter les acteurs en cas de retard. Résultat : intégration sans oubli et traçable."
    ],
    bullets: [
      "4 étapes : compte AD + matériel → checklist manager → Employee Center → questionnaire J+30",
      "Flow Designer HR Case / Catalog / CMDB",
      "Notifications anti-retard, traçabilité complète"
    ]
  },
  {
    slug: 'case-management-rh-paie-conges-formation',
    title: "Case management RH : gestion des demandes paie, congés et formation sur ServiceNow",
    category: 'ServiceNow HRSD',
    categoryColor: '#00D4AA',
    date: 'Septembre 2024',
    dateISO: '2024-09-08',
    readTime: '5 min',
    imageAlt: 'Dossiers RH congés paie formation triés dans interface ServiceNow - case management',
    image: '/images/blog-31.webp',
    summary: "Structurer le case management RH sur ServiceNow : catégorisation des demandes, routage vers les bonnes équipes et suivi des SLA internes.",
    keywords: 'Case management RH, HRSD, paie congés formation, SLA',
    content: [
      "Les demandes RH (congés, ajustements de paie, demandes de formation) méritent un traitement structuré. J'ai configuré sur ServiceNow HRSD un case management avec des catégories et des sous-catégories précises : \"Congés > Demande exceptionnelle\", \"Paie > Erreur de bulletin\", \"Formation > Budget formation\", etc.",
      "Chaque catégorie est routée automatiquement vers le bon groupe de résolution (RH paie, RH congés, responsable formation). Les SLAs internes garantissent un délai de réponse : 24h pour une erreur de paie, 48h pour une demande de formation.",
      "J'ai aussi configuré des templates de résolution pour les cas récurrents, permettant aux agents de répondre en un clic avec une réponse pré-rédigée et les documents joints. Le reporting mensuel permet à la DRH de suivre les volumes et les délais par catégorie."
    ],
    bullets: [
      "Catégories précises congés/paie/formation",
      "Routage auto + SLA 24h/48h",
      "Templates résolution + reporting DRH"
    ]
  },
  {
    slug: 'convergence-hrsd-itsm-rh-it',
    title: "Convergence HRSD et ITSM : quand la RH rencontre le service informatique",
    category: 'ServiceNow HRSD',
    categoryColor: '#7C3AED',
    date: 'Août 2024',
    dateISO: '2024-08-15',
    readTime: '5 min',
    imageAlt: 'Deux mondes RH et IT qui se rejoignent avec employé au centre - convergence HRSD ITSM',
    image: '/images/blog-32.webp',
    summary: "Les points de convergence entre HRSD et ITSM : gestion des accès, commande de matériel, et intégration des nouveaux collaborateurs.",
    keywords: 'HRSD ITSM convergence, ServiceNow, onboarding, CMDB',
    content: [
      "HRSD et ITSM ne sont pas isolés. L'arrivée d'un nouveau collaborateur est l'exemple parfait de convergence : la RH crée l'employé (HRSD), ce qui déclenche automatiquement une demande IT (ITSM) pour le matériel et les accès.",
      "J'ai travaillé sur l'intégration de ces deux processus via des Flow Designer et des champs croisés. Par exemple, la localisation du collaborateur dans sa fiche HR alimente automatiquement la CMDB pour la livraison du matériel au bon site.",
      "Le manager, visible dans l'organigramme HR, est automatiquement ajouté comme approbateur IT pour les demandes de son équipe. Cette convergence évite les allers-retours entre RH et IT et accélère l'intégration des nouveaux collaborateurs de 30%."
    ],
    bullets: [
      "HR crée employé → demande IT auto (matériel/accès)",
      "Localisation HR → CMDB livraison, manager → approbateur",
      "-30% délai intégration, zéro aller-retour"
    ]
  },
  {
    slug: 'servicenow-management-equipe-competences',
    title: "ServiceNow pour le management d'équipe technique : compétences, formation et tableau de bord",
    category: 'ServiceNow HRSD',
    categoryColor: '#7C3AED',
    date: 'Juillet 2024',
    dateISO: '2024-07-10',
    readTime: '5 min',
    imageAlt: 'Dashboard RH technique avec profils ingénieurs et jauges compétences - management',
    image: '/images/blog-33.webp',
    summary: "Utiliser ServiceNow HRSD comme outil de management : suivi des compétences techniques, plan de formation et pilotage de la montée en compétence de l'équipe.",
    keywords: 'Management équipe, HRSD, compétences, formation, tableau bord',
    content: [
      "En tant que Team Leader, j'ai transposé ma pratique de management dans ServiceNow HRSD. J'ai créé un tableau de bord de suivi des compétences techniques par collaborateur : niveau en validation, automatisation, outils spécifiques (Robot Framework, CAPL, CANalyzer).",
      "Ce tableau est alimenté par les formations suivies (enregistrées dans HRSD) et les certifications obtenues. J'ai configuré des rappels automatiques pour les entretiens annuels et les plans de formation. Le manager peut visualiser en un coup d'œil les lacunes de l'équipe et lancer des demandes de formation groupées.",
      "Cette approche a permis de structurer la montée en compétence qui a porté le CQP de l'équipe de 1,8 à 3,21. ServiceNow devient alors un outil de pilotage RH opérationnel, pas seulement administratif."
    ],
    bullets: [
      "Dashboard compétences par outil/niveau",
      "Formations + certifs → rappels + plans groupés",
      "Pilotage CQP 1,8 → 3,21 via HRSD"
    ]
  },
]

function SafeBlogImage({ src, alt, categoryColor, icon }: { src: string; alt: string; categoryColor: string; icon: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white overflow-hidden" style={{ background: `linear-gradient(135deg, ${categoryColor} 0%, #162032 100%)` }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)`, backgroundSize: '18px 18px' }} />
        <div className="relative w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-2xl mb-3 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">{icon}</div>
        <div className="relative text-[10px] font-black tracking-[0.15em] opacity-85 uppercase text-center leading-tight px-2 line-clamp-2 max-w-[220px]">{alt.slice(0, 52)}</div>
        <div className="relative mt-3 w-[200px] bg-white/95 rounded-lg p-2.5 shadow-xl">
          <div className="flex items-center gap-1.5 mb-2"><span className="w-2 h-2 rounded-full bg-red-400"/><span className="w-2 h-2 rounded-full bg-yellow-400"/><span className="w-2 h-2 rounded-full bg-green-400"/><span className="ml-auto text-[7px] font-black tracking-widest text-slate-500">PREVIEW</span></div>
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-slate-200 w-full"/>
            <div className="h-2 rounded bg-slate-100 w-5/6"/>
            <div className="flex gap-1"><span className="h-3 px-2 rounded-full text-white text-[6px] font-black flex items-center" style={{background: categoryColor}}>LIVE</span><span className="h-3 px-2 rounded-full bg-[#00D4AA] text-white text-[6px] font-black flex items-center">OK</span></div>
            <div className="flex gap-1 pt-1"><div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full" style={{background: categoryColor, width: '72%'}}/></div><div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full bg-[#00D4AA] w-[58%]"/></div></div>
          </div>
        </div>
      </div>
    )
  }
  return <img src={src} alt={alt} width={1200} height={675} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" onError={() => setFailed(true)} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition duration-500" loading="lazy" decoding="async" />
}

function SafeArticleImage({ src, alt, categoryColor }: { src: string; alt: string; categoryColor: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white" style={{ background: `linear-gradient(135deg, ${categoryColor} 0%, #162032 100%)` }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        <div className="relative text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-3xl mb-4">📄</div>
          <div className="text-sm font-bold opacity-90 max-w-[420px] leading-tight">{alt}</div>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-bold">Image indisponible — contenu technique préservé</div>
        </div>
      </div>
    )
  }
  return <img src={src} alt={alt} width={1200} height={675} sizes="(max-width: 860px) 100vw, 860px" onError={() => setFailed(true)} className="absolute inset-0 w-full h-full object-cover opacity-90" loading="eager" decoding="async" fetchPriority="high" />
}

export default function App() {
  const [dark, setDark] = useState(true)
  const [lang, setLang] = useState<Lang>('FR')
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [showToast, setShowToast] = useState<string | null>(null)
  const heroStatsRef = useRef<HTMLDivElement>(null)
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false)
  const [currentView, setCurrentView] = useState<View>('home')
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHasAnimatedStats(true)
    }, { threshold: 0.3 })
    if (heroStatsRef.current) obs.observe(heroStatsRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (activeProject !== null) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [activeProject])

  // handle routing via history + hash fallback for file://
  useEffect(() => {
    const getPath = () => {
      // support file:// and hash routing: #/blog or #/blog/slug
      const hash = window.location.hash.replace(/^#/, '')
      if (hash.startsWith('/blog')) return hash
      return window.location.pathname
    }
    const handlePop = () => {
      const path = getPath()
      if (path === '/blog' || path === '/blog/') { setCurrentView('blog'); setSelectedSlug(null) }
      else if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '').replace(/\/$/, '')
        setCurrentView('article'); setSelectedSlug(slug)
      } else { setCurrentView('home'); setSelectedSlug(null) }
    }
    handlePop()
    window.addEventListener('popstate', handlePop)
    window.addEventListener('hashchange', handlePop)
    return () => { window.removeEventListener('popstate', handlePop); window.removeEventListener('hashchange', handlePop) }
  }, [])

  useEffect(() => {
    // update document title per view
    if (currentView === 'blog') document.title = 'Blog | Gassem Taoufik — Systèmes Embarqués, ITSM & Management Technique'
    else if (currentView === 'article' && selectedSlug) {
      const art = blogArticles.find(a => a.slug === selectedSlug)
      if (art) document.title = `${art.title} | Blog Gassem Taoufik`
    } else {
      document.title = "Gassem Taoufik | Technical Project Manager Systèmes Embarqués & ITSM | 8 ans d'expérience"
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentView, selectedSlug])

  const navigate = (view: View, slug?: string) => {
    const isFile = window.location.protocol === 'file:'
    const push = (path: string) => {
      if (isFile) {
        // file:// needs hash routing
        window.location.hash = path
      } else {
        try { window.history.pushState({}, '', path) } catch { window.location.hash = path }
      }
    }
    if (view === 'home') {
      if (isFile) window.location.hash = ''
      else push('/')
      setCurrentView('home'); setSelectedSlug(null)
    } else if (view === 'blog') {
      push('/blog')
      setCurrentView('blog'); setSelectedSlug(null)
    } else if (view === 'article' && slug) {
      push(`/blog/${slug}`)
      setCurrentView('article'); setSelectedSlug(slug)
    }
    setMobileMenu(false)
  }

  const scrollToId = (id: string) => {
    if (currentView !== 'home') {
      navigate('home')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenu(false)
  }

  const handleAssistantNavigate = (href: string) => {
    if (href.startsWith('/blog/')) return navigate('article', href.slice('/blog/'.length))
    if (href === '/blog') return navigate('blog')
    const section = href.match(/^\/#(.+)$/)?.[1]
    if (section) scrollToId(section)
  }

  const sortedArticles = [...blogArticles].sort((a, b) => b.dateISO.localeCompare(a.dateISO))

  const t = {
    nav: {
      FR: { profil: 'Profil', parcours: 'Parcours', projets: 'Projets', blog: 'Blog', certifs: 'Certifications', stack: 'Stack', contact: 'Contact' },
      EN: { profil: 'Profile', parcours: 'Experience', projets: 'Projects', blog: 'Blog', certifs: 'Certifications', stack: 'Stack', contact: 'Contact' }
    },
    hero: {
      FR: {
        role: 'Technical Project Manager',
        subtitle: 'Systèmes Embarqués & ITSM | Automobile · Défense · Aéronautique · Ferroviaire',
        tag: '8 ans d’expérience  ·  Systèmes embarqués critiques  ·  ServiceNow ITSM  ·  Management international | Automobile · Défense · Aéronautique · Ferroviaire',
        pitch: 'Je pilote le cycle en V complet des développements ECU, de l’exigence fournisseur à l’intégration véhicule, tout en industrialisant les processus ITSM. Management transverse de 22 ingénieurs sur 4 pays, workpackage > 4M€.',
        ctaCv: 'CV sur demande',
        ctaProjets: 'Voir mes projets',
        kpi1: 'Ingénieurs managés',
        kpi2: 'Pays',
        kpi3: 'Budget piloté',
        kpi4: 'CQP équipe (1,8 → 3,21)'
      },
      EN: {
        role: 'Technical Project Manager',
        subtitle: 'Embedded Systems & ITSM | Automotive · Defence · Aerospace · Rail',
        tag: '8 years experience  ·  Critical Embedded Systems  ·  ServiceNow ITSM  ·  International Management | Automotive · Defence · Aerospace · Rail',
        pitch: 'End-to-end V-cycle ownership for ECU development, from supplier requirements to vehicle integration, while industrializing ITSM processes. Cross-functional management of 22 engineers across 4 countries, workpackage > €4M.',
        ctaCv: 'CV on request',
        ctaProjets: 'View projects',
        kpi1: 'Engineers led',
        kpi2: 'Countries',
        kpi3: 'Budget managed',
        kpi4: 'Team CQP (1.8 → 3.21)'
      }
    }
  }

  const showComingSoon = (msg: string) => {
    setShowToast(msg)
    setTimeout(() => setShowToast(null), 3000)
  }

  const selectedArticle = selectedSlug ? blogArticles.find(a => a.slug === selectedSlug) : null

  return (
    <div className={dark ? 'dark' : ''}>
      <div className={`min-h-screen antialiased selection:bg-[#FF6B35]/20 ${dark ? 'bg-[#162032] text-[#f1f5f9]' : 'bg-[#FAFBFC] text-[#1A1A2E]'} `} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <style>{`
          /* V4 palette override - ensure #162032 not too dark */
          .dark .bg-\[\#0B1120\] { background-color: #162032 !important; }
          .dark .bg-\[\#0B1A2F\] { background-color: #162032 !important; }
          .dark .bg-\[\#151E32\] { background-color: #1e293b !important; }
          .dark .bg-\[\#1e293b\] { background-color: #1e293b !important; }
          .dark .border-\[\#1E293B\] { border-color: #334155 !important; }
          .dark .border-\[\#334155\] { border-color: #334155 !important; }
          .dark .bg-\[\#020A18\] { background-color: #0f172a !important; }
          .dark .bg-\[\#070D1A\] { background-color: #162032 !important; }
          .dark .bg-\[\#0f172a\] { background-color: #0f172a !important; }
        `}</style>
        <style>{`
          html { scroll-behavior: smooth; }
          ::-webkit-scrollbar { width: 8px; height: 8px; }
          ::-webkit-scrollbar-thumb { background: #0A2540; border-radius: 999px; }
          ::-webkit-scrollbar-track { background: #F3F4F6; }
          .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
          .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        `}</style>

        {/* TOP NAV */}
        <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${scrolled ? (dark ? 'bg-[#162032]/95 backdrop-blur-xl border-[#334155] py-3 shadow-2xl' : 'bg-white/90 backdrop-blur-xl border-slate-200/60 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)]') : (currentView !== 'home' ? (dark ? 'bg-[#162032] border-[#334155] py-3' : 'bg-[#162032] border-[#334155] py-3') : 'bg-transparent border-transparent py-5')}`}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between">
            <button onClick={() => navigate('home')} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A2540] flex items-center justify-center text-white font-black text-[13px] tracking-widest shadow-lg" style={{ background: !scrolled && currentView === 'home' && !dark ? 'white' : (dark && !scrolled && currentView === 'home' ? 'white' : '#0A2540'), color: !scrolled && currentView === 'home' ? '#0A2540' : 'white' }}>
                GT
              </div>
              <div className="hidden sm:block text-left">
                <div className={`text-[13px] font-extrabold tracking-[0.14em] leading-none ${scrolled || currentView !== 'home' || dark ? 'text-white' : (dark ? 'text-white' : 'text-[#0A2540]')} ${!scrolled && currentView === 'home' && !dark ? '!text-white' : ''}`} style={{ color: !scrolled && currentView === 'home' ? 'white' : undefined }}>GASSEM TAOUFIK</div>
                <div className={`text-[11px] tracking-widest font-semibold ${scrolled || currentView !== 'home' ? 'text-white/70' : 'text-white/70'}`}>TPM — EMBARQUÉ & ITSM</div>
              </div>
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button onClick={() => navigate('home')} className={`text-[13px] font-semibold tracking-wide hover:text-[#FF6B35] transition ${(currentView === 'home' ? 'text-[#FF6B35]' : (scrolled || (currentView as string) !== 'home' ? 'text-white/80' : 'text-white/80'))}`}>Accueil</button>
              <button onClick={() => scrollToId('profil')} className={`text-[13px] font-semibold tracking-wide hover:text-[#FF6B35] transition ${scrolled || currentView !== 'home' ? 'text-white/80' : 'text-white/80'}`}>{t.nav[lang].profil}</button>
              <button onClick={() => scrollToId('parcours')} className={`text-[13px] font-semibold tracking-wide hover:text-[#FF6B35] transition ${scrolled || currentView !== 'home' ? 'text-white/80' : 'text-white/80'}`}>{t.nav[lang].parcours}</button>
              <button onClick={() => scrollToId('projets')} className={`text-[13px] font-semibold tracking-wide hover:text-[#FF6B35] transition ${scrolled || currentView !== 'home' ? 'text-white/80' : 'text-white/80'}`}>{t.nav[lang].projets}</button>
              <button onClick={() => navigate('blog')} className={`text-[13px] font-semibold tracking-wide hover:text-[#FF6B35] transition ${currentView === 'blog' || currentView === 'article' ? 'text-[#FF6B35]' : (scrolled || (currentView as string) !== 'home' ? 'text-white/80' : 'text-white/80')}`}>
                Blog {currentView === 'blog' || currentView === 'article' ? '●' : ''}
              </button>
              <button onClick={() => scrollToId('certifications')} className={`text-[13px] font-semibold tracking-wide hover:text-[#FF6B35] transition ${scrolled || currentView !== 'home' ? 'text-white/80' : 'text-white/80'}`}>{t.nav[lang].certifs}</button>
              <button onClick={() => scrollToId('contact')} className={`text-[13px] font-semibold tracking-wide hover:text-[#FF6B35] transition ${scrolled || currentView !== 'home' ? 'text-white/80' : 'text-white/80'}`}>{t.nav[lang].contact}</button>
            </div>

            <div className="flex items-center gap-3">
              <div className={`hidden sm:flex items-center p-1 rounded-full border text-[11px] font-bold tracking-widest ${scrolled || currentView !== 'home' ? (dark ? 'bg-white/10 border-white/15 text-white' : 'bg-white/10 border-white/15 text-white') : 'bg-white/10 border-white/20 text-white backdrop-blur'}`}>
                <button onClick={() => setLang('FR')} className={`px-3 py-1 rounded-full transition ${lang === 'FR' ? 'bg-white text-[#0A2540] shadow' : 'text-white/70 hover:text-white'}`}>FR</button>
                <button onClick={() => setLang('EN')} className={`px-3 py-1 rounded-full transition ${lang === 'EN' ? 'bg-white text-[#0A2540] shadow' : 'text-white/70 hover:text-white'}`}>EN</button>
              </div>

              <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className={`w-9 h-9 rounded-full flex items-center justify-center border transition ${scrolled || currentView !== 'home' ? (dark ? 'bg-white/10 border-white/15 text-white' : 'bg-white/10 border-white/15 text-white') : 'bg-white/10 border-white/20 text-white backdrop-blur'}`}>
                <span className="text-sm">{dark ? '☀️' : '🌙'}</span>
              </button>

              <button onClick={() => scrollToId('contact')} className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6B35] text-white text-[13px] font-bold shadow-[0_8px_20px_rgba(255,107,53,0.35)] hover:bg-[#E85F2F] transition">
                {lang === 'FR' ? 'Me contacter' : 'Contact me'} <span>→</span>
              </button>

              <button onClick={() => setMobileMenu(!mobileMenu)} className={`lg:hidden w-9 h-9 rounded-xl flex items-center justify-center border ${scrolled || currentView !== 'home' ? 'bg-white/10 border-white/15 text-white' : 'bg-white/10 border-white/20 text-white'}`}>
                <span className="text-lg">{mobileMenu ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileMenu && (
            <div className={`lg:hidden mt-4 mx-4 rounded-2xl border p-6 shadow-2xl ${dark ? 'bg-[#151E32] border-[#1E293B]' : 'bg-white border-slate-200'}`}>
              <div className="flex flex-col gap-4">
                <button onClick={() => navigate('home')} className={`text-left text-sm font-semibold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>Accueil</button>
                <button onClick={() => scrollToId('profil')} className={`text-left text-sm font-semibold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{t.nav[lang].profil}</button>
                <button onClick={() => scrollToId('parcours')} className={`text-left text-sm font-semibold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{t.nav[lang].parcours}</button>
                <button onClick={() => scrollToId('projets')} className={`text-left text-sm font-semibold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{t.nav[lang].projets}</button>
                <button onClick={() => navigate('blog')} className="text-left text-sm font-bold text-[#FF6B35]">Blog ●</button>
                <button onClick={() => scrollToId('certifications')} className={`text-left text-sm font-semibold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{t.nav[lang].certifs}</button>
                <button onClick={() => scrollToId('contact')} className={`text-left text-sm font-semibold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{t.nav[lang].contact}</button>
                <div className="flex gap-2 pt-2 border-t border-slate-200/20">
                  <button onClick={() => setLang('FR')} className={`flex-1 py-2 rounded-full text-xs font-bold border ${lang === 'FR' ? 'bg-[#0A2540] text-white' : dark ? 'border-white/20 text-white' : 'border-slate-200 text-[#0A2540]'}`}>FR</button>
                  <button onClick={() => setLang('EN')} className={`flex-1 py-2 rounded-full text-xs font-bold border ${lang === 'EN' ? 'bg-[#0A2540] text-white' : dark ? 'border-white/20 text-white' : 'border-slate-200 text-[#0A2540]'}`}>EN</button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* CONDITIONAL RENDER */}
        {currentView === 'home' && (
          <>
            {/* HERO */}
            <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
              <div className="absolute inset-0">
                <div className="absolute inset-0" style={{ background: dark ? '#162032' : 'linear-gradient(135deg, #06182E 0%, #0A2540 45%, #143A62 100%)' }} />
                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`, backgroundSize: '72px 72px' }} />
                <div className="absolute -top-32 -right-32 w-[720px] h-[720px] rounded-full blur-[120px] opacity-20" style={{ background: 'radial-gradient(circle, #00D4AA 0%, transparent 70%)' }} />
                <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full blur-[140px] opacity-15" style={{ background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="relative z-10 max-w-[1180px] mx-auto px-6 lg:px-8 w-full py-10">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-7">
                    <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-[#00D4AA] scale-110" />
                    <img src="./images/portrait.jpg" alt="Gassem Taoufik - Technical Project Manager Systèmes Embarqués" className="relative w-[132px] h-[132px] lg:w-[148px] lg:h-[148px] rounded-full object-cover border-[4px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] object-top" loading="eager" onError={(e) => { (e.target as HTMLImageElement).src = "images/portrait.jpg" }} />
                  </div>

                  <h1 className="font-[Poppins] font-extrabold tracking-[-0.04em] text-white text-[42px] lg:text-[58px] leading-[0.9]">
                    GASSEM TAOUFIK
                    <span className="block mt-3 text-[15px] lg:text-[16px] font-semibold tracking-[0.12em] text-white/90 uppercase max-w-[920px] leading-6 font-[Inter]">
                      {t.hero[lang].role} <span className="text-[#00D4AA]">— {t.hero[lang].subtitle}</span>
                    </span>
                  </h1>

                  <div className="mt-4 inline-flex flex-wrap justify-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 backdrop-blur max-w-[920px]">
                    <span className="text-[12px] font-medium tracking-wide text-white/85 text-center leading-5">{t.hero[lang].tag}</span>
                  </div>

                  <p className="mt-6 max-w-[760px] text-[15px] lg:text-[16px] leading-7 text-white/80">
                    {t.hero[lang].pitch}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                    <button onClick={() => showComingSoon(lang === 'FR' ? 'CV public indisponible — contactez-moi pour le recevoir.' : 'Public CV unavailable — contact me to request it.')} className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full bg-[#FF6B35] text-white text-[14px] font-bold shadow-[0_12px_30px_rgba(255,107,53,0.45)] hover:bg-[#F0602C] hover:scale-[1.02] transition">
                      <span>📄</span> {t.hero[lang].ctaCv}
                    </button>
                    <button onClick={() => scrollToId('projets')} className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full bg-transparent border border-white/30 text-white text-[14px] font-bold hover:bg-white hover:text-[#0A2540] transition">
                      💼 {t.hero[lang].ctaProjets}
                    </button>
                    <a href="https://www.linkedin.com/in/taoufik-g-387964129/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-[13px] rounded-full bg-white text-[#0A2540] text-[14px] font-bold shadow-lg hover:bg-slate-100 transition">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A2540"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                      LinkedIn
                    </a>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-3 text-[12px] font-medium text-white/70">
                    <span className="inline-flex items-center gap-1.5"><span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">📍</span> Montigny-le-Bretonneux, France</span>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <a href="tel:+33770471058" className="inline-flex items-center gap-1.5 hover:text-white">📞 07 70 47 10 58</a>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <a href="https://github.com/taoufikgassem-prog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">⬢ GitHub</a>
                  </div>
                </div>

                <div ref={heroStatsRef} className="mt-8 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[980px] mx-auto">
                  {[
                    { value: 22, suffix: '', label: t.hero[lang].kpi1, sub: 'France · Roumanie · Inde · Maroc' },
                    { value: 4, suffix: '', label: t.hero[lang].kpi2, sub: 'International footprint' },
                    { value: 4, suffix: 'M€+', label: t.hero[lang].kpi3, sub: 'Workpackage QCD' },
                    { value: 78, prefix: '+', suffix: '%', label: t.hero[lang].kpi4, sub: 'Progression record entité' },
                  ].map((kpi, i) => (
                    <div key={i} className="rounded-[18px] bg-white/[0.08] backdrop-blur-xl border border-white/12 p-5 lg:p-6 text-center hover:bg-white/[0.12] transition">
                      <div className="font-[Poppins] font-extrabold text-white text-[30px] lg:text-[36px] leading-none tracking-tight flex items-center justify-center gap-0.5">
                        <span className="text-[#00D4AA]">{kpi.prefix}</span>
                        <AnimatedNumber target={kpi.value} active={hasAnimatedStats} />
                        <span>{kpi.suffix}</span>
                      </div>
                      <div className="mt-1 text-[11px] font-bold tracking-[0.14em] text-white uppercase">{kpi.label}</div>
                      <div className="mt-1 text-[11px] text-white/60">{kpi.sub}</div>
                      <div className="mt-3 h-1 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#00D4AA] to-[#FF6B35] transition-all duration-[1200ms]" style={{ width: hasAnimatedStats ? '100%' : '0%', transitionDelay: `${i * 150}ms` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <button onClick={() => scrollToId('profil')} className="w-9 h-9 rounded-full border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition animate-bounce">↓</button>
                </div>
              </div>
            </section>

            {/* PROFIL */}
            <section id="profil" className={`py-10 lg:py-14 ${dark ? 'bg-[#162032]' : 'bg-white'}`}>
              <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200/60 max-w-[80px]" />
                  <span className="text-[11px] font-bold tracking-[0.22em] text-[#FF6B35] uppercase">01 — À propos</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200/60 max-w-[80px]" />
                </div>

                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
                  <div>
                    <h2 className={`font-[Poppins] font-extrabold text-[34px] lg:text-[44px] leading-[0.95] tracking-tight ${dark ? 'text-white' : 'text-[#0A2540]'}`}>
                      Profil <span className="text-[#00D4AA]">.</span>
                    </h2>
                    <p className={`mt-2 text-[14px] font-semibold tracking-wide ${dark ? 'text-white/60' : 'text-[#0A2540]/60'}`}>{lang === 'FR' ? 'Ingénieur · Manager · 8 ans d’expérience' : 'Engineer · Manager · 8 years experience'}</p>

                    <div className={`mt-6 space-y-4 text-[14.5px] leading-7 ${dark ? 'text-white/80' : 'text-[#1A1A2E]/80'}`}>
                      <p>
                        {lang === 'FR'
                          ? <>Ingénieur en électronique et systèmes embarqués, j’ai évolué vers le <span className="font-semibold text-[#0A2540] dark:text-white">pilotage de projet technique et l’ingénierie système</span> dans l’automobile. Mon parcours couvre l’intégralité du cycle en V : spécification des exigences, développement fournisseur, intégration ECU, validation HIL/MIL/PIE et homologation.</>
                          : <>Electronics & Embedded Systems Engineer turned <span className="font-semibold">Technical Project Manager & Systems Engineer</span> in automotive. Full V-cycle coverage: requirements, supplier development, ECU integration, HIL/MIL/PIE validation and homologation.</>}
                      </p>
                      <p>
                        {lang === 'FR'
                          ? <>Chez <span className="font-bold">Expleo</span>, je manage une équipe de <span className="font-bold text-[#FF6B35]">22 ingénieurs</span> répartis sur 4 pays (France, Roumanie, Inde, Maroc) et pilote un workpackage dépassant <span className="font-bold">4M€</span>. J’ai porté le score CQP de mon équipe de <span className="font-bold text-[#00D4AA]">1,8 à 3,21 sur 4 (+78%)</span>, l’un des meilleurs taux de progression de l’entité.</>
                          : <>At <span className="font-bold">Expleo</span>, I lead <span className="font-bold text-[#FF6B35]">22 engineers</span> across 4 countries and a workpackage over <span className="font-bold">€4M</span>. Improved team CQP from <span className="font-bold text-[#00D4AA]">1.8 to 3.21/4 (+78%)</span>, one of the best progress rates in the entity.</>}
                      </p>
                      <p>
                        {lang === 'FR'
                          ? <>En parallèle, je développe une expertise <span className="font-semibold">ServiceNow ITSM (certifié CSA)</span> : administration de plateforme, CMDB, automatisation, Service Portal, sécurité ACL, et plus récemment GenAI & Agentic AI.</>
                          : <>In parallel, I built strong <span className="font-semibold">ServiceNow ITSM (CSA certified)</span> expertise: platform administration, CMDB, automation, Service Portal, ACL security, and recently GenAI & Agentic AI.</>}
                      </p>
                      <div className={`p-4 rounded-xl border-l-[4px] ${dark ? 'bg-white/5 border-[#00D4AA] text-white/80' : 'bg-[#F3F4F6] border-[#00D4AA] text-[#0A2540]/80'}`}>
                        <p className="text-[13.5px] leading-6 font-medium">
                          {lang === 'FR'
                            ? "Mon expertise en systèmes embarqués critiques, validation V-cycle et management de projet s'applique à tous les secteurs à forte exigence sécuritaire et normative : automobile (véhicules électriques et hybrides), défense, aéronautique, spatial et ferroviaire. La rigueur du cycle en V, la traçabilité des exigences et la maîtrise des livrables fournisseurs sont transversales à ces industries."
                            : "My expertise in critical embedded systems, V-cycle validation and project management applies to all high-assurance, highly regulated sectors: automotive (EV & hybrid), defence, aerospace, space and rail. V-cycle rigour, requirements traceability and supplier deliverable mastery are transversal across these industries."}
                        </p>
                      </div>
                      <div className={`p-4 rounded-xl border-l-[4px] ${dark ? 'bg-white/5 border-[#FF6B35] text-white/80' : 'bg-[#FFF7F3] border-[#FF6B35] text-[#0A2540]/80'}`}>
                        <p className="text-[13.5px] leading-6 italic">
                          {lang === 'FR'
                            ? '“Je suis particulièrement intéressé par les opportunités de Technical Project Manager, Engineering Manager ou Responsable Validation dans l’automobile, l’électronique embarquée ou les environnements hybrides IT/industrie — et plus largement dans la défense, l’aéronautique et le ferroviaire.”'
                            : '"Open to Technical Project Manager, Engineering Manager or Validation Lead opportunities in automotive, embedded electronics, hybrid IT/industry environments — and broadly in defence, aerospace and rail."'}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-semibold ${dark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-[#0A2540] shadow-sm'}`}>
                        <span>🗣️</span> Arabe — maternelle
                      </div>
                      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-semibold ${dark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-[#0A2540] shadow-sm'}`}>
                        <span>🇫🇷</span> Français — maternelle
                      </div>
                      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-semibold ${dark ? 'bg-[#FF6B35] text-white border-[#FF6B35]' : 'bg-[#0A2540] text-white border-[#0A2540]'}`}>
                        <span>🇬🇧</span> Anglais — professionnel
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { title: 'MANAGEMENT', color: '#FF6B35', items: ['Management international', 'Pilotage QCD', 'Budget & Workpackage', 'Reporting KPI', 'Comités de pilotage', 'Agile/Scrum', 'Recrutement technique'] },
                      { title: 'EMBARQUÉ', color: '#00D4AA', items: ['ECU, CEM', 'Diagnostic CAN', 'Véhicules électriques/hybrides', 'HIL/MIL/PIE', 'Accès mains libres (HFM/ESCL)', 'Cycle en V'] },
                      { title: 'VALIDATION', color: '#0A2540', items: ['Codebeamer', 'Robot Framework', 'CAPL', 'GitLab CI/CD', 'Traçabilité bidirectionnelle', 'DOORS'] },
                      { title: 'ITSM', color: '#7C3AED', items: ['ServiceNow CSA', 'CMDB, SLA, ACL', 'Business Rules', 'Script Includes', 'Client Scripts', 'UI Policies', 'Service Portal', 'GenAI'] },
                      { title: 'SECTEURS', color: '#FF6B35', items: ['Automobile', 'Défense', 'Aéronautique', 'Spatiale', 'Ferroviaire'], highlight: true },
                    ].map(group => (
                      <div key={group.title} className={`rounded-2xl border p-6 ${group.highlight ? 'ring-2 ring-[#FF6B35]/20' : ''} ${dark ? 'bg-white/[0.04] border-white/10' : 'bg-[#FAFBFC] border-slate-200/70'}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-2 h-7 rounded-full" style={{ background: group.color }} />
                          <h3 className="text-[11px] font-extrabold tracking-[0.18em] opacity-70">{group.title}</h3>
                          {group.highlight && <span className="ml-auto text-[10px] font-black px-2 py-1 rounded-full bg-[#FF6B35] text-white">TRANSVERSE</span>}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map(tag => (
                            <span key={tag} className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition hover:scale-[1.02] ${group.highlight ? 'bg-[#FF6B35] text-white border-[#FF6B35]' : dark ? 'bg-white text-[#0A2540] border-white' : 'bg-white text-[#0A2540] border-slate-200 shadow-sm hover:shadow'}`}>{tag}</span>
                          ))}
                        </div>
                        {group.highlight && <p className="mt-3 text-[11px] leading-5 opacity-60">{lang === 'FR' ? 'Secteurs : Automobile · Défense · Aéronautique · Spatiale · Ferroviaire' : 'Sectors: Automotive · Defence · Aerospace · Space · Rail'}</p>}
                      </div>
                    ))}

                    <div className={`rounded-2xl p-6 text-white relative overflow-hidden ${dark ? 'bg-gradient-to-br from-[#143A62] to-[#0A2540]' : 'bg-gradient-to-br from-[#0A2540] to-[#143A62]'}`}>
                      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#00D4AA]/20 blur-2xl" />
                      <div className="relative">
                        <div className="text-xs font-bold tracking-[0.18em] opacity-70 mb-3">IMPACT CLÉ</div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-black text-[#00D4AA]">+78%</div>
                            <div className="text-[10px] font-semibold opacity-70 leading-tight">CQP progression</div>
                          </div>
                          <div className="border-x border-white/10">
                            <div className="text-2xl font-black text-white">22</div>
                            <div className="text-[10px] font-semibold opacity-70 leading-tight">Ingénieurs</div>
                          </div>
                          <div>
                            <div className="text-2xl font-black text-[#FF6B35]">4M€+</div>
                            <div className="text-[10px] font-semibold opacity-70 leading-tight">Budget</div>
                          </div>
                        </div>
                        <div className="mt-4 p-3 rounded-xl bg-white/10 backdrop-blur border border-white/10 text-xs leading-5">
                          {lang === 'FR' ? '“L’un des meilleurs taux de progression CQP de l’entité Expleo” — Comité qualité 2023' : '"One of the best CQP progression rates in Expleo entity" — Quality Board 2023'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PARCOURS */}
            <section id="parcours" className={`py-10 lg:py-14 ${dark ? 'bg-[#162032]' : 'bg-[#F3F4F6] border-t border-slate-200/60'}`}>
              <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
                <div className="text-center max-w-[720px] mx-auto mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-[#FF6B35] text-[11px] font-bold tracking-[0.18em] uppercase">02 — Expériences</div>
                  <h2 className={`mt-3 font-[Poppins] font-extrabold text-[34px] lg:text-[42px] tracking-tight ${dark ? 'text-white' : 'text-[#0A2540]'}`}>Parcours <span className="text-[#00D4AA]">.</span></h2>
                  <p className={`mt-2 text-sm leading-6 ${dark ? 'text-white/60' : 'text-slate-500'}`}>{lang === 'FR' ? '8 ans de progression continue : de l’ingénierie embarquée au pilotage transverse international.' : '8 years of continuous growth: from embedded engineering to international cross-functional leadership.'}</p>
                </div>

                <div className="relative">
                  <div className="absolute left-6 lg:left-1/2 lg:-ml-px top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B35]/40 via-[#00D4AA]/20 to-transparent hidden sm:block" />
                  <div className="space-y-6 lg:space-y-8">
                    {[
                      {
                        role: 'Team Leader / Technical Project Manager',
                        company: 'EXPLEO',
                        loc: 'Montigny-le-Bretonneux',
                        date: 'Nov. 2022 – Aujourd’hui',
                        color: '#FF6B35',
                        current: true,
                        bullets: lang === 'FR' ? [
                          'Management transverse de 22 ingénieurs sur 4 pays (France, Roumanie, Inde, Maroc) dans les systèmes embarqués automobile.',
                          'Pilotage QCD d’un workpackage > 4M€ : suivi livrables, facturation, jalons clients et maîtrise des écarts.',
                          'Amélioration du score CQP équipe de 1,8 à 3,21/4 (+78%) via matrice de compétences, plan de formation et offshoring d’activités.',
                          'Développement commercial : prospection, AVP, chiffrage d’études préliminaires et consolidation des offres techniques.',
                          'Animation des comités de pilotage mensuels ; reporting client via dashboard Excel et tickets JIRA.'
                        ] : [
                          'Cross-functional management of 22 engineers across 4 countries in automotive embedded systems.',
                          'QCD piloting of >€4M workpackage: deliverables, invoicing, customer milestones.',
                          'Improved team CQP from 1.8 to 3.21/4 (+78%) via skills matrix, training & offshoring.',
                          'Business development: prospecting, RFPs, pre-studies costing.',
                          'Monthly steering committees; client reporting via Excel dashboard & JIRA.'
                        ]
                      },
                      {
                        role: 'Leader Ingénierie Système',
                        company: 'Groupe Renault',
                        loc: 'Montigny-le-Bretonneux',
                        date: 'Juin 2021 – Oct. 2022',
                        color: '#0A2540',
                        bullets: lang === 'FR' ? [
                          "Responsable de l’architecture et de la validation du système d’accès mains libres (LF/RF, HFM, ESCL) pour véhicules de série.",
                          "Analyse des exigences système et pilotage des phases de tuning RF avec experts et fournisseurs.",
                          "Rédaction du dossier fonctionnel système et spécification des besoins MIL/HIL.",
                          "Construction du plan de validation dans ONEVAL/REVS, affectation des ressources et contrôle de maturité aux jalons.",
                          "Coordination de la validation software ECU et pilotage des campagnes HIL et actions correctives."
                        ] : [
                          "Owned architecture & validation of hands-free access system (LF/RF, HFM, ESCL) for production vehicles.",
                          "System requirements analysis & RF tuning phases with experts/suppliers.",
                          "Authored system functional dossier & MIL/HIL requirements.",
                          "Built validation plan in ONEVAL/REVS, resource allocation & maturity gates.",
                          "Coordinated ECU software validation & HIL campaigns."
                        ]
                      },
                      {
                        role: 'Leader Ingénierie Validation',
                        company: 'Groupe Renault',
                        loc: 'Montigny-le-Bretonneux',
                        date: 'Mars 2020 – Mai 2021',
                        color: '#00D4AA',
                        bullets: lang === 'FR' ? [
                          "Stratégie et industrialisation de la validation des systèmes embarqués.",
                          "Rédaction des cas de test dans Codebeamer et traçabilité bidirectionnelle exigences ↔ tests ↔ résultats.",
                          "Industrialisation par automatisation : Robot Framework, HLK/LLK, CAPL, GitLab CI/CD.",
                          "Préparation et lancement des campagnes de validation ; suivi de l’avancement, couverture et résolution des anomalies."
                        ] : [
                          "Strategy & industrialization of embedded systems validation.",
                          "Test cases in Codebeamer with bi-directional traceability.",
                          "Automation: Robot Framework, HLK/LLK, CAPL, GitLab CI/CD.",
                          "Campaign preparation, coverage tracking & defect resolution."
                        ]
                      },
                      {
                        role: 'Pilote Développement Électronique',
                        company: 'Groupe Renault',
                        loc: 'Montigny-le-Bretonneux',
                        date: 'Mars 2019 – Mars 2020',
                        color: '#0A2540',
                        bullets: lang === 'FR' ? [
                          "Pilotage du développement du calculateur HFM (Hands-Free Module) avec le fournisseur.",
                          "Cadrage des exigences client et consolidation du dossier fournisseur (SOW, matrices de conformité).",
                          "Supervision des livrables hardware (schémas, BOM, connectique, fiabilité) et software (architecture SW, messagerie CAN, diagnostic).",
                          "Pilotage des validations SW, HIL/PIE, CEM et environnement ; traitement des écarts jusqu’à homologation."
                        ] : [
                          "Led HFM (Hands-Free Module) ECU development with supplier.",
                          "Framed customer requirements & supplier dossier (SOW, compliance matrices).",
                          "Supervised HW (schematics, BOM) & SW deliverables (SW architecture, CAN, diagnostics).",
                          "Drove SW, HIL/PIE, EMC validations to homologation."
                        ]
                      },
                      {
                        role: 'Ingénieur Systèmes Embarqués',
                        company: 'SDEC France',
                        loc: 'Reignac-sur-Indre',
                        date: 'Mars 2018 – Fév. 2019',
                        color: '#64748B',
                        bullets: lang === 'FR' ? [
                          "Conception et développement d’un dispositif embarqué de mesure de l’infiltration de l’eau en temps réel.",
                          "Développement en langage C du calcul de la vitesse d’infiltration, affichage et enregistrement temps réel.",
                          "Tests unitaires et système, analyse des résultats et rapports de validation pour passage en production."
                        ] : [
                          "Design of embedded water infiltration real-time measurement device.",
                          "C development for infiltration speed calculation & logging.",
                          "Unit & system tests, validation reports for production."
                        ]
                      },
                    ].map((exp, idx) => (
                      <div key={idx} className={`relative flex flex-col lg:flex-row gap-6 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="hidden sm:flex absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-[14px] h-[14px] rounded-full border-[3px] shadow-md items-center justify-center z-10" style={{ background: exp.color, top: '28px', borderColor: '#162032' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <div className="hidden lg:block flex-1" />
                        <div className={`flex-1 sm:ml-12 lg:ml-0 rounded-2xl border p-6 lg:p-7 pl-7 lg:pl-7 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition ${dark ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-slate-200/70'} ${exp.current ? 'ring-2 ring-[#FF6B35]/20' : ''}`}>
                          {exp.current && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF6B35] text-white text-[10px] font-bold tracking-widest uppercase mb-3">● Poste actuel</span>}
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <h3 className={`text-[16px] font-extrabold leading-tight ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{exp.role}</h3>
                            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${dark ? 'bg-white/10 border-white/15 text-white' : 'bg-[#F3F4F6] border-slate-200 text-slate-600'}`}>{exp.date}</span>
                          </div>
                          <div className="mt-1 text-[13px] font-semibold italic" style={{ color: exp.color }}>{exp.company} — {exp.loc}</div>
                          <ul className={`mt-4 space-y-2 text-[13.5px] leading-6 ${dark ? 'text-white/75' : 'text-slate-600'}`}>
                            {exp.bullets.map((b, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="mt-[9px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* PROJETS */}
            <section id="projets" className={`py-10 lg:py-14 ${dark ? 'bg-[#162032]' : 'bg-white'}`}>
              <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/20 text-[#00D4AA] text-[11px] font-bold tracking-[0.18em] uppercase">03 — Réalisations</div>
                    <h2 className={`mt-3 font-[Poppins] font-extrabold text-[32px] lg:text-[40px] leading-none tracking-tight ${dark ? 'text-white' : 'text-[#0A2540]'}`}>
                      Projets & Expertise <span className="text-[#FF6B35]">.</span>
                    </h2>
                    <p className={`mt-2 text-sm ${dark ? 'text-white/60' : 'text-slate-500'}`}>{lang === 'FR' ? 'Retours d’expérience techniques détaillés — preuves, livrables, résultats.' : 'Detailed technical case studies — proof, deliverables, outcomes.'}</p>
                  </div>
                  <div className={`hidden lg:flex items-center gap-2 text-xs ${dark ? 'text-white/50' : 'text-slate-400'}`}>
                    <span>●</span> {lang === 'FR' ? 'Cliquez sur une carte pour voir le détail complet' : 'Click a card to see full details'}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                  {[
                    {
                      title: "Architecture & Validation — Système d’Accès Mains Libres ST",
                      tags: ["#IngénierieSystème", "#HFM", "#ESCL", "#VSA", "#Renault"],
                      resume: "Pilotage de l’architecture fonctionnelle et de la validation d’un système d’accès mains libres complet (LF/RF, HFM, ESCL, VSA) couvrant 20+ fonctions pour véhicules de série.",
                      accent: "#0A2540",
                      icon: "🔐",
                      secteur: "Automobile",
                      imageLabel: "ST System",
                      metrics: ["20+ fonctions", "Alliance Renault", "LF/RF • HFM • ESCL"],
                    },
                    {
                      title: "Industrialisation des Tests — Automatisation & CI/CD",
                      tags: ["#RobotFramework", "#CAPL", "#GitLab", "#ValidationAutomatique"],
                      resume: "Mise en place d’une chaîne d’automatisation complète pour les campagnes de validation ECU, de la génération des tests LLK au lancement des pipelines.",
                      accent: "#00D4AA",
                      icon: "⚙️",
                      secteur: "Transversal",
                      imageLabel: "CI/CD Pipeline",
                      metrics: ["HLK/LLK → Robot", "GitLab CI/CD", "CAPL Automation"],
                    },
                    {
                      title: "ServiceNow ITSM — Conception & Livraison Incident Management",
                      tags: ["#ServiceNow", "#ITSM", "#ServicePortal", "#CSA"],
                      resume: "Projet end-to-end de mise en œuvre d’un processus Incident Management sur ServiceNow : du cahier des charges à la documentation de rollback.",
                      accent: "#7C3AED",
                      icon: "🎫",
                      badge: "PROJET PHARE",
                      secteur: "ITSM / Transversal",
                      imageLabel: "ServiceNow ITSM",
                      metrics: ["30+ tests PVAL", "10 livrables", "Zero bug bloquant"],
                    },
                    {
                      title: "Pilotage Fournisseur — Calculateur HFM (Hands-Free Module)",
                      tags: ["#ECU", "#SupplierManagement", "#CAN", "#Diagnostic"],
                      resume: "Pilotage complet du développement d’un calculateur HFM : exigences, livrables hardware/software, validation et intégration véhicule.",
                      accent: "#FF6B35",
                      icon: "🔧",
                      secteur: "Automobile",
                      imageLabel: "ECU HFM",
                      metrics: ["SOW • BOM • CAN", "DDT2000 • GCC", "Homologation"],
                    },
                    {
                      title: "Tableau de Bord QCD — Pilotage Projet & Équipe",
                      tags: ["#Management", "#KPI", "#QCD", "#Excel"],
                      resume: "Conception et animation d’un tableau de bord de pilotage QCD pour le suivi mensuel de l’activité, la facturation et la performance d’équipe.",
                      accent: "#0A2540",
                      icon: "📊",
                      secteur: "Management",
                      imageLabel: "Dashboard QCD",
                      metrics: ["22 pers. multi-sites", "JIRA + Excel", "Comité mensuel client"],
                    },
                    {
                      title: "Ingénierie Système Transverse — Défense & Aéronautique",
                      tags: ["#ISO26262", "#DO178C", "#EN50128", "#Transversal"],
                      resume: "Expertise transposable : cycle en V, traçabilité et sûreté de fonctionnement — du calculateur automobile aux systèmes aéronautiques et ferroviaires.",
                      accent: "#7C3AED",
                      icon: "✈️",
                      secteur: "Défense · Aéronautique · Ferroviaire",
                      imageLabel: "Transverse",
                      metrics: ["ISO26262", "DO-178C", "EN50128"],
                    },
                  ].map((proj, idx) => (
                    <article key={idx} onClick={() => idx === 5 ? navigate('blog') : setActiveProject(idx)} className={`group relative rounded-[22px] border overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 ${dark ? 'bg-[#151E32] border-[#1E293B] shadow-[0_8px_24px_rgba(0,0,0,0.3)]' : 'bg-white border-slate-200/70 shadow-[0_6px_24px_rgba(0,0,0,0.05)]'}`}>
                      {proj.badge && <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-[#FF6B35] text-white text-[10px] font-black tracking-widest shadow-lg">{proj.badge}</div>}
                      <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[#0A2540] text-[10px] font-black tracking-widest border border-white/20 shadow-lg">◼ {proj.secteur}</div>
                      <div className="h-[220px] relative overflow-hidden group-hover:scale-[1.01] transition duration-500" style={{ background: `linear-gradient(135deg, ${proj.accent} 0%, #0f172a 100%)` }}>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-xl mb-3">{proj.icon}</div>
                          <div className="text-white/90 text-[11px] font-bold tracking-[0.16em] uppercase">{proj.imageLabel}</div>
                          <div className="mt-3 w-full max-w-[260px] mx-auto">
                            {idx === 0 && (
                              <div className="bg-white/95 rounded-lg p-2 text-left shadow-lg">
                                <div className="text-[9px] font-bold tracking-widest text-slate-500 mb-1.5">ST FUNCTIONS</div>
                                <div className="grid grid-cols-2 gap-1 text-[8px] font-semibold leading-tight">
                                  {["Easy Trunk Access", "Handfree Access", "RKE_HFM-BCM", "ESCL", "VSA", "MMI", "Doorlock", "Gateway Addon"].map(f => (
                                    <div key={f} className="px-1.5 py-1 rounded bg-slate-100 text-slate-700 truncate">{f}</div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {idx === 1 && (
                              <div className="flex items-center justify-between gap-1">
                                {["GitLab", "CAPL", "Robot", "Report"].map((s) => (
                                  <div key={s} className="flex-1 flex flex-col items-center gap-1">
                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[10px] shadow">▣</div>
                                    <span className="text-[8px] font-bold text-white">{s}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            {idx === 2 && (
                              <div className="bg-white rounded-lg overflow-hidden shadow-lg text-left">
                                <div className="h-6 bg-[#0A2540] flex items-center px-2 gap-1">
                                  <span className="w-2 h-2 rounded-full bg-red-400" /> <span className="w-2 h-2 rounded-full bg-yellow-400" /> <span className="w-2 h-2 rounded-full bg-green-400" />
                                  <span className="ml-2 text-[8px] font-bold text-white tracking-widest">INCIDENT · Service Portal</span>
                                </div>
                                <div className="p-2 grid grid-cols-3 gap-1">
                                  <div className="col-span-2 space-y-1">
                                    <div className="h-2 rounded bg-slate-200 w-full" />
                                    <div className="h-2 rounded bg-slate-100 w-5/6" />
                                    <div className="flex gap-1"><span className="h-4 px-2 rounded-full bg-[#00D4AA] text-white text-[7px] font-bold flex items-center">P1 SLA</span><span className="h-4 px-2 rounded-full bg-[#FF6B35] text-white text-[7px] font-bold flex items-center">VIP</span></div>
                                  </div>
                                  <div className="bg-slate-50 rounded p-1">
                                    <div className="text-[7px] font-bold text-slate-500">STATS</div>
                                    <div className="mt-1 space-y-1">
                                      <div className="h-1.5 rounded bg-[#00D4AA]" style={{ width: '80%' }} />
                                      <div className="h-1.5 rounded bg-[#FF6B35]" style={{ width: '60%' }} />
                                      <div className="h-1.5 rounded bg-[#0A2540]" style={{ width: '90%' }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {idx === 3 && (
                              <div className="bg-white/95 rounded-lg p-3 flex gap-3 items-center shadow-lg">
                                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center text-white text-[10px] font-bold">ECU<br />HFM</div>
                                <div className="flex-1 text-left">
                                  <div className="text-[10px] font-bold text-slate-800">HFM Module v2.1</div>
                                  <div className="mt-1 flex gap-1"><span className="px-1.5 py-0.5 rounded bg-[#00D4AA] text-white text-[7px] font-bold">CAN</span><span className="px-1.5 py-0.5 rounded bg-[#FF6B35] text-white text-[7px] font-bold">DIAG</span><span className="px-1.5 py-0.5 rounded bg-slate-800 text-white text-[7px] font-bold">CEM</span></div>
                                  <div className="mt-1 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden"><div className="h-full bg-[#00D4AA] w-[78%]" /></div>
                                </div>
                              </div>
                            )}
                            {idx === 4 && (
                              <div className="bg-white rounded-lg p-2 shadow-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-[9px] font-black tracking-widest text-slate-500">QCD DASHBOARD</span>
                                  <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500 text-white font-bold">● LIVE</span>
                                </div>
                                <div className="grid grid-cols-3 gap-1 mb-2">
                                  {[{ k: 'Budget', v: '4.2M€' }, { k: 'CQP', v: '3.21' }, { k: 'OTD', v: '96%' }].map(m => (
                                    <div key={m.k} className="bg-slate-50 rounded p-1.5 text-center">
                                      <div className="text-[8px] font-bold text-slate-500">{m.k}</div>
                                      <div className="text-[11px] font-black text-[#0A2540]">{m.v}</div>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex gap-1">
                                  <div className="flex-1 h-6 rounded bg-[#0A2540] flex items-end justify-around p-1">
                                    {[40, 70, 45, 85, 60].map((h, i3) => <div key={i3} className="w-1.5 rounded-sm bg-[#00D4AA]" style={{ height: `${h}%` }} />)}
                                  </div>
                                  <div className="flex-1 h-6 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-[7px] font-bold text-slate-500">JIRA • Excel</div>
                                </div>
                              </div>
                            )}
                            {idx === 5 && (
                              <div className="bg-white/95 rounded-lg p-2.5 shadow-lg">
                                <div className="grid grid-cols-3 gap-1.5 text-[7px] font-bold">
                                  {[
                                    { n: 'ISO 26262', c: 'Auto', d: '#FF6B35' },
                                    { n: 'DO-178C', c: 'Aéro', d: '#0A2540' },
                                    { n: 'EN 50128', c: 'Ferro', d: '#00D4AA' }
                                  ].map(x => (
                                    <div key={x.n} className="rounded-lg p-2 text-center border" style={{ background: x.d, color: 'white' }}>
                                      <div className="font-black text-[8px]">{x.n}</div>
                                      <div className="opacity-80">{x.c}</div>
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-2 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                                  <div className="h-full w-full bg-gradient-to-r from-[#FF6B35] via-[#0A2540] to-[#00D4AA]" />
                                </div>
                                <div className="mt-1 text-[7px] font-bold text-slate-500 text-center tracking-widest">V-CYCLE · TRACABILITÉ · SIL/ASIL</div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                          <h4 className="text-white font-extrabold text-[13px] leading-tight line-clamp-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">{proj.title}</h4>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className={`text-[15px] font-extrabold leading-tight line-clamp-2 ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{proj.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {proj.tags.map(tag => (
                            <span key={tag} className={`text-[10px] font-bold px-2 py-1 rounded-full border ${dark ? 'bg-white/10 border-white/10 text-white/80' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>{tag}</span>
                          ))}
                        </div>
                        <p className={`mt-3 text-[13px] leading-6 line-clamp-3 ${dark ? 'text-white/70' : 'text-slate-600'}`}>{proj.resume}</p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {proj.metrics.map(m => (
                            <span key={m} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${dark ? 'bg-white text-[#0A2540]' : 'bg-[#0A2540] text-white'}`}>{m}</span>
                          ))}
                        </div>
                        <div className="mt-5 flex items-center gap-2 text-[12px] font-bold text-[#FF6B35] group-hover:gap-3 transition-all">
                          {idx === 5 ? 'Découvrir l’article →' : 'Voir le détail →'}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className={`mt-8 rounded-2xl border p-5 flex flex-col lg:flex-row items-center justify-between gap-4 ${dark ? 'bg-white/5 border-white/10' : 'bg-[#F8FFFE] border-[#00D4AA]/20'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00D4AA] flex items-center justify-center text-white">📁</div>
                    <div>
                      <div className={`text-sm font-bold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>Package de livraison ServiceNow complet</div>
                      <div className={`text-xs ${dark ? 'text-white/60' : 'text-slate-500'}`}>10 documents + XML — Release Note, PVAL, Technical Guide, Rollback, Portal, Dashboard, Matrice CDC</div>
                    </div>
                  </div>
                  <button onClick={() => showComingSoon('Package complet disponible sur demande — me contacter')} className="px-5 py-2.5 rounded-full bg-[#0A2540] text-white text-sm font-bold hover:bg-black transition whitespace-nowrap">
                    📁 Demander le package
                  </button>
                </div>
              </div>
            </section>

            {/* CERTIFICATIONS */}
            <section id="certifications" className={`py-10 lg:py-14 ${dark ? 'bg-[#162032]' : 'bg-[#F3F4F6] border-y border-slate-200/60'}`}>
              <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-[#FF6B35] uppercase">04 — Certifications</span>
                  <div className="h-px flex-1 bg-slate-200/60" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
                  <div>
                    <h2 className={`font-[Poppins] font-extrabold text-[30px] lg:text-[38px] tracking-tight ${dark ? 'text-white' : 'text-[#0A2540]'}`}>Certifications vérifiables <span className="text-[#00D4AA]">.</span></h2>
                    <p className={`mt-2 text-sm ${dark ? 'text-white/60' : 'text-slate-500'}`}>Chaque certification est vérifiable en un clic — transparence totale.</p>
                  </div>
                  <div className={`text-xs px-3 py-1.5 rounded-full border ${dark ? 'border-white/10 text-white/60' : 'border-slate-200 text-slate-500 bg-white'}`}>9 certifications · ServiceNow · Leadership · Développement</div>
                </div>

                <div className="grid lg:grid-cols-[1.6fr_0.4fr] gap-8">
                  <div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { title: 'ServiceNow Certified System Administrator (CSA)', platform: 'ServiceNow', icon: 'SN', color: '#03874C', link: null, subtitle: 'Certification officielle ServiceNow', highlight: true },
                        { title: 'The Complete Guide to ServiceNow GenAI & Agentic AI', platform: 'Udemy', icon: 'U', color: '#A435F0', link: 'https://www.udemy.com/certificate/UC-b65b9ed2-c990-483a-94d2-674f64d3bfe5/', subtitle: 'Udemy • Vérifier →', highlight: false },
                        { title: 'Master ServiceNow Admin & Development from Basic to Pro', platform: 'Udemy', icon: 'U', color: '#A435F0', link: 'https://www.udemy.com/certificate/UC-52b4c89c-95d0-4d93-b203-2854114518d2/', subtitle: 'Udemy • Vérifier →' },
                        { title: 'Selenium WebDriver with Java for Beginners', platform: 'Udemy', icon: 'U', color: '#A435F0', link: 'https://www.udemy.com/certificate/UC-1e6facf0-d3e3-416e-ba07-6aeb84bf5bae/', subtitle: 'Udemy • Vérifier →' },
                        { title: 'Art of Leadership: Authentic Influence & Leading from Within', platform: 'Udemy', icon: 'U', color: '#A435F0', link: 'https://www.udemy.com/certificate/UC-e84cea2d-4ccc-44b5-88a3-855b5c65b082/', subtitle: 'Udemy • Vérifier →' },
                        { title: 'Découvrir les méthodes agiles pour le développement logiciel', platform: 'LinkedIn Learning', icon: 'in', color: '#0077B5', link: 'https://www.linkedin.com/learning/certificates/90a212db62ea41481a77e031cdb9c454c454e7004ed99d21af5b00da940520c7', subtitle: 'LinkedIn Learning • Vérifier →' },
                        { title: "L'essentiel de Java", platform: 'LinkedIn Learning', icon: 'in', color: '#0077B5', link: 'https://www.linkedin.com/learning/certificates/1a303da902cfaa1c3c1b8a9cd7d7b065eb27997fb2d51d89aa5ac763b6cd3e8e', subtitle: 'LinkedIn Learning • Vérifier →' },
                        { title: 'Team Leader Fundamentals Professional Certificate', platform: 'Udemy', icon: 'U', color: '#A435F0', link: 'https://www.udemy.com/certificate/UC-c3398a0b-5f2e-4ac3-89ee-2135632edee6/', subtitle: 'Udemy • Vérifier →' },
                        { title: 'Développer son intelligence émotionnelle', platform: 'LinkedIn Learning', icon: 'in', color: '#0077B5', link: 'https://www.linkedin.com/learning/certificates/9d81bd46e036148e04e25b9162c8df55ca214054c3c5521a965faecc72fe0b07', subtitle: 'LinkedIn Learning • Vérifier →' },
                      ].map((c, i) => {
                        const CardInner = (
                          <>
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0 font-black text-xs" style={{ background: c.color }}>{c.icon}</div>
                            <div className="min-w-0 flex-1">
                              <div className={`text-[13px] font-bold leading-tight line-clamp-2 ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{c.title}</div>
                              <div className={`text-xs mt-1 flex items-center gap-1 ${c.link ? 'text-[#0077B5] font-semibold' : 'text-slate-500'}`}>
                                {c.subtitle} {c.link && <span>↗</span>}
                              </div>
                              <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border" style={{ background: `${c.color}14`, borderColor: `${c.color}30`, color: c.color }}>{c.platform}</div>
                            </div>
                          </>
                        )
                        return c.link ? (
                          <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className={`relative rounded-2xl border p-5 flex gap-4 hover:shadow-xl hover:-translate-y-0.5 hover:border-[#00D4AA]/30 transition group ${dark ? 'bg-[#151E32] border-[#1E293B]' : 'bg-white border-slate-200 shadow-sm'} ${c.highlight ? 'ring-2 ring-[#03874C]/20' : ''}`}>
                            {c.highlight && <span className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-[#03874C] text-white text-[9px] font-black tracking-widest">CSA</span>}
                            {CardInner}
                          </a>
                        ) : (
                          <div key={i} className={`relative rounded-2xl border p-5 flex gap-4 ${dark ? 'bg-[#151E32] border-[#1E293B]' : 'bg-white border-slate-200 shadow-sm'} ${c.highlight ? 'ring-2 ring-[#03874C]/20' : ''}`}>
                            {c.highlight && <span className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-[#03874C] text-white text-[9px] font-black tracking-widest">CSA</span>}
                            {CardInner}
                          </div>
                        )
                      })}
                    </div>

                    <div className={`mt-6 rounded-2xl border p-6 flex gap-4 items-center ${dark ? 'bg-[#151E32] border-[#1E293B]' : 'bg-white border-slate-200'}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] flex items-center justify-center text-white font-black text-xs">POLYTECH</div>
                      <div>
                        <div className={`text-sm font-extrabold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>Diplôme d’Ingénieur – Électronique et Systèmes Embarqués</div>
                        <div className="text-xs text-slate-500">École Polytechnique de l’Université de Tours • 2015 — 2018</div>
                      </div>
                      <span className={`ml-auto hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-bold border ${dark ? 'border-white/20 text-white' : 'border-slate-200 text-slate-600'}`}>BAC+5</span>
                    </div>
                  </div>

                  <div className={`rounded-2xl p-6 ${dark ? 'bg-[#151E32] border border-[#1E293B]' : 'bg-white border border-slate-200 shadow-sm'}`}>
                    <div className="text-[11px] font-bold tracking-[0.18em] text-[#FF6B35] uppercase mb-4">En chiffres</div>
                    <div className="space-y-4">
                      {[
                        { k: 'Certifications vérifiables', v: '6', sub: 'Liens directs Udemy & LinkedIn' },
                        { k: 'ServiceNow', v: '3', sub: 'CSA + GenAI + Master' },
                        { k: 'Leadership & Management', v: '2', sub: 'Team Leader + Art of Leadership' },
                        { k: 'Formation initiale', v: 'BAC+5', sub: 'Polytech Tours 2015-2018' },
                      ].map(item => (
                        <div key={item.k} className={`flex items-center justify-between py-3 border-b last:border-0 ${dark ? 'border-white/5' : 'border-slate-100'}`}>
                          <div>
                            <div className={`text-xs font-bold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{item.k}</div>
                            <div className="text-[11px] text-slate-500">{item.sub}</div>
                          </div>
                          <div className="text-lg font-black text-[#00D4AA]">{item.v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-3 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-xs leading-5 text-[#7A2E0E] dark:text-white/80">
                      🎯 <span className="font-bold">Objectif 2026 :</span> {lang === 'FR' ? 'Certification ServiceNow CIS + Spécialisation cybersécurité embarquée.' : 'ServiceNow CIS Certification + Embedded Cybersecurity.'}
                    </div>
                    <button onClick={() => navigate('blog')} className="mt-4 w-full py-2.5 rounded-xl bg-[#0A2540] text-white text-sm font-bold hover:bg-black transition">📚 Voir les articles techniques →</button>
                  </div>
                </div>
              </div>
            </section>

            {/* STACK */}
            <section id="stack" className={`py-10 lg:py-14 ${dark ? 'bg-[#162032]' : 'bg-white'}`}>
              <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2540]/5 border border-[#0A2540]/10 text-[#0A2540] text-[11px] font-bold tracking-[0.18em] uppercase dark:bg-white/10 dark:text-white dark:border-white/15">05 — Stack Technique</div>
                  <h2 className={`mt-4 font-[Poppins] font-extrabold text-[32px] lg:text-[40px] tracking-tight ${dark ? 'text-white' : 'text-[#0A2540]'}`}>Outils & Technologies<span className="text-[#00D4AA]">.</span></h2>
                  <p className={`mt-3 text-sm ${dark ? 'text-white/60' : 'text-slate-500'}`}>Un écosystème complet : de la validation bas niveau au Service Portal, du CAN à la GenAI.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {[
                    { title: 'VALIDATION', icon: '🧪', color: '#FF6B35', items: ['Codebeamer', 'Robot Framework', 'CAPL', 'GitLab', 'Builder', 'ONEVAL', 'REVS'] },
                    { title: 'SYSTÈME & PROJET', icon: '📐', color: '#0A2540', items: ['DOORS', 'Jira', 'eCLEM', 'SBM', 'GCC', 'MS Office', 'Agile/Scrum'] },
                    { title: 'AUTOMOBILE', icon: '🚗', color: '#00D4AA', items: ['DDT2000', 'CANalyzer', 'WOW', 'Diagnostic CAN', 'CEM', 'HIL/MIL/PIE'] },
                    { title: 'DÉVELOPPEMENT', icon: '💻', color: '#64748B', items: ['C', 'Java', 'Visual Studio', 'Eclipse', 'mikroC', 'Maven', 'Proteus'] },
                    { title: 'SERVICENOW', icon: '☁️', color: '#7C3AED', items: ['ITSM', 'CMDB', 'SLA', 'ACL', 'Business Rules', 'Client Scripts', 'UI Policies', 'Script Includes', 'UI Actions', 'Service Portal', 'Reports', 'Dashboards', 'Update Sets', 'GenAI'], span: 'lg:col-span-2' },
                  ].map(cat => (
                    <div key={cat.title} className={`rounded-2xl border p-6 ${cat.span || ''} ${dark ? 'bg-[#151E32] border-[#1E293B]' : 'bg-[#FAFBFC] border-slate-200/70'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm" style={{ background: cat.color }}>{cat.icon}</div>
                        <h3 className="text-[11px] font-black tracking-[0.18em] opacity-70">{cat.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map(item => (
                          <span key={item} className={`px-3 py-1.5 rounded-full text-xs font-semibold border hover:scale-[1.03] transition ${dark ? 'bg-white text-[#0A2540] border-white' : 'bg-white border-slate-200 text-[#0A2540] shadow-sm'}`}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#0A2540] via-[#0F335A] to-[#0A2540] p-[1px]">
                  <div className={`rounded-2xl px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-4 ${dark ? 'bg-[#0A2540]' : 'bg-[#0A2540]'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00D4AA] flex items-center justify-center text-white">⚡</div>
                      <div>
                        <div className="text-white text-sm font-bold">Cycle en V maîtrisé de bout en bout</div>
                        <div className="text-white/60 text-xs">Exigences → Développement fournisseur → Intégration → Validation HIL/PIE → Homologation → ITSM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">8 ans</span>
                      <span className="px-3 py-1.5 rounded-full bg-[#FF6B35]">ECU • CAN • ServiceNow</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className={`py-10 lg:py-14 ${dark ? 'bg-[#162032]' : 'bg-[#F3F4F6] border-t border-slate-200/60'}`}>
              <div className="mx-auto max-w-[900px] px-6 lg:px-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B35]">06 — Contact</div>
                  <h2 className={`mt-4 font-[Poppins] text-[32px] font-extrabold leading-none tracking-tight lg:text-[42px] ${dark ? 'text-white' : 'text-[#0A2540]'}`}>
                    {lang === 'FR' ? 'Échangeons directement' : 'Let’s talk directly'}<span className="text-[#00D4AA]">.</span>
                  </h2>
                  <p className={`mx-auto mt-4 max-w-[680px] text-[14px] leading-7 ${dark ? 'text-white/70' : 'text-slate-600'}`}>
                    {lang === 'FR' ? 'Pour une opportunité ou un échange professionnel, contactez-moi directement sur LinkedIn ou par téléphone.' : 'For an opportunity or a professional conversation, contact me directly on LinkedIn or by phone.'}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a href="tel:+33770471058" className={`group flex min-w-0 items-center gap-4 rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${dark ? 'border-[#1E293B] bg-[#151E32]' : 'border-slate-200 bg-white'}`}>
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#FF6B35] text-white transition group-hover:scale-105">📞</span>
                    <span className="min-w-0">
                      <span className={`block text-xs font-bold tracking-widest opacity-60 ${dark ? 'text-white' : 'text-slate-500'}`}>{lang === 'FR' ? 'TÉLÉPHONE' : 'PHONE'}</span>
                      <span className={`text-sm font-semibold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>07 70 47 10 58</span>
                    </span>
                    <span className="ml-auto flex-shrink-0 text-slate-400 transition group-hover:text-[#FF6B35]">→</span>
                  </a>
                  <a href="https://www.linkedin.com/in/taoufik-g-387964129/" target="_blank" rel="noopener noreferrer" className={`group flex min-w-0 items-center gap-4 rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${dark ? 'border-[#1E293B] bg-[#151E32]' : 'border-slate-200 bg-white'}`}>
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0077B5] font-bold text-white transition group-hover:scale-105">in</span>
                    <span className="min-w-0">
                      <span className={`block text-xs font-bold tracking-widest opacity-60 ${dark ? 'text-white' : 'text-slate-500'}`}>LINKEDIN</span>
                      <span className={`block truncate text-sm font-semibold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>linkedin.com/in/taoufik-g-387964129</span>
                    </span>
                    <span className="ml-auto flex-shrink-0 text-slate-400 transition group-hover:text-[#0077B5]">↗</span>
                  </a>
                </div>

                <div className={`mx-auto mt-6 flex max-w-[680px] items-center justify-center gap-3 rounded-xl border p-3 text-center ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">✓</span>
                  <span className={`text-xs leading-5 ${dark ? 'text-white/70' : 'text-slate-600'}`}>{lang === 'FR' ? 'Disponible pour des opportunités en hybride ou remote partiel · Préavis selon mission.' : 'Available for hybrid or partially remote opportunities · Notice depends on the assignment.'}</span>
                </div>
              </div>
            </section>
          </>
        )}

        {/* BLOG LIST PAGE */}
        {currentView === 'blog' && (
          <section className={`pt-28 pb-20 min-h-[70vh] ${dark ? 'bg-[#162032]' : 'bg-[#F3F4F6]'}`}>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-[#FF6B35] text-[11px] font-bold tracking-[0.18em] uppercase">Blog Technique</div>
                  <h1 className={`mt-4 font-[Poppins] font-extrabold text-[36px] lg:text-[44px] leading-none tracking-tight ${dark ? 'text-white' : 'text-[#0A2540]'}`}>
                    Articles & Retours d’expérience<span className="text-[#00D4AA]">.</span>
                  </h1>
                  <p className={`mt-3 text-sm leading-6 max-w-[720px] ${dark ? 'text-white/60' : 'text-slate-500'}`}>
                    Systèmes embarqués critiques, ServiceNow ITSM, management international et ingénierie système transverse — <span className="font-semibold text-[#0A2540] dark:text-white">automobile, défense, aéronautique, ferroviaire et spatial.</span>
                  </p>
                </div>
                <div className={`hidden lg:flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border ${dark ? 'border-[#334155] text-[#94A3B8] bg-[#1e293b]' : 'border-slate-200 text-slate-500 bg-white'}`}>
                  📝 33 articles · Ingénierie technique · Management
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Tous', 'Validation & Test', 'ServiceNow & ITSM', 'Management', 'Ingénierie Système', 'Outils'].map(cat => (
                  <span key={cat} className={`px-3 py-1.5 rounded-full text-xs font-bold border ${cat === 'Tous' ? 'bg-[#0A2540] text-white border-[#0A2540]' : dark ? 'bg-white/5 border-white/10 text-white/70' : 'bg-white border-slate-200 text-slate-600'}`}>{cat}</span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                {sortedArticles.map((article) => (
                  <article key={article.slug} onClick={() => navigate('article', article.slug)} className={`group rounded-[22px] border overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col ${dark ? 'bg-[#151E32] border-[#1E293B] shadow-[0_8px_24px_rgba(0,0,0,0.3)]' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <div className="h-[188px] relative overflow-hidden rounded-t-[22px]" style={{ background: `linear-gradient(135deg, ${article.categoryColor} 0%, #0B1120 100%)` }}>
                      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)`, backgroundSize: '26px 26px' }} />
                      <SafeBlogImage src={article.image} alt={article.imageAlt} categoryColor={article.categoryColor} icon={article.category.includes('Validation') ? '🧪' : article.category.includes('ServiceNow') ? '☁️' : article.category.includes('Management') ? '👥' : article.category.includes('Ingénierie') ? '📐' : article.category.includes('Réglementation') ? '📋' : article.category.includes('Cybersécurité') ? '🛡️' : article.category.includes('Outils') ? '🛠️' : '⚡'} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white text-[#0A2540] text-[10px] font-black tracking-widest border border-slate-200 shadow">{article.category}</div>
                      <div className="absolute bottom-0 inset-x-0 p-4">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur border border-white/15 text-white text-[11px] font-semibold">
                          <span>📅</span> {article.date} <span className="opacity-50">•</span> {article.readTime}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className={`text-[16px] font-extrabold leading-tight line-clamp-2 group-hover:text-[#FF6B35] transition ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{article.title}</h2>
                      <p className={`mt-3 text-[13px] leading-6 line-clamp-3 flex-1 ${dark ? 'text-white/65' : 'text-slate-600'}`}>{article.summary}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-[12px] font-bold text-[#FF6B35] group-hover:gap-2 flex items-center gap-1 transition-all">Lire l'article <span>→</span></span>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${dark ? 'border-[#334155] text-[#94A3B8]' : 'border-slate-200 text-slate-500'}`}>{article.keywords.split(',')[0].trim()}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className={`mt-12 rounded-2xl border p-6 flex flex-col lg:flex-row items-center justify-between gap-4 ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
                <div>
                  <div className={`text-sm font-bold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>Vous souhaitez discuter d'un projet transverse ?</div>
                  <div className={`text-xs ${dark ? 'text-white/60' : 'text-slate-500'}`}>Automobile · Défense · Aéronautique · Ferroviaire · Spatial — parlons cycle en V et ITSM.</div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => navigate('home')} className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-[#0A2540] text-sm font-bold hover:bg-slate-50">Voir mon profil →</button>
                  <button onClick={() => { navigate('home'); setTimeout(() => scrollToId('contact'), 200) }} className="px-5 py-2.5 rounded-full bg-[#FF6B35] text-white text-sm font-bold hover:bg-[#E85F2E]">Me contacter</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ARTICLE PAGE */}
        {currentView === 'article' && selectedArticle && (
          <section className={`pt-28 pb-20 min-h-[70vh] ${dark ? 'bg-[#162032]' : 'bg-[#F3F4F6]'}`}>
            <div className="max-w-[860px] mx-auto px-6 lg:px-8">
              <button onClick={() => navigate('blog')} className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border mb-6 hover:shadow transition ${dark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-[#0A2540]'}`}>← Retour au blog</button>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-white text-[11px] font-black tracking-widest" style={{ background: selectedArticle.categoryColor }}>{selectedArticle.category}</span>
                <span className={`text-xs ${dark ? 'text-white/50' : 'text-slate-500'}`}>Publié le <time dateTime={selectedArticle.dateISO}>{selectedArticle.date}</time> • {selectedArticle.readTime} de lecture</span>
                <span className={`ml-auto text-[10px] font-bold px-2 py-1 rounded-full border ${dark ? 'border-[#334155] text-[#94A3B8] bg-[#1e293b]' : 'border-slate-200 text-slate-500 bg-white'}`}>{selectedArticle.keywords.split(',').slice(0, 2).join(', ')}</span>
              </div>

              <h1 className={`font-[Poppins] font-extrabold text-[28px] lg:text-[36px] leading-[1.05] tracking-tight ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{selectedArticle.title}</h1>
              <p className={`mt-4 text-[15px] leading-7 ${dark ? 'text-white/70' : 'text-slate-600'}`}>{selectedArticle.summary}</p>

              <div className="mt-8 rounded-[20px] overflow-hidden border shadow-lg" style={{ borderColor: dark ? 'rgba(255,255,255,0.1)' : '#E2E8F0' }}>
                <div className="h-[280px] lg:h-[380px] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${selectedArticle.categoryColor} 0%, #0A2540 100%)` }}>
                  <SafeArticleImage src={selectedArticle.image} alt={selectedArticle.imageAlt} categoryColor={selectedArticle.categoryColor} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-[#0A2540] text-xs font-bold shadow">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: selectedArticle.categoryColor }} /> {selectedArticle.category} · Par Gassem Taoufik
                    </div>
                  </div>
                </div>
              </div>

              <article className={`mt-8 prose prose-slate max-w-none ${dark ? 'prose-invert' : ''}`}>
                <div className={`rounded-2xl border p-6 lg:p-8 space-y-6 leading-7 text-[15px] ${dark ? 'bg-[#151E32] border-[#1E293B] text-[#E2E8F0]' : 'bg-white border-slate-200 text-slate-700'}`}>
                  {selectedArticle.content.map((para, i) => (
                    <p key={i} className={i === 0 ? 'font-medium' : ''}>{para}</p>
                  ))}

                  {selectedArticle.bullets && (
                    <div className={`p-4 rounded-xl border-l-4 ${dark ? 'bg-white/5 border-[#00D4AA]' : 'bg-[#F8FFFE] border-[#00D4AA]'}`}>
                      <div className="text-xs font-black tracking-widest opacity-60 mb-2">POINTS CLÉS</div>
                      <ul className="space-y-2">
                        {selectedArticle.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2 text-sm leading-6">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: selectedArticle.categoryColor }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className={`pt-6 border-t ${dark ? 'border-[#334155]' : 'border-slate-100'}`}>
                    <div className="text-xs font-bold tracking-widest opacity-50 mb-3">POUR ALLER PLUS LOIN</div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <button onClick={() => { navigate('home'); setTimeout(() => scrollToId('projets'), 200) }} className={`text-left p-3 rounded-xl border hover:shadow transition ${dark ? 'bg-white text-[#0A2540] border-white' : 'bg-slate-50 border-slate-200 hover:bg-white'}`}>
                        <div className="text-xs font-black tracking-widest opacity-60">PROJET LIÉ</div>
                        <div className="text-sm font-bold mt-1">{selectedArticle.category.includes('ServiceNow') ? 'ServiceNow ITSM — Incident Management →' : selectedArticle.category.includes('Validation') ? 'Industrialisation Tests & CI/CD →' : 'Architecture ST & HFM →'}</div>
                      </button>
                      <button onClick={() => navigate('blog')} className={`text-left p-3 rounded-xl border hover:shadow transition ${dark ? 'bg-[#0A2540] text-white border-white/10' : 'bg-[#0A2540] text-white border-[#0A2540]'}`}>
                        <div className="text-xs font-bold tracking-widest opacity-60">BLOG</div>
                        <div className="text-sm font-bold mt-1">Voir tous les articles →</div>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedArticle.keywords.split(',').map(k => (
                      <span key={k.trim()} className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${dark ? 'bg-white/10 border-white/15 text-white' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>#{k.trim().replace(/\s/g, '')}</span>
                    ))}
                  </div>
                </div>
              </article>

              <div className="mt-10">
                <h3 className={`text-lg font-extrabold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>Articles liés</h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {blogArticles.filter(a => a.slug !== selectedArticle.slug).slice(0, 2).map(rel => (
                    <button key={rel.slug} onClick={() => navigate('article', rel.slug)} className={`text-left rounded-2xl border p-4 hover:shadow-lg hover:-translate-y-0.5 transition ${dark ? 'bg-[#151E32] border-[#1E293B]' : 'bg-white border-slate-200'}`}>
                      <div className="text-[10px] font-black tracking-widest px-2 py-1 rounded-full inline-block text-white" style={{ background: rel.categoryColor }}>{rel.category}</div>
                      <div className={`mt-2 text-sm font-bold leading-tight ${dark ? 'text-white' : 'text-[#0A2540]'}`}>{rel.title}</div>
                      <div className="mt-2 text-xs text-slate-500 line-clamp-2">{rel.summary}</div>
                      <div className="mt-3 text-xs font-bold text-[#FF6B35]">Lire →</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className={`mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border ${dark ? 'bg-[#151E32] border-[#1E293B]' : 'bg-white border-slate-200'}`}>
                <div>
                  <div className={`text-sm font-bold ${dark ? 'text-white' : 'text-[#0A2540]'}`}>Besoin d'un Technical Project Manager transverse ?</div>
                  <div className={`text-xs ${dark ? 'text-white/60' : 'text-slate-500'}`}>Disponible — Montigny-le-Bretonneux · Automobile · Défense · Aéronautique · Ferroviaire</div>
                </div>
                <button onClick={() => { navigate('home'); setTimeout(() => scrollToId('contact'), 200) }} className="px-6 py-2.5 rounded-full bg-[#FF6B35] text-white text-sm font-bold hover:bg-[#E85F2E]">Me contacter →</button>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className={`py-8 ${dark ? 'bg-[#162032]' : 'bg-[#0A2540] border-t border-white/10'}`}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <p className="text-center text-xs font-medium tracking-wide text-white/50">© 2026 Gassem Taoufik. Tous droits réservés.</p>
          </div>
        </footer>

        {/* MOBILE FIXED CV BUTTON */}
        <button
          onClick={() => showComingSoon(lang === 'FR' ? 'CV public indisponible — contactez-moi pour le recevoir.' : 'Public CV unavailable — contact me to request it.')}
          className="lg:hidden fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FF6B35] text-white text-sm font-bold shadow-[0_12px_30px_rgba(255,107,53,0.45)] border border-white/20 hover:bg-[#E85F2E] transition"
        >
          📄 CV
        </button>

        <PortfolioAssistant dark={dark} lang={lang} articles={blogArticles} onNavigate={handleAssistantNavigate} />

        {/* PROJECT MODAL */}
        {activeProject !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#0A2540]/80 backdrop-blur-[6px]" onClick={() => setActiveProject(null)} />
            <div className={`relative w-full max-w-[860px] max-h-[90vh] overflow-hidden rounded-[22px] shadow-[0_30px_80px_rgba(0,0,0,0.6)] flex flex-col ${dark ? 'bg-[#151E32] text-[#E2E8F0] border border-[#1E293B]' : 'bg-white text-[#1A1A2E]'}`}>
              {(() => {
                const projects = [
                  {
                    title: "Architecture & Validation — Système d’Accès Mains Libres ST",
                    accent: "#0A2540",
                    icon: "🔐",
                    tags: ["#IngénierieSystème", "#HFM", "#ESCL", "#VSA"],
                    data: {
                      context: "Système d’accès mains libres pour véhicules Renault/Nissan/Mitsubishi (Alliance). Couverture de 20+ fonctions : Easy Trunk Access, Handfree Access, RKE_HFM-BCM, ESCL, VSA (Authentication, VirtualKey, RemoteParking, DataInKey, Ignition, Protection...), MMI (Antitheft, Engine Stop, ESCL Failed...), Access logic, Doorlock, Inviol, RES, ParkByWire, Dongle, Buzzer, Gateway Addon, FOTA, CLOCK CRC, CID Resynchro...",
                      role: "Leader Ingénierie Système puis Leader Validation. Pilotage de la définition des exigences, de l’architecture fonctionnelle LF/RF, du verrouillage ESCL, de la virtualisation de clé (VirtualKey), du démarrage mains libres, du coffre automatique (ETA) et de la protection antivol.",
                      livrables: ["Dossier fonctionnel système", "Plans de validation ONEVAL/REVS", "Spécifications MIL/HIL", "Matrices de conformité", "Dossiers de tuning RF"],
                      outils: ["DOORS", "Codebeamer", "DDT2000", "CANalyzer", "ONEVAL", "REVS", "ECLEM"],
                      resultat: "Livraison aux jalons véhicule avec conformité système validée et coordination fournisseurs réussie sur l’ensemble des fonctions."
                    }
                  },
                  {
                    title: "Industrialisation des Tests — Automatisation & CI/CD",
                    accent: "#00D4AA",
                    icon: "⚙️",
                    tags: ["#RobotFramework", "#CAPL", "#GitLab"],
                    data: {
                      context: "Les campagnes de validation manuelles étaient longues, peu reproductibles et coûteuses en temps banc.",
                      role: "En tant que LIV, j’ai développé les LLK en CAPL, généré les fichiers .robot pour Robot Framework, intégré les configurations banc, et piloté la compatibilité avec l’équipe ITAF (merge requests) et DevOps (pipeline).",
                      livrables: ["LLK CAPL industrialisés", "Fichiers .robot générés", "Upload config banc", "Merge requests master", "Pipelines GitLab CI/CD"],
                      outils: ["Robot Framework", "CAPL", "GitLab CI/CD", "Codebeamer", "CANalyzer"],
                      resultat: "Processus : Upload config banc → Développement LLK CAPL → Génération .robot → Tests sur banc → Analyse logs → Merge request master → Lancement pipeline → Analyse résultats → Intégration campagnes. Réduction du cycle et industrialisation des livrables HLK/LLK."
                    }
                  },
                  {
                    title: "ServiceNow ITSM — Incident Management End-to-End",
                    accent: "#7C3AED",
                    icon: "🎫",
                    tags: ["#ServiceNow", "#ITSM", "#CSA", "#BusinessRules"],
                    data: {
                      context: "Projet de démonstration complet sur instance personnelle ServiceNow — du cahier des charges à la documentation de rollback. Objectif : prouver une maîtrise plateforme de niveau senior.",
                      role: "Périmètre livré complet : Cycle de vie Incident avec gardes d’état par profil (N1, N2, Coordinateur, Référent) • Formulaire BO enrichi (bénéficiaire, CI initial, compteurs relance/rejet, raison d’annulation) • Assignation intelligente : qualification de groupe, escalade via CMDB, réinitialisation auto • SLA multi-niveaux (VIP, non-VIP, P1, P2+ avec pause/reprise/stop) • Service Portal FO custom (Record Producer, pages my_incidents_cdc et incident_ticket_cdc, widgets, menu) • Reporting : 12 indicateurs + Dashboard Classic • Sécurité : 4 rôles custom, ACL propriétaire/lecture globale",
                      livrables: ["7 champs custom", "12 Business Rules (cycle de vie, compteurs, validation, héritage parent/enfant)", "3 Script Includes (utils formulaire, qualifier groupe, escalation CI)", "4 Client Scripts (cascading CI/Service, affichage conditionnel)", "4 UI Policies + OOTB", "1 UI Action custom (Escalader via CI)", "2 Scheduled Jobs (auto-close 15j, réactivation On Hold)", "10 documents : Release Note, Doc Fonctionnelle, Dossier Technique, PVAL (30+ tests OK), Guides Déploiement/Rollback/Portal/Reports, Limitations & Matrice traçabilité CDC + XML data"],
                      outils: ["ServiceNow ITSM", "CMDB", "SLA", "ACL", "Business Rules", "Service Portal", "GenAI"],
                      resultat: "30+ cas de test validés (PVAL complet), matrice de traçabilité CDC, zero bug bloquant. Livraison prête pour audit."
                    }
                  },
                  {
                    title: "Pilotage Fournisseur — Calculateur HFM",
                    accent: "#FF6B35",
                    icon: "🔧",
                    tags: ["#ECU", "#SupplierManagement", "#CAN"],
                    data: {
                      context: "Développement d’un nouveau calculateur HFM (Hands-Free Module) pour l’Alliance.",
                      role: "Pilote Développement Électronique. Cadrage des exigences client et consolidation du dossier fournisseur (SOW, matrices de conformité). Supervision des livrables hardware (schémas, BOM, connectique, fiabilité) et software (architecture SW, messagerie CAN, diagnostic).",
                      livrables: ["Dossier fournisseur (SOW, matrices)", "Database diagnostic via Builder", "Dossier de configuration via GCC", "TradConf (fichier GCC + database Builder)", "Messagerie CAN (LIS)", "Rapports de validation SW/HIL/PIE/CEM"],
                      outils: ["Builder", "DDT2000", "GCC", "CANalyzer", "LIS"],
                      resultat: "Activités techniques : création database diagnostic (Builder) → DDT2000 (diagnostic, reflashage) → GCC (dossier configuration) → Fusion TradConf → Récupération messagerie CAN → Vérif cybersécurité, tests DST/RTT, diag hardening, reflashage (bootloader/clé série avant/après vente). Intégration finale et homologation réussies."
                    }
                  },
                  {
                    title: "Tableau de Bord QCD — Pilotage Projet & Équipe",
                    accent: "#0A2540",
                    icon: "📊",
                    tags: ["#Management", "#KPI", "#QCD"],
                    data: {
                      context: "Besoin de transparence client et de pilotage interne pour une équipe de 22 personnes multi-sites.",
                      role: "Création d’un dashboard Excel collaboratif mis à jour par les collaborateurs et animation en comité de pilotage mensuel client.",
                      livrables: ["Dashboard Excel QCD", "Suivi JIRA", "Reporting BL / facturation", "Revues d’avancement", "Plan d’actions"],
                      outils: ["Excel (dashboard)", "JIRA", "Comités de pilotage"],
                      resultat: "Indicateurs : sujets en cours, livrables réalisés, points bloquants (JIRA), facturation (BL), avancement technique. Résultat : augmentation de la confiance client, recrutement de nouvelles missions, amélioration de la marge projet."
                    }
                  },
                ]
                const p = projects[activeProject]
                if (!p) return null
                return (
                  <>
                    <div className="h-28 relative flex items-center gap-4 px-6 lg:px-8" style={{ background: p.accent }}>
                      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
                      <div className="relative w-12 h-12 rounded-xl bg-white flex items-center justify-center text-xl shadow">{p.icon}</div>
                      <div className="relative flex-1 min-w-0">
                        <h3 className="text-white font-extrabold text-[15px] lg:text-[18px] leading-tight pr-8 line-clamp-2">{p.title}</h3>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          {p.tags.map(tag => <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/15 text-white border border-white/20">{tag}</span>)}
                        </div>
                      </div>
                      <button onClick={() => setActiveProject(null)} className="relative w-9 h-9 rounded-full bg-white text-[#0A2540] flex items-center justify-center font-bold hover:scale-105 transition">✕</button>
                    </div>
                    <div className="overflow-auto p-6 lg:p-8 space-y-6" style={{ scrollbarWidth: 'thin' }}>
                      <div className="grid gap-6">
                        <div className={`p-4 rounded-xl border-l-4 ${dark ? 'bg-white/5 border-[#00D4AA]' : 'bg-[#F8FFFE] border-[#00D4AA]'}`}>
                          <div className="text-xs font-black tracking-widest opacity-60 mb-1">CONTEXTE</div>
                          <p className="text-sm leading-6 opacity-80">{p.data.context}</p>
                        </div>
                        <div>
                          <div className="text-xs font-black tracking-widest opacity-60 mb-2">MON RÔLE & ACTIVITÉS</div>
                          <p className="text-sm leading-6 opacity-80">{p.data.role}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className={`p-4 rounded-xl border ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
                            <div className="text-xs font-black tracking-widest opacity-60 mb-2">LIVRABLES</div>
                            <ul className="space-y-2">
                              {p.data.livrables.map((l, i) => (
                                <li key={i} className="flex gap-2 text-sm leading-5 opacity-80">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B35] flex-shrink-0" />
                                  <span>{l}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className={`p-4 rounded-xl border ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
                            <div className="text-xs font-black tracking-widest opacity-60 mb-2">OUTILS</div>
                            <div className="flex flex-wrap gap-1.5">
                              {p.data.outils.map(o => <span key={o} className={`px-2.5 py-1 rounded-full text-xs font-bold border ${dark ? 'bg-white text-[#0A2540] border-white' : 'bg-white border-slate-200 text-[#0A2540]'}`}>{o}</span>)}
                            </div>
                            <div className="mt-4">
                              <div className="text-xs font-black tracking-widest opacity-60 mb-2">RÉSULTAT</div>
                              <p className="text-sm leading-6 font-medium text-[#00D4AA]">✓ {p.data.resultat}</p>
                            </div>
                          </div>
                        </div>

                        {activeProject === 2 && (
                          <div className={`p-4 rounded-xl border ${dark ? 'border-[#00D4AA]/30 bg-[#00D4AA]/10' : 'border-[#00D4AA]/20 bg-[#00D4AA]/5'}`}>
                            <div className="text-xs font-bold tracking-widest text-[#00D4AA] mb-3">📁 DOCUMENTATION LIVRÉE (10 DOSSIERS)</div>
                            <div className="grid sm:grid-cols-2 gap-2 text-xs">
                              {[
                                "00_Index_Livraison",
                                "01_Release_Note_Incident_CDC",
                                "02_Documentation_Fonctionnelle",
                                "03_Dossier_Technique_Détaillé",
                                "04_PVAL_Complet (30+ tests)",
                                "05_Guide_De_Deploiement",
                                "06_Guide_De_Rollback",
                                "07_Guide_Service_Portal_FO",
                                "08_Guide_Reports_Dashboard",
                                "09_Known_Limitations_Et_Decisions",
                                "10_Matrice_Traceabilite_CDC",
                              ].map(f => (
                                <div key={f} className={`px-3 py-2 rounded-lg flex items-center gap-2 border ${dark ? 'bg-white text-[#0A2540] border-white' : 'bg-white border-slate-200 text-slate-700'}`}>
                                  <span className="w-6 h-6 rounded bg-[#0A2540] flex items-center justify-center text-white text-[10px]">📄</span>
                                  <span className="font-semibold truncate">{f}</span>
                                </div>
                              ))}
                            </div>
                            <button onClick={() => { setActiveProject(null); navigate('home'); setTimeout(() => scrollToId('contact'), 200) }} className="mt-4 w-full py-2.5 rounded-xl bg-[#0A2540] text-white text-sm font-bold hover:bg-black transition">📁 Demander le package complet (PDF)</button>
                          </div>
                        )}
                        {/* Articles liés */}
                        <div className={`p-4 rounded-xl border ${dark ? 'bg-[#1e293b] border-[#334155]' : 'bg-slate-50 border-slate-200'}`}>
                          <div className="text-xs font-black tracking-widest opacity-60 mb-3">📚 ARTICLES LIÉS</div>
                          <div className="grid gap-2">
                            {(() => {
                              const map: Record<number, string[]> = {
                                0: ['architecture-acces-mains-libres-hfm-escl', 'cycle-en-v-automobile-exigence-homologation', 'tests-banc-hil-mil-valider-avant-integrer', 'reflashage-calculateurs-bootloader-versions'],
                                1: ['industrialiser-validation-robot-framework-capl', 'tests-banc-hil-mil-valider-avant-integrer', 'cycle-en-v-automobile-exigence-homologation'],
                                2: ['servicenow-itsm-industrie-incident-management', 'health-check-cmdb-qualite-donnees', 'portail-client-csm-case-knowledge', 'employee-center-hrsd-portail-rh-unifie'],
                                3: ['cycle-en-v-automobile-exigence-homologation', 'gestion-configuration-ecu-gcc-builder-tradconf', 'reflashage-calculateurs-bootloader-versions', 'analyse-logs-can-canalyzer-debug'],
                                4: ['pilotage-qcd-equipe-internationale-cqp', 'metriques-dashboard-csm-csat-sla', 'servicenow-management-equipe-competences']
                              }
                              const slugs = map[activeProject as number] || []
                              return slugs.map(slug => {
                                const art = blogArticles.find(a => a.slug === slug)
                                if (!art) return null
                                return (
                                  <button key={slug} onClick={() => { setActiveProject(null); navigate('article', slug) }} className={`text-left flex items-center gap-3 p-3 rounded-xl border hover:shadow-md transition ${dark ? 'bg-[#162032] border-[#334155] hover:bg-[#1e293b] text-[#f1f5f9]' : 'bg-white border-slate-200 hover:shadow text-[#0A2540]'}`}>
                                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs flex-shrink-0" style={{ background: art.categoryColor }}>{art.category.includes('ServiceNow') ? '☁️' : art.category.includes('Validation') ? '🧪' : '📄'}</span>
                                    <span className="min-w-0">
                                      <span className="block text-xs font-bold leading-tight line-clamp-1">{art.title}</span>
                                      <span className="block text-[11px] opacity-60">{art.category} • {art.date}</span>
                                    </span>
                                    <span className="ml-auto text-[#FF6B35] text-xs">→</span>
                                  </button>
                                )
                              })
                            })()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`p-4 border-t flex items-center justify-between ${dark ? 'border-[#334155] bg-[#1e293b]' : 'border-slate-200 bg-slate-50'}`}>
                      <span className="text-xs opacity-60">{lang === 'FR' ? 'Projet détaillé — preuves & livrables traçables' : 'Detailed project — traceable proofs & deliverables'}</span>
                      <button onClick={() => setActiveProject(null)} className="px-5 py-2 rounded-full bg-[#FF6B35] text-white text-sm font-bold hover:bg-[#E85F2E] transition">Fermer</button>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        )}

        {/* TOAST */}
        {showToast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] px-6 py-3 rounded-full bg-[#0A2540] text-white text-sm font-semibold shadow-[0_16px_40px_rgba(0,0,0,0.3)] border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" /> {showToast}
          </div>
        )}
      </div>
    </div>
  )
}

function AnimatedNumber({ target, active }: { target: number; active: boolean }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 1400
    let raf = 0
    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return <span>{value}</span>
}
