{/*
{
    id: 1, // Numéro unique pour chaque projet
    title: "Nom du Projet",
    description: "Description courte du projet (2-3 lignes maximum)",
    fullDescription: `
        Description détaillée du projet. 
        Vous pouvez utiliser plusieurs lignes pour décrire:
        - Le contexte du projet
        - Les objectifs
        - Votre rôle dans le projet
        - Les défis rencontrés
        - Les solutions apportées
    `,
    category: "Scolaire", // "Scolaire", "Perso", "En cours", ou "À venir"
    technologies: "HTML • CSS • JavaScript • React",
    image: "/chemin/vers/image.jpg", // ou null si pas d'image
    details: `
        Détails techniques supplémentaires:
        - Framework utilisé
        - Librairies particulières
        - Méthodologies de développement
        - Hébergement et déploiement
    `,
    githubUrl: "https://github.com/votrecompte/projet", // ou null
    liveUrl: "https://votresite.com", // ou null
    featured: true // Mettre à true pour les projets à mettre en avant
}
*/}

export const projectsData = [
        {
  "id": 1,
  "title": "KTC Radio - TP/AP",
  "description": "Une radio web futuriste diffusée en continu, avec un site dédié et une identité sonore unique.",
  "fullDescription": `KTC Radio est un projet de groupe où nous avons imaginé et construit une radio web autonome, plongée dans un univers futuriste.

J’ai pris le rôle de chef de projet et développeur full-stack : conception de l’infrastructure et développement du site.

L’idée était simple : proposer une radio capable de tourner en continu 24/7, avec une identité visuelle et sonore cohérente.

Le gros défi a été de faire dialoguer des outils que l'on ne connaissaient pas (Icecast2, Mixxx, Apache, FTP…), tout en garantissant une diffusion fluide et une bonne qualité sonore.
Nous avons résolu cela grâce à une configuration poussée d’Icecast2, des automatisations de playlistes pour un flux audio continu, et même un peu d’IA (suno.ai) pour générer du contenu original.

Résultat : une radio stable, agréable à écouter, et un site clair et fonctionnel.`,
  "category": "Scolaire",
  "technologies": "Debian 11 • Apache • MySQL • PHP • Icecast2 • Mixxx • FTP • suno.ai • HTML5 • CSS3 • JavaScript",
  "image": null,
  "details": `Architecture technique :
- Serveur Debian 11 avec stack LAMP (Linux, Apache, MySQL, PHP) + Icecast2 pour le streaming
- Mixxx pour assurer une diffusion et un mixage de qualité professionnelle
- Site web codé from scratch (HTML/CSS/JS), responsive et optimisé mobile
- Automatisation des transferts audio via FTP
- Contenu original enrichi grâce à l’IA (suno.ai)
- Administration et monitoring via une interface dédiée
- Hébergement sur machine virtuelle dédiée, entièrement configurée à la main`,
  "githubUrl": null,
  "liveUrl": null,
  "featured": false
},
{
  "id": 2,
  "title": "Mission VPN - TP/AP",
  "description": "Mise en place d’une infrastructure VPN sécurisée avec pfSense, DMZ et honeypot, pour protéger et surveiller un réseau type entreprise.",
  "fullDescription": `Mission VPN consistait à concevoir et déployer une architecture réseau robuste et sécurisée, intégrant un accès VPN fiable et une configuration pare-feu avancée.

Nous avons construit une solution complète pour qu’une entreprise puisse offrir un accès distant sûr à ses employés, tout en se protégeant activement contre les tentatives d’intrusion. 

En duo, nous avons travaillé sur la conception de l’architecture, la configuration de pfSense, la mise en place des règles de filtrage.

Les défis étaient nombreux : gérer une segmentation réseau complexe avec VLAN multiples, définir des règles de pare-feu très précises, tout en intégrant un honeypot capable d’attirer et de piéger les attaques.

Nous avons résolu cela en utilisant pfSense comme cœur du dispositif, en configurant les règles NAT et QoS, et un serveur LAMP en honeypot pour observer les comportements suspects. 

Le résultat : une architecture segmentée, sécurisée, tout en maintenant une bonne qualité de service sur le trafic critique.`,
  "category": "Scolaire",
  "technologies": "pfSense • Ubuntu Server • OpenVPN • IPSec • VLAN • QoS • LAMP",
  "image": null,
  "details": `Architecture réseau :
- Routeur/pare-feu principal : pfSense avec interfaces WAN, LAN et DMZ
- VPN : OpenVPN avec authentification par user/mot de passe
- Segmentation par VLANs pour isoler chaque service

Sécurité :
- Règles pare-feu strictes avec politique "deny by default"
- Logs détaillés du trafic passant par notre pare-feu

Optimisation :
- QoS : limitation à 2Mbps avec priorisation du trafic SSH/ICMP
- Bande passante réservée pour HTTP (1Mbps)`,
  "githubUrl": null,
  "liveUrl": null,
  "featured": false
},
{
  "id": 3,
  "title": "Solution Hébergement Bluetek - TP/AP",
  "description": "Mise en place d’une solution complète d’hébergement pour Bluetek : site web et partage de fichiers sécurisé.",
  "fullDescription": `Ce projet visait à doter Bluetek, une entreprise spécialisée dans le désenfumage naturel, d’une infrastructure d’hébergement professionnelle adaptée à ses besoins.

Par groupe de 3, nous avons conçu un système capable d’héberger le site web de l’entreprise, de gérer une base de données, et de fournir un espace de partage de fichiers sécurisé et accessible selon les profils utilisateurs (direction, employés, visiteurs).

Mon rôle a été d’assurer la mise en place de la base de données.
L’objectif était de fournir une gestion des données fiable, structurée et facilement accessible, tout en respectant des exigences de sécurité et de performances.

Parmi les principaux défis, il fallait gérer des transferts de fichiers lourds (plans d’architectes), assurer des accès différenciés et sécurisés, et permettre un accès distant pour la maintenance.
  Nous avons résolu cela en utilisant un serveur en DMZ, en configurant précisément les permissions, et en intégrant un CMS (Joomla) pour le site de démonstration.`,
  "category": "Scolaire",
  "technologies": "Serveur Linux • Apache • MySQL • PHP • FTP • SSH • Joomla • DMZ",
  "image": null,
  "details": `Architecture serveur :
- OS : Debian Linux
- Services web : LAMP
- Base de données : MySQL (déploiement et configuration réalisés par moi)

Partage de fichiers :
- Répertoires et permissions adaptés aux profils (direction, employés, visiteurs)
- Transferts sécurisés et journalisés
- Intégration d’une solution de centralisation documentaire

Hébergement web :
- Site principal avec base de données
- CMS Joomla comme démonstrateur
- Accès distant sécurisé pour la maintenance`,
  "githubUrl": null,
  "liveUrl": null,
  "featured": false
},
{
  "id": 4,
  "title": "CyberSafeTech - TP/AP",
  "description": "Mise en place d’un environnement multi-services interconnectés pour une entreprise spécialisée en cybersécurité.",
  "fullDescription": `CyberSafeTech était un projet en classe entière où nous avons bâti un écosystème informatique complet, pensé pour une entreprise de cybersécurité.
L’objectif : offrir une gamme de services complémentaires et interconnectés, tout en maintenant un certain niveau de sécurité.

Dans ce projet, j’ai pris en charge le déploiement du service de base de données et la mise en place de la solution de centralisation documentaire.
Cela m’a permis de travailler à la fois sur l’installation technique et sur l’intégration des services dans un environnement global.

Le principal défi était de faire en sorte que chaque service fonctionne de manière isolée tout en restant interconnecté avec les autres. 
Nous avons résolu cela en utilisant la virtualisation pour cloisonner chaque composant, et en collaborant via GLPI pour documenter et coordonner nos interventions.

Un autre défi majeur a été la communication au sein de l’équipe. 
Le projet était vaste, et notre manque d’organisation et d’expérience a parfois ralenti l’avancement ou créé des incompréhensions.
Malgré cela, nous avons appris à mieux structurer nos échanges et à clarifier les responsabilités de chacun, ce qui nous a permis de terminer avec une solution fonctionnelle et documentée.

Au final, nous avons livré une infrastructure cohérente, capable de répondre aux besoins d’une entreprise spécialisée en cybersécurité.`,
  "category": "Scolaire",
  "technologies": "Virtualisation • GLPI • Services réseau • Multiple OS • Apache • MySQL • Divers services",
  "image": null,
  "details": `Services déployés :
- Services de base : DNS, DHCP, Active Directory 
- Communication interne : messagerie, chat
- Outils métier : gestion de projet, documentation collaborative
- Services techniques : monitoring, sauvegarde
- Mon rôle : déploiement du service de base de données (MySQL) et mise en place de la centralisation documentaire

Méthodologie :
- Répartition des rôles et travail en équipe
- Suivi et ticketing via GLPI
- Tests d’intégration et de cohérence technique réguliers

Sécurité :
- Politique de sécurité stricte appliquée à tous les services
- Contrôles d’accès centralisés
- Monitoring et journalisation active

Livrables :
- Schémas d’architecture réseau`,
  "githubUrl": null,
  "liveUrl": null,
  "featured": false
},
{
  "id": 5,
  "title": "Portfolio",
  "description": "Un portfolio développé avec React pour présenter mes projets, compétences et parcours en développement et administration système.",
  "fullDescription": `Ce projet est la création de mon portfolio en ligne, pensé comme une vitrine professionnelle et personnelle.
Tout d'abord requis pour l'obtention de mon diplôme, l’idée était de mettre en valeur mes projets, mes compétences techniques et mon parcours, tout en proposant une expérience agréable et fluide.

J’ai conçu et développé ce site de A à Z en React, appris pour l'occasion, avec un design responsive et une navigation intuitive. 
L’objectif était autant de démontrer mes compétences en développement web que de disposer d’un support concret pour mes futures démarches professionnelles.

Le défi principal a été de trouver un équilibre entre un rendu professionnel et une touche personnelle qui reflète mon identité.

J’ai également anticipé l’évolution du projet en préparant une architecture qui me permettra de migrer vers un auto-hébergement dans le futur.

Aujourd’hui, ce portfolio est déployé sur Vercel, mais il est pensé pour évoluer vers une solution hébergée sur mon propre serveur, avec un reverse proxy et une gestion SSL intégrée.`,
  "category": "Perso",
  "technologies": "React • JavaScript • CSS3 • HTML5 • Vercel • Git",
  "image": "/projects/portefolio.jpg",
  "details": `Stack technique :
- Frontend : React
- Styling : TailwindCSS pour le design moderne, lucide-react pour les icônes, react-router pour la navigation
- Déploiement : Vercel (actuel), migration prévue vers auto-hébergé avec Nginx
- Versioning : Git, et organisation manuelle des dossiers sur mon poste (actuellement v5)

Architecture future :
- Auto-hébergement avec reverse proxy configuré
- Certificats SSL intégrés
- Optimisations prévues : lazy loading des images, compatibilité renforcée tous devices`,
  "githubUrl": "https://github.com/sticot19/portfolio",
  "liveUrl": "https://camille-dumond-portfolio.vercel.app/",
  "featured": true
},
{
  "id": 6,
  "title": "DYNAH",
  "description": "Un projet en préparation : conception d’un NAS maison auto-hébergé avec services de stockage, partage et synchronisation.",
  "fullDescription": `DYNAH, pour "Do Your NAS At Home", est un projet personnel encore en phase de réflexion et de préparation.
L’idée est de concevoir et d’auto-héberger mon propre NAS, basé sur Alpine Linux, pour centraliser mes fichiers, les partager facilement et les synchroniser entre plusieurs appareils.

Je réfléchis encore actuellement à l’architecture logicielle et aux services à intégrer.
L’objectif est de garder un système léger, évolutif et personnalisable. 

Parmi les composants envisagés :
- mdadm pour la gestion RAID,
- Samba et WebDAV pour le partage de fichiers
- nginx pour la partie web
- Syncthing pour la synchronisation en temps réel
Avec une interface d’administration web maison pour simplifier l’usage et la gestion au quotidien.

Pour l’interface, je compte utiliser React avec TailwindCSS, react-router pour la navigation, lucide-react pour les icônes et framer-motion pour les animations.
J’envisage également d’explorer un kit UI pré-construit (shadcn, MaterialUI...) afin d’accélérer le design et de garantir une expérience utilisateur plus fluide.

Ce projet représente une étape de préparation importante : définir les besoins, anticiper les contraintes techniques et poser les bases d’une solution d’auto-hébergement fiable et évolutive.`,
  "category": "À venir",
  "technologies": "Alpine Linux • mdadm • Samba • WebDAV • nginx • Syncthing • React • TailwindCSS • lucide-react • framer-motion • react-router",
  "image": null,
  "details": `Préparation technique :
- Base : Alpine Linux (auto-hébergement prévu)
- Services envisagés : mdadm (RAID), Samba & WebDAV (partage de fichiers), Syncthing (synchronisation), nginx (web)

Interface web (prévue) :
- Framework : React
- Styling : TailwindCSS
- Navigation : react-router
- Icônes : lucide-react
- Animations : framer-motion
- Option : intégration d’un kit UI pour accélérer le développement

Objectifs :
- Centraliser et sécuriser les fichiers personnels
- Proposer un accès multi-supports et une synchronisation en temps réel
- Créer une interface d’administration claire et intuitive
- Définir une base solide avant de passer à la phase de déploiement`,
  "githubUrl": null,
  "liveUrl": null,
  "featured": true
}
];

export default projectsData;