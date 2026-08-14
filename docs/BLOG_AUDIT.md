# Audit du blog technique

Date de vérification : 14 août 2026.

## Résultat

- 33 articles présents dans la source publique `blogArticles`.
- 33 slugs uniques et 33 chemins d'image uniques.
- 9 fichiers JPG historiques et 24 fichiers WebP complémentaires présents, non vides et de contenu SHA-256 distinct.
- La carte utilise `article.image` et la page détail utilise `selectedArticle.image`, provenant du même objet article.
- Les chemins sont absolus depuis la racine (`/images/blog-1.jpg` à `/images/blog-33.webp`) : ils restent valides sur `/blog` et `/blog/<slug>`.
- Les images ont un texte alternatif, des dimensions intrinsèques et un fallback lisible en cas d'échec réseau ou décodage.

## Cause racine et correction

Les premières images historiques utilisaient des chemins relatifs comme `./images/blog-1.jpg`. Sur une route imbriquée telle que `/blog/<slug>`, le navigateur pouvait les résoudre sous `/blog/images/...`, où aucun fichier n'existait. D'autres articles dépendaient d'images distantes, fragiles et parfois réutilisées. La correction conserve les fichiers historiques `blog-1.jpg` à `blog-9.jpg`, ajoute `blog-10.webp` à `blog-33.webp` directement dans `public/images`, utilise partout des chemins absolus et garde une seule source de vérité pour la liste et le détail.

## Vérification article par article

Dans la colonne État, `L+D` signifie que la même image vérifiée est utilisée dans la liste et dans le détail.

