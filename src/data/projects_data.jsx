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
                "title": "KTC Radio",
                "description": "Plateforme de radio web complète avec streaming en direct, gestion de playlists et site dédié sur thème futuriste.",
                "fullDescription": `KTC Radio est un projet de groupe, sur la création d'une radio web autonome sur un thème futuriste.

Contexte :
Hébergement d'une solution complète de streaming audio incluant l'infrastructure serveur, la diffusion de contenu et l'interface web.

Objectifs :
- Mettre en place un serveur de streaming radio fonctionnel
- Créer une identité sonore et visuelle cohérente
- Développer un site web dédié à la radio
- Assurer une diffusion continue de contenu audio

Mon rôle : Chef de projet et développeur full-stack - J'ai assuré la conception technique, l'installation des services, la configuration du streaming, le développement du site web et la production de contenu.

Défis :
- Intégration complexe entre les différents services (Icecast2, Mixxx, Apache)
- Gestion des flux audio en temps réel
- Optimisation de la qualité sonore
- Création d'une interface utilisateur attractive et fonctionnelle

Solutions :
- Configuration fine d'Icecast2 pour un streaming stable
- Automatisation des transferts de fichiers via FTP
- Utilisation d'outils d'IA pour générer du contenu original
- Développement d'un site web responsive from scratch`,
                "category": "Scolaire",
                "technologies": "Debian 11 • Apache • MySQL • PHP • Icecast2 • Mixxx • FTP • suno.ai • HTML5 • CSS3 • JavaScript",
                "image": null,
                "details": `Architecture technique :
- Stack : LAMP (Linux, Apache, MySQL, PHP) + Icecast2
- OS : Debian 11 pour sa stabilité et performances
- Streaming : Configuration avancée d'Icecast2 avec authentification
- Mixage : Logiciel Mixxx pour diffusion professionnelle

Développement :
- Site web développé from scratch en HTML/CSS/JS vanilla
- Interface responsive et optimisée pour mobile
- Gestion de contenu via MySQL

Fonctionnalités :
- Diffusion en continu 24/7
- Transfert automatique des fichiers audio via FTP
- Génération de contenu original avec IA (suno.ai)
- Interface d'administration customisée

Hébergement : Machine virtuelle dédiée avec configuration manuelle complète`,
                "githubUrl": null,
                "liveUrl": null,
                "featured": false
        },
        {
                "id": 2,
                "title": "Mission VPN",
                "description": "Mise en place d'une infrastructure VPN sécurisée avec pare-feu pfSense, DMZ et honeypot.",
                "fullDescription": `Ce projet consistait à concevoir et déployer une infrastructure réseau sécurisée avec accès VPN pour une entreprise.
Contexte :
Développement d'une solution complète de sécurité réseau avec accès distant sécurisé pour les employés.

Objectifs :
- Configurer un serveur VPN avec accès sécurisé au réseau interne
- Mettre en place une architecture avec DMZ interne et externe
- Implémenter un honeypot (serveur leurre) pour détecter les intrusions
- Assurer la continuité de service avec des règles QoS avancées

Mon rôle : Administrateur réseau et sécurité, j'ai conçu l'architecture, configuré pfSense, implémenté les règles de sécurité et assuré les tests de pénétration.

Défis :
- Segmentation réseau complexe avec multiples VLAN
- Configuration avancée des règles de pare-feu
- Mise en place de redirections vers le honeypot
- Optimisation QoS pour prioriser le trafic critique

Solutions :
- Utilisation de pfSense comme routeur/pare-feu principal
- Configuration fine des règles NAT et de filtrage
- Implémentation d'un serveur LAMP comme honeypot
- Priorisation du trafic SSH et ICMP sur le VPN`,
                "category": "Scolaire",
                "technologies": "pfSense • Ubuntu Server • OpenVPN • IPSec • VLAN • QoS • LAMP",
                "image": null,
                "details": `Architecture réseau :
- Routeur principal : pfSense avec interfaces multiples (WAN, LAN, DMZ)
- Segmentation : VLANs pour isolation des services
- VPN : OpenVPN/IPSec avec authentification forte

Sécurité :
- Pare-feu : Ruleset avancé avec deny par défaut
- Honeypot : Serveur LAMP configuré pour logging avancé
- Monitoring : Logs détaillés et alertes de sécurité

Optimisation :
- QoS : Limitation à 2Mbps avec priorisation SSH/ICMP
- Garantie de bande passante pour le trafic HTTP (1Mbps)
- Gestion des files d'attente de trafic

Tests :
- Validation de l'isolation des zones réseau
- Tests de pénétration et simulation d'attaques
- Vérification du bon fonctionnement du honeypot`,
                "githubUrl": null,
                "liveUrl": null,
                "featured": false
        },
        {
                "id": 3,
                "title": "CyberSafeTech",
                "description": "Déploiement d'un écosystème de services interconnectés pour une entreprise de cybersécurité.",
                "fullDescription": `Projet complet de création d'un environnement informatique cohérent pour CyberSafeTech, une entreprise spécialisée en cybersécurité.
Contexte : 
Déploiement d'une infrastructure multi-services avec intégration et interconnexion des différents composants.

Objectifs :
- Mettre en place une gamme de services complémentaires
- Assurer l'interconnexion et l'interopérabilité des services
- Maintenir un haut niveau de sécurité sur l'ensemble de l'infrastructure
- Documenter complètement l'architecture et les procédures

Mon rôle : Membre d'équipe polyvalent - Participation au déploiement de services, documentation et intégration.

Défis :
- Coordination entre les différents services et équipes
- Maintenance de la cohérence technique globale
- Gestion des dépendances entre services
- Respect des contraintes de sécurité élevées

Solutions :
- Utilisation de machines virtuelles pour l'isolation
- Implémentation de services communs (DNS, DHCP)
- Documentation collaborative avec GLPI
- Tests d'intégration réguliers`,
                "category": "Scolaire",
                "technologies": "Virtualisation • GLPI • Services réseau • Multiple OS • Apache • MySQL • Divers services",
                "image": null,
                "details": `Services déployés :
- Infrastructure de base : DNS, DHCP, active directory 
- Services de communication : Messagerie, chat
- Services métier : Gestion de projet, documentation
- Services techniques : Monitoring, sauvegarde

Méthodologie :
- Travail d'équipe avec répartition des rôles
- Utilisation de GLPI pour le ticketing et la documentation
- Validation croisée entre membres de l'équipe
- Tests d'interconnexion réguliers

Sécurité :
- Politique de sécurité définie et appliquée
- Contrôles des accès
- Monitoring et journalisation
- Procédures de sauvegarde 

Livrables :
- Documentation technique complète
- Schémas d'architecture réseau
- Procédures d'exploitation
- Rapports de tests et validation`,
                "githubUrl": null,
                "liveUrl": null,
                "featured": false
        },
        {
                "id": 4,
                "title": "Solution Hébergement Bluetek",
                "description": "Déploiement d'une solution d'hébergement complète pour l'entreprise Bluetek avec partage de fichiers et site web.",
                "fullDescription": `Projet de mise en place d'une infrastructure d'hébergement professionnelle pour l'entreprise Bluetek, spécialisée dans le désenfumage naturel.
Contexte :
Conception d'une solution serveur complète répondant aux besoins spécifiques de partage de fichiers et d'hébergement web.

Objectifs :
- Héberger le site web de l'entreprise avec base de données
- Mettre en place un système de partage de fichiers sécurisé
- Permettre l'accès distant pour la maintenance
- Assurer une haute disponibilité et sécurité

Mon rôle : Architecte système, conception de l'infrastructure, choix des technologies, déploiement et sécurisation.

Défis :
- Gestion des accès différenciés (direction, employés, visiteurs)
- Transfert de fichiers volumineux (plans d'architectes)
- Sécurisation des accès distants
- Optimisation des performances

Solutions :
- Serveur en DMZ avec isolation réseau
- Configuration fine des permissions de fichiers
- Accès FTP sécurisé pour le webmaster
- Implémentation d'un CMS (Joomla) pour le site de démonstration`,
                "category": "Scolaire",
                "technologies": "Serveur Linux • Apache • MySQL • PHP • FTP • SSH • Joomla • DMZ",
                "image": null,
                "details": `Architecture serveur :
- OS : Distribution Debian
- Services web : LAMP stack optimisée
- Base de données : MySQL avec sauvegardes automatiques

Partage de fichiers :
- Répertoires différenciés avec permissions différenciées
- Accès : Direction (lecture/écriture), Employés (échange), Visiteurs (dépôt)
- Sécurité : Contrôles d'accès stricts et logging

Hébergement web :
- Site principal avec base de données
- CMS Joomla pour le site de démonstration
- Accès distant sécurisé pour maintenance

Sécurité : 
- Serveur en DMZ avec règles de pare-feu strictes
- Monitoring et journalisation avancés
- Procédures de sauvegarde et recovery testées`,
                "githubUrl": null,
                "liveUrl": null,
                "featured": false
        },
        {
                "id": 5,
                "title": "Portfolio Professionnel",
                "description": "Portfolio développé avec React présentant mes projets et compétences en développement et administration système.",
                "fullDescription": `Développement complet d'un portfolio personnel et professionnel pour présenter mes projets académiques et personnel ainsi que mes compétences techniques.

Contexte :
Création d'une vitrine en ligne pour valoriser mon parcours en BTS SIO et mes réalisations techniques.

Objectifs :
- Présenter de manière attractive mes projets et compétences
- Offrir une expérience utilisateur
- Mettre en pratique mes connaissances en développement
- Préparer une base pour l'auto-hébergement futur

Mon rôle : Développeur full-stack - Conception, design, développement et déploiement complet.

Défis :
- Création d'une interface à la fois professionnelle et personnalisée
- Préparation de l'architecture pour la future migration vers l'auto-hébergement

Solutions :
- Utilisation de React pour une interface moderne et dynamique
- Design responsive avec CSS moderne
- Architecture préparée pour la migration vers serveur personnel`,
                "category": "Perso",
                "technologies": "React • JavaScript • CSS3 • HTML5 • Vercel • Git",
                "image": "/projects/portefolio.jpg",
                "details": `Stack technique :
- Frontend : React
- Styling : Tailwindcss pour le styling, lucide-react pour les icons et react-router pour la navigation
- Déploiement : Vercel pour l'hébergement temporaire puis server Alpine linux avec Nginx
- Versioning : des dossiers sur mon ordinateur personnel

Fonctionnalités :
- Présentation personnel ainsi que de mon parcour
- Présentation de mes projets
- Navigation fluide et intuitive

Architecture future :
- Auto-hébergement
- Reverse proxy préconfiguré
- Certificats SSL prévus

Optimisations à venir:
- Chargement lazy des images
- Intégration responsive sur tous les devices`,
                "githubUrl": "https://github.com/sticot19/portfolio",
                "liveUrl": "https://camille-dumond-portfolio.vercel.app/",
                "featured": true
        }
];

export default projectsData;