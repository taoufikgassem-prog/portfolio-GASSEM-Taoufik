// GASSEM TAOUFIK — Vanilla JS
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  const langFr = document.getElementById('langFr');
  const langEn = document.getElementById('langEn');
  const themeBtn = document.getElementById('themeBtn');
  const toast = document.getElementById('toast');
  const kpiGrid = document.getElementById('kpiGrid');
  const blogGrid = document.getElementById('blogGrid');
  const articleWrap = document.getElementById('articleWrap');
  let lang = 'FR';
  let currentView = 'home';

  // --- NAV SCROLL ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // --- MOBILE MENU ---
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  document.querySelectorAll('[data-close-menu]').forEach(el => el.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // --- TOAST ---
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    // add dot
    if(!toast.querySelector('.toast-dot')){
      const d=document.createElement('span'); d.className='toast-dot'; toast.prepend(d);
    }
    setTimeout(()=> toast.classList.remove('show'), 3000);
  }
  window.showToast = showToast;

  // --- LANG ---
  const translations = {
    FR: {
      heroRole: 'Technical Project Manager',
      heroSubtitle: 'Systèmes Embarqués & ITSM | Automobile · Défense · Aéronautique · Ferroviaire',
      heroTag: '8 ans d’expérience  ·  Systèmes embarqués critiques  ·  ServiceNow ITSM  ·  Management international | Automobile · Défense · Aéronautique · Ferroviaire',
      heroPitch: 'Je pilote le cycle en V complet des développements ECU, de l’exigence fournisseur à l’intégration véhicule, tout en industrialisant les processus ITSM. Management transverse de 22 ingénieurs sur 4 pays, workpackage > 4M€.',
      ctaCv: 'Télécharger mon CV', ctaProj: 'Voir mes projets',
      kpi1:'Ingénieurs managés', kpi2:'Pays', kpi3:'Budget piloté', kpi4:'CQP équipe (1,8 → 3,21)',
      profilSub:'Ingénieur · Manager · 8 ans d’expérience',
      parcoursSub:'8 ans de progression continue : de l’ingénierie embarquée au pilotage transverse international.',
      contactBtn:'Me contacter'
    },
    EN: {
      heroRole: 'Technical Project Manager',
      heroSubtitle: 'Embedded Systems & ITSM | Automotive · Defence · Aerospace · Rail',
      heroTag: '8 years experience  ·  Critical Embedded Systems  ·  ServiceNow ITSM  ·  International Management | Automotive · Defence · Aerospace · Rail',
      heroPitch: 'End-to-end V-cycle ownership for ECU development, from supplier requirements to vehicle integration, while industrializing ITSM processes. Cross-functional management of 22 engineers across 4 countries, workpackage > €4M.',
      ctaCv: 'Download CV', ctaProj: 'View projects',
      kpi1:'Engineers led', kpi2:'Countries', kpi3:'Budget managed', kpi4:'Team CQP (1.8 → 3.21)',
      profilSub:'Engineer · Manager · 8 years experience',
      parcoursSub:'8 years of continuous growth: from embedded engineering to international cross-functional leadership.',
      contactBtn:'Contact me'
    }
  };
  function applyLang(l){
    lang = l;
    langFr.classList.toggle('active', l==='FR');
    langEn.classList.toggle('active', l==='EN');
    const t = translations[l];
    const elRole = document.getElementById('heroRole');
    if(elRole) elRole.innerHTML = `${t.heroRole} <span style="color:var(--turquoise)">— ${t.heroSubtitle}</span>`;
    const elTag = document.getElementById('heroTag'); if(elTag) elTag.textContent = t.heroTag;
    const elPitch = document.getElementById('heroPitch'); if(elPitch) elPitch.textContent = t.heroPitch;
    const elCv = document.getElementById('ctaCv'); if(elCv) elCv.lastChild.textContent = ' '+t.ctaCv;
    const elProj = document.getElementById('ctaProjets'); if(elProj) elProj.textContent = '💼 '+t.ctaProj;
    document.querySelectorAll('[data-kpi]').forEach((el,i)=>{
      const keys=['kpi1','kpi2','kpi3','kpi4']; el.textContent = t[keys[i]];
    });
    const pSub = document.getElementById('profilSub'); if(pSub) pSub.textContent = t.profilSub;
    const parcSub = document.getElementById('parcoursSub'); if(parcSub) parcSub.textContent = t.parcoursSub;
    document.querySelectorAll('[data-contact-btn]').forEach(b=> b.textContent = t.contactBtn+' →');
  }
  langFr.addEventListener('click', ()=> applyLang('FR'));
  langEn.addEventListener('click', ()=> applyLang('EN'));

  // --- THEME — Option B : light corporate by default (#FAFBFC), toggle to dark #162032 ---
  let isDark = false;
  themeBtn.textContent = '🌙';
  themeBtn.addEventListener('click', ()=>{
    isDark = !isDark;
    if(isDark){
      // dark mode
      document.documentElement.style.setProperty('--bg','#162032');
      document.documentElement.style.setProperty('--bg-secondary','#1a2744');
      document.documentElement.style.setProperty('--card','#1e293b');
      document.documentElement.style.setProperty('--card-border','#334155');
      document.documentElement.style.setProperty('--text','#f1f5f9');
      document.documentElement.style.setProperty('--muted','#94A3B8');
      document.documentElement.style.setProperty('--border','#334155');
      document.body.style.background = '#162032';
      document.body.style.color = '#f1f5f9';
      themeBtn.textContent = '☀️';
      document.body.classList.add('dark-mode');
    } else {
      // light mode — Option B
      document.documentElement.style.setProperty('--bg','#FAFBFC');
      document.documentElement.style.setProperty('--bg-secondary','#F3F4F6');
      document.documentElement.style.setProperty('--card','#FFFFFF');
      document.documentElement.style.setProperty('--card-border','#E2E8F0');
      document.documentElement.style.setProperty('--text','#1A1A2E');
      document.documentElement.style.setProperty('--muted','#64748B');
      document.documentElement.style.setProperty('--border','#E2E8F0');
      document.body.style.background = '#FAFBFC';
      document.body.style.color = '#1A1A2E';
      themeBtn.textContent = '🌙';
      document.body.classList.remove('dark-mode');
      // clear overrides to fallback to CSS
      setTimeout(()=>{
        document.documentElement.style.removeProperty('--bg');
        document.documentElement.style.removeProperty('--bg-secondary');
        document.documentElement.style.removeProperty('--card');
        document.documentElement.style.removeProperty('--card-border');
        document.documentElement.style.removeProperty('--text');
        document.documentElement.style.removeProperty('--muted');
        document.documentElement.style.removeProperty('--border');
        document.body.style.background = '';
        document.body.style.color = '';
      },0);
    }
  });
  // micro-animations on scroll
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
    });
  },{threshold:.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.section, .proj-card, .blog-card, .exp-card, .cert-card, .stack-card').forEach(el=>{
    el.classList.add('reveal'); revealObserver.observe(el);
  });

  // --- KPI COUNTERS ---
  let animated = false;
  function animateCounters(){
    if(animated) return;
    animated = true;
    document.querySelectorAll('.kpi-value [data-target]').forEach(el=>{
      const target = parseInt(el.dataset.target,10);
      let cur=0; const duration=1400; const start=performance.now();
      function step(now){
        const p=Math.min((now-start)/duration,1);
        const eased=1-Math.pow(1-p,3);
        el.textContent = Math.round(eased*target);
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
    document.querySelectorAll('.kpi-fill').forEach((f,i)=> setTimeout(()=> f.classList.add('animate'), i*150));
  }
  if(kpiGrid){
    const obs = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting) animateCounters();
    }, {threshold:.3});
    obs.observe(kpiGrid);
  }

  // --- PROJECTS DATA & MODAL ---
  const projects = [
    {
      title: "Architecture & Validation — Système d’Accès Mains Libres ST",
      accent:"#0A2540", icon:"🔐", tags:["#IngénierieSystème","#HFM","#ESCL","#VSA"],
      secteur:"Automobile",
      metrics:["20+ fonctions","Alliance Renault","LF/RF • HFM • ESCL"],
      context:"Système d’accès mains libres pour véhicules Renault/Nissan/Mitsubishi (Alliance). Couverture de 20+ fonctions : Easy Trunk Access, Handfree Access, RKE_HFM-BCM, ESCL, VSA (Authentication, VirtualKey, RemoteParking, DataInKey, Ignition, Protection...), MMI (Antitheft, Engine Stop, ESCL Failed...), Access logic, Doorlock, Inviol, RES, ParkByWire, Dongle, Buzzer, Gateway Addon, FOTA, CLOCK CRC, CID Resynchro...",
      role:"Leader Ingénierie Système puis Leader Validation. Pilotage de la définition des exigences, de l’architecture fonctionnelle LF/RF, du verrouillage ESCL, de la virtualisation de clé (VirtualKey), du démarrage mains libres, du coffre automatique (ETA) et de la protection antivol.",
      livrables:["Dossier fonctionnel système","Plans de validation ONEVAL/REVS","Spécifications MIL/HIL","Matrices de conformité","Dossiers de tuning RF"],
      outils:["DOORS","Codebeamer","DDT2000","CANalyzer","ONEVAL","REVS","ECLEM"],
      resultat:"Livraison aux jalons véhicule avec conformité système validée et coordination fournisseurs réussie sur l’ensemble des fonctions.",
      related:["architecture-acces-mains-libres-hfm-escl","cycle-en-v-automobile-exigence-homologation","tests-banc-hil-mil-valider-avant-integrer","reflashage-calculateurs-bootloader-versions"]
    },
    {
      title:"Industrialisation des Tests — Automatisation & CI/CD",
      accent:"#00D4AA", icon:"⚙️", tags:["#RobotFramework","#CAPL","#GitLab"],
      secteur:"Transversal",
      metrics:["HLK/LLK → Robot","GitLab CI/CD","CAPL Automation"],
      context:"Les campagnes de validation manuelles étaient longues, peu reproductibles et coûteuses en temps banc.",
      role:"En tant que LIV, j’ai développé les LLK en CAPL, généré les fichiers .robot pour Robot Framework, intégré les configurations banc, et piloté la compatibilité avec l’équipe ITAF (merge requests) et DevOps (pipeline).",
      livrables:["LLK CAPL industrialisés","Fichiers .robot générés","Upload config banc","Merge requests master","Pipelines GitLab CI/CD"],
      outils:["Robot Framework","CAPL","GitLab CI/CD","Codebeamer","CANalyzer"],
      resultat:"Processus : Upload config banc → Développement LLK CAPL → Génération .robot → Tests sur banc → Analyse logs → Merge request master → Lancement pipeline → Analyse résultats → Intégration campagnes. Réduction du cycle et industrialisation des livrables HLK/LLK.",
      related:["industrialiser-validation-robot-framework-capl","tests-banc-hil-mil-valider-avant-integrer","cycle-en-v-automobile-exigence-homologation"]
    },
    {
      title:"ServiceNow ITSM — Incident Management End-to-End",
      accent:"#7C3AED", icon:"🎫", tags:["#ServiceNow","#ITSM","#CSA"], secteur:"ITSM / Transversal",
      metrics:["30+ tests PVAL","10 livrables","Zero bug bloquant"], badge:"PROJET PHARE",
      context:"Projet de démonstration complet sur instance personnelle ServiceNow — du cahier des charges à la documentation de rollback. Objectif : prouver une maîtrise plateforme de niveau senior.",
      role:"Périmètre livré complet : Cycle de vie Incident avec gardes d’état par profil (N1, N2, Coordinateur, Référent) • Formulaire BO enrichi (bénéficiaire, CI initial, compteurs relance/rejet, raison d’annulation) • Assignation intelligente : qualification de groupe, escalade via CMDB, réinitialisation auto • SLA multi-niveaux (VIP, non-VIP, P1, P2+ avec pause/reprise/stop) • Service Portal FO custom (Record Producer, pages my_incidents_cdc et incident_ticket_cdc, widgets, menu) • Reporting : 12 indicateurs + Dashboard Classic • Sécurité : 4 rôles custom, ACL propriétaire/lecture globale",
      livrables:["7 champs custom","12 Business Rules (cycle de vie, compteurs, validation, héritage parent/enfant)","3 Script Includes (utils formulaire, qualifier groupe, escalation CI)","4 Client Scripts (cascading CI/Service, affichage conditionnel)","4 UI Policies + OOTB","1 UI Action custom (Escalader via CI)","2 Scheduled Jobs (auto-close 15j, réactivation On Hold)","10 documents : Release Note, Doc Fonctionnelle, Dossier Technique, PVAL (30+ tests OK), Guides Déploiement/Rollback/Portal/Reports, Limitations & Matrice traçabilité CDC + XML data"],
      outils:["ServiceNow ITSM","CMDB","SLA","ACL","Business Rules","Service Portal","GenAI"],
      resultat:"30+ cas de test validés (PVAL complet), matrice de traçabilité CDC, zero bug bloquant. Livraison prête pour audit.",
      related:["servicenow-itsm-industrie-incident-management","health-check-cmdb-qualite-donnees","portail-client-csm-case-knowledge","employee-center-hrsd-portail-rh-unifie"]
    },
    {
      title:"Pilotage Fournisseur — Calculateur HFM",
      accent:"#FF6B35", icon:"🔧", tags:["#ECU","#SupplierManagement","#CAN"], secteur:"Automobile",
      metrics:["SOW • BOM • CAN","DDT2000 • GCC","Homologation"],
      context:"Développement d’un nouveau calculateur HFM (Hands-Free Module) pour l’Alliance.",
      role:"Pilote Développement Électronique. Cadrage des exigences client et consolidation du dossier fournisseur (SOW, matrices de conformité). Supervision des livrables hardware (schémas, BOM, connectique, fiabilité) et software (architecture SW, messagerie CAN, diagnostic).",
      livrables:["Dossier fournisseur (SOW, matrices)","Database diagnostic via Builder","Dossier de configuration via GCC","TradConf (fichier GCC + database Builder)","Messagerie CAN (LIS)","Rapports de validation SW/HIL/PIE/CEM"],
      outils:["Builder","DDT2000","GCC","CANalyzer","LIS"],
      resultat:"Activités techniques : création database diagnostic (Builder) → DDT2000 (diagnostic, reflashage) → GCC (dossier configuration) → Fusion TradConf → Récupération messagerie CAN → Vérif cybersécurité, tests DST/RTT, diag hardening, reflashage (bootloader/clé série avant/après vente). Intégration finale et homologation réussies.",
      related:["cycle-en-v-automobile-exigence-homologation","gestion-configuration-ecu-gcc-builder-tradconf","reflashage-calculateurs-bootloader-versions","analyse-logs-can-canalyzer-debug"]
    },
    {
      title:"Tableau de Bord QCD — Pilotage Projet & Équipe",
      accent:"#0A2540", icon:"📊", tags:["#Management","#KPI","#QCD"], secteur:"Management",
      metrics:["22 pers. multi-sites","JIRA + Excel","Comité mensuel client"],
      context:"Besoin de transparence client et de pilotage interne pour une équipe de 22 personnes multi-sites.",
      role:"Création d’un dashboard Excel collaboratif mis à jour par les collaborateurs et animation en comité de pilotage mensuel client.",
      livrables:["Dashboard Excel QCD","Suivi JIRA","Reporting BL / facturation","Revues d’avancement","Plan d’actions"],
      outils:["Excel (dashboard)","JIRA","Comités de pilotage"],
      resultat:"Indicateurs : sujets en cours, livrables réalisés, points bloquants (JIRA), facturation (BL), avancement technique. Résultat : augmentation de la confiance client, recrutement de nouvelles missions, amélioration de la marge projet.",
      related:["pilotage-qcd-equipe-internationale-cqp","metriques-dashboard-csm-csat-sla","servicenow-management-equipe-competences"]
    },
    {
      title:"Ingénierie Système Transverse — Défense & Aéronautique",
      accent:"#7C3AED", icon:"✈️", tags:["#ISO26262","#DO178C","#EN50128"], secteur:"Défense · Aéronautique · Ferroviaire",
      metrics:["ISO26262","DO-178C","EN50128"],
      context:"Expertise transposable aux secteurs à forte criticité.",
      role:"Démonstration de la transversalité : cycle en V, traçabilité et SIL/ASIL applicables en automobile, défense, aéro, ferro et spatial.",
      livrables:["Synthèse normes","Matrice transposabilité","Retour d'expérience transverse"],
      outils:["DOORS","HIL","CAPL","Robot Framework"],
      resultat:"Positionnement transverse validé : même rigueur, mêmes outils, même excellence opérationnelle.",
      related:["ingenierie-systeme-transposable-defense-aeronautique","gestion-exigences-doors-tracabilite"]
    }
  ];

  const modalOverlay = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  function openProject(idx){
    if(idx===5){ navigate('blog'); return; }
    const p = projects[idx];
    if(!p) return;
    modalContent.innerHTML = `
      <div class="modal-head" style="background:${p.accent}">
        <div class="modal-head-pattern"></div>
        <div class="modal-icon">${p.icon}</div>
        <div class="modal-title">
          <h3>${p.title}</h3>
          <div class="modal-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
        </div>
        <button class="modal-close" id="closeModalBtn">✕</button>
      </div>
      <div class="modal-body">
        <div class="modal-section">
          <div style="font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.6;margin-bottom:6px">CONTEXTE</div>
          <p style="font-size:14px;line-height:1.6;opacity:.85">${p.context}</p>
        </div>
        <div>
          <div style="font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.6;margin-bottom:8px">MON RÔLE & ACTIVITÉS</div>
          <p style="font-size:14px;line-height:1.6;opacity:.85">${p.role}</p>
        </div>
        <div class="modal-grid">
          <div class="modal-box">
            <div style="font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.6;margin-bottom:8px">LIVRABLES</div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
              ${p.livrables.map(l=>`<li style="display:flex;gap:8px;font-size:13px;line-height:1.5;opacity:.85"><span style="margin-top:7px;width:6px;height:6px;border-radius:50%;background:var(--orange);flex-shrink:0;display:block"></span><span>${l}</span></li>`).join('')}
            </ul>
          </div>
          <div class="modal-box">
            <div style="font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.6;margin-bottom:8px">OUTILS</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px">${p.outils.map(o=>`<span style="padding:4px 10px;border-radius:999px;background:#fff;color:var(--navy);border:1px solid #e2e8f0;font-size:12px;font-weight:700">${o}</span>`).join('')}</div>
            <div style="margin-top:16px">
              <div style="font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.6;margin-bottom:6px">RÉSULTAT</div>
              <p style="font-size:13px;line-height:1.6;color:var(--turquoise);font-weight:600">✓ ${p.resultat}</p>
            </div>
          </div>
        </div>
        ${idx===2 ? `
        <div class="modal-docs">
          <div style="font-size:11px;font-weight:700;letter-spacing:.14em;color:var(--turquoise)">📁 DOCUMENTATION LIVRÉE (10 DOSSIERS)</div>
          <div class="modal-docs-grid">
            ${["00_Index_Livraison","01_Release_Note_Incident_CDC","02_Documentation_Fonctionnelle","03_Dossier_Technique_Détaillé","04_PVAL_Complet (30+ tests)","05_Guide_De_Deploiement","06_Guide_De_Rollback","07_Guide_Service_Portal_FO","08_Guide_Reports_Dashboard","09_Known_Limitations_Et_Decisions","10_Matrice_Traceabilite_CDC"].map(f=>`<div class="modal-doc"><span style="width:24px;height:24px;border-radius:6px;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px">📄</span><span style="font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${f}</span></div>`).join('')}
          </div>
          <button onclick="showToast('Package PDF disponible sur demande')" style="margin-top:12px;width:100%;padding:10px;border-radius:12px;background:var(--navy);color:#fff;border:none;font-weight:700">📁 Télécharger le package complet (PDF)</button>
        </div>`:''}
        <div class="modal-linked">
          <div style="font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.6">📚 ARTICLES LIÉS</div>
          ${(p.related||[]).map(slug=>{
            const art = window.blogArticles.find(a=>a.slug===slug);
            if(!art) return '';
            const icon = art.category.includes('ServiceNow') ? '☁️' : art.category.includes('Validation') ? '🧪' : '📄';
            return `<button class="modal-linked-item" data-slug="${slug}"><span style="width:32px;height:32px;border-radius:8px;background:${art.categoryColor};color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">${icon}</span><span style="min-width:0;flex:1;text-align:left"><span style="display:block;font-size:12px;font-weight:700;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${art.title}</span><span style="font-size:11px;opacity:.6">${art.category} • ${art.date}</span></span><span style="color:var(--orange)">→</span></button>`;
          }).join('')}
        </div>
      </div>
      <div class="modal-foot">
        <span style="font-size:12px;opacity:.6">Projet détaillé — preuves & livrables traçables</span>
        <button class="btn-primary" id="closeModalBtn2">Fermer</button>
      </div>
    `;
    modalOverlay.classList.add('open');
    document.body.style.overflow='hidden';
    modalContent.querySelectorAll('#closeModalBtn, #closeModalBtn2').forEach(b=> b.addEventListener('click', closeProject));
    modalContent.querySelectorAll('[data-slug]').forEach(b=>{
      b.addEventListener('click', ()=>{
        const slug=b.dataset.slug;
        closeProject();
        navigate('article', slug);
      });
    });
  }
  function closeProject(){
    modalOverlay.classList.remove('open');
    document.body.style.overflow='';
  }
  document.getElementById('projectModalBackdrop').addEventListener('click', closeProject);
  // delegate project cards
  document.querySelectorAll('.proj-card').forEach(card=>{
    card.addEventListener('click', ()=> {
      const idx = parseInt(card.dataset.index,10);
      openProject(idx);
    });
  });
  // expose
  window.openProject = openProject;

  // --- BLOG RENDER ---
  function getIcon(cat){
    if(cat.includes('Validation')) return '🧪';
    if(cat.includes('ServiceNow')) return '☁️';
    if(cat.includes('Management')) return '👥';
    if(cat.includes('Ingénierie')) return '📐';
    if(cat.includes('Réglementation')) return '📋';
    if(cat.includes('Cybersécurité')) return '🛡️';
    if(cat.includes('Outils')) return '🛠️';
    return '⚡';
  }
  function renderBlog(){
    if(!blogGrid) return;
    const sorted = [...window.blogArticles].sort((a,b)=> b.dateISO.localeCompare(a.dateISO));
    blogGrid.innerHTML = sorted.map(a=> `
      <article class="blog-card" data-slug="${a.slug}">
        <div class="blog-cover" style="background:linear-gradient(135deg, ${a.categoryColor} 0%, #162032 100%)">
          <div class="blog-cover-grid"></div>
          <img src="${a.image}" alt="${a.imageAlt}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
          <div style="display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;padding:16px;color:#fff;background:linear-gradient(135deg, ${a.categoryColor} 0%, #162032 100%)">
            <div style="width:56px;height:56px;border-radius:16px;background:rgba(255,255,255,.15);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px">${getIcon(a.category)}</div>
            <div style="font-size:10px;font-weight:900;letter-spacing:.14em;opacity:.85;text-align:center">${a.imageAlt.slice(0,52)}</div>
          </div>
          <div class="blog-cat">${a.category}</div>
          <div class="blog-date"><span>📅 ${a.date} • ${a.readTime}</span></div>
        </div>
        <div class="blog-body">
          <h3 class="blog-title">${a.title}</h3>
          <p class="blog-summary">${a.summary}</p>
          <div class="blog-foot">
            <span class="blog-cta">Lire l'article →</span>
            <span class="blog-key">${a.keywords.split(',')[0].trim()}</span>
          </div>
        </div>
      </article>
    `).join('');
    blogGrid.querySelectorAll('.blog-card').forEach(c=>{
      c.addEventListener('click', ()=> navigate('article', c.dataset.slug));
    });
    const countEl = document.getElementById('blogCount');
    if(countEl) countEl.textContent = `📝 ${sorted.length} articles · Ingénierie technique · Management`;
  }

  function renderArticle(slug){
    const art = window.blogArticles.find(a=>a.slug===slug);
    if(!art || !articleWrap) return;
    const related = window.blogArticles.filter(a=>a.slug!==slug).slice(0,2);
    articleWrap.innerHTML = `
      <button class="back-btn" onclick="navigate('blog')">← Retour au blog</button>
      <div class="article-meta">
        <span class="article-cat" style="background:${art.categoryColor}">${art.category}</span>
        <span style="font-size:12px;color:var(--muted)">Publié le <time datetime="${art.dateISO}">${art.date}</time> • ${art.readTime} de lecture</span>
        <span style="margin-left:auto;font-size:10px;font-weight:700;padding:4px 8px;border-radius:999px;border:1px solid var(--border);color:var(--muted);background:var(--card)">${art.keywords.split(',').slice(0,2).join(', ')}</span>
      </div>
      <h1 class="article-title">${art.title}</h1>
      <p class="article-summary">${art.summary}</p>
      <div class="article-cover">
        <div class="article-cover-img" style="background:linear-gradient(135deg, ${art.categoryColor} 0%, #0A2540 100%)">
          <img src="${art.image}" alt="${art.imageAlt}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
          <div style="display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;padding:32px;color:#fff;background:linear-gradient(135deg, ${art.categoryColor} 0%, #162032 100%)">
            <div style="width:64px;height:64px;border-radius:16px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:16px">📄</div>
            <div style="font-size:14px;font-weight:700;max-width:420px;text-align:center">${art.imageAlt}</div>
          </div>
          <div style="position:absolute;inset:0;background:linear-gradient(180deg, transparent 30%, rgba(0,0,0,.55) 100%);pointer-events:none"></div>
          <div style="position:absolute;bottom:0;left:0;right:0;padding:20px"><span style="display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.95);color:var(--navy);font-size:12px;font-weight:700"><span style="width:8px;height:8px;border-radius:50%;background:${art.categoryColor};display:inline-block"></span>${art.category} · Par Gassem Taoufik</span></div>
        </div>
      </div>
      <div class="article-content">
        ${art.content.map((p,i)=> `<p style="${i===0?'font-weight:500':''}">${p}</p>`).join('')}
        ${art.bullets ? `<div class="article-bullets"><div style="font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.6">POINTS CLÉS</div><ul>${art.bullets.map(b=>`<li><span style="margin-top:8px;width:6px;height:6px;border-radius:50%;background:${art.categoryColor};flex-shrink:0;display:block"></span><span>${b}</span></li>`).join('')}</ul></div>` : ''}
        <div style="margin-top:24px;padding-top:24px;border-top:1px solid var(--border)">
          <div style="font-size:11px;font-weight:700;letter-spacing:.14em;opacity:.5;margin-bottom:12px">POUR ALLER PLUS LOIN</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <button onclick="navigate('home'); setTimeout(()=>document.getElementById('projets').scrollIntoView({behavior:'smooth'}),200)" style="text-align:left;padding:12px;border-radius:12px;border:1px solid var(--border);background:#fff;color:var(--navy)"><div style="font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.6">PROJET LIÉ</div><div style="font-size:13px;font-weight:700;margin-top:4px">${art.category.includes('ServiceNow') ? 'ServiceNow ITSM — Incident Management →' : art.category.includes('Validation') ? 'Industrialisation Tests & CI/CD →' : 'Architecture ST & HFM →'}</div></button>
            <button onclick="navigate('blog')" style="text-align:left;padding:12px;border-radius:12px;border:1px solid var(--navy);background:var(--navy);color:#fff"><div style="font-size:11px;font-weight:900;letter-spacing:.14em;opacity:.6">BLOG</div><div style="font-size:13px;font-weight:700;margin-top:4px">Voir tous les articles →</div></button>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:16px">
          ${art.keywords.split(',').map(k=>`<span style="padding:4px 10px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid var(--border);font-size:12px;font-weight:600">#${k.trim().replace(/\s/g,'')}</span>`).join('')}
        </div>
      </div>
      <div class="related">
        <h3 style="font-size:18px;font-weight:800;color:#fff">Articles liés</h3>
        <div class="related-grid">
          ${related.map(r=>`
            <button class="related-card" data-slug="${r.slug}">
              <div style="font-size:10px;font-weight:900;letter-spacing:.08em;padding:4px 8px;border-radius:999px;background:${r.categoryColor};color:#fff;display:inline-block">${r.category}</div>
              <div style="margin-top:8px;font-size:14px;font-weight:700;color:#fff;line-height:1.3">${r.title}</div>
              <div style="margin-top:8px;font-size:12px;color:var(--muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${r.summary}</div>
              <div style="margin-top:12px;font-size:12px;font-weight:700;color:var(--orange)">Lire →</div>
            </button>
          `).join('')}
        </div>
      </div>
      <div style="margin-top:32px;padding:20px;background:var(--card);border:1px solid var(--border);border-radius:16px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
        <div><div style="font-size:14px;font-weight:700;color:#fff">Besoin d'un Technical Project Manager transverse ?</div><div style="font-size:12px;color:var(--muted)">Montigny-le-Bretonneux · Automobile · Défense · Aéronautique · Ferroviaire</div></div>
        <button onclick="navigate('home'); setTimeout(()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'}),200)" class="btn-primary">Me contacter →</button>
      </div>
    `;
    articleWrap.querySelectorAll('[data-slug]').forEach(b=> b.addEventListener('click', ()=> navigate('article', b.dataset.slug)));
  }

  // --- ROUTING (hash) ---
  const viewHome = document.getElementById('view-home');
  const viewBlog = document.getElementById('view-blog');
  const viewArticle = document.getElementById('view-article');
  function showView(name){
    document.querySelectorAll('.view').forEach(v=> v.classList.remove('active'));
    if(name==='home') viewHome.classList.add('active');
    else if(name==='blog') { viewBlog.classList.add('active'); renderBlog(); }
    else if(name==='article') viewArticle.classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
    // nav active
    document.querySelectorAll('.nav-link').forEach(l=> l.classList.remove('active'));
    const map={home:0, blog:4};
    // close mobile
    mobileMenu.classList.remove('open');
  }
  window.navigate = function(view, slug){
    if(view==='home'){ location.hash=''; currentView='home'; showView('home'); }
    else if(view==='blog'){ location.hash='#/blog'; currentView='blog'; showView('blog'); }
    else if(view==='article' && slug){ location.hash='#/blog/'+slug; currentView='article'; renderArticle(slug); showView('article'); }
  };
  window.scrollToId = function(id){
    const isHome = document.getElementById('view-home').classList.contains('active');
    if(!isHome){ navigate('home'); setTimeout(()=> document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),100); }
    else document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    mobileMenu.classList.remove('open');
  };
  function handleHash(){
    const h = location.hash.replace(/^#/, '');
    if(!h || h==='/' ){ showView('home'); currentView='home'; }
    else if(h==='/blog' || h==='/blog/'){ showView('blog'); currentView='blog'; }
    else if(h.startsWith('/blog/')){ const slug=h.replace('/blog/','').replace(/\/$/,''); renderArticle(slug); showView('article'); currentView='article'; }
  }
  window.addEventListener('hashchange', handleHash);
  // initial
  handleHash();
  if(!location.hash) showView('home');

  // --- FORMS ---
  document.querySelectorAll('form[data-form]').forEach(form=>{
    form.addEventListener('submit', e=>{
      e.preventDefault();
      showToast(lang==='FR' ? 'Message envoyé ! Je vous réponds très vite.' : 'Message sent! I’ll reply soon.');
      form.reset();
    });
  });

  // --- CV buttons ---
  document.querySelectorAll('[data-cv]').forEach(b=> b.addEventListener('click', ()=> showToast(lang==='FR' ? 'Téléchargement du CV...' : 'Downloading CV...')));

  // --- DOWNLOAD ZIP ---
  const dlBtn = document.getElementById('downloadZip');
  if(dlBtn){
    dlBtn.addEventListener('click', async (e)=>{
      e.preventDefault();
      // Try direct prebuilt ZIP (when served via http, e.g., arena)
      try{
        const test = await fetch('./portfolio-vanilla.zip', {method:'HEAD'});
        if(test.ok){
          const a=document.createElement('a'); a.href='./portfolio-vanilla.zip'; a.download='portfolio-gassem-taoufik-vanilla.zip'; document.body.appendChild(a); a.click(); a.remove();
          showToast('ZIP téléchargé ✓ (pré-construit)');
          return;
        }
      }catch{}
      // fallback: generate client-side
      showToast('Préparation du ZIP...');
      if(typeof JSZip === 'undefined'){
        showToast('Utilisez "Enregistrer sous" — tous les fichiers sont en local.');
        return;
      }
      try{
        const zip = new JSZip();
        const files = [
          'index.html','css/style.css','js/app.js','js/data.js',
          'public/images/portrait.jpg','public/images/blog-1.jpg','public/images/blog-2.jpg','public/images/blog-3.jpg','public/images/blog-4.jpg','public/images/blog-5.jpg','public/images/blog-6.jpg','public/images/blog-7.jpg','public/images/blog-8.jpg','public/images/blog-9.jpg',
          'public/sitemap.xml','public/robots.txt','README.md'
        ];
        for(const f of files){
          try{
            const res = await fetch(f);
            if(res.ok){
              const blob = await res.blob();
              zip.file(f, blob);
            }
          }catch{}
        }
        zip.file('LISEZMOI.txt', 'PORTFOLIO GASSEM TAOUFIK - VANILLA\n1) Dézipper\n2) Double-cliquer sur index.html (pas de npm, pas de serveur)\n3) Tout fonctionne en file:// grâce au hash routing (#/blog).\nImages blog 10-33 via CDN avec fallback premium si hors-ligne.');
        const content = await zip.generateAsync({type:'blob'});
        const url = URL.createObjectURL(content);
        const a=document.createElement('a'); a.href=url; a.download='portfolio-gassem-taoufik-vanilla.zip'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
        showToast('ZIP téléchargé ✓');
      }catch(err){ showToast('Erreur ZIP — réessayez'); }
    });
  }

  // expose
  window.renderBlog = renderBlog;
});