| # | Catégorie | Sujet contrôlé | Slug | Image locale | État |
|---:|---|---|---|---|---|
| 1 | Validation & Test | Industrialisation Robot Framework, CAPL et CI/CD | `industrialiser-validation-robot-framework-capl` | `/images/blog-1.jpg` | ✅ L+D |
| 2 | ServiceNow & ITSM | Incident Management industriel end-to-end | `servicenow-itsm-industrie-incident-management` | `/images/blog-2.jpg` | ✅ L+D |
| 3 | Management & Leadership | Pilotage QCD, équipe internationale et CQP | `pilotage-qcd-equipe-internationale-cqp` | `/images/blog-3.jpg` | ✅ L+D |
| 4 | Ingénierie Système | Cycle en V, exigences et homologation | `cycle-en-v-automobile-exigence-homologation` | `/images/blog-4.jpg` | ✅ L+D |
| 5 | Systèmes Embarqués | Accès mains libres, HFM, ESCL et VirtualKey | `architecture-acces-mains-libres-hfm-escl` | `/images/blog-5.jpg` | ✅ L+D |
| 6 | Transversal & Secteurs | Transposition automobile, défense et aéronautique | `ingenierie-systeme-transposable-defense-aeronautique` | `/images/blog-6.jpg` | ✅ L+D |
| 7 | Outils & Technique | Base diagnostic Builder et DDT2000 | `database-diagnostic-builder-ddt2000` | `/images/blog-7.jpg` | ✅ L+D |
| 8 | ServiceNow & ITSM | GenAI et Agentic AI pour l'ITSM | `servicenow-genai-agentic-ai-itsm` | `/images/blog-8.jpg` | ✅ L+D |
| 9 | Ingénierie Système | Exigences DOORS et traçabilité | `gestion-exigences-doors-tracabilite` | `/images/blog-9.jpg` | ✅ L+D |
| 10 | Management Fournisseur | Pilotage fournisseur électronique | `coordination-fournisseur-pilote-developpement-electronique` | `/images/blog-10.webp` | ✅ L+D |
| 11 | Outils & Technique | Analyse de logs CAN avec CANalyzer | `analyse-logs-can-canalyzer-debug` | `/images/blog-11.webp` | ✅ L+D |
| 12 | Outils & Technique | Configuration ECU, GCC, Builder et TradConf | `gestion-configuration-ecu-gcc-builder-tradconf` | `/images/blog-12.webp` | ✅ L+D |
| 13 | Réglementation & Qualité | Homologation FMRS, DDMRS et ZNC | `homologation-fmrs-ddmrs-znc` | `/images/blog-13.webp` | ✅ L+D |
| 14 | Management & Leadership | Équipe distante de 22 ingénieurs sur 4 pays | `management-equipe-distance-22-ingenieurs` | `/images/blog-14.webp` | ✅ L+D |
| 15 | Cybersécurité & Sûreté | Hardening, DST et RTT des calculateurs | `cybersecurite-calculateurs-hardening-dst-rtt` | `/images/blog-15.webp` | ✅ L+D |
| 16 | Validation & Test | Validation HIL et MIL avant intégration | `tests-banc-hil-mil-valider-avant-integrer` | `/images/blog-16.webp` | ✅ L+D |
| 17 | Outils & Technique | Reflashage, versions logicielles et bootloader | `reflashage-calculateurs-bootloader-versions` | `/images/blog-17.webp` | ✅ L+D |
| 18 | Outils & Projet | Jalonnement ECLEM et ONEVAL | `eclem-oneval-jalonnement-renault` | `/images/blog-18.webp` | ✅ L+D |
| 19 | ServiceNow CMDB | Health Check et qualité des données | `health-check-cmdb-qualite-donnees` | `/images/blog-19.webp` | ✅ L+D |
| 20 | ServiceNow CMDB | Discovery et identification automatique des CI | `peupler-cmdb-discovery-identification-ci` | `/images/blog-20.webp` | ✅ L+D |
| 21 | ServiceNow CMDB | Relations CI, dépendances et impact analysis | `gestion-relations-ci-impact-analysis` | `/images/blog-21.webp` | ✅ L+D |
| 22 | ServiceNow CMDB | Normalisation, déduplication et reconciliation | `data-quality-cmdb-normalisation-deduplication` | `/images/blog-22.webp` | ✅ L+D |
| 23 | ServiceNow CMDB | Assets IT et équipements de production | `cmdb-industrielle-assets-it-production` | `/images/blog-23.webp` | ✅ L+D |
| 24 | ServiceNow CSM | Portail client, cases et knowledge base | `portail-client-csm-case-knowledge` | `/images/blog-24.webp` | ✅ L+D |
| 25 | ServiceNow CSM | Omni-channel email, chat et téléphonie | `omni-channel-csm-email-chat-telephonie` | `/images/blog-25.webp` | ✅ L+D |
| 26 | ServiceNow CSM | Comparaison d'architecture CSM et ITSM | `csm-vs-itsm-architectures-processus` | `/images/blog-26.webp` | ✅ L+D |
| 27 | ServiceNow CSM | Workflows, Virtual Agent et auto-routing | `automatisation-csm-workflows-virtual-agent` | `/images/blog-27.webp` | ✅ L+D |
| 28 | ServiceNow CSM | Dashboard CSAT, SLA et résolution | `metriques-dashboard-csm-csat-sla` | `/images/blog-28.webp` | ✅ L+D |
| 29 | ServiceNow HRSD | Employee Center et portail RH unifié | `employee-center-hrsd-portail-rh-unifie` | `/images/blog-29.webp` | ✅ L+D |
| 30 | ServiceNow HRSD | Onboarding collaborateur automatisé | `onboarding-automatise-hrsd-integration` | `/images/blog-30.webp` | ✅ L+D |
| 31 | ServiceNow HRSD | Cases paie, congés et formation | `case-management-rh-paie-conges-formation` | `/images/blog-31.webp` | ✅ L+D |
| 32 | ServiceNow HRSD | Convergence des services RH et IT | `convergence-hrsd-itsm-rh-it` | `/images/blog-32.webp` | ✅ L+D |
| 33 | ServiceNow HRSD | Compétences, formation et dashboard d'équipe | `servicenow-management-equipe-competences` | `/images/blog-33.webp` | ✅ L+D |

## Points éditoriaux

Le corpus est cohérent avec le positionnement public du portfolio : systèmes embarqués, validation, gestion de projet et écosystème ServiceNow. Les textes sont structurés comme des retours d'expérience synthétiques de trois à quatre paragraphes. Les affirmations chiffrées ou liées à des missions restent des déclarations du portfolio ; aucune source externe n'a été ajoutée et l'assistant les présente uniquement comme informations publiées par le portfolio.
