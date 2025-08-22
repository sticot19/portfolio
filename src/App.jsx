import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router"

import  { Navbar,NavbarLogo, NavbarToggle, NavbarMenu, NavbarItem } from "@/components/ui/Navbar"
import Footer, { FooterContent, FooterBranding, FooterBrandDesc, FooterContainer, FooterSectionTitle, FooterSectionItem, FooterItem, FooterCopy } from "@/components/ui/Footer"

import Hero from "@/components/pages/Hero"
import About from "@/components/pages/About"
import Projects from "@/components/pages/Projects"
import Contact from "@/components/pages/Contact"

import { Mail, FileText, Github, Linkedin } from "lucide-react"

function AppContent() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activePage, setActivePage] = useState("Accueil")
    const location = useLocation()

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => {
        setMenuOpen(false)
    }

    const handleNavItemClick = (pageName) => {
        setActivePage(pageName)
        closeMenu()
    }
    
    const showNavbarAndFooter = location.pathname !== "/"

    return (
        <div className="bg-background w-full min-h-screen text-cs-grey font-Orbitron p-0 m-0">
            {showNavbarAndFooter && (
                <Navbar>
                    <NavbarLogo>
                        <span className="text-primary-red text-shadow-glow-red">Dumond</span>Camille
                    </NavbarLogo>

                    <NavbarToggle open={menuOpen} onClick={toggleMenu} />

                    <NavbarMenu open={menuOpen}>
                        {["Accueil", "À propos", "Projets", "Contact"].map((item) => (
                            <NavbarItem 
                                key={item} 
                                onClick={() => handleNavItemClick(item)}
                                isActive={activePage === item}
                                to={item === "Accueil" ? "/" : `/${item.toLowerCase().replace("à propos", "about").replace(" ", "-")}`}
                            >
                                {item}
                            </NavbarItem>
                        ))}
                    </NavbarMenu>
                </Navbar>
            )}

            <Routes>
                <Route path="/" element={<Hero onDiscover={() => handleNavItemClick("À propos")} />} />
                <Route path="/about" element={<About />} />
                <Route path="/projets" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            {showNavbarAndFooter && (
                <Footer>
                    <FooterContent>
                        <FooterContainer>
                            <FooterBranding>Camile Dumond</FooterBranding>
                            <FooterBrandDesc>Portfolio personnel — développement, réseau et projets techniques.</FooterBrandDesc>
                        </FooterContainer>
                        <FooterContainer>
                            <FooterSectionTitle>Navigation</FooterSectionTitle>
                            <FooterSectionItem>
                                <FooterItem>
                                    <a href="/" className="hover:text-cs-white">Accueil</a>
                                </FooterItem>
                                <FooterItem>
                                    <a href="/about" className="hover:text-cs-white">À propos</a>
                                </FooterItem>
                                <FooterItem>
                                    <a href="/projets" className="hover:text-cs-white">Projets</a>
                                </FooterItem>
                                <FooterItem>
                                    <a href="/contact" className="hover:text-cs-white">Contact</a>
                                </FooterItem>
                            </FooterSectionItem>
                        </FooterContainer>
                        <FooterContainer>
                            <FooterSectionTitle>Contact</FooterSectionTitle>
                            <FooterSectionItem>
                                <FooterItem className="flex items-center gap-2">
                                    <Mail size={16} className="text-accent" />
                                    <a href="mailto:ton.email@example.com" className="hover:text-cs-white">
                                        dumond.camille@gmail.com
                                    </a>
                                </FooterItem>
                                <FooterItem className="flex items-center gap-2">
                                    <FileText size={16} className="text-accent" />
                                    <a href="/Dumond Camille - CV.pdf" target="_blank" className="hover:text-cs-white">
                                        Télécharger mon CV
                                    </a>
                                </FooterItem>
                            </FooterSectionItem>
                        </FooterContainer>
                    </FooterContent>
                    <FooterCopy brandName="MonPortefolio" />
                </Footer>
            )}
        </div>
    )
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    )
}

export default App