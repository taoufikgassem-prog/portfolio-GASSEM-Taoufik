# Portfolio — Gassem Taoufik

Portfolio bilingue React, TypeScript, Vite et Tailwind CSS. Il présente le parcours, les projets, les certifications et 33 articles techniques avec leurs illustrations locales.

## Développement

```bash
npm install
npm run dev
npm run typecheck
npm test
npm run build
```

## Déploiement Vercel

Le projet utilise Node.js 22 et les mêmes versions stables de Vite, React Plugin et Tailwind que la version V1 déjà validée sur Vercel. Configuration attendue :

```text
Framework: Vite
Install Command: npm ci
Build Command: npm run build
Output Directory: dist
Node.js: 22.x
```

`node_modules/` et `dist/` sont exclus de Git. Ils ne doivent jamais être uploadés : Vercel installe les dépendances Linux à partir de `package-lock.json`.

## Assistant portfolio local

L’assistant est 100 % exécuté dans le navigateur : aucun modèle externe, aucune API d’IA, aucun compte et aucune clé. Sa base de connaissances structurée se trouve dans `src/data/portfolioKnowledge.ts` et les 33 articles publics sont indexés au chargement.

La recherche combine normalisation des accents, tokenisation français/anglais, synonymes métier, tolérance aux fautes de frappe, détection d’intention, pondération par champ et contexte de relance. Une réponse absente du portfolio est explicitement signalée comme inconnue. Les messages sont rendus comme texte React, sans injection HTML.

## Contact direct

Le portfolio ne contient aucun formulaire et ne stocke aucune donnée de contact. Les visiteurs peuvent contacter Taoufik directement par téléphone ou via son profil LinkedIn public.

## Audit du blog

Le contrôle des 33 articles, de leurs sujets, slugs et images de liste/détail est documenté dans [`docs/BLOG_AUDIT.md`](docs/BLOG_AUDIT.md). `npm test` vérifie automatiquement le nombre d'articles, l'unicité des slugs et images, la présence des 33 fichiers et leur utilisation par les deux vues.

Après publication sur un domaine définitif, ajoutez son URL absolue comme canonical et pour les métadonnées Open Graph. Aucune URL d'un ancien hébergement n'est conservée dans cette copie.

## Sécurité

- aucune donnée de chat transmise à un service externe ;
- aucune donnée de contact enregistrée par le site ;
- limite de 400 caractères et suppression des caractères de contrôle ;
- aucun `dangerouslySetInnerHTML` dans l’assistant ;
- fichiers d’environnement et sorties de build exclus de Git.

Les coordonnées visibles dans le site sont les coordonnées publiques du portfolio.
