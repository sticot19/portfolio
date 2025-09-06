import { Code, Server, Network, Database, Shield, User, LibraryBig, Speech, PackageOpen } from "lucide-react"
import { useNavigate } from "react-router"
import { useState } from "react"
import Button from "@/components/ui/Button"
import Section from "@/components/ui/Section"
import SkillCard from "@/components/ui/SkillCard"

export default function About() {
    const navigate = useNavigate()
    const [imageError, setImageError] = useState(false)

    const handleViewProjects = () => {
        navigate("/projets")
    }

    const handleContact = () => {
        navigate("/contact")
    }

    const handleImageError = () => setImageError(true)

    const skills = [
        { icon: <Code size={24} />, title: "Développement", items: ["HTML/CSS", "PHP", "JavaScript", "Python"] },
        { icon: <Server size={24} />, title: "Administration", items: ["Windows Server", "Linux (debian, alpine, ubuntu)", "Virtualisation"] },
        { icon: <Network size={24} />, title: "Réseaux", items: ["TCP/IP", "DHCP", "Reverse Proxy (Nginx)", "Technologies Cisco"] },
        { icon: <Database size={24} />, title: "Bases de données", items: ["MySQL", "SQL Server"] },
        { icon: <Shield size={24} />, title: "Cybersécurité", items: ["Pare-feu", "VPN"] },
        { icon: <Speech size={24} />, title: "Soft skills", items: ["Autonomie", "Curiosité", "Adaptabilité", "Autodidacte"] },
        { icon: <LibraryBig size={24} />, title: "Initiations", items: ["C / C++ / C#", "Dart (Flutter)", "Java", "React"] },
        { icon: <PackageOpen size={24} />, title: "Virtualisation", items: ["Vsphere", "VMware", "VirtualBox", "Proxmox"] },
    ]

    return (
        <div className="w-full min-h-screen text-cs-white font-ShareTech px-6 py-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-primary-red mb-10">
                    À propos de moi
                </h1>

                <div className="flex flex-col lg:flex-row gap-10 mb-12">
                    <div className="lg:w-1/3 flex justify-center items-center">
                        <div className={`w-48 h-48 rounded-full flex items-center justify-center shadow-lg overflow-hidden
                            ${imageError ? "bg-gradient-to-br from-primary-red to-cs-dark-purple" : "bg-white"}`}>
                            {imageError ? (
                                <div className="flex flex-col items-center justify-center w-full h-full">
                                    <User size={48} className="text-cs-white opacity-70" />
                                    <span className="text-cs-white text-sm mt-2">CD</span>
                                </div>
                            ) : (
                                <img
                                    src="/profile.jpg"
                                    alt="Photo de profil"
                                    className="w-full h-full object-cover"
                                    onError={handleImageError}
                                />
                            )}
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <h2 className="text-xl font-bold mb-4 text-primary-red">Qui suis-je ?</h2>
                        <div className="font-Sharetech">
                            <p className="text-lg text-washed mb-4">
                                Jeune diplômé d'un BTS SIO option SISR, passionné par l'informatique et les nouvelles technologies depuis mon plus jeune âge.
                            </p>
                            <p className="text-lg text-washed mb-6">
                                Mon parcours scolaire m'a permis de développer des compétences techniques en administration système et réseau, tout en cultivant un intérêt plus personnel pour le développement.
                            </p>
                            <p className="text-lg text-washed mb-6">
                                Essentiellement autodidacte, j'ai développé une bonne capacité d'adaptation et
                                d'apprentissage autonome. Cette approche m'a permis d'acquérir des compétences
                                variées au-delà de ma formation initiale, en explorant par moi-même des technologies
                                diverses et en relevant de nouveaux défis à chaque apprentissage. J'ai appris à m'adapter
                                rapidement à de nouveaux environnements, langages et méthodologies, cultivant ainsi
                                une agilité précieuse dans le domaine informatique où l'évolution est constante.
                            </p>
                        </div>


                        <Button onClick={handleViewProjects}>
                            Voir mes projets
                        </Button>
                    </div>
                </div>

                <Section title="Mon parcours Scolaire">
                    <div className="bg-light-dark-04 p-6 rounded-xl border border-light-dark-0a">
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-cs-white mb-2 tracking-wider">BTS SIO option SISR</h3>
                            <p className="text-washed mb-1 tracking-widest">Lycée Sidoine Apollinaire à Clermont-Ferrand - 2023 à 2025</p>
                            <p className="text-md text-cs-dark-grey font-Sharetech">
                                Formation axée sur l'administration des systèmes et réseaux, la virtualisation, la sécurité informatique d'un réseau.
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-cs-white mb-2 tracking-wider">BAC général</h3>
                            <p className="text-washed mb-1 tracking-widest">Lycée général Mme de Staël à Montluçon - 2020 à 2023</p>
                            <p className="text-md text-cs-dark-grey font-Sharetech">
                                BAC général option Numérique et Sciences de l'Informatique (NSI) et Maths
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Expérience professionnelle">
                    <div className="bg-light-dark-04 p-6 rounded-xl border border-light-dark-0a">
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-cs-white mb-2 tracking-wider">Stage de 2ème année</h3>
                            <p className="text-washed mb-1 tracking-widest">CMC les Cèdres - Elsan à Brive la Gaillarde - Janvier et Fevrier 2025</p>
                            <p className="text-md text-cs-dark-grey font-Sharetech">
                                Support technique, maintenance et assistance informatique
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-cs-white mb-2 tracking-wider">Stage de 1ère année</h3>
                            <p className="text-washed mb-1 tracking-widest">Xefi Ingéniérie by IBO à Clermont-Ferrand - Juin 2024</p>
                            <p className="text-md text-cs-dark-grey font-Sharetech">
                                Observation et participation à la mise en place d'un planing de gestion de la flotte de véhicule
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Mes compétences">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                icon={skill.icon}
                                title={skill.title}
                                items={skill.items}
                            />
                        ))}
                    </div>
                </Section>

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-primary-red mb-4">Envie de collaborer ?</h2>
                    <p className="text-washed text-xl mb-6 max-w-2xl mx-auto font-Sharetech">
                        Je suis ouvert aux opportunités professionnelles dans le domaine de l'administration système et réseau,
                        ainsi qu'aux projets de développement web.
                    </p>
                    <Button onClick={handleContact}>
                        Me contacter
                    </Button>
                </div>
            </div>
        </div>
    )
}