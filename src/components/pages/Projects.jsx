import { useState } from "react"
import Grid from "@/components/ui/Grid"
import { Card, CardMedia, CardTitle, CardContent, CardDesc, CardFooter, CardButton } from "@/components/ui/Card"
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "@/components/ui/Modal"
import { Code2, Star, List, School, Home, Wrench, Clock } from "lucide-react" // Ajout des nouvelles icônes
import { projectsData } from "@/data/projects_data"
import Button from "@/components/ui/Button"

// Composant pour afficher du texte avec sauts de ligne préservés
const FormattedText = ({ text, className = "" }) => {
    if (!text) return null;

    return (
        <div className={className}>
            {text.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-3 last:mb-0">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

// Composant pour afficher les détails techniques formatés
const TechnicalDetails = ({ details, className = "" }) => {
    if (!details) return null;

    return (
        <div className={className}>
            {details.split('\n').map((line, index) => {
                // Si la ligne commence par un tiret, c'est un élément de liste
                if (line.trim().startsWith('-')) {
                    return (
                        <li key={index} className="ml-4 list-disc">
                            {line.replace('-', '').trim()}
                        </li>
                    );
                }
                // Sinon, c'est un paragraphe normal
                return (
                    <p key={index} className="mb-2 last:mb-0">
                        {line}
                    </p>
                );
            })}
        </div>
    );
};

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("Tous")
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [imageErrors, setImageErrors] = useState({})

    // Définition des catégories avec leurs icônes
    const categories = [
        { name: "Tous", icon: <List size={16} /> },
        { name: "Scolaire", icon: <School size={16} /> },
        { name: "Perso", icon: <Home size={16} /> },
        { name: "En cours", icon: <Wrench size={16} /> },
        { name: "À venir", icon: <Clock size={16} /> },
    ]

    const sortedProjects = [...projectsData].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });

    const filteredProjects = selectedCategory === "Tous"
        ? sortedProjects
        : sortedProjects.filter(project => project.category === selectedCategory)

    const openModal = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

    const handleImageError = (projectId) => {
        setImageErrors(prev => ({ ...prev, [projectId]: true }))
    }

    return (
        <div className="w-full min-h-screen pt-10 pb-20">
            <h1 className="text-3xl font-bold text-center text-cs-white mb-10 font-Orbitron">Mes Projets</h1>

            <div className="flex justify-center mb-10 gap-4 flex-wrap">
                {categories.map(category => (
                    <Button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        variant={selectedCategory === category.name ? "solid" : "outline"}
                        className="!px-4 !py-2 !text-sm"
                        icon={category.icon}
                        iconPosition="left"
                    >
                        {category.name}
                    </Button>
                ))}
            </div>

            <Grid>
                {filteredProjects.map(project => (
                    <div key={project.id} className="relative flex flex-col h-full">
                        <Card className={`flex flex-col h-full ${project.featured ? "border-2 border-primary-red" : ""}`}>
                            <CardMedia className="flex-shrink-0">
                                {project.image && !imageErrors[project.id] ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                        onError={() => handleImageError(project.id)}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-48">
                                        <Code2 size={48} className="text-cs-white opacity-50" />
                                    </div>
                                )}
                            </CardMedia>
                            <CardContent className="flex flex-col flex-grow">
                                <CardTitle className={project.featured ? "text-primary-red" : ""}>
                                    {project.title}
                                </CardTitle>
                                <CardDesc className="flex-grow">
                                    {project.description}
                                </CardDesc>
                                <CardFooter className="mt-auto">
                                    {project.technologies}
                                </CardFooter>
                                <CardButton onClick={() => openModal(project)} className="mt-4">
                                    Voir le projet
                                </CardButton>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Grid>

            {/* Modal avec indication des projets featured */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalHeader onClose={closeModal}>
                    <div className="flex items-center gap-2">
                        <ModalTitle>{selectedProject?.title}</ModalTitle>
                        {selectedProject?.featured && (
                            <Star size={20} className="text-primary-red" fill="currentColor" />
                        )}
                    </div>
                </ModalHeader>

                <ModalContent>
                    {selectedProject && (
                        <div className="space-y-4">
                            <FormattedText
                                text={selectedProject.fullDescription}
                                className="text-cs-white"
                            />

                            <div className="bg-light-dark-05 p-4 rounded-lg">
                                <h4 className="font-bold text-cs-white mb-2 font-Orbitron">Technologies utilisées:</h4>
                                <p className="text-cs-grey">{selectedProject.technologies}</p>
                            </div>

                            {selectedProject.details && (
                                <div className="bg-light-dark-05 p-4 rounded-lg">
                                    <h4 className="font-bold text-cs-white mb-2 font-Orbitron">Détails techniques:</h4>
                                    <TechnicalDetails
                                        details={selectedProject.details}
                                        className="text-cs-grey"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </ModalContent>

                <ModalFooter>
                    <div className="flex justify-end gap-3">
                        {selectedProject?.githubUrl && (
                            <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 border border-primary-red text-primary-red rounded-lg hover:bg-primary-red hover:text-background transition-colors"
                            >
                                Code Source
                            </a>
                        )}
                        {selectedProject?.liveUrl && (
                            <a
                                href={selectedProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-primary-red text-background rounded-lg hover:bg-primary-red-dark transition-colors"
                            >
                                Voir le site
                            </a>
                        )}
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 border border-cs-grey text-cs-grey rounded-lg hover:border-cs-white hover:text-cs-white transition-colors"
                        >
                            Fermer
                        </button>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    )
}